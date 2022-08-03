import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {State, AppDispatch} from '../types/state';
import {Film} from '../types/film';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export const useGenresList = (defaultFilter: string, films: Film[]) => {
  const setGenres = new Set([defaultFilter, ...films.map(({genre}) => genre)]);

  return [...setGenres];
};
