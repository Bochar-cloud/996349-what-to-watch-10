import {useAppSelector} from '../../hooks';
import {getPromoFilm} from '../../store/data-procces/selectors';


export default function PromoInfo (): JSX.Element | null {
  const promoFilm = useAppSelector(getPromoFilm);

  return promoFilm &&
  <>
    <h2 className="film-card__title">{promoFilm.name}</h2>
    <p className="film-card__meta">
      <span className="film-card__genre">{promoFilm.genre}</span>
      <span className="film-card__year">{promoFilm.released}</span>
    </p>
  </>;
}


