import React from 'react';

const CardDetails = ({ handleChange, formData }) => {
    return (
        <div>
            <label>Card Number:</label>
            <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />
            {/* Add other card details fields here */}
        </div>
    );
};

export default CardDetails;
