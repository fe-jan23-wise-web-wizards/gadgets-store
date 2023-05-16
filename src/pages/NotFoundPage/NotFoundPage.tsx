import styles from './NotFoundPage.module.scss';
import firstImage from '../../assets/404_first.png';
import secondImage from '../../assets/404_second.png';
import thirdImage from '../../assets/404_third.png';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div className={styles.notfound_page}>
      <h3 className={styles.title}>Oops, this page doesn't exist...</h3>

      <div className={styles.main_images_container}>
        <div className={styles.images_container}>
          <div className={styles.images}>
            <img src={firstImage} alt=""  className={styles.image_first}/>
            <img src={secondImage} alt="" className={styles.image_second}/>
            <img src={thirdImage} alt="" className={styles.image_third}/>
          </div>
        </div>
      </div>

      <Link
        to="/"
        className={styles.home_button}
      >
        Take me home!
      </Link>
    </div>
  );
};
