import AuthContext from 'components/context/auth-context';
import MainHeader from 'components/MainHeader';
import React, { useContext } from 'react';
import styles from './Home.module.css';

const Home = () => {
  const ctx = useContext(AuthContext);

  return (
    <div>
      <div className={styles.menu}>
        <nav style={{ position: 'fixed', top: '18px', left: '80rem' }}>
          <ul>
            {ctx.isLoggedIn && (
              <li>
                <a href="/">Users</a>
              </li>
            )}
            {ctx.isLoggedIn && (
              <li>
                <a href="/">Admin</a>
              </li>
            )}
          </ul>
          <button type="button" onClick={ctx.onLogout}>
            Logout
          </button>
        </nav>
        <h1 className={styles.welcome}>Welcome back!</h1>
      </div>
    </div>
  );
};

export default Home;
