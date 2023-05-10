import logo from '@/assets/icons/logo.svg';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Logo.module.scss';

export const Logo: FC = () => {
  return (
    <NavLink to={'home'} className={styles.logo}>
      <img src={logo} alt="Logo" className={styles.logo} />
    </NavLink>
  );
};
