import styles from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loader_body}>
        <div className={styles.loader_dot}></div>
        <div className={styles.loader_dot}></div>
        <div className={styles.loader_dot}></div>
        <div className={styles.loader_dot}></div>
      </div>
    </div>
  );
};