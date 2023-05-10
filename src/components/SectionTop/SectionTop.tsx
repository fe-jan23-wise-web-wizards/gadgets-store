import styles from './SectionTop.module.scss';

interface SectionTopProps {
  title: string;
  hasSliderButtons?: boolean;
}

export const SectionTop = ({ title, hasSliderButtons }: SectionTopProps) => {
  return (
    <div className={styles.section_top}>
      <h2 className={styles.section_top_title}>
        {title}
      </h2>

      {hasSliderButtons && (
        <div className={styles.section_top_buttons}>
          buttons
        </div>
      )}
    </div>
  );
};
