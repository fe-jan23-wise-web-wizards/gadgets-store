import styles from './CategoryCard.module.scss';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  to: string;
  title: string;
  image: string;
  numberOfModels: number;
}

export const CategoryCard = ({
  to,
  image,
  title,
  numberOfModels,
}: CategoryCardProps) => {
  const countTitle = numberOfModels === 1
    ? 'model'
    : 'models';

  return (
    <div className={styles.card}>
      <div className={styles.card_link}>
        <Link to={`/${to}`}>
          <img
            className={styles.card_img}
            src={image}
            alt={`${to} category`}
          />
        </Link>
      </div>

      <Link className={styles.card_title} to={`/${to}`}>
        {title}
      </Link>

      <p className={styles.card_numberOfModels}>
        {`${numberOfModels} ${countTitle}`}
      </p>
    </div>
  );
};