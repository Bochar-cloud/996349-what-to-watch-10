import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import FilmScreen from '../../pages/film-screen/film-screen';
import ReviewScreen from '../../pages/review-screen/review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';

export type AppScreenProps = {
  nameMovie: string,
  genreMovie: string,
  reliseMovie: Date,
  promoMovie: string,
}

export default function App (props:AppScreenProps): JSX.Element {
  const {
    nameMovie,
    genreMovie,
    reliseMovie,
    promoMovie,
  } = props;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainScreen
              nameMovie = {nameMovie}
              genreMovie = {genreMovie}
              reliseMovie = {reliseMovie}
              promoMovie = {promoMovie}
            />
          }
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyListScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<FilmScreen />}
        />
        <Route
          path={AppRoute.Review}
          element={<ReviewScreen />}
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerScreen />}
        />
        <Route
          path='*'
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}
