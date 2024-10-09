// src/components/Navbar.js
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.title}>🌈 My Creative Space 🌈</h1>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
