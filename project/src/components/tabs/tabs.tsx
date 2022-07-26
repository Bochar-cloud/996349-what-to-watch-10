import {useState, useEffect} from 'react';
import {useSearchParams, Link} from 'react-router-dom';
import classNames from 'classnames';
import TabOverview from '../tab-overview/tab-overview';
import TabDetail from '../tab-detail/tab-detail';
import TabReview from '../tab-reviews/tab-reviews';
import {Film} from '../../types/film';
import {Review} from '../../types/review';

type TabsProps = {
  film: Film;
  reviews: Review[];
};

enum TabsFilmDetail {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews'
}

export default function Tabs ({film, reviews}: TabsProps): JSX.Element {
  const tabsLinks = ['Overview', 'Details', 'Reviews'];
  const [activeTab, setActiveTab] = useState(tabsLinks[0]);
  const [searchParams] = useSearchParams({});

  const currentSearchParam = searchParams.get('tab');

  useEffect(() => {
    if (currentSearchParam) {
      setActiveTab(currentSearchParam);
    }
  }, [currentSearchParam]);

  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {tabsLinks.map((link) =>{
            const activeClasses = classNames({'film-nav__item--active' : (currentSearchParam || activeTab) === link});

            return (
              <li className={`film-nav__item ${activeClasses}`} key={link}>
                <Link to={`?tab=${link}`} className='film-nav__link'>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {(currentSearchParam || activeTab) === TabsFilmDetail.Overview ? <TabOverview film={film} /> : ''}
      {(currentSearchParam || activeTab) === TabsFilmDetail.Details ? <TabDetail film={film} /> : ''}
      {(currentSearchParam || activeTab) === TabsFilmDetail.Reviews ? <TabReview reviews={reviews} /> : ''}
    </>
  );
}
