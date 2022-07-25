import HeaderComponent from '../../components/header/header';
import FooterComponent from '../../components/footer/footer';
import FilmList from '../../components/film-list/film-list';
import ButtonPlay from '../../components/button-play/button-play';
import ButtonAddReview from '../../components/button-add-review/button-add-review';
import Tabs from '../../components/tabs/tabs';
import {Film} from '../../types/film';
import {Review} from '../../types/review';

type FilmScreenProps = {
  promoFilm: Film;
  films: Film[];
  reviews: Review[];
};

export default function FilmScreen (props: FilmScreenProps): JSX.Element {
  const {
    promoFilm,
    films,
    reviews,
  } = props;

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <HeaderComponent />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.released}</span>
              </p>

              <div className="film-card__buttons">

                <ButtonPlay />

                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>

                <ButtonAddReview />
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={promoFilm.posterImage} alt={promoFilm.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              {<Tabs film={films[0]} reviews={reviews}/>}
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            {<FilmList films={films} isMoreFilms />}
          </div>
        </section>

        <FooterComponent />
      </div>
    </>
  );
}
