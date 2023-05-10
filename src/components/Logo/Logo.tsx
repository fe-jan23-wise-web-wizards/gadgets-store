import logo from '@/assets/icons/logo.svg';
import * as classNames from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Logo.module.scss';

interface Props {
  position?: 'header' | 'footer';
}

export const Logo: FC<Props> = ({ position }) => {
  return (
    <NavLink to={'home'} className={styles.logo}>
      <img
        src={logo}
        alt="Logo"
        className={classNames({
          [styles.logo]: true,
          [styles.logo_header]: position === 'header',
          [styles.logo_footer]: position === 'footer',
        })}
      />
    </NavLink>
  );
};
