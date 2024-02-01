import React from 'react';
import MyButton from '../../UI/button/MyButton';
import MyInput from '../../UI/input/MyInput';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className="">
      <h1 className={styles.title}>Welcome to the homepage!</h1>
      <form className={styles.auth}>
        <h1 className={styles.titleAuth}>Sign in</h1>
        <div className={styles.authInp}>
          <MyInput placeholder="Enter your login" />
          <MyInput placeholder="Enter your password" />
        </div>
        <MyButton style={{ width: '50%', margin: '50px auto 20px' }}>Sign in</MyButton>
      </form>
    </div>
  );
};

export default Home;
