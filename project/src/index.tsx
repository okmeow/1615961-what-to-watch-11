import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Setting = {
  ToWatchCount: 9,
} as const;

const PreviewFilm = {
  Title: 'The Grand Budapest Hotel',
  Genre: 'Drama',
  Year: 2014,
  Src: 'bg-the-grand-budapest-hotel',
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      toWatchCount = {Setting.ToWatchCount}
      title = {PreviewFilm.Title}
      genre = {PreviewFilm.Genre}
      year = {PreviewFilm.Year}
      src = {PreviewFilm.Src}
    />
  </React.StrictMode>,
);
