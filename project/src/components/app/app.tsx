import MainPage from '../../pages/main-page/main-page';

type AppMainPageProps = {
  toWatchCount: number;
  title: string;
  genre: string;
  year: number;
  src: string;
  titleCard: string;
}

function App(props: AppMainPageProps): JSX.Element {
  const {toWatchCount, title, genre, year, src, titleCard} = props;

  return (
    <MainPage
      toWatchCount={toWatchCount}
      title={title}
      genre={genre}
      year={year}
      src={src}
      titleCard={titleCard}
    />
  );
}

export default App;
