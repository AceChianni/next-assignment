// src/pages/index.js
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar /> {/* Add Navbar here */}
      <h1 className={styles.title}>✨ Welcome to Anni's Odyssey! ✨</h1>
      <p className={styles.description}>
        Here, we celebrate artistic expression, inclusivity, and wellness. Join me on a journey of creativity and self-discovery!
      </p>
      <p className={styles.quote}>
        “Art enables us to find ourselves and lose ourselves at the same time.” – Thomas Merton
      </p>
      {/* <Image 
        src="/images/welcome.jpg" 
        alt="Welcome" 
        width={600} 
        height={400} 
        className={styles.image} 
      /> */}
      {/* <h2 className={styles.subheading}>Explore More:</h2>
      <ul className={styles.links}>
        <li>
          <Link href="/about">About Me</Link>
        </li>
      </ul> */}
    </div>
  );
}
