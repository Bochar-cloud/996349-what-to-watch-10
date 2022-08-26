import {store} from '../store/index';
import {AuthorizationStatus} from '../const';
import {Film} from './film';
import {Review} from './review';
import {rootReducer} from '../store/root-reducer';

export type Reducer = ReturnType<typeof rootReducer>;

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcces = {
  authorizationStatus: AuthorizationStatus
};

export type DataProcces = {
  films: Film[];
  isDataLoaded: boolean,
  filmDetail: Film | null;
  simularFilms: Film[];
  filmComments: Review[];
  activeGenre: string;
  filmsCount: number;
  error: string | null;
  genresFilms: Film[];
  isFormDisabled: boolean;
  favoritesCount: number;
  promoFilm: Film | null;
};

// export type CommonProcces = {
//   films: Film[];

// };
