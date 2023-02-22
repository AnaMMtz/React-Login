import React, { useEffect, useReducer, useRef, useState } from 'react';
import styles from './Login.module.css';
import Home from 'components/Home';

const emailReducer = (state, action) => {
  if (action.type === 'USER_EMAIL') {
    return { value: action.val, isValid: action.val.includes('@') };
  }

  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }

  return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_PASSWORD') {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }

  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }

  return { value: '', isValid: false };
};

const Login = (props) => {
  const [formValid, setFormValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  const { isValid: emailValid } = emailState;
  const { isValid: passwordValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Cheking form validity');
      setFormValid(emailValid && passwordValid);
    }, 500);

    return () => {
      // this acts like a cleanup
      clearTimeout(identifier);
    };
  }, [emailValid, passwordValid]);

  const handleEmail = (e) => {
    dispatchEmail({ type: 'USER_EMAIL', val: e.target.value });
  };

  const handlePassword = (e) => {
    dispatchPassword({ type: 'USER_PASSWORD', val: e.target.value });
  };

  const validEmailHandler = (e) => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validPasswordHandler = (e) => {
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAddInfo(emailState.value, passwordState.value);
  };

  return (
    <div className={styles['form-control']}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label>E-Mail</label>
          <input
            type="text"
            className={`${styles.input} ${
              emailState.isValid === false ? styles.invalid : ''
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
              passwordState.isValid === false ? styles.invalid : ''
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
