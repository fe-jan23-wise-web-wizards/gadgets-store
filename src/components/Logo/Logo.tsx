import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import logo from '@assets/icons/logo.svg';

import styles from './Logo.module.scss';

interface Props {
  position?: 'header' | 'footer';
  clickFunk?: () => void;
}

export const Logo = ({ position, clickFunk }: Props) => {
  return (
    <NavLink to={'home'} className={styles.logo} onClick={clickFunk}>
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
