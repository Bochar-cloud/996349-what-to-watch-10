import {useEffect} from 'react';
import {Link, useSearchParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector, useGenresList} from '../../hooks/';
import classNames from 'classnames';
import FilmList from '../../components/film-list/film-list';
import PaginationButton from '../pagination-button/pagination-button';
import {setActiveGenre, setFilterFilms} from '../../store/data-procces/data-procces';
import {getFilms, getActiveGenre, getGenresFilms} from '../../store/data-procces/selectors';

export default function GenresList ():JSX.Element {
  const activeGenre = useAppSelector(getActiveGenre);
  const films = useAppSelector(getFilms);
  const genresFilms = useAppSelector(getGenresFilms);

  const [searchParams] = useSearchParams({});

  const dispatch = useAppDispatch();

  const currentSearchParam = searchParams.get('filter');
  const genres = useGenresList(films);

  useEffect(() => {
    if (currentSearchParam) {
      dispatch(setActiveGenre(currentSearchParam));
      dispatch(setFilterFilms({activeGenre: currentSearchParam, films: films}));
    }
  }, [currentSearchParam, dispatch, films]);

  return (
    <>
      <ul className="catalog__genres-list">
        {genres.map((genre) => {
          const activeClasses = classNames({'catalog__genres-item--active' : genre === activeGenre});

          return (
            <li className={`catalog__genres-item ${activeClasses}`} key={`${genre}-key`}>
              <Link to={`?filter=${genre}`} className="catalog__genres-link">{genre as string}</Link>
            </li>
          );
        })}
      </ul>

      <div className="catalog__films-list">
        <FilmList films={genresFilms} isMoreFilms={false} />
      </div>

      <PaginationButton/>
    </>
  );
}

