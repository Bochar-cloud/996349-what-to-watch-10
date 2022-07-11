import MainScreen from '../../pages/main/main';

type AppScreenProps = {
  numbersMovies: number,
  nameMovie: string,
  genreMovie: string,
  reliseMovie: Date,
  promoMovie: string,
}

function App (props:AppScreenProps): JSX.Element {
  const {
    numbersMovies,
    nameMovie,
    genreMovie,
    reliseMovie,
    promoMovie,
  } = props;

  return (
    <MainScreen
      numbersMovies = {numbersMovies}
      nameMovie = {nameMovie}
      genreMovie = {genreMovie}
      reliseMovie = {reliseMovie}
      promoMovie = {promoMovie}
    />
  );
}

export default App;
