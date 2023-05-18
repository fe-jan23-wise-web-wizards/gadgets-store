import { Fragment } from 'react';
import { Link,useLocation } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';

interface BreadcrumbsProps {
  lastCrumb?: string;
}

export const Breadcrumbs = ({ lastCrumb }: BreadcrumbsProps) => {
  const location = useLocation();

  let currentLink = '';

  const pathname = location.pathname;

  const crumbs = pathname
    .split('/')
    .filter(crumb => crumb !== '')
    .map((crumb, idx, arr) => {
      const preparedCrumb = crumb
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      currentLink += `/${crumb}`;

      return (
        <Fragment key={crumb}>
          <div className={styles.breadcrumbs_arrow_icon}></div>

          <Link className={styles.breadcrumbs_link} to={currentLink}>
            {idx === arr.length - 1 && lastCrumb ? lastCrumb : preparedCrumb}
          </Link>
        </Fragment>
      );
    });

  return (
    <div className={styles.breadcrumbs}>
      <Link to="/" className={styles.breadcrumbs_link}>
        <div className={styles.breadcrumbs_home_icon}></div>
      </Link>

      <>{crumbs}</>
    </div>
  );
};