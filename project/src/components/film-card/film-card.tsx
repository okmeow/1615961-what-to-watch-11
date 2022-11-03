import React from 'react';
import {Films} from '../../types/types';

type FilmCardProps = {
  films: Films;
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function FilmCard({films}: FilmCardProps): JSX.Element {

  const randomIndex = getRandomInt(7);

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={films[randomIndex].previewImage} alt={films[1].name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{films[randomIndex].name}</a>
      </h3>
    </article>
  );
}

export default FilmCard;
