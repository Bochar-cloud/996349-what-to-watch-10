import {NameSpace} from '../../const';
import {State} from '../../types/state';

export const getFilms = (state: State) => state[NameSpace.Data].films;
export const getFilmDetail = (state: State) => state[NameSpace.Data].filmDetail;
export const getFilmsSimular = (state: State) => state[NameSpace.Data].simularFilms;
export const getFilmComments = (state: State) => state[NameSpace.Data].filmComments;
export const getIsDataLoaded = (state: State) => state[NameSpace.Data].isDataLoaded;
export const getActiveGenre = (state: State) => state[NameSpace.Data].activeGenre;
export const getGenresFilms = (state: State) => state[NameSpace.Data].genresFilms;
export const getFilmsCount = (state: State) => state[NameSpace.Data].filmsCount;
export const getError = (state: State) => state[NameSpace.Data].error;
export const getIsFormDisabled = (state: State) => state[NameSpace.Data].isFormDisabled;
export const getFavoritesCount = (state: State) => state[NameSpace.Data].favoritesCount;
export const getPromoFilm = (state: State) => state[NameSpace.Data].promoFilm;
