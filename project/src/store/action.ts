import {createAction} from '@reduxjs/toolkit';
import {Film} from '../types/film';

export const selectGenre = createAction<{activeGenre: string}>('main/selectGenre');

export const getGenreFilms = createAction<{activeGenre: string, films: Film[]}>('main/getGenreFilms');
