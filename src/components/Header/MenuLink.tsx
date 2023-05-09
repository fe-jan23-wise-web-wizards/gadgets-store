import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

interface Props {
  to: string;
  content: string;
}

export const MenuLink: React.FC<Props> = ({ to, content }) => {
  return (
    <li className={styles.navbar__menu__desktop__item}>
      <NavLink to={to} className={styles.navbar__menu__desktop__link}>
        {content}
      </NavLink>
    </li>
  );
};
