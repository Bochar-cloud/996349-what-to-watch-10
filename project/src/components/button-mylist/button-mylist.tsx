import {useNavigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import FavoritesCount from '../favorites-count/favorites-count';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getAuthorizationStatus} from '../../store/user-procces/selectors';
import {toggleFavoriteAction} from '../../store/api-actions';
import {Film} from '../../types/film';

type ButtonMyListProps = {
  film: Film | null;
};

export default function ButtonMyList ({film}: ButtonMyListProps): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const handleMyListClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
      return;
    }

    if (film !== null) {
      dispatch(toggleFavoriteAction({filmId: film.id, status: Number(!film?.isFavorite)}));
    }
  };

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={handleMyListClick}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>

      <span>{film?.isFavorite ? '✓ MyList' : 'My list'}</span>

      <FavoritesCount />
    </button>
  );
}
