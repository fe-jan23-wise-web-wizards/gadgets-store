import backToTop from '@assets/icons/icon-backToTop.svg';
import styles from '../Footer.module.scss';

export const BackToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button className={styles.footer_nav} onClick={handleScrollToTop}>
      <p className={styles.footer_nav_text}>Back to top</p>

      <div className={styles.footer_nav_icon_container}>
        <img
          className={styles.footer_nav_icon}
          src={backToTop}
          alt="BackToTop"
        />
      </div>
    </button>
  );
};
