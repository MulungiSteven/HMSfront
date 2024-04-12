import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Chat.module.css';

const Chat = () => {
    const [messages, setMessages] = useState([]);

    // Fetch messages from the backend when the component mounts
    useEffect(() => {
        fetchMessages();
    }, []);

    // Function to fetch messages from the backend
    const fetchMessages = async () => {
        try {
            const response = await axios.get('/health-hub/receive-messages');
            setMessages(response.data);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

    // Function to send a message
    const sendMessage = async (messageContent, sender) => {
        try {
            await axios.post('/health-hub/sendMessage', { messageContent, sender });
            // After sending the message, fetch updated messages from the backend
            fetchMessages();
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div className={styles.chat}>
            <h2>Chat</h2>
            <div className={styles.chatWindow}>
                {messages.map((message, index) => (
                    <div key={index} className={message.sender === 'Patient' ? styles.messagePatient : styles.messageDoctor}>
                        <p>{message.content}</p>
                    </div>
                ))}
            </div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const messageContent = e.target.message.value;
                    sendMessage(messageContent, 'Patient');
                    e.target.message.value = '';
                }}
            >
                <input type="text" name="message" placeholder="Type your message..." required />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Chat;
