import React from 'react';
import { Film } from '../../types/film';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';

type HeaderProps = {
  film?: Film;
};

function Header ({film}: HeaderProps): JSX.Element {
  return (
    <>
      <div className="film-card__bg">
        <img src={film?.backgroundImage} alt={film?.name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <Logo/>

        <UserBlock />
      </header>
    </>
  );
}

export default React.memo(Header);
