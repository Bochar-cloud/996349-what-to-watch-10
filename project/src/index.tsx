import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import SvgSprite from './components/svg-sprite/svg-sprite';

const Setting = {
  NAME_MOVIE: 'The Grand Budapest Hotel',
  GENRE_MOVIE: 'Drama',
  RELISE_MOVIE: new Date(),
  PROMO_MOVIE: 'img/the-grand-budapest-hotel-poster.jpg',
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <SvgSprite />

    <App
      nameMovie = {Setting.NAME_MOVIE}
      genreMovie = {Setting.GENRE_MOVIE}
      reliseMovie = {Setting.RELISE_MOVIE}
      promoMovie = {Setting.PROMO_MOVIE}
    />
  </React.StrictMode>,
);
