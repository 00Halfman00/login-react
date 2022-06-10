import React, { useState, useEffect, useReducer } from 'react';
import Card from '../UI/Card';
import styles from './LogIn.module.css';

const cardReducer = (state, action) => {
  switch (action.type) {
    case 'EMAIL_INPUT':
      return {
        email: action.email,
        validEmail: action.validEmail,
        password: state.password,
        validPassword: state.validPassword,
      };
    case 'PASSWORD_INPUT':
      return {
        email: state.email,
        validEmail: state.email,
        password: action.password,
        validPassword: action.validPassword,
      };
    default:
      return {
        email: '',
        validEmail: null,
        password: '',
        validPassword: null,
      };
  }
};

const LogIn = ({ logged, changeLog, setUser }) => {
  const [valid, setValid] = useState(false);
  const [card, dispatchCard] = useReducer(cardReducer, {
    email: '',
    validEmail: null,
    password: '',
    validPassword: null,
  });

  useEffect(() => {
    const time = setTimeout(() => {
      if (card.validEmail && card.validPassword) {
        setValid(true);
      }
    }, 400);
    return () => {
      clearTimeout(time);
    };
  }, [card.validEmail, card.validPassword]);

  function emailHandler(ev) {
    let tmp = false;
    for(let idx = 0; idx < ev.target.value.length; ++idx){
      if(ev.target.value[idx] === '@') tmp = true;
    }
    dispatchCard({
      type: 'EMAIL_INPUT',
      email: ev.target.value,
      validEmail: tmp,
    });
  }

  function passwordHandler(ev) {
    let tmp = false;
    if (ev.target.value.length > 7){
      tmp = true;
    } else tmp = false;
    dispatchCard({
      type: 'PASSWORD_INPUT',
      password: ev.target.value,
      validPassword: tmp,
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    const tmp = card.email;
    const sub = card.password;

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
          <label htmlFor="email">email:</label>
          <input
            className={
              card.validEmail
                ? styles['form-input']
                : styles['form-needs-input']
            }
            id="email"
            type="email"
            placeholder="must include: @"
            onChange={emailHandler}
          ></input>
        </div>
        <div className={styles['input-control']}>
          <label htmlFor="password">password:</label>
          <input
            className={
              card.validPassword
                ? styles['form-input']
                : styles['form-needs-input']
            }
            id="password"
            type="password"
            placeholder="minimum: 8 characters"
            onChange={passwordHandler}
          ></input>
        </div>
        <div className={styles['button-control']}>
          {valid ? (
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
