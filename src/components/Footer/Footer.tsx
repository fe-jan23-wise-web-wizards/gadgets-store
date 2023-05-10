import { BackToTopLink } from '@/components/Footer/BackToTopLink/BackToTopLink';
import { FooterLink } from '@/components/Footer/FooterLink/FooterLink';
import { Logo } from '@/components/Logo/Logo';
import mainLayoutStyles from '@/layouts/MainLayout/MainLayout.module.scss';
import { FC } from 'react';
import styles from './Footer.module.scss';

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={mainLayoutStyles.container}>
        <div className={styles.footer_container}>
          <div className={styles.footer_logo}>
            <Logo position={'footer'} />
          </div>

          <ul className={styles.footer_links_list}>
            <FooterLink
              href={'https://github.com/fe-jan23-wise-web-wizards'}
              content={'GitHub'}
            />

            <FooterLink
              href={'https://github.com/fe-jan23-wise-web-wizards'}
              content={'Contacts'}
            />

            <FooterLink
              href={'https://github.com/fe-jan23-wise-web-wizards'}
              content={'Rights'}
            />
          </ul>

          <BackToTopLink />
        </div>
      </div>
    </footer>
  );
};
