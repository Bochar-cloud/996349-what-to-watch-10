import { useAppDispatch, useAppSelector } from '../../hooks';
import { getMoreFilms } from '../../store/action';

export default function PaginationButton (): JSX.Element | null {
  const dispatch = useAppDispatch();
  const {genresFilms, filmsCount} = useAppSelector((state) => state);

  const handleButtonMoreClick = () => {
    dispatch(getMoreFilms());
  };

  return (filmsCount <= genresFilms.length) ?
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={handleButtonMoreClick}>Show more</button>
    </div> : null;
}
