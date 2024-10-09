// src/components/Counter.js
import { useState } from 'react';
import styles from './Counter.module.css'; // Import the CSS module for styling

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className={styles.counterContainer}>
      <h2>🌟 Adventure Count: {count} 🌟</h2>
      <button onClick={increment} className={styles.button}>🌈 Embark on a Quest!</button>
      <button onClick={decrement} className={styles.button}>🧙‍♂️ Retreat!</button>
      <button onClick={reset} className={styles.button}>🗺️ Reset the Journey!</button>
    </div>
  );
};

export default Counter;
