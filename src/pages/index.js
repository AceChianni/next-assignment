// // src/pages/index.js
// import Link from 'next/link';
// import Image from 'next/image';
// import Navbar from '../components/Navbar';
// import styles from '../styles/Home.module.css';
// import Counter from '../components/Counter';
// import UserForm from '../components/UserForm';

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Navbar /> {/* Adds Navbar */}
//       <h1 className={styles.title}>✨ Welcome to Anni's Odyssey! ✨</h1>
//       <p className={styles.description}>
//         Here, we celebrate artistic expression, inclusivity, and wellness. Join me on a journey of creativity and self-discovery!
//       </p>
//       <p className={styles.quote}>
//         “Art enables us to find ourselves and lose ourselves at the same time.” – Thomas Merton
//       </p>

// <Counter />
// <UserForm />
//     </div>
//   );
// }


import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import Counter from '../components/Counter';
import UserForm from '../components/UserForm';

export default function Home() {
  return (
    <div className={styles.splashContainer}>
      {/* Background Image */}
      <div className={styles.splash}>
        <Image
          src="/images/splash.jpg"
          alt="Splash Background"
          layout="fill"
          objectFit="cover"
          className={styles.splashImage}
        />
        {/* Overlay Content */}
        <div className={styles.overlayContent}>
          <Navbar /> 
          <h1 className={styles.title}>✨ Welcome to Anni's Odyssey! ✨</h1>
          <p className={styles.description}>
            Here, we celebrate artistic expression, inclusivity, and wellness. Join me on a journey of creativity and self-discovery!
          </p>
          <p className={styles.quote}>
            “Art enables us to find ourselves and lose ourselves at the same time.” – Thomas Merton
          </p>
        </div>
      </div>

      {/* Below Splash: Counter and UserForm Components */}
      <div className={styles.content}>
        <h2 className={styles.subheading}>Explore More:</h2>
        <Counter />
        <UserForm />
      </div>
    </div>
  );
}
