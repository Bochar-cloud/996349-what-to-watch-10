import {useEffect} from 'react';
import {Link, useSearchParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks/';
import classNames from 'classnames';
import {Film} from '../../types/film';
import FilmList from '../../components/film-list/film-list';
import {getGenreFilms, selectGenre} from '../../store/action';
import {DEFAULT_FILTER} from '../../const';


type GenresListProps = {
  films: Film[];
};

export default function GenresList ({films}: GenresListProps):JSX.Element {
  const activeGenre = useAppSelector((state) => state.activeGenre);
  const [searchParams] = useSearchParams({});
  const dispatch = useAppDispatch();
  const setGenres = new Set();

  films.forEach(({genre}) => {
    setGenres.add(DEFAULT_FILTER);
    setGenres.add(genre);
  });

  const currentSearchParam = searchParams.get('filter');

  useEffect(() => {
    if (currentSearchParam) {
      dispatch(selectGenre({activeGenre: currentSearchParam}));
      dispatch(getGenreFilms({activeGenre: currentSearchParam, films: films}));
    }
  }, [currentSearchParam]);

  const stateFilms = useAppSelector(((state) => state.films));
  const stateGenres = [...setGenres];

  return (
    <>
      <ul className="catalog__genres-list">
        {stateGenres.map((genre) => {
          const activeClasses = classNames({'catalog__genres-item--active' : genre === activeGenre});

          return (
            <li className={`catalog__genres-item ${activeClasses}`} key={`${genre}-key`}>
              <Link to={`?filter=${genre}`} className="catalog__genres-link">{genre as string}</Link>
            </li>
          );
        })}
      </ul>

      <div className="catalog__films-list">
        <FilmList films={stateFilms} isMoreFilms={false} />
      </div>
    </>
  );
}

