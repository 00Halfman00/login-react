import React from 'react';
import styles from './NavBar.module.css';

const NavBar = ({ logged, changeLog, user }) => {
  const name = localStorage.getItem('name');

  return (
    <header className={styles['nav-header']}>
      {name && logged ? (
        <h1 className={styles['nav-h1']}>{name}, Practice</h1>
      ) : (
        <h1 className={styles['nav-h1']}>Login Practice</h1>
      )}
      <nav>
        <ul className={styles['nav-ul']}>
          <li>{logged && <a href="/">Users</a>}</li>
          <li>{logged && <a href="/">Admin</a>}</li>
          <li>
            {logged && (
              <button
                type="submit"
                onClick={changeLog}
                className={styles['nav-button']}
              >
                Logout
              </button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
