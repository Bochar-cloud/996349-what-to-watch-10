import {useEffect} from 'react';
import {Link, useSearchParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector, useGenresList} from '../../hooks/';
import classNames from 'classnames';
import FilmList from '../../components/film-list/film-list';
import {getGenreFilms, selectGenre} from '../../store/action';

export default function GenresList ():JSX.Element {
  const activeGenre = useAppSelector((state) => state.activeGenre);
  const [searchParams] = useSearchParams({});
  const dispatch = useAppDispatch();

  const {films, genresFilms} = useAppSelector(((state) => state));

  const currentSearchParam = searchParams.get('filter');

  const genres = useGenresList(films);

  useEffect(() => {
    if (currentSearchParam) {
      dispatch(selectGenre({activeGenre: currentSearchParam}));
      dispatch(getGenreFilms({activeGenre: currentSearchParam, films: films}));
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
    </>
  );
}

