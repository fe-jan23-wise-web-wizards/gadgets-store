import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.scss';

import errorImage from '@/assets/error-image.svg';

export const NotFoundPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.page_message}>
        <p className={styles.page_message_code}>
          404
        </p>

        <p className={styles.page_message_status}>
          Page not found
        </p>

        <p className={styles.page_message_description}>
          You've clicked on a bad link or entered an invalid URL
        </p>


        <Link className={styles.page_message_homelink} to='/'>
          Go back to home page
        </Link>

      </div>

      <img
        className={styles.page_image}
        src={errorImage}
        alt="Error 404 image"
      />
    </div>
  );
};
