import styles from '@/components/Header/Header.module.scss';
import * as classNames from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Logo: FC = () => {
  return (
    <Link
      to={'home'}
      className={classNames(styles.navbar__logo, styles.navbar__link)}
    >
      <img
        src="../../../src/assets/logo.svg"
        alt="Logo"
        className={styles.logo}
      />
    </Link>
  );
};
