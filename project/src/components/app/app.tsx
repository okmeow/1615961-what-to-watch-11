import MainPage from '../../pages/main-page/main-page';

type AppMainPageProps = {
  toWatchCount: number;
  title: string;
  genre: string;
  year: number;
  src: string;
}

function App(props: AppMainPageProps): JSX.Element {
  const {toWatchCount, title, genre, year, src} = props;

  return (
    <MainPage
      toWatchCount={toWatchCount}
      title={title}
      genre={genre}
      year={year}
      src={src}
    />
  );
}

export default App;
