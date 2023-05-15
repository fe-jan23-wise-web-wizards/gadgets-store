import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from './IconLink.module.scss';

interface Props {
  to: string;
  src: string;
  alt: string;
  isBurger?: boolean;
  clickFunc?: () => void;
  count: number;
}

export const IconLink = ({
  to,
  src,
  alt,
  isBurger,
  clickFunc,
  count,
}: Props) => (
  <NavLink
    to={`/${to}`}
    className={({ isActive }) =>
      classNames(
        styles.link,
        isBurger && styles.burger_link,
        isActive && styles.link_active,
        isActive && isBurger && styles.burger_link_active,
      )
    }
    onClick={clickFunc}
  >
    {count > 0 && (
      <span
        className={classNames(
          styles.indicator,
          isBurger && styles.burger_indicator,
        )}
      >
        {100}
      </span>
    )}
    <img
      src={src}
      alt={alt}
      className={classNames(isBurger && styles.burger_icon)}
    />
  </NavLink>
);
