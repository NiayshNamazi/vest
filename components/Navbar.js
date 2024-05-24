import Link from "next/link";
import styles from "./Navbar.module.css";
const Navbar = () => {
    return (
        <div className={styles.navBar}>
            <Link href="/" className={styles.navLink}>Home</Link>
            <Link href="/about" className={styles.navLink}>About</Link>
            <Link href="/contacts" className={styles.navLink}>Contacts</Link>
        </div>
    );
}

export default Navbar;