import classNames from 'classnames';
import { FC } from 'react';

import { IconLink } from '../Header/IconLink';
import { NavBarList } from '../Header/NavBarList';
import { Logo } from '../Logo';

import iconCart from '@assets/icons/icon-cart.svg';
import IconClose from '@assets/icons/icon-close.svg';
import iconFavorites from '@assets/icons/like-icon.svg';
import styles from '@components/BurgerMenu/BurgerMenu.module.scss';

interface Props {
  isMenuOpen: boolean;
  onMenuClose: () => void;
  favoritesCount: number;
  cartCount: number;
}

export const BurgerMenu: FC<Props> = ({
  isMenuOpen,
  onMenuClose,
  favoritesCount,
  cartCount,
}) => {
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
      </div>

      <div className={styles.BurgerMenu__footer}>
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
