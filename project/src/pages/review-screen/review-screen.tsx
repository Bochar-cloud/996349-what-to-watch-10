import HeaderComponent from '../../components/header/header';
import FormSubmitComment from '../../components/form-submit-comment/form-submit-comment';
import {Film} from '../../types/film';

type ReviewScreenProps = {
  firstFilm: Film;
};

export default function ReviewScreen ({firstFilm}:ReviewScreenProps):JSX.Element {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <HeaderComponent />

        <div className="film-card__poster film-card__poster--small">
          <img src={firstFilm.posterImage} alt={firstFilm.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <FormSubmitComment />
      </div>

    </section>
  );
}
