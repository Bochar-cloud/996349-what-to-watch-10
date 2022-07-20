import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

export default function ButtonAddReview (): JSX.Element {
  return (
    <Link
      to={AppRoute.Review}
      className="btn film-card__button"
    >
      Add review
    </Link>
  );
}
