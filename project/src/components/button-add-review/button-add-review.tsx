import {Link, useParams} from 'react-router-dom';
import {AuthorizationStatus} from '../../const';
import {useAppSelector} from '../../hooks';
import {getAuthorizationStatus} from '../../store/user-procces/selectors';

export default function ButtonAddReview (): JSX.Element | null {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const {id} = useParams();

  return authorizationStatus === AuthorizationStatus.Auth ?
    <Link
      to={`/films/${id}/review`}
      className="btn film-card__button"
    >
      Add review
    </Link> : null;
}
