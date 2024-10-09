// src/components/UserForm.js
import { useState } from 'react';
import styles from './UserForm.module.css'; // Import the CSS module for styling

const UserForm = () => {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`🎉 Welcome to the adventure, ${name}! 🌍`);
    setName(''); // Clear the input after submission
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="🌿 Enter your adventurous name 🌿"
        required
        className={styles.input}
      />
      <button type="submit" className={styles.button}>🗝️ Join the Quest!</button>
    </form>
  );
};

export default UserForm;
