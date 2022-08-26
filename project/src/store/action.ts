import {createAction} from '@reduxjs/toolkit';
import {AppRoute} from '../const';

export const redirectToRoute = createAction<AppRoute>('common/redirectToRoute');
export const setError = createAction<string | null>('setError');
