import {createReducer} from '@reduxjs/toolkit';
import {getGenreFilms, selectGenre, loadFilms, requireAuthorization, setError, setDataLoadedStatus} from './action';
import {Film} from '../types/film';
import {DEFAULT_FILTER, FILMS_COUNT_STEP, AuthorizationStatus} from '../const';

type InitialState = {
  activeGenre: string;
  filmsCount: number;
  films: Film[];
  authorizationStatus: AuthorizationStatus;
  isDataLoaded: boolean,
  error: string | null;
  genresFilms: Film[];
};

const initialState: InitialState = {
  activeGenre: DEFAULT_FILTER,
  filmsCount: FILMS_COUNT_STEP,
  films: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  error: null,
  genresFilms: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectGenre, (state, action) => {
      state.activeGenre = action.payload.activeGenre;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.genresFilms = action.payload;
    })
    .addCase(getGenreFilms, (state, {payload: {activeGenre = initialState.activeGenre, films}}) => {
      state.genresFilms = films.filter(({genre}) =>
        state.activeGenre === initialState.activeGenre || genre === activeGenre);
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    });
});

export {reducer};
