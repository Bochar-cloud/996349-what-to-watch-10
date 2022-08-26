import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getFavoritesCount} from '../../store/data-procces/selectors';
import {setFavoritesCount} from '../../store/data-procces/data-procces';

type FavoritesCountProps = {
  isUserPage?: boolean;
};

export default function FavoritesCount ({isUserPage}: FavoritesCountProps): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setFavoritesCount());
  }, [dispatch]);

  const favoritesCount = useAppSelector(getFavoritesCount);

  return (
    <span className={isUserPage ? 'user-page__film-count' : 'film-card__count'}>{favoritesCount}</span>
  );
}
