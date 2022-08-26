import classNames from 'classnames';
import {Link} from 'react-router-dom';

type logoProps = {
  isLight?: boolean;
};

export default function Logo ({isLight}: logoProps):JSX.Element {
  const logoClasses = classNames({'logo__link--light': isLight});

  return (
    <div className="logo">
      <Link to="/" className={`logo__link ${logoClasses}`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}
