import {MouseEvent, useState} from 'react';
import classNames from 'classnames';
import TabItem from '../tab-item/tab-item';
import {Film} from '../../types/film';
import {Review} from '../../types/review';

type TabsProps = {
  film: Film;
  reviews: Review[];
};

export default function Tabs ({film, reviews}: TabsProps): JSX.Element {
  const tabsLinks = ['Overview', 'Details', 'Reviews'];
  const [activeTab, setActiveTab] = useState(tabsLinks[0]);

  const handleLinkClick = (evt: MouseEvent) => {
    evt.preventDefault();

    const currentTab = (evt.target as HTMLLinkElement).getAttribute('data-current-tab');

    if (currentTab !== null) {
      setActiveTab(currentTab);
    }
  };

  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {tabsLinks.map((link) =>{
            const activeClasses = classNames({'film-nav__item--active' : activeTab === link});

            return (
              <li className={`film-nav__item ${activeClasses}`} key={link}>
                <a href="/" className='film-nav__link' data-current-tab={link} onClick={handleLinkClick}>{link}</a>
              </li>
            );
          })}
        </ul>
      </nav>

      <TabItem activeTab={activeTab} film={film} reviews={reviews}/>
    </>
  );
}
