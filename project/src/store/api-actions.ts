import {AxiosError, AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {Film} from '../types/film';
import {Review, ReviewData, ReviewDataRequest} from '../types/review';
import {redirectToRoute, setError} from './action';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, TIMEOUT, AppRoute} from '../const';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {store} from './';

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT,
    );
  },
);

export const fetchFilmsAction = createAsyncThunk<Film[], undefined, {
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Film[]>(APIRoute.Films);
    return data;
  },
);

export const fetchFilmDetailAction = createAsyncThunk<Film, string, {
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilmDetail',
  async (filmId, {dispatch, extra: api}) => {
    const {data} = await api.get<Film>(`${APIRoute.Films}/${filmId}`);
    return data;
  },
);

export const fetchPromoFilmAction = createAsyncThunk<Film, undefined, {
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchPromoFilm',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Film>(APIRoute.Promo);
    return data;
  },
);

export const fetchSimularFilmsAction = createAsyncThunk<Film[], string, {
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchSimularFilms',
  async (filmId, {dispatch, extra: api}) => {
    const {data} = await api.get<Film[]>(`${APIRoute.Films}/${filmId}/similar`);
    return data;
  }
);

export const fetchFilmCommentsAction = createAsyncThunk<Review[], string, {
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilmComments',
  async (filmId, {dispatch, extra: api}) => {
    const {data} = await api.get<Review[]>(`/comments/${filmId}`);
    return data;
  }
);

export const addCommentAction = createAsyncThunk<void, ReviewDataRequest, {
  state: State,
  extra: AxiosInstance
}>(
  'data/addComment',
  async ({filmId, comment, rating}, {dispatch, extra: api}) => {
    await api.post<ReviewData>(`/comments/${filmId}`, {comment, rating});
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    await api.get(APIRoute.Login);
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api, rejectWithValue}) => {
    try {
      const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      dispatch(redirectToRoute(AppRoute.Main));
    } catch (err) {
      const error = err as AxiosError<{ error: string }>;
      return rejectWithValue(error.response?.data.error);
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);
