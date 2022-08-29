import {useEffect} from 'react';
import FooterComponent from '../../components/footer/footer';
import FilmList from '../../components/film-list/film-list';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import FavoritesCount from '../../components/favorites-count/favorites-count';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {setFavoritesFilms} from '../../store/data-procces/data-procces';
import {getFavoritesFilms} from '../../store/data-procces/selectors';

export default function MyListScreen (): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setFavoritesFilms());
  }, [dispatch]);

  const favoritesFilms = useAppSelector(getFavoritesFilms);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">
          My list
          <FavoritesCount isUserPage/>
        </h1>

        <UserBlock/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {<FilmList films={favoritesFilms} isMoreFilms={false}/>}
        </div>
      </section>

      <FooterComponent />
    </div>
  );
}
