import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import styles from './Invoices.module.css';

const Invoices = () => {
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        // Fetch invoices from the backend when the component mounts
        const fetchInvoices = async () => {
            try {
                const response = await axios.get('/health-hub/get-invoices');
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
                    <tr key={invoice.id}>
                        <td>{invoice.id}</td>
                        <td>{invoice.patient}</td>
                        <td>{invoice.date}</td>
                        <td>{invoice.total}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            {/* Add functionalities for managing invoices (search, filtering) */}
        </div>
    );
};

export default Invoices;
