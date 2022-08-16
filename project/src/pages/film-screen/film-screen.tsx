import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import HeaderComponent from '../../components/header/header';
import FooterComponent from '../../components/footer/footer';
import FilmList from '../../components/film-list/film-list';
import ButtonPlay from '../../components/button-play/button-play';
import ButtonAddReview from '../../components/button-add-review/button-add-review';
import Tabs from '../../components/tabs/tabs';
import {store} from '../../store';
import {fetchFilmDetailAction, fetchSimularFilmsAction, fetchFilmCommentsAction} from '../../store/api-actions';
import {useAppSelector} from '../../hooks';

export default function FilmScreen (): JSX.Element {
  const {id} = useParams();

  useEffect(() => {
    if (id) {
      store.dispatch(fetchFilmDetailAction(id));
      store.dispatch(fetchSimularFilmsAction(id));
      store.dispatch(fetchFilmCommentsAction(id));
    }
  }, [id]);

  const {filmDetail, sumularFilms, filmComments} = useAppSelector((state) => state);

  return (
    filmDetail !== null ?
      <>
        <section className="film-card film-card--full">
          <div className="film-card__hero">
            <HeaderComponent />
            <div className="film-card__wrap">
              <div className="film-card__desc">
                <h2 className="film-card__title">{filmDetail.name}</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">{filmDetail.genre}</span>
                  <span className="film-card__year">{filmDetail.released}</span>
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
                <img src={filmDetail.posterImage} alt={filmDetail.name} width="218" height="327" />
              </div>

              <div className="film-card__desc">
                {<Tabs film={filmDetail} reviews={filmComments}/>}
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <div className="catalog__films-list">
              {<FilmList films={sumularFilms} isMoreFilms />}
            </div>
          </section>

          <FooterComponent />
        </div>
      </> :
      <NotFoundScreen />
  );
}
