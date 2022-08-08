export const DEFAULT_FILTER = 'All genres';

export const FILMS_COUNT_STEP = 8;

export const TIMEOUT_SHOW_ERROR = 5000;

export enum AppRoute {
  Main = '/',
  Login = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  Review = '/films/:id/review',
  Player = '/player/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
}

export enum DateFormats {
  Review = 'MMMM D, YYYY',
  DateTime = 'YYYY-MM-D',
}
