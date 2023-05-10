import styles from '@/components/Header/Header.module.scss';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  to: string;
  src: string;
  alt: string;
}

export const IconLink: FC<Props> = ({ to, src, alt }) => {
  return (
    <div className={styles.navbar_menu_desktop_right_item}>
      <Link to={`/${to}`} className={styles.navbar_menu_desktop_right_link}>
        <img
          src={src}
          alt={alt}
          className={styles.navbar_menu_desktop_right_icon}
        />
      </Link>
    </div>
  );
};
