import MainScreen from '../../pages/main/main';

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
    <MainScreen
      nameMovie = {nameMovie}
      genreMovie = {genreMovie}
      reliseMovie = {reliseMovie}
      promoMovie = {promoMovie}
    />
  );
}
