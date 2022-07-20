import FilmCard from '../../components/film-card/film-card';
import {Film} from '../../types/film';

type FilmListProps = {
  films: Film[];
};

export default function FilmList ({films}:FilmListProps): JSX.Element {
  return (
    <>
      {films.map((film) => <FilmCard key={film.id} film={film}/>)}
    </>
  );
}
