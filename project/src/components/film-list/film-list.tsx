import FilmCard from '../film-card/film-card';
import {Films} from '../../types/types';

type FilmsListProps = {
  films: Films;
}

function FilmsList({films} : FilmsListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {FilmCard({films})}
      {FilmCard({films})}
      {FilmCard({films})}
      {FilmCard({films})}
      {FilmCard({films})}
      {FilmCard({films})}
      {FilmCard({films})}
      {FilmCard({films})}
    </div>
  );
}

export default FilmsList;
