import {Review} from '../../types/review';
import {normaliseDate} from '../../utils';

type ReviewProps = {
  review: Review;
};

export default function ReviewItem ({review}: ReviewProps): JSX.Element {
  const {
    comment,
    user,
    date,
    rating,
  } = review;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>
        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime="2016-12-24">{normaliseDate(date)}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{rating}</div>
    </div>
  );
}
