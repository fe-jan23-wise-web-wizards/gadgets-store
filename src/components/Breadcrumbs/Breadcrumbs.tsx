import { Fragment, memo } from 'react';
import styles from './Breadcrumbs.module.scss';
import { Link, useLocation } from 'react-router-dom';

export const Breadcrumbs = memo(() => {
  const location = useLocation();

  let currentLink = '';

  const crumbs = location.pathname
    .split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
      const preparedCrumb = crumb
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      currentLink += `/${crumb}`;

      return (
        <Fragment key={crumb}>
          <div className={styles.breadcrumbs_arrow_icon}></div>

          <Link
            className={styles.breadcrumbs_link}
            to={currentLink}
          >
            {preparedCrumb}
          </Link>
        </Fragment>
      );
    });

  return (
    <div className={styles.breadcrumbs}>
      <Link
        to="/"
        className={styles.breadcrumbs_link}
      >
        <div className={styles.breadcrumbs_home_icon}></div>
      </Link>

      <>{crumbs}</>
    </div>
  );
});