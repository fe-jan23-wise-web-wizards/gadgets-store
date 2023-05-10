import iconCart from '@/assets/icons/icon-cart.svg';
import iconMenu from '@/assets/icons/icon-menu.svg';
import iconFavorites from '@/assets/icons/like-icon.svg';
import { Logo } from '@/components/Logo';
import styles from './Header.module.scss';
import { IconLink } from './IconLink';
import { MenuLink } from './MenuLink';

export const Header = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_container}>
        <div className={styles.navbar_logo}>
          <Logo position={'header'} />
        </div>

        <div className={styles.navbar_menu}>
          <div className={styles.navbar_menu_mobile}>
            <IconLink to={''} src={iconMenu} alt={'Icon-menu'} />
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
                src={iconFavorites}
                alt={'IconLink-favorites'}
              />

              <IconLink to={'cart'} src={iconCart} alt={'IconLink-cart'} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
