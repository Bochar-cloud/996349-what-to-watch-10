import {useAppDispatch, useAppSelector} from '../../hooks';
import {getFilmsCount, getGenresFilms} from '../../store/data-procces/selectors';
import {setMoreFilms} from '../../store/data-procces/data-procces';

import { getFilms } from '../../store/data-procces/selectors';

export default function PaginationButton (): JSX.Element | null {
  const genresFilms = useAppSelector(getGenresFilms);
  const filmsCount = useAppSelector(getFilmsCount);
  const films = useAppSelector(getFilms);

  const dispatch = useAppDispatch();

  const handleButtonMoreClick = () => {
    dispatch(setMoreFilms(films));
  };

  return (filmsCount <= genresFilms.length) ?
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={handleButtonMoreClick}>Show more</button>
    </div> : null;
}
