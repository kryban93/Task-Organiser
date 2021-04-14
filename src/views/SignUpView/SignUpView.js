import React, { useState } from 'react';
import style from './SignUpView.module.scss';
import { useAuth } from '../../contexts/AuthContext';
import verifyPassword from '../../additional/verifyPassword';

const SignUpView = () => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const { signUp } = useAuth();

  const submitFn = (e) => {
    e.preventDefault();

    if (email.match(emailRegex)) {
      if (password !== confirmPassword) {
        return setError('Passwords do not match');
      }

      if (verifyPassword(password).code !== 0) {
        setError(verifyPassword(password).description);
      } else {
        signUp(email, password);
      }
    } else {
      setError('Wrong email format.');
    }
  };
  return (
    <section className={style.wrapper}>
      <h1>Wellcome</h1>
      <p>Sign Up to continue</p>
      <form onSubmit={submitFn} className={style.form}>
        <input
          type='email'
          className={style.input}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          data-testid='signup-form-email-input'
          id='email'
        />
        <label htmlFor='email'>email</label>
        <input
          type='text'
          className={style.input}
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          required
          data-testid='signup-form-userName-input'
          id='user-name'
        />
        <label htmlFor='user-name'>name</label>
        <input
          type='password'
          className={style.input}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
          data-testid='signup-form-password-input'
          id='password'
        />
        <label htmlFor='password'>password</label>
        <input
          type='password'
          className={style.input}
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          required
          data-testid='signup-form-confirm-password-input'
          id='confirm-password'
        />
        <label htmlFor='confirm-password'>confirm password</label>

        <button className={`${style.btn} ${style['btn-send']}`} data-testid='signup-form-send-btn'>
          sign Up
        </button>
      </form>
      {error && <p data-testid='signup-form-error'>{error}</p>}
    </section>
  );
};

export default SignUpView;
