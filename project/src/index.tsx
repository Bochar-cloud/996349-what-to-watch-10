import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Setting = {
  NameMovie: 'The Grand Budapest Hotel',
  GenreMovie: 'Drama',
  ReliseMovie: new Date(),
  PromoMovie: 'img/the-grand-budapest-hotel-poster.jpg',
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>

    <App
      nameMovie = {Setting.NameMovie}
      genreMovie = {Setting.GenreMovie}
      reliseMovie = {Setting.ReliseMovie}
      promoMovie = {Setting.PromoMovie}
    />
  </React.StrictMode>,
);
