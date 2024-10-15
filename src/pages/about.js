// src/pages/about.js
import Navbar from '../components/Navbar';
import Image from 'next/image';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#fffaf0' }}>
      <Navbar /> 
      <h1 style={{ color: '#ff6f61' }}>🌸 All About Me 🌸</h1>
      <p style={{ fontSize: '18px', fontFamily: 'Arial, sans-serif' }}>
        Hi! I'm Ace Chianni, a passionate explorer of the arts, fashion, and holistic wellness. I believe in the power of creativity to heal and inspire.
      </p>
      <p style={{ fontSize: '16px' }}>
        When I'm not immersed in a new anime series or creating art, you can find me practicing mindfulness and enjoying nature.
      </p>
      <h2 style={{ marginTop: '30px', color: '#5f9ea0' }}>My Favorite Things:</h2>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        <li>🎨 Creating digital art and illustrations</li>
        <li>🎭 Exploring new art mediums</li>
        <li>📚 Reading books, poems, or manga/graphic novels</li>
        <li>🎮 Diving into immersive video games</li>
        <li>🌿 Practicing yoga and meditation</li>
      </ul>
    </div>
  );
}
