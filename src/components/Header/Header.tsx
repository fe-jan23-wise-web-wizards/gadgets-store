import { FC, useEffect, useState } from 'react';

import { Logo } from '@components/Logo';
import { BurgerMenu } from '../BurgerMenu';
import { IconLink } from './IconLink';
import { NavBarList } from './NavBarList';

import iconCart from '@assets/icons/icon-cart.svg';
import iconMenu from '@assets/icons/icon-menu.svg';
import iconFavorites from '@assets/icons/like-icon.svg';

import styles from './Header.module.scss';

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleOpenBurgerMenu = () => {
    setIsOpen(currPosition => !currPosition);
  };

  return (
    <>
      <BurgerMenu isMenuOpen={isOpen} onMenuClose={handleOpenBurgerMenu} />
      <header className={styles.navbar}>
        <nav className={styles.navbar_container}>
          <div className={styles.navbar_logo}>
            <Logo position={'header'} />
          </div>

          <div className={styles.navbar_menu}>
            <div className={styles.navbar_menu_mobile}>
              <button
                className={styles.navbar_burgerMenu_button}
                type="button"
                onClick={handleOpenBurgerMenu}
              >
                <img src={iconMenu} alt="Burger menu" />
              </button>
            </div>

            <div className={styles.navbar_menu_desktop}>
              <div className={styles.navbar_menu_desktop_left}>
                <NavBarList
                  classNameList={styles.navbar_menu_desktop_list}
                  classNameItem={styles.navbar_menu_desktop_item}
                  classNameLink={styles.navbar_menu_desktop_link}
                  classNameActiveLink={styles.navbar_menu_desktop_link_active}
                />
              </div>

              <div className={styles.navbar_menu_desktop_right}>
                <IconLink
                  to={'favorites'}
                  src={iconFavorites}
                  alt={'IconLink-favorites'}
                  classNameIconLinkBlock={styles.navbar_menu_desktop_right_item}
                  classNameIconLink={styles.navbar_menu_desktop_right_link}
                  classNameIcon={styles.navbar_menu_desktop_right_icon}
                />

                <IconLink
                  to={'cart'}
                  src={iconCart}
                  alt={'IconLink-cart'}
                  classNameIconLinkBlock={styles.navbar_menu_desktop_right_item}
                  classNameIconLink={styles.navbar_menu_desktop_right_link}
                  classNameIcon={styles.navbar_menu_desktop_right_icon}
                />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
