import {createReducer} from '@reduxjs/toolkit';
import {getGenreFilms, selectGenre} from './action';
import {films} from '../mocks/films';
import {DEFAULT_FILTER, FILMS_COUNT_STEP} from '../const';

const initialState = {
  activeGenre: DEFAULT_FILTER,
  films: films,
  filmsCount: FILMS_COUNT_STEP,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(selectGenre, (state, action) => {
    state.activeGenre = action.payload.activeGenre;
  });
  builder.addCase(getGenreFilms, (state, action) => {
    state.films = action.payload.films.filter(({genre}) => {
      if (state.activeGenre === initialState.activeGenre) {
        return true;
      }

      if (genre === action.payload.activeGenre) {
        return true;
      }

      return false;
    });
  });
});

export {reducer};
