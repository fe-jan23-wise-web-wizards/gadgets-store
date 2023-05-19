import styles from './SliderItem.module.scss';
import { Link } from 'react-router-dom';

type SliderItemProps = {
  bannerPath: string,
  targetPath: string,
};

export const SliderItem = ({ bannerPath, targetPath }: SliderItemProps) => {
  return (
    <Link to={targetPath} >
      <div
        className={styles.slider_item}
        style={{ 
          backgroundImage: `url(${bannerPath})`, 
        }}
      ></div>
    </Link>
  );
};
