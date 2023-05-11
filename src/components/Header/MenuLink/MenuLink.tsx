import classNames from 'classnames';
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
      <NavLink
        to={`/${to}`}
        className={({ isActive }) =>
          classNames(styles.navbar_menu_desktop_link, {
            [styles.navbar_menu_desktop_link_active]: isActive,
          })
        }
      >
        {content}
      </NavLink>
    </li>
  );
};
