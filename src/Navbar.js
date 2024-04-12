import React from 'react';
import styles from './Navbar.module.css';
import { FaUserCircle, FaBell } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.name}>
                <span>HealthSystem</span>
            </div>
            <div className={styles.info}>
                <FaUserCircle className={styles.icon} />
                <FaBell className={styles.icon} />
            </div>
            <div className={styles.search}>
                <input type="text" placeholder="Search..." className={styles.searchInput} />
                <button className={styles.searchButton}>
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
