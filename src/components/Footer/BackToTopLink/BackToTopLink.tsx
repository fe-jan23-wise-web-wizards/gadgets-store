import backToTop from '@/assets/icons/icon-backToTop.svg';
import styles from '@/components/Footer/Footer.module.scss';
import * as classNames from 'classnames';
import { FC, useState } from 'react';

export const BackToTopLink: FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <a
      className={styles.footer_nav}
      onClick={handleScrollToTop}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p className={styles.footer_nav_text}>Back to top</p>

      <div
        className={classNames(styles.footer_nav_icon_container, {
          [styles.footer_nav_icon_container_active]: isHovered,
        })}
      >
        <img
          className={styles.footer_nav_icon}
          src={backToTop}
          alt="BackToTop"
        />
      </div>
    </a>
  );
};
