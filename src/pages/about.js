// src/pages/about.js
import Navbar from '../components/Navbar';
import Image from 'next/image';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <Navbar />
      <h1 className={styles.title}>🌸 All About Me 🌸</h1>
      <p className={styles.description}>
        Hi! I'm Ace Chianni, a passionate explorer of the arts, fashion, and holistic wellness. I believe in the power of creativity to heal and inspire.
      </p>
      <Image
        src="/images/self.jpg" 
        alt="A portrait of Ace Chianni"
        width={400}
        height={400}
        className={styles.image}
      />
       <p className={styles.description}>
        When I'm not immersed in a new anime series or creating art, you can find me practicing mindfulness and enjoying nature.
      </p>
      <h2 className={styles.subheading}>My Favorite Things:</h2>
      <ul className={styles.achievements}>
        <li>🎨 Creating digital art and illustrations</li>
        <li>🎭 Exploring new art mediums</li>
        <li>📚 Reading books, poems, or manga/graphic novels</li>
        <li>🎮 Diving into immersive video games</li>
        <li>🌿 Practicing yoga and meditation</li>
      </ul>
      <h2 className={styles.subheading}>My Achievements:</h2>
      <ul className={styles.achievements}>
      <li>🎓 Bachelor's Degree in Psychology</li>
        <li>🌟 Registered Behavior Technician</li>
        <li>🖌️ Adobe Photoshop Certification</li>
        <li>📚 Currently Enrolled in a UX/UI Google Certification Course</li>
        <li>🎬 Worked on Five Major Film Productions</li>
      </ul>
    </div>
  );
}
