import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import FavoritesCount from '../favorites-count/favorites-count';
import {useAppSelector} from '../../hooks';
import {getAuthorizationStatus} from '../../store/user-procces/selectors';

export default function ButtonMylist (): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <Link to={authorizationStatus !== AuthorizationStatus.Auth ? AppRoute.Login : AppRoute.MyList} className="btn btn--list film-card__button" type="button">
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>

      <span>My list</span>

      <FavoritesCount />
    </Link>
  );
}
