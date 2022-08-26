import {useAppSelector} from '../../hooks';
import {getPromoFilm} from '../../store/data-procces/selectors';

export default function PromoPoster (): JSX.Element | null {
  const promoFilm = useAppSelector(getPromoFilm);

  return promoFilm && <img src={promoFilm.posterImage} alt={promoFilm.name} width="218" height="327" />;
}
