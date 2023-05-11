import iconCart from '@assets/icons/icon-cart.svg';
import iconMenu from '@assets/icons/icon-menu.svg';
import iconFavorites from '@assets/icons/like-icon.svg';
import { Logo } from '@components/Logo';
import styles from './Header.module.scss';
import { IconLink } from './IconLink';
import { NavBarList } from './NavBarList';

export const Header = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_container}>
        <div className={styles.navbar_logo}>
          <Logo position={'header'} />
        </div>

        <div className={styles.navbar_menu}>
          <div className={styles.navbar_menu_mobile}>
            <IconLink
              to={''}
              src={iconMenu}
              alt={'Icon-menu'}
              classNameIconLinkBlock={styles.navbar_menu_desktop_right_item}
              classNameIconLink={styles.navbar_menu_desktop_right_link}
            />
          </div>

          <div className={styles.navbar_menu_desktop}>
            <div className={styles.navbar_menu_desktop_left}>
              <NavBarList
                classNameList={styles.navbar_menu_desktop_list}
                classNameItem={styles.navbar_menu_desktop_item}
                classNameLink={styles.navbar_menu_desktop_link}
              />
            </div>

            <div className={styles.navbar_menu_desktop_right}>
              <IconLink
                to={'favorites'}
                src={iconFavorites}
                alt={'IconLink-favorites'}
                classNameIconLinkBlock={styles.navbar_menu_desktop_right_item}
                classNameIconLink={styles.navbar_menu_desktop_right_link}
              />

              <IconLink
                to={'cart'}
                src={iconCart}
                alt={'IconLink-cart'}
                classNameIconLinkBlock={styles.navbar_menu_desktop_right_item}
                classNameIconLink={styles.navbar_menu_desktop_right_link}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
