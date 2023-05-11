import { Link } from 'react-router-dom';
import styles from '../Header.module.scss';

interface Props {
  to: string;
  src: string;
  alt: string;
  classNameIconLinkBlock: string;
  classNameIconLink: string;
}

export const IconLink = ({
  to,
  src,
  alt,
  classNameIconLinkBlock,
  classNameIconLink,
}: Props) => (
    <div className={classNameIconLinkBlock}>
      <Link to={`/${to}`} className={classNameIconLink}>
        <img
          src={src}
          alt={alt}
          className={styles.navbar_menu_desktop_right_icon}
        />
      </Link>
    </div>
  );
