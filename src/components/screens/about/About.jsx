import React from 'react';
import MyButton from '../../UI/button/MyButton';
import cl from './About.module.css';

const About = () => {
  return (
    <div className={cl.wrapper}>
      <h1 className={cl.title}>This page is about our website</h1>
      <p className={cl.desc}>
        We develop cool and reactive apps that will make your time as comfortable and convenient as
        possible
      </p>
      <p>To get an unrealistic thrill from the speed of our application</p>
      <MyButton
        onClick={() => alert('Hello my Friends')}
        style={{
          margin: '20px 0 0 90px',
          boxShadow: '-14px -17px 278px 26px rgba(184,65,79,1)',
        }}>
        Click here
      </MyButton>
    </div>
  );
};

export default About;
