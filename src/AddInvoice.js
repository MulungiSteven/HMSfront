import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import styles from './AddPatients.module.css'; // Import the CSS file

const AddInvoice = () => {
    // Define state variables to store form data
    const [patientId, setPatientId] = useState('');
    const [amount, setAmount] = useState('');
    const [dueDate, setDueDate] = useState('');

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Make POST request to backend API
            await axios.post('http://localhost:8080/health-hub/transactions/capture-invoice', {
                patientId: patientId,
                amount: amount,
                dueDate: dueDate
            });
            // Reset form fields after successful submission
            setPatientId('');
            setAmount('');
            setDueDate('')
            alert('Invoice added successfully!');
        } catch (error) {
            console.error('Error adding invoice:', error);
            alert('An error occurred while adding the invoice.');
        }
    };

    return (
        <div className={styles.formContainer}>
            <h2>Add Invoice</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        value={patientId}
                        placeholder="Patient ID"
                        onChange={(e) => setPatientId(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                        type="text"
                        value={amount}
                        placeholder="Amount"
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                        type="date"
                        value={dueDate}
                        placeholder="Due Date"
                        onChange={(e) => setDueDate(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Invoice</button>
            </form>
        </div>
    );
};

export default AddInvoice;
