import {Link} from 'react-router-dom';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {AuthorizationStatus, AppRoute} from '../../const';
import {getAuthorizationStatus} from '../../store/user-procces/selectors';
import {logoutAction} from '../../store/api-actions';

export default function UserBlock (): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();

  const handleOutClick = () => {
    dispatch(logoutAction());
  };

  return authorizationStatus === AuthorizationStatus.Auth ?
    <ul className="user-block">
      <li className="user-block__item">
        <Link to={AppRoute.MyList}>
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </Link>
      </li>
      <li className="user-block__item">
        <Link to={AppRoute.Main} onClick={handleOutClick} className="user-block__link">Sign out</Link>
      </li>
    </ul> :
    <div className="user-block">
      <Link to={AppRoute.Login} className="user-block__link">Sign in</Link>
    </div>;
}
