import logo from '@assets/icons/logo.svg';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from './Logo.module.scss';

interface Props {
  position?: 'header' | 'footer';
}

export const Logo = ({ position }: Props) => {
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
