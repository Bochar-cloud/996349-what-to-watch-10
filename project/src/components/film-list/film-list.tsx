import FilmCard from '../../components/film-card/film-card';
import {Films} from '../../types/film';

type FilmListProps = {
  films: Films;
};

export default function FilmList ({films}:FilmListProps):JSX.Element {
  return (
    <>
      {films.map((film) => <FilmCard key={film.id} film={film}/>)}
    </>
  );
}
