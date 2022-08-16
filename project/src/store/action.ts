import {createAction} from '@reduxjs/toolkit';
import {Film} from '../types/film';
import {AppRoute, AuthorizationStatus} from '../const';
import {Review} from '../types/review';

export const selectGenre = createAction<{activeGenre: string}>('main/selectGenre');

export const getGenreFilms = createAction<{activeGenre: string, films: Film[]}>('main/getGenreFilms');

export const loadFilms = createAction<Film[]>('data/loadFilms');

export const loadFilmDetail = createAction<Film>('data/loadFilmDetail');

export const loadSimularFilms = createAction<Film[]>('data/loadSimularFilms');

export const loadFilmComments = createAction<Review[]>('data/loadFilmComments');

export const getMoreFilms = createAction('main/getMoreFilms');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('setError');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const redirectToRoute = createAction<AppRoute>('main/redirectToRoute');

export const setDisabledForm = createAction<boolean>('data/setDisabledForm');
