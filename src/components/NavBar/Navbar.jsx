import styles from './Navbar.module.css'

import { useState } from 'react';
// import styles from './Navbar.module.css'; // Assuming you have a CSS module for styling

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }


    const close = `<div>
                        <span>X</span>
                        <a className={styles.navLink}> Musical & Artistic Experience </a>
                   </div>`

    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.menuButton} onClick={toggleMenu}>
                <div className={`${isOpen ? styles.topmenuON : styles.topmenuOFF}`}>
                    <div className="material-symbols-outlined">close</div>
                    <div className={`${styles.menutopstyle}`}>M. A. X.</div>  
                </div>
                <div className={`${isOpen ? styles.topmenuOFF : styles.topmenuON}`}>
                    <div className="material-symbols-outlined">menu</div>
                    <div className={`${styles.menutopstyle}`}>M. A. X.</div>  
                </div>
                </div>

                <div className={`${styles.navLinks} ${isOpen ? styles.show : ''}`}>
                    <a className={styles.navLink} href="#">Home</a>
                    <a className={styles.navLink} href="#">Music</a>
                    <a className={styles.navLink} href="#">Crochet</a>
                    <a className={styles.navLink} href="#">Contact</a>
                    <a className={`${styles.navLink} ${styles.maxtitle} ${isOpen ? styles.topmenuOFF : styles.topmenuON}`}> Musical & Artistic Experience </a>
                </div>
            </div>

</>     


    )
}

export default Navbar