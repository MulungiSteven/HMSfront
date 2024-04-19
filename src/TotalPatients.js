import React, { useState, useEffect } from 'react';
import styles from './TotalPatients.module.css'; // Import the CSS module
import axios from 'axios';

const TotalPatients = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        fetchPatients();
    }, []);

    const fetchPatients = async () => {
        try {
            const response = await axios.get('http://localhost:8080/health-hub/patients/get-patients');
            setPatients(response.data);
        } catch (error) {
            console.error('Error fetching patients:', error);
        }
    };

    return (
        <div className={styles.listContainer}>
            <h2>Total Patients</h2>
            <table className={`${styles.patientTable}`}>
                <thead>
                <tr>
                    <th>Patient ID</th>
                    <th>Name</th>
                    <th>Date of Birth</th>
                    <th>Contact</th>
                </tr>
                </thead>
                <tbody>
                {patients.map((patient) => (
                    <tr key={patient.patientId}>
                        <td>{patient.patientId}</td>
                        <td>{patient.name}</td>
                        <td>{patient.dateOfBirth}</td>
                        <td>{patient.contact}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default TotalPatients;
