import { Logo } from '@/components/Logo';
import '@/styles/blocks/container.scss';
import { BackToTopButton } from './BackToTopButton';
import styles from './Footer.module.scss';
import { FooterLink } from './FooterLink';

export const Footer = () => {
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

            <FooterLink
              href={'https://github.com/fe-jan23-wise-web-wizards'}
              content={'Contacts'}
            />

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
