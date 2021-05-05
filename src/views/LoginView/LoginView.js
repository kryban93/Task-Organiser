import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useUserData } from '../../contexts/UserDataContext';
import style from './LoginView.module.scss';
import icons from '../../assets/icons';
import Loader from '../../components/Loader/Loader';

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const { authUserWithFirestore } = useUserData();
  const history = useHistory();
  const [isLoading, setLoadingState] = useState(false);

  const submitFn = async (e) => {
    e.preventDefault();

    try {
      setLoadingState(true);
      setError('');
      await login(email, password)
        .then(async (user) => {
          console.log(user.user.uid);
          await authUserWithFirestore(user);
        })
        .catch((error) => {
          setError(`${error.code} : ${error.message}`);
        });
      setLoadingState(false);
      history.push('/dashboard');
    } catch {
      setError('Failed to log in');
    }
  };

  return (
    <section className={style.wrapper}>
      <header className={style.header}>
        <h1>Hello!</h1>
        <p className={style.header_text}>Login to continue</p>
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
            data-testid='login-form-email-input'
            id='email'
          />
          <label htmlFor='email' className={style.label}>
            email
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
            data-testid='login-form-password-input'
            id='password'
          />
          <label htmlFor='password' className={style.label}>
            password
          </label>
        </div>

        <button
          className={`${style.btn} ${style['btn-send']}`}
          data-testid='login-form-send-btn'
          disabled={isLoading}
          type='submit'
        >
          login
        </button>
      </form>
      {error && <p data-testid='login-form-error'>{error}</p>}
      <p className={style.undertext}>
        Still don't have an account ?{' '}
        <Link to='/signUp' className={style.link}>
          Sign in
        </Link>
      </p>
      {isLoading && <Loader />}
    </section>
  );
};

export default LoginView;
