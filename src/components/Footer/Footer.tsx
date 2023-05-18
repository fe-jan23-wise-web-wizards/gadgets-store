import { Logo } from '@components/Logo';
import { BackToTopButton } from './BackToTopButton';
import { FooterLink } from './FooterLink';
import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';
import '@styles/blocks/container.scss';

export const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer_container}>
          <div className={styles.footer_logo}>
            <Logo position={'footer'} />
          </div>

          <ul className={styles.footer_links_list}>
            <FooterLink
              href={'https://github.com/fe-jan23-wise-web-wizards'}
              content={'GitHub'}
            />

            <li className={styles.footer_links_item}>
              <Link
                to={'contacts'}
                className={styles.footer_links_list_link}
                onClick={handleScrollToTop}
              >
                Contacts
              </ Link>
            </li>

            <FooterLink
              href={'https://github.com/fe-jan23-wise-web-wizards'}
              content={'Rights'}
            />
          </ul>

          <BackToTopButton />
        </div>
      </div>
    </footer>
  );
};
