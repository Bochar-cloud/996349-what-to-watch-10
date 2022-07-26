import {Review} from '../../types/review';
import ReviewItem from '../../components/review-item/review-item';

type TabReviewProps = {
  reviews: Review[];
};

export default function TabReview ({reviews}: TabReviewProps): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review) => <ReviewItem key={review.id} review={review}/>)}
      </div>
    </div>
  );
}
