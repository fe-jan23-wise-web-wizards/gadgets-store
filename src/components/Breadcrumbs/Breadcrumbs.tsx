import { Fragment } from 'react';
import styles from './Breadcrumbs.module.scss';
import { Link, useLocation } from 'react-router-dom';

interface BreadcrumbsProps {
  newPath?: string;
}

export const Breadcrumbs = ({ newPath }: BreadcrumbsProps) => {
  const location = useLocation();

  let currentLink = '';

  const pathname = newPath || location.pathname;

  const crumbs = pathname 
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
};