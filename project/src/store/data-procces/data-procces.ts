import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, DEFAULT_FILTER, FILMS_COUNT_STEP} from '../../const';
import {DataProcces} from '../../types/state';
import {Film} from '../../types/film';
import {fetchFilmsAction, fetchFilmDetailAction, fetchSimularFilmsAction, fetchFilmCommentsAction, fetchPromoFilmAction, toggleFavoriteAction} from '../api-actions';

const initialState: DataProcces = {
  films: [],
  genresFilms: [],
  isDataLoaded: false,
  filmDetail: null,
  simularFilms: [],
  filmComments: [],
  activeGenre: DEFAULT_FILTER,
  filmsCount: FILMS_COUNT_STEP,
  error: null,
  isFormDisabled: false,
  favoritesCount: 0,
  promoFilm: null,
  favoritesFilms: [],
  // isFavorite: false,
};

export const dataProcces = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    setActiveGenre: (state, action) => {
      state.activeGenre = action.payload;
      state.filmsCount = FILMS_COUNT_STEP;
    },
    setFilterFilms: (state, {payload: {activeGenre = initialState.activeGenre, films}}) => {
      state.genresFilms = films.filter(({genre}: Film) =>
        state.activeGenre === initialState.activeGenre || genre === activeGenre).slice(0, state.filmsCount);
    },
    setMoreFilms: (state, action) => {
      state.filmsCount = state.filmsCount + FILMS_COUNT_STEP;
      state.genresFilms = action.payload.slice(0, state.filmsCount);
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    isDisabledForm: (state, action) => {
      state.isFormDisabled = action.payload;
    },
    setFavoritesCount: (state) => {
      state.favoritesCount = state.films.filter(({isFavorite}) => isFavorite).length;
    },
    setFavoritesFilms: (state) => {
      state.favoritesFilms = state.films.filter(({isFavorite}) => isFavorite);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.genresFilms = action.payload.slice(0, state.filmsCount);
        state.isDataLoaded = false;
      })
      .addCase(fetchFilmDetailAction.fulfilled, (state, action) => {
        state.filmDetail = action.payload;
      })
      .addCase(fetchSimularFilmsAction.fulfilled, (state, action) => {
        state.simularFilms = action.payload;
      })
      .addCase(fetchFilmCommentsAction.fulfilled, (state, action) => {
        state.filmComments = action.payload;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
      })
      .addCase(toggleFavoriteAction.fulfilled, (state, action) => {
        const index = state.films.findIndex((film) => film.id === action.payload.id);

        if (index === -1) {
          throw new Error('Can\'t update unexisting movie');
        }

        state.films.splice(index, 1, action.payload);
        state.favoritesCount = state.films.filter(({isFavorite}) => isFavorite).length;
        state.promoFilm = action.payload;
        state.filmDetail = action.payload;
      });
  }
});

export const {setActiveGenre, setFilterFilms, setMoreFilms, setError, isDisabledForm, setFavoritesCount, setFavoritesFilms} = dataProcces.actions;
