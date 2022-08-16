import {Review} from '../../types/review';
import ReviewItem from '../../components/review-item/review-item';

type TabReviewProps = {
  reviews: Review[];
};

export default function TabReview ({reviews}: TabReviewProps): JSX.Element {
  const leftReviews = [...reviews].filter((review, reviewIdx) => reviewIdx % 2 === 0);
  const rightReviews = [...reviews].filter((review, reviewIdx) => reviewIdx % 2 !== 0);

  return (
    <div className="film-card__reviews film-card__row">
      {reviews.length !== 0 ?
        <>
          <div className="film-card__reviews-col">
            {leftReviews.map((review) => <ReviewItem key={review.id} review={review}/>)}
          </div>
          <div className="film-card__reviews-col">
            {rightReviews.map((review) => <ReviewItem key={review.id} review={review}/>)}
          </div>
        </> :
        <p style={{color: '#252525', fontSize: '22px'}}>There are no reviews for this movie :(</p>}
    </div>
  );
}
