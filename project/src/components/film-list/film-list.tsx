import FilmCard from '../../components/film-card/film-card';
import {Film} from '../../types/film';

const MAX_COUNT_MORE_FILMS = 4;

type FilmListProps = {
  films: Film[];
  isMoreFilms: boolean;
};

export default function FilmList ({films, isMoreFilms}: FilmListProps): JSX.Element {
  if (isMoreFilms) {
    return (
      <>
        {films.map((film) => <FilmCard key={film.id} film={film}/>).slice(0, MAX_COUNT_MORE_FILMS)}
      </>
    );
  }

  return (
    <>
      {films.map((film) => <FilmCard key={film.id} film={film}/>)}
    </>
  );
}
