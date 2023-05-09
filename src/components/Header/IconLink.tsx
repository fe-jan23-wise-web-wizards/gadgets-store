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
    <div className={styles.navbar__menu__desktop__right__item}>
      <Link to={to} className={styles.navbar__menu__desktop__right__link}>
        <img src={src} alt={alt} />
      </Link>
    </div>
  );
};
