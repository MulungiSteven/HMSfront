import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Chat.module.css';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    // Fetch messages from the backend when the component mounts
    useEffect(() => {
        fetchMessages();
    }, []);

    // Function to fetch messages from the backend
    const fetchMessages = async () => {
        try {
            const response = await axios.get('http://localhost:8080/health-hub/receive-message');
            setMessages(response.data);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

    // Function to send a message
    const sendMessage = async (e) => {
        e.preventDefault();
        try {
            // Send the message to the backend
            await axios.post('http://localhost:8080/health-hub/sendMessage', {
                content: newMessage,
                sender: 'Patient'
            });
            // Append the sent message to the messages state
            setMessages([...messages, { content: newMessage, sender: 'Patient' }]);
            // Clear the input field
            setNewMessage("");
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
            <form onSubmit={sendMessage}>
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    required
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Chat;
