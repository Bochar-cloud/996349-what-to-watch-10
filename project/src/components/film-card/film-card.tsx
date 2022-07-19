import {useState} from 'react';
import {Link} from 'react-router-dom';
import {Film} from '../../types/film';
import {AppRoute} from '../../const';

type FilmCardProps = {
  film: Film;
};

export default function FilmCard ({film}:FilmCardProps):JSX.Element {
  const [activeFilmCard, setActiveFilmCard] = useState(film);

  const handleFilmMouseEnter = () => {
    setActiveFilmCard(film);
  };

  const handleFilmMouseLeave = () => {
    setActiveFilmCard(film);
  };

  return (
    <article className="small-film-card catalog__films-card">
      <Link to={AppRoute.Film}>
        <div className="small-film-card__image"
          onMouseEnter={handleFilmMouseEnter}
          onMouseLeave={handleFilmMouseLeave}
        >
          <img src={activeFilmCard.previewImage} alt={film.name} width="280" height="175" />
        </div>
      </Link>
      <h3 className="small-film-card__title">
        <Link to={AppRoute.Film} className="small-film-card__link">{film.name}</Link>
      </h3>
    </article>
  );
}
