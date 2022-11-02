import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainPage from '../../pages/main-page/main-page';
import FilmPage from '../../components/film-page/film-page';
import SignIn from '../../components/sign-in-screen/sign-in-screen';
import ToWatchList from '../../components/to-watch-list/to-watch-list';
import AddReview from '../../components/add-review/add-review';
import Player from '../../components/player/player';
import PrivateRoute from '../private-route/private-route';
import PageNotFound from '../../components/page-not-found/page-not-found';
import {Films} from '../../types/types';
import {Reviews} from '../../types/types';

type AppMainPageProps = {
  toWatchCount: number;
  title: string;
  genre: string;
  year: number;
  src: string;
  titleCard: string;
  films: Films;
  reviews: Reviews;
}

function App(props: AppMainPageProps): JSX.Element {
  const {toWatchCount, title, genre, year, src, titleCard, films, reviews} = props;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage toWatchCount={toWatchCount} title={title} genre={genre} year={year} src={src} titleCard={titleCard} films={films} />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignIn />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <ToWatchList />
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Film}`}
          element={<FilmPage films={films} toWatchCount={toWatchCount} />}
        />
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <AddReview reviews={reviews}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Player}
          element={<Player />}
        />
        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
