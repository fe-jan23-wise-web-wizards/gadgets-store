import classNames from 'classnames';

import { IconLink } from '@components/Header/IconLink';
import { NavBarList } from '@components/Header/NavBarList';
import { Logo } from '@components/Logo';

import accountIcon from '@assets/icons/account-icon.svg';
import iconCart from '@assets/icons/icon-cart.svg';
import IconClose from '@assets/icons/icon-close.svg';
import iconFavorites from '@assets/icons/like-icon.svg';

import { useAuth } from '@clerk/clerk-react';
import styles from '@components/BurgerMenu/BurgerMenu.module.scss';
import { SignInButton } from '@components/SignInButton';

interface Props {
  isMenuOpen: boolean;
  onMenuClose: () => void;
  favoritesCount: number;
  cartCount: number;
}

export const BurgerMenu = ({
  isMenuOpen,
  onMenuClose,
  favoritesCount,
  cartCount,
}: Props) => {
  const { isSignedIn } = useAuth();

  return (
    <nav
      className={classNames([styles.BurgerMenu], {
        [styles.BurgerMenu__opened]: isMenuOpen,
      })}
    >
      <div className={styles.BurgerMenu__header}>
        <Logo position="header" clickFunk={onMenuClose} />

        <button
          className={styles.BurgerMenu__closeButton}
          type="button"
          aria-label="close"
          onClick={onMenuClose}
        >
          <img src={IconClose} alt="Burger menu" />
        </button>
      </div>

      <div className={styles.BurgerMenu__main}>
        <NavBarList
          classNameList={styles.BurgerMenu__navlist}
          classNameItem={styles.BurgerMenu__navitem}
          classNameLink={styles.BurgerMenu__navlink}
          classNameActiveLink={styles.BurgerMenu__navlink__active}
          onClickInteractive={onMenuClose}
        />

        {!isSignedIn && <SignInButton />}
      </div>

      <div className={styles.BurgerMenu__footer}>
        {isSignedIn && (
          <IconLink
            to={'orders'}
            src={accountIcon}
            alt={'IconLink-orders'}
            count={0}
            clickFunc={onMenuClose}
          />
        )}

        <IconLink
          to={'favorites'}
          src={iconFavorites}
          alt={'IconLink-favorites'}
          isBurger={true}
          clickFunc={onMenuClose}
          count={favoritesCount}
        />

        <IconLink
          to={'cart'}
          src={iconCart}
          alt={'IconLink-cart'}
          isBurger={true}
          clickFunc={onMenuClose}
          count={cartCount}
        />
      </div>
    </nav>
  );
};
