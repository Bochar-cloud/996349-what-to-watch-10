import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Settings = {
  NUMBERS_MOVIES: 20,
  NAME_MOVIE: 'The Grand Budapest Hotel',
  GENRE_MOVIE: 'Drama',
  RELISE_MOVIE: new Date(),
  PROMO_MOVIE: 'img/the-grand-budapest-hotel-poster.jpg',
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      numbersMovies = {Settings.NUMBERS_MOVIES}
      nameMovie = {Settings.NAME_MOVIE}
      genreMovie = {Settings.GENRE_MOVIE}
      reliseMovie = {Settings.RELISE_MOVIE}
      promoMovie = {Settings.PROMO_MOVIE}
    />
  </React.StrictMode>,
);
