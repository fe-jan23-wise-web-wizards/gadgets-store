import styles from '@/components/Header/Header.module.scss';
import * as classNames from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const Logo: FC = () => {
  return (
    <NavLink
      to={'home'}
      className={classNames(styles.navbar_logo, styles.navbar_link)}
    >
      <img src={'./src/assets/logo.svg'} alt="Logo" className={styles.logo} />
    </NavLink>
  );
};
