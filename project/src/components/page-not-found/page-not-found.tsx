import React from 'react';
import Footer from '../footer/footer';
import Logo from '../logo/logo';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function PageNotFound(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Page Not Found</h1>
      </header>

      <div className="sign-in user-page__content" style={{margin: '10px 45.5vw'}}>
        <Link to={AppRoute.Main} className="logo__link">
          <span className="logo__letter logo__letter--2">To Main Page</span>
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default PageNotFound;
