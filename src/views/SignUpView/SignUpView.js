import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './SignUpView.module.scss';
import { useAuth } from '../../contexts/AuthContext';
import verifyPassword from '../../additional/verifyPassword';
import icons from '../../assets/icons';

const SignUpView = () => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const { signUp } = useAuth();

  const submitFn = async (e) => {
    e.preventDefault();

    if (email.match(emailRegex)) {
      if (password !== confirmPassword) {
        return setError('Passwords do not match');
      }

      if (verifyPassword(password).code !== 0) {
        setError(verifyPassword(password).description);
      } else {
        try {
          await signUp(email, password);
        } catch {
          setError('Failed to sign up');
        }
      }
    } else {
      setError('Wrong email format.');
    }
  };
  return (
    <section className={style.wrapper}>
      <header className={style.header}>
        <h1>Wellcome</h1>
        <p className={style.header_text}>Sign Up to start managing your life!</p>
      </header>

      <form onSubmit={submitFn} className={style.form}>
        <div className={style.container}>
          <img src={icons.profile_yellow} alt='profile icon' className={style.icon} />
          <input
            type='email'
            className={style.input}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            data-testid='signup-form-email-input'
            id='email'
          />
          <label htmlFor='email' className={style.label}>
            email
          </label>
        </div>
        <div className={style.container}>
          <img src={icons.profile_yellow} alt='profile icon' className={style.icon} />
          <input
            type='text'
            className={style.input}
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            required
            data-testid='signup-form-userName-input'
            id='user-name'
          />
          <label htmlFor='user-name' className={style.label}>
            name
          </label>
        </div>
        <div className={style.container}>
          <img src={icons.password} alt='profile icon' className={style.icon} />
          <input
            type='password'
            className={style.input}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            data-testid='signup-form-password-input'
            id='password'
          />
          <label htmlFor='password' className={style.label}>
            password
          </label>
        </div>
        <div className={style.container}>
          <img src={icons.password} alt='profile icon' className={style.icon} />
          <input
            type='password'
            className={style.input}
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            required
            data-testid='signup-form-confirm-password-input'
            id='confirm-password'
          />
          <label htmlFor='confirm-password' className={style.label}>
            confirm password
          </label>
        </div>
        <button className={`${style.btn} ${style['btn-send']}`} data-testid='signup-form-send-btn'>
          sign Up
        </button>
      </form>
      {error && <p data-testid='signup-form-error'>{error}</p>}
      <p className={style.undertext}>
        Already have an account?{' '}
        <Link to='/login' className={style.link}>
          Log in
        </Link>
      </p>
    </section>
  );
};

export default SignUpView;
