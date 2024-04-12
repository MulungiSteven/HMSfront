import React, { useState, useEffect } from 'react';
import styles from './Dashboard.module.css';

const Dashboard = () => {
    const [totalPatients, setTotalPatients] = useState(0);
    const [appointmentsToday, setAppointmentsToday] = useState(0);
    const [prescriptionsToday, setPrescriptionsToday] = useState(0);

    // Example API call to fetch data (replace with your actual implementation)
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/dashboard-data'); // Adjust API endpoint
            const data = await response.json();
            setTotalPatients(data.totalPatients);
            setAppointmentsToday(data.appointmentsToday);
            setPrescriptionsToday(data.prescriptionsToday);
        };

        fetchData();
    }, []);

    return (
        <div className={styles.dashboard}>
            <h2>Dashboard</h2>
            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <h3>Total Patients</h3>
                    <p>{totalPatients}</p>
                </div>
                <div className={styles.card}>
                    <h3>Appointments Today</h3>
                    <p>{appointmentsToday}</p>
                </div>
                <div className={styles.card}>
                    <h3>Prescriptions Today</h3>
                    <p>{prescriptionsToday}</p>
                </div>
            </div>
            <div className={styles.dashboardInfo}>
                <p>Welcome to the Health Dashboard of Delight. We're delighted to have you join us on your health journey! At Delight, we're committed to revolutionizing the way you engage with healthcare. Our platform offers cutting-edge technology and personalized support to empower you to live your healthiest life.</p>
                <p>At Delight, we understand that every individual's health needs are unique. That's why we've designed our platform to adapt to your specific requirements. Whether you're a fitness enthusiast, managing a chronic condition, or simply looking to improve your overall well-being, Delight has the tools and resources to support you every step of the way.</p>
            </div>
        </div>
    );
};

export default Dashboard;
