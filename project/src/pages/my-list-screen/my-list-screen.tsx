import FooterComponent from '../../components/footer/footer';
import FilmList from '../../components/film-list/film-list';
import {Film} from '../../types/film';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import FavoritesCount from '../../components/favorites-count/favorites-count';

type MyListScreenProps = {
  films: Film[];
};

export default function MyListScreen (props: MyListScreenProps): JSX.Element {
  const {
    films,
  } = props;

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
          {<FilmList films={films} isMoreFilms={false}/>}
        </div>
      </section>

      <FooterComponent />
    </div>
  );
}
