export const DEFAULT_FILTER = 'All genres';

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

export enum DateFormats {
  Review = 'MMMM D, YYYY',
  DateTime = 'YYYY-MM-D',
}
