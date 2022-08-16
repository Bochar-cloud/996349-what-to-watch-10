import {Link} from 'react-router-dom';
import HeaderComponent from '../../components/header/header';
import FooterComponent from '../../components/footer/footer';
import './not-found-screen.css';

export default function NotFoundScreen (): JSX.Element {
  return (
    <>
      <section className="film-card">
        <HeaderComponent />
      </section>

      <div className="page-content">
        <section className="not-found">
          <div className="not-found__inner">
            <h1 className="not-found__title">404. Page not found</h1>

            <Link className="not-found__link" to="/">Вернуться на главную</Link>
          </div>
          <FooterComponent />
        </section>
      </div>
    </>
  );
}
