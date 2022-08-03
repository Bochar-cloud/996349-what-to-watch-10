import {useEffect} from 'react';
import {Link, useSearchParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector, useGenresList} from '../../hooks/';
import classNames from 'classnames';
import {Film} from '../../types/film';
import FilmList from '../../components/film-list/film-list';
import {getGenreFilms, selectGenre} from '../../store/action';


type GenresListProps = {
  films: Film[];
};

export default function GenresList ({films}: GenresListProps):JSX.Element {
  const activeGenre = useAppSelector((state) => state.activeGenre);
  const [searchParams] = useSearchParams({});
  const dispatch = useAppDispatch();

  const genres = useGenresList(films);

  const currentSearchParam = searchParams.get('filter');

  useEffect(() => {
    if (currentSearchParam) {
      dispatch(selectGenre({activeGenre: currentSearchParam}));
      dispatch(getGenreFilms({activeGenre: currentSearchParam, films: films}));
    }
  }, [currentSearchParam, films, dispatch]);

  const stateFilms = useAppSelector(((state) => state.films));

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
        <FilmList films={stateFilms} isMoreFilms={false} />
      </div>
    </>
  );
}

