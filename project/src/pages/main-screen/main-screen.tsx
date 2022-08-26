import {useEffect} from 'react';
import {useAppDispatch} from '../../hooks';
import HeaderComponent from '../../components/header/header';
import FooterComponent from '../../components/footer/footer';
import ButtonPlay from '../../components/button-play/button-play';
import GenresList from '../../components/genres-list/genres-list';
import ButtonMylist from '../../components/button-mylist/button-mylist';
import PromoPoster from '../../components/promo-poster/promo-poster';
import PromoInfo from '../../components/promo-info/promo-info';
import {fetchPromoFilmAction} from '../../store/api-actions';

export default function MainScreen (): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPromoFilmAction());
  }, [dispatch]);

  return (
    <>
      <section className="film-card">

        <HeaderComponent />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <PromoPoster/>
            </div>

            <div className="film-card__desc">
              <PromoInfo />

              <div className="film-card__buttons">
                <ButtonPlay />

                <ButtonMylist />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList/>

        </section>

        <FooterComponent />
      </div>
    </>
  );
}
