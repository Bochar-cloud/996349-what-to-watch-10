import {useRef, FormEvent, useState, ChangeEvent} from 'react';
import {useAppDispatch} from '../../hooks';
import {useNavigate} from 'react-router-dom';
import {AppRoute} from '../../const';
import {loginAction} from '../../store/api-actions';
import {AuthData} from '../../types/auth-data';
import FooterComponent from '../../components/footer/footer';
import classNames from 'classnames';

const patternEmail = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,15})$/;

export default function LoginScreen (): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [isValidEmail, setIsValidEmail] = useState({
    isError: false,
    isValid: false
  });

  const [isValidPassword, setIsValidPassword] = useState({
    isError: false,
    isValid: false
  });

  const validateLogin = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;

    if (value.search(patternEmail)) {
      return setIsValidEmail({
        isError: true,
        isValid: false,
      });
    }

    return setIsValidEmail({
      isError: false,
      isValid: true,
    });
  };

  const validatePassword = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;

    if (value.length >= 1) {
      return setIsValidPassword({
        isError: false,
        isValid: true,
      });
    }

    return setIsValidPassword({
      isError: true,
      isValid: false,
    });
  };

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {

      if (loginRef.current.value.search(patternEmail)) {
        setIsValidEmail({
          isError: true,
          isValid: false,
        });
      }

      if (passwordRef.current.value.length < 1) {
        setIsValidPassword({
          isError: true,
          isValid: false,
        });
      }

      if (isValidEmail.isValid && isValidPassword.isValid) {
        onSubmit({
          login: loginRef.current.value,
          password: passwordRef.current.value,
        });

        navigate(AppRoute.Main);
      }
    }
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
          {isValidEmail.isError || isValidPassword.isError ?
            <div className="sign-in__message">
              <p>We can’t recognize this email <br/> and password combination. Please try again.</p>
            </div> :
            null}
          <div className="sign-in__fields">
            <div className={`sign-in__field ${classNames({'sign-in__field--error' : isValidEmail.isError})}`}>
              <input ref={loginRef}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                onChange={validateLogin}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className={`sign-in__field ${classNames({'sign-in__field--error' : isValidPassword.isError})}`}>
              <input
                ref={passwordRef}
                className="sign-in__input"
                placeholder="Password"
                type="password"
                name="user-password"
                id="user-password"
                onChange={validatePassword}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button
              className="sign-in__btn"
              type="submit"
            >
                Sign in
            </button>
          </div>
        </form>
      </div>

      <FooterComponent />
    </div>
  );
}
