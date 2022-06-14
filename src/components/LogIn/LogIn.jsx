import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card';
import Input from '../UI/Input';
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
        validEmail: state.validEmail,
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

const LogIn = ({ logIn, setUser }) => {
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
      } else {
        setValid(false);
      }
    }, 400);
    return () => {
      clearTimeout(time);
    };
  }, [card.validEmail, card.validPassword]);

  function emailHandler(ev) {
    let tmp = false;
    for (let idx = 0; idx < ev.target.value.length; ++idx) {
      if (ev.target.value[idx] === '@') tmp = true;
    }
    dispatchCard({
      type: 'EMAIL_INPUT',
      email: ev.target.value,
      validEmail: tmp,
    });
  }

  function passwordHandler(ev) {
    let tmp = false;
    if (ev.target.value.length > 7) {
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
    console.log(event.target.value);
    if (card.email[0] && card.password.length > 7) {
      let tmp2 = '';
      for (let i = 0; i < card.email.length; ++i) {
        if (card.email[i] === '@') {
          break;
        }
        tmp2 += card.email[i];
      }
      localStorage.setItem('name', tmp2);
      logIn(card.email, card.password);
    }
  }

  return (
    <Card className={styles['logIn-card']}>
      <form onSubmit={submitHandler} className={styles['logIn-form']}>
        <div className={styles['input-control']}>
          <label htmlFor="email">email:</label>
          <Input
            className={card.validEmail ? 'form-input' : 'form-needs-input'}
            id="email"
            type="email"
            placeholder="must include: @"
            onChange={emailHandler}
          />
        </div>
        <div className={styles['input-control']}>
          <label htmlFor="password">password:</label>
          <Input
            className={card.validPassword ? 'form-input' : 'form-needs-input'}
            id="password"
            type="password"
            placeholder="minimum: 8 characters"
            onChange={passwordHandler}
          />
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
