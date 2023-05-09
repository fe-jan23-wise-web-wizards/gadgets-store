import { FC } from 'react';

import { IconLink } from '@/components/Header/IconLink/IconLink';
import { Logo } from '@/components/Header/Logo/Logo';
import { MenuLink } from '@/components/Header/MenuLink/MenuLink';
import styles from './Header.module.scss';

export const Header: FC = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.navbar_container}>
          <Logo />

          <div className={styles.navbar_menu}>
            <div className={styles.navbar_menu_mobile}>
              <IconLink
                to={''}
                src={'./src/assets/menu.svg'}
                alt={'Icon-menu'}
              />
            </div>

            <div className={styles.navbar_menu_desktop}>
              <div className={styles.navbar_menu_desktop_left}>
                <ul className={styles.navbar_menu_desktop_list}>
                  <MenuLink to={'home'} content={'Home'} />

                  <MenuLink to={'phones'} content={'Phones'} />

                  <MenuLink to={'tablets'} content={'Tablets'} />

                  <MenuLink to={'accessories'} content={'Accessories'} />
                </ul>
              </div>
              <div className={styles.navbar_menu_desktop_right}>
                <IconLink
                  to={'favorites'}
                  src={'./src/assets/Icon-favorites.svg'}
                  alt={'IconLink-favorites'}
                />

                <IconLink
                  to={'cart'}
                  src={'./src/assets/Icon-cart.svg'}
                  alt={'IconLink-cart'}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
