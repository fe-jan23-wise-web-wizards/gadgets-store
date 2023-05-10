import backToTop from '@/assets/icons/icon-backToTop.svg';
import { Logo } from '@/components/Logo/Logo';
import mainLayoutStyles from '@/layouts/MainLayout/MainLayout.module.scss';
import * as classNames from 'classnames';
import { FC, useState } from 'react';
import styles from './Footer.module.scss';

export const Footer: FC = () => {
  const [isBTTHovered, setIsBTTHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsBTTHovered(true);
  };

  const handleMouseLeave = () => {
    setIsBTTHovered(false);
  };

  return (
    <footer className={styles.footer}>
      <div className={mainLayoutStyles.container}>
        <div className={styles.footer_container}>
          <div className={styles.footer_logo}>
            <Logo position={'footer'} />
          </div>

          <ul className={styles.footer_links_list}>
            <li className={styles.footer_links_item}>
              <a
                href="https://github.com/fe-jan23-wise-web-wizards"
                target="_blank"
                rel="noreferrer"
                className={styles.footer_links_list_link}
              >
                GitHub
              </a>
            </li>

            <li className={styles.footer_links_item}>
              <a
                href="https://github.com/fe-jan23-wise-web-wizards"
                target="_blank"
                rel="noreferrer"
                className={styles.footer_links_list_link}
              >
                Contacts
              </a>
            </li>

            <li className={styles.footer_links_list_item}>
              <a
                href="https://github.com/fe-jan23-wise-web-wizards"
                target="_blank"
                rel="noreferrer"
                className={styles.footer_links_list_link}
              >
                Rights
              </a>
            </li>
          </ul>

          <a
            className={styles.footer_nav}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <p className={styles.footer_nav_text}>Back to top</p>

            <div
              className={classNames(styles.footer_nav_icon_container, {
                [styles.footer_nav_icon_container_active]: isBTTHovered,
              })}
            >
              <img
                className={styles.footer_nav_icon}
                src={backToTop}
                alt="BackToTop"
              />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};
