import React from 'react';
import styles from './Input.module.css';

const Input = (props) => {
  return (
    <input
      className={styles[`${props.className}`]}
      type={props.type}
      id={props.id}
      placeholder={props.placeholder}
      onChange={props.onChange}
    ></input>
  );
};

export default Input;
