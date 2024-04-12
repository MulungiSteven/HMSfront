// TotalPatients.js
import React from 'react';
import styles from './TotalPatients.module.css'; // Import the CSS module

const TotalPatients = ({ patients }) => {
    return (
        <div className={styles.listContainer}> {/* Use styles object */}
            <h2>Total Patients</h2>
            <ul className={styles.totalPatientsList}> {/* Use styles object */}
                {patients.map((patient) => (
                    <li key={patient.patientId}>
                        {patient.name} - {patient.dateOfBirth} - {patient.contact} - {patient.medicalRecord}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TotalPatients;
