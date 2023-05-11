import { Link } from 'react-router-dom';
import styles from '../Header.module.scss';

interface Props {
  to: string;
  src: string;
  alt: string;
}

export const IconLink = ({ to, src, alt }: Props) => {
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
