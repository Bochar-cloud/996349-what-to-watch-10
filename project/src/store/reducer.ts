import {createReducer} from '@reduxjs/toolkit';
import {getGenreFilms, selectGenre, loadFilms, requireAuthorization, setError, setDataLoadedStatus, getMoreFilms, loadFilmDetail} from './action';
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
  filmDetail: Film | null;
};

const initialState: InitialState = {
  activeGenre: DEFAULT_FILTER,
  filmsCount: FILMS_COUNT_STEP,
  films: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  error: null,
  genresFilms: [],
  filmDetail: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectGenre, (state, action) => {
      state.activeGenre = action.payload.activeGenre;
      state.filmsCount = FILMS_COUNT_STEP;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.genresFilms = action.payload.slice(0, state.filmsCount);
    })
    .addCase(getGenreFilms, (state, {payload: {activeGenre = initialState.activeGenre, films}}) => {
      state.genresFilms = films.filter(({genre}) =>
        state.activeGenre === initialState.activeGenre || genre === activeGenre).slice(0, state.filmsCount);
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(getMoreFilms, (state) => {
      state.filmsCount = state.filmsCount + FILMS_COUNT_STEP;
      state.genresFilms = state.films.slice(0, state.filmsCount);
    })
    .addCase(loadFilmDetail, (state, action) => {
      state.filmDetail = action.payload;
    });
});

export {reducer};
