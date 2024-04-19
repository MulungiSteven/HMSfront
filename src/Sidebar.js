import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faMoneyBill, faCalendarAlt, faComment, faFileInvoice, faCog, faPlus, faListAlt } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ onModuleChange, selectedModule }) => {
    const [showPatientsDropdown, setShowPatientsDropdown] = useState(false);

    const [showInvoiceDropdown, setShowInvoiceDropdown] = useState(false);

    const togglePatientsDropdown = () => {
        setShowPatientsDropdown(!showPatientsDropdown);
    };

    const toggleInvoiceDropdown = () => {
        setShowInvoiceDropdown(!showInvoiceDropdown);
    };

    return (
        <nav className={styles.sidebar}>
            <ul>
                <li
                    className={selectedModule === 'dashboard' ? styles.active : ''}
                    onClick={() => onModuleChange('dashboard')}
                >
                    <FontAwesomeIcon icon={faHome} /> Dashboard
                </li>
                <li className={showPatientsDropdown ? styles.submenuOpen : styles.submenu}>
                    <div onClick={togglePatientsDropdown}>
                        <FontAwesomeIcon icon={faUser} /> Patients
                    </div>
                    <ul className={styles.nested}>
                        <li
                            onClick={() => onModuleChange('addPatients')}
                            className={selectedModule === 'addPatients' ? styles.active : ''}
                        >
                            <FontAwesomeIcon icon={faPlus} /> Add Patients
                        </li>
                        <li
                            onClick={() => onModuleChange('totalPatients')}
                            className={selectedModule === 'totalPatients' ? styles.active : ''}
                        >
                            <FontAwesomeIcon icon={faListAlt} /> Total Patients
                        </li>
                    </ul>
                </li>
                <li
                    onClick={() => onModuleChange('payments')}
                    className={selectedModule === 'payments' ? styles.active : ''}
                >
                    <FontAwesomeIcon icon={faMoneyBill} /> Payments
                </li>
                <li
                    onClick={() => onModuleChange('appointments')}
                    className={selectedModule === 'appointments' ? styles.active : ''}
                >
                    <FontAwesomeIcon icon={faCalendarAlt} /> Appointments
                </li>
                <li
                    onClick={() => onModuleChange('chat')}
                    className={selectedModule === 'chat' ? styles.active : ''}
                >
                    <FontAwesomeIcon icon={faComment} /> Chat
                </li>
                <li className={showInvoiceDropdown ? styles.submenuOpen : styles.submenu}>
                    <div onClick={toggleInvoiceDropdown}>
                        <FontAwesomeIcon icon={faFileInvoice} /> Invoice
                    </div>
                    <ul className={styles.nested}>
                        <li
                            onClick={() => onModuleChange('addInvoice')}
                            className={selectedModule === 'addInvoice' ? styles.active : ''}
                        >
                            <FontAwesomeIcon icon={faPlus} /> Generate Invoice
                        </li>
                        <li
                            onClick={() => onModuleChange('invoices')}
                            className={selectedModule === 'invoices' ? styles.active : ''}
                        >
                            <FontAwesomeIcon icon={faListAlt} /> All Invoices
                        </li>
                        <li
                            onClick={() => onModuleChange('pending')}
                            className={selectedModule === 'pending' ? styles.active : ''}
                        >
                            <FontAwesomeIcon icon={faListAlt} /> Pending Transactions
                        </li>
                        <li
                            onClick={() => onModuleChange('complete')}
                            className={selectedModule === 'complete' ? styles.active : ''}
                        >
                            <FontAwesomeIcon icon={faListAlt} /> Complete Transactions
                        </li>
                    </ul>
                </li>
                <li
                    onClick={() => onModuleChange('settings')}
                    className={selectedModule === 'settings' ? styles.active : ''}
                >
                    <FontAwesomeIcon icon={faCog} /> Settings
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;
