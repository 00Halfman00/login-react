import React, { useState, useEffect } from 'react';
import Card from '../UI/Card';

import styles from './LogIn.module.css';

const LogIn = ({ logged, changeLog, setUser }) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (enteredEmail.includes('@') && enteredPassword.length > 7) {
      setValid(true);
    }
    //console.log(enteredPassword)
    //console.log(enteredEmail)
  }, [enteredEmail, enteredPassword]);

  function emailHandler(ev) {
    setEnteredEmail(ev.target.value);
  }

  function passwordHandler(ev) {
    setEnteredPassword(ev.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const tmp = enteredEmail;
    const sub = enteredPassword;

    if (tmp[0] && sub[0]) {
      console.log('yes');
      let tmp2 = '';
      let sub2 = 0;
      let flag = false;
      for (let i = 0; i < tmp.length; ++i) {
        if (tmp[i] === '@') {
          flag = true;
        }
        if (!flag) {
          tmp2 += tmp[i];
        }
        ++sub2;
        if (sub2 > 7) {
          break;
        }
      }
      setUser(tmp2);
      localStorage.setItem('name', tmp2);
      changeLog(tmp, sub);
    }
  }

  return (
    <Card className={styles['logIn-card']}>
      <form onSubmit={submitHandler} className={styles['logIn-form']}>
        <div className={styles['input-control']}>
          <label>email:</label>
          <input
          className={enteredEmail.includes('@') ? (styles['form-input']) : (styles['form-needs-input'])}
          type="email"
          placeholder='must include: @' onChange={emailHandler}>
          </input>
        </div>
        <div className={styles['input-control']}>
          <label>password:</label>
          <input
            className={ enteredPassword.length > 7 ? (styles['form-input']) : (styles['form-needs-input'])}
            type="password"
            placeholder='minimum: 8 characters'
            onChange={passwordHandler}
          ></input>
        </div>
        <div className={styles['button-control']}>
          {(enteredPassword.length > 6 && enteredEmail.includes('@')) ? (
            <button type="submit" className={styles['button']}>
              Login
            </button>
          ) : (
            <button type="submit" className={styles['btn']} disabled>
              Login
            </button>
          )}
        </div>
      </form>
    </Card>
  );
};

export default LogIn;
