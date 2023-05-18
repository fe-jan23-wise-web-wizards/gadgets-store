import { useEffect,useState } from 'react';

import { BurgerMenu } from '@components/BurgerMenu';
import { Logo } from '@components/Logo';
import { IconLink } from './IconLink';
import { NavBarList } from './NavBarList';

import accountIcon from '@assets/icons/account-icon.svg';
import iconCart from '@assets/icons/icon-cart.svg';
import iconMenu from '@assets/icons/icon-menu.svg';
import iconFavorites from '@assets/icons/like-icon.svg';

import { useLocalStorageContext } from '@/hooks/useLocalStorageContext';
import { useAuth } from '@clerk/clerk-react';
import { SignInButton } from '@components/SignInButton';
import styles from './Header.module.scss';

export const Header = () => {
  const { isSignedIn } = useAuth();
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const { favorites, cartItems } = useLocalStorageContext();

  useEffect(() => {
    if (isBurgerOpen) {
      document.body.classList.add('pageWithMenuOpen');
    } else {
      document.body.classList.remove('pageWithMenuOpen');
    }
  }, [isBurgerOpen]);

  const openBurger = () => {
    setIsBurgerOpen(true);
  };

  const closeBurger = () => {
    setIsBurgerOpen(false);
  };

  return (
    <>
      <BurgerMenu
        isMenuOpen={isBurgerOpen}
        onMenuClose={closeBurger}
        favoritesCount={favorites.length}
        cartCount={cartItems.length}
      />
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
                onClick={openBurger}
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

                {!isSignedIn && <SignInButton />}
              </div>

              <div className={styles.navbar_menu_desktop_right}>
                {isSignedIn && (
                  <IconLink
                    to={'orders'}
                    src={accountIcon}
                    alt={'IconLink-orders'}
                    count={favorites.length}
                    clickFunc={closeBurger}
                  />
                )}

                <IconLink
                  to={'favorites'}
                  src={iconFavorites}
                  alt={'IconLink-favorites'}
                  count={favorites.length}
                  clickFunc={closeBurger}
                />

                <IconLink
                  to={'cart'}
                  src={iconCart}
                  alt={'IconLink-cart'}
                  count={cartItems.length}
                  clickFunc={closeBurger}
                />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
