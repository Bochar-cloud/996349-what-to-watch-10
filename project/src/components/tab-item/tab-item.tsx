import {Film} from '../../types/film';
import ReviewItem from '../../components/review-item/review-item';
import {Review} from '../../types/review';

type TabItemProps = {
  activeTab: string | null;
  film: Film;
  reviews: Review[];
};

enum TabsFilmDetail {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews'
}

export default function TabItem ({activeTab, film, reviews}: TabItemProps): JSX.Element {
  const {
    rating,
    scoresCount,
    description,
    director,
    starring,
    runTime,
    released,
    genre
  } = film;

  if (activeTab === TabsFilmDetail.Details) {
    return (
      <div className="film-card__text film-card__row">
        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Director</strong>
            <span className="film-card__details-value">{director}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Starring</strong>
            <span className="film-card__details-value">
              {starring.join(', ')}
            </span>
          </p>
        </div>

        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Run Time</strong>
            <span className="film-card__details-value">{runTime}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Genre</strong>
            <span className="film-card__details-value">{genre}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Released</strong>
            <span className="film-card__details-value">{released}</span>
          </p>
        </div>
      </div>
    );
  }

  if (activeTab === TabsFilmDetail.Reviews) {
    return (
      <div className="film-card__reviews film-card__row">
        <div className="film-card__reviews-col">
          {reviews.map((review) => <ReviewItem key={review.id} review={review}/>)}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director"><strong>Director: {director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {starring.join(', ')}</strong></p>
      </div>
    </>
  );
}

