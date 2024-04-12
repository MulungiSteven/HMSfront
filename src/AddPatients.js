import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import styles from './AddPatients.module.css'; // Import the CSS file

const AddPatients = () => {
    const [formData, setFormData] = useState({
        patientId: '',
        name: '',
        dateOfBirth: '',
        contact: '',
        medicalRecord: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('/health-hub/patients/add-patient', formData);
            alert('Patient added successfully');
            // Optionally, you can reset the form after successful submission
            setFormData({
                patientId: '',
                name: '',
                dateOfBirth: '',
                contact: '',
                medicalRecord: ''
            });
        } catch (error) {
            console.error('Error adding patient:', error);
            alert('Error adding patient');
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className={styles.formContainer}> {/* Add the CSS class */}
            <form onSubmit={handleSubmit}>
                <input type="text" name="patientId" value={formData.patientId} onChange={handleChange} placeholder="Patient ID" required />
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
                <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} placeholder="Date of Birth" required />
                <input type="text" name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact" required />
                <textarea name="medicalRecord" value={formData.medicalRecord} onChange={handleChange} placeholder="Medical Record" required />
                <button type="submit">Add Patient</button>
            </form>
        </div>
    );
};

export default AddPatients;
