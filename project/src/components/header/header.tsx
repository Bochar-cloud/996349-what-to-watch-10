import React from 'react';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';

function HeaderComponent (): JSX.Element {
  return (
    <>
      <div className="film-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <Logo/>

        <UserBlock />
      </header>
    </>
  );
}

export default React.memo(HeaderComponent);
