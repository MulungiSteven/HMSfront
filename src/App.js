import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Patients from './Patients'; // Container for patient-related components
import Payments from './Payments';
import Appointments from './Appointments';
import Chat from './Chat';
import Invoices from './Invoices';
import AddPatients from './AddPatients'; // New component for adding patients
import TotalPatients from './TotalPatients'; // New component for displaying total patients
import styles from './App.module.css';
import AddInvoice from "./AddInvoice";
import Pending from "./Pending";
import Complete from "./Complete";

const App = () => {
    const [selectedModule, setSelectedModule] = useState('dashboard'); // Manage selected module
    const [patients, setPatients] = useState([]); // Manage patients data

    const handleModuleChange = (module) => {
        //set
        setSelectedModule(module);
    };

    const handleAddPatient = (patientData) => {
        setPatients([...patients, patientData]);
        setSelectedModule('totalPatients');
    };

    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.main}>
                <Sidebar onModuleChange={handleModuleChange} selectedModule={selectedModule} />
                <div className={styles.content}>
                    {selectedModule === 'dashboard' && <Dashboard />}
                    {selectedModule === 'patients' && <Patients />}
                    {selectedModule === 'payments' && <Payments />}
                    {selectedModule === 'appointments' && <Appointments />}
                    {selectedModule === 'chat' && <Chat />}
                    {selectedModule === 'invoices' && <Invoices />}
                    {selectedModule === 'pending' && <Pending />}
                    {selectedModule === 'complete' && <Complete />}
                    {selectedModule === 'addInvoice' && <AddInvoice />}
                    {selectedModule === 'addPatients' && <AddPatients onSubmit={handleAddPatient} />} {/* Render AddPatients component when selectedModule is 'addPatients' */}
                    {selectedModule === 'totalPatients' && <TotalPatients patients={patients} />} {/* Render TotalPatients component when selectedModule is 'totalPatients' */}
                </div>
            </div>
            <footer className={styles.footer}>{/* Footer content */}</footer>
        </div>
    );
};

export default App;
