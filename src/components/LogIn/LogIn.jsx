import React, { useState, useRef } from 'react';
import Card from '../UI/Card';

import styles from './LogIn.module.css';

const LogIn = ({ log, changeLog, setUser }) => {
  const [enteredEmail, setEnteredEmail] = useState();
  const [enteredPassword, setEnteredPassword] = useState();
  const emailRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const tmp = emailRef.current.value;

    if (tmp[0]) {
      let tmp2 = '';
      for (let i = 0; i < tmp.length; ++i) {
        if (tmp[i] === '@') break;
        tmp2 += tmp[i];
      }
      setUser(tmp2);
    }
    emailRef.current.value = '';
    changeLog(log);
  }

  return (
    <Card className={styles['logIn-card']}>
      <form onSubmit={submitHandler} className={styles['logIn-form']}>
        <div className={styles['input-control']}>
          <label>email:</label>
          <input type="email" ref={emailRef}></input>
        </div>
        <div className={styles['input-control']}>
          <label>password:</label>
          <input type="password"></input>
        </div>
        <div className={styles['button-control']}>
          <button type="submit" className={styles['button']}>
            Login
          </button>
        </div>
      </form>
    </Card>
  );
};

export default LogIn;
