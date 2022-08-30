import {Film} from '../../types/film';

type PromoPosterProps = {
  promoFilm: Film | null;
};

export default function PromoPoster ({promoFilm} : PromoPosterProps): JSX.Element | null {
  return promoFilm && <img src={promoFilm.posterImage} alt={promoFilm.name} width="218" height="327" />;
}
