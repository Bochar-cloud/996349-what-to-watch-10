import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {State, AppDispatch} from '../types/state';
import {Film} from '../types/film';
import {DEFAULT_FILTER} from '../const';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export const useGenresList = (films: Film[]) => {
  const setGenres = new Set([DEFAULT_FILTER, ...films.map(({genre}) => genre)]);

  return [...setGenres];
};
