import React, { useState } from 'react';
import axios from 'axios';
import styles from './Payments.module.css';
import CardDetails from './CardDetails';

const Payments = () => {
    const [formData, setFormData] = useState({
        patientName: '',
        amount: '',
        payFor: '',
        paymentMode: 'Cash',
        date: '',
        cardNumber: '',
    });

    const [showCardDetails, setShowCardDetails] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // If payment mode is Card, show card details screen
        if (formData.paymentMode === 'Card') {
            setShowCardDetails(true);
        } else {
            try {
                await axios.post('http://localhost:8080/health-hub/makePayment', formData, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                alert('Payment added successfully');
                resetFormData();
            } catch (error) {
                console.error('Error adding payment:', error);
                alert('Error adding payment');
            }
        }
    };

    const resetFormData = () => {
        setFormData({
            patientName: '',
            amount: '',
            payFor: '',
            paymentMode: 'Cash',
            date: '',
            cardNumber: '',
        });
    };

    return (
        <div className={styles.formContainer}>
            <h2>Add Payment</h2>
            {!showCardDetails ? (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Patient Name:</label>
                        <input type="text" name="patientName" value={formData.patientName} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Amount:</label>
                        <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Payment For:</label>
                        <input type="text" name="payFor" value={formData.payFor} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Payment Mode:</label>
                        <select name="paymentMode" value={formData.paymentMode} onChange={handleChange} required>
                            <option value="Cash">Cash</option>
                            <option value="Card">Card</option>
                            <option value="Mobile Money">Mobile Money</option>
                        </select>
                    </div>
                    <div>
                        <label>Date:</label>
                        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                    </div>
                    <button type="submit">Add Payment</button>
                </form>
            ) : (
                <CardDetails
                    formData={formData}
                    setFormData={setFormData}
                    setShowCardDetails={setShowCardDetails}
                    resetFormData={resetFormData}
                />
            )}
        </div>
    );
};

export default Payments;
