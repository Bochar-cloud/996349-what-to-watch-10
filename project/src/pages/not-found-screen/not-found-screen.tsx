import {Link} from 'react-router-dom';
import HeaderComponent from '../../components/header/header';
import FooterComponent from '../../components/footer/footer';

export default function NotFoundScreen ():JSX.Element {
  return (
    <>
      <section className="film-card">
        <HeaderComponent />
      </section>

      <div className="page-content not-found">
        <section className="catalog">
          <h1>404. Page not found</h1>

          <Link className="not-found__link" to="/">Вернуться на главную</Link>

          <FooterComponent />
        </section>
      </div>
    </>
  );
}
