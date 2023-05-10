import styles from './SliderItem.module.scss';

type Props = {
  bannerPath: string,
};

export const SliderItem: React.FC<Props> = ({ bannerPath }) => {
  return (
    <div
      className={styles.slider_item}
      style={{ 
        backgroundImage: `url(${bannerPath})`, 
      }}
    ></div>
  );
};