import { Link } from 'react-router-dom';

import styles from './BackButton.module.scss';

interface BackButtonProps {
  category: string;
}

export const BackButton = ({ category }: BackButtonProps) => {
  return (
    <Link
      className={styles.back_button}
      to={`/${category.toLowerCase()}`}
    >
      <div className={styles.back_button_icon}></div>
      Back
    </Link>
  );
};