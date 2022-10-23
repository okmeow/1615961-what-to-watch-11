import MainPage from '../../pages/main-page/main-page';

type AppMainPageProps = {
  toWatchCount: number;
}

function App({toWatchCount}: AppMainPageProps): JSX.Element {
  return (
    <MainPage toWatchCount={toWatchCount} />
  );
}

export default App;
