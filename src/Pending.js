import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import styles from './Invoices.module.css';

const Pending = () => {
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        // Fetch invoices from the backend when the component mounts
        const fetchInvoices = async () => {
            try {
                const response = await axios.get('http://localhost:8080/health-hub/transactions/pending');
                setInvoices(response.data);
            } catch (error) {
                console.error('Error fetching invoices:', error);
            }
        };

        fetchInvoices();
    }, []);

    return (
        <div className={styles.invoices}>
            <h2>Invoices</h2>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Patient</th>
                    <th>Date</th>
                    <th>Total</th>
                </tr>
                </thead>
                <tbody>
                {invoices.map((invoice) => (
                    <tr key={invoice.invoiceId}>
                        <td>{invoice.invoiceId}</td>
                        <td>{invoice.patientName}</td>
                        <td>{invoice.dueDate}</td>
                        <td>{invoice.amount}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            {/* Add functionalities for managing invoices (search, filtering) */}
        </div>
    );
};

export default Pending;
