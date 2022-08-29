import {Film} from '../../types/film';

type PromoPosterProps = {
  promoFilm: Film | null;
};

export default function PromoInfo ({promoFilm}: PromoPosterProps): JSX.Element | null {
  return promoFilm &&
  <>
    <h2 className="film-card__title">{promoFilm.name}</h2>
    <p className="film-card__meta">
      <span className="film-card__genre">{promoFilm.genre}</span>
      <span className="film-card__year">{promoFilm.released}</span>
    </p>
  </>;
}


