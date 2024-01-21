import { Link } from 'react-router-dom'
import styles from '../styles/header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>Ayselah Smith</div>
            <nav className={styles.nav}>
                <Link to="/" className={styles.navLink}>Home</Link>
                <Link to="/about" className={styles.navLink}>About</Link>
                <Link to="/contact" className={styles.navLink}>Contact</Link>
            </nav>
        </header>

    )
}