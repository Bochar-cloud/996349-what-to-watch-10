import {useState} from 'react';
import {Link} from 'react-router-dom';
import {Film} from '../../types/film';
import VideoPlayer from '../../components/video-player/video-player';

const TIMER_DELAY_MS = 1000;

type FilmCardProps = {
  film: Film;
  filmId: number;
};

let timerId: ReturnType<typeof setTimeout>;

export default function FilmCard ({film, filmId}: FilmCardProps): JSX.Element {
  const [isActiveFilmCard, setIsActiveFilmCard] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleFilmMouseEnter = () => {
    timerId = setTimeout(() => {
      setIsActiveFilmCard(true);
      setIsPlaying(true);
    },TIMER_DELAY_MS);
  };

  const handleFilmMouseLeave = () => {
    clearTimeout(timerId);
    setIsActiveFilmCard(false);
    setIsPlaying(false);
  };

  return (
    <article className="small-film-card catalog__films-card">
      <Link to={`/films/${filmId}/`}>
        <div
          className="small-film-card__image"
          onMouseEnter={handleFilmMouseEnter}
          onMouseLeave={handleFilmMouseLeave}
        >
          {
            isActiveFilmCard ?
              <VideoPlayer
                src={film.videoLink}
                isPlaying={isPlaying}
                autoPlay={isActiveFilmCard}
                poster={film.previewImage}
              /> :
              <img src={film.previewImage} alt={film.name} width="280" height="175" />
          }
        </div>
      </Link>
      <h3 className="small-film-card__title">
        <Link
          to={`/films/${filmId}/`}
          className="small-film-card__link"
        >
          {film.name}
        </Link>
      </h3>
    </article>
  );
}
