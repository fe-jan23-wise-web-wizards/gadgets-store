import styles from './SliderItem.module.scss';

type SliderItemProps = {
  bannerPath: string,
};

export const SliderItem= ({ bannerPath }: SliderItemProps) => {
  return (
    <div
      className={styles.slider_item}
      style={{ 
        backgroundImage: `url(${bannerPath})`, 
      }}
    ></div>
  );
};