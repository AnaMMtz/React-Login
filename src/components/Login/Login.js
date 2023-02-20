import React, { useEffect, useRef, useState } from 'react';
import styles from './Login.module.css';
import Home from 'components/Home';

const Login = (props) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [validEmail, setValidEmail] = useState();
  const [validPassword, setValidPassword] = useState();
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    setFormValid(userEmail.includes('@') && userPassword.trim().length > 6);
  }, [userEmail, userPassword]);
  const handleEmail = (e) => {
    setUserEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setUserPassword(e.target.value);
  };

  const validEmailHandler = () => {
    setValidEmail(userEmail.includes('@'));
  };

  const validPasswordHandler = () => {
    setValidPassword(userPassword.trim().length > 6);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAddInfo(userEmail, userPassword);
  };

  return (
    <div className={styles['form-control']}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label>E-Mail</label>
          <input
            type="text"
            className={`${styles.input} ${
              validEmail === false ? styles.invalid : ''
            }`}
            onChange={handleEmail}
            onBlur={validEmailHandler}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            className={`${styles.input} ${
              validPassword === false ? styles.invalid : ''
            }`}
            onChange={handlePassword}
            onBlur={validPasswordHandler}
          />
        </div>
        <button
          className={`${styles.btnInvalid} ${
            !formValid ? styles.btnInvalid : styles.btn
          }`}
          disabled={!formValid}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
