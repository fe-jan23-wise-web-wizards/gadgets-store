import styles from './ProductCapacities.module.scss';
import classNames from 'classnames';

interface ProductCapacitiesProps {
  currentCapacity: string;
  capacities: string[];
  onCapacityChange: (newCapacity: string) => void;
}

export const ProductCapacities = ({ currentCapacity, capacities, onCapacityChange }: ProductCapacitiesProps) => {
  return (
    <div className={styles.capacities}>
      <h3 className={styles.capacities_header}>
        {capacities[0].includes('mm') ? ('Select size') : ('Select capacity')}
      </h3>

      <div className={styles.capacities_options}>
        {capacities.map(capacity => {
          return (
            <button
              className={classNames(
                styles.capacities_button,
                {[styles.capacities_button__active]: capacity === currentCapacity},
              )}
              key={capacity}
              onClick={() => onCapacityChange(capacity)}
            >
              {capacity}
            </button>
          );
        })}
      </div>
    </div>
  );
};