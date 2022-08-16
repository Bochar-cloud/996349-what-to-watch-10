import {useAppSelector, useAppDispatch} from '../../hooks';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {logoutAction} from '../../store/api-actions';
import {AuthorizationStatus} from '../../const';

export default function HeaderComponent (): JSX.Element {
  const {authorizationStatus} = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  const handleOutClick = () => {
    dispatch(logoutAction());
  };

  return (
    <>
      <div className="film-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>
        {authorizationStatus === AuthorizationStatus.Auth ?
          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <Link to={AppRoute.Main} onClick={handleOutClick} className="user-block__link">Sign out</Link>
            </li>
          </ul> :
          <div className="user-block">
            <Link to={AppRoute.Login} className="user-block__link">Sign in</Link>
          </div>}
      </header>
    </>
  );
}
