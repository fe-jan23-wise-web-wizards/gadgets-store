import { FC } from 'react';

import cart from '@/assets/icons/icon-cart.svg';
import menu from '@/assets/icons/icon-menu.svg';
import favorites from '@/assets/icons/like-icon.svg';
import { IconLink } from '@/components/Header/IconLink/IconLink';
import { MenuLink } from '@/components/Header/MenuLink/MenuLink';
import { Logo } from '@/components/Logo/Logo';
import styles from './Header.module.scss';

export const Header: FC = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.navbar_container}>
          <Logo />

          <div className={styles.navbar_menu}>
            <div className={styles.navbar_menu_mobile}>
              <IconLink to={''} src={menu} alt={'Icon-menu'} />
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
                  src={favorites}
                  alt={'IconLink-favorites'}
                />

                <IconLink to={'cart'} src={cart} alt={'IconLink-cart'} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
