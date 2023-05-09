import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Header.module.scss';

interface Props {
  to: string;
  content: string;
}

export const MenuLink: React.FC<Props> = ({ to, content }) => {
  return (
    <li className={styles.navbar_menu_desktop_item}>
      <NavLink to={`/${to}`} className={styles.navbar_menu_desktop_link}>
        {content}
      </NavLink>
    </li>
  );
};
