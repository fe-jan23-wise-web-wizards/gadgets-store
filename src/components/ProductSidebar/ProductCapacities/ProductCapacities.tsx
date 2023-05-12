import { NavLink, useLocation } from 'react-router-dom';

import styles from './ProductCapacities.module.scss';
import classNames from 'classnames';

interface ProductCapacitiesProps {
  capacities: string[];
}

export const ProductCapacities = ({ capacities }: ProductCapacitiesProps) => {
  const { pathname } = useLocation();

  const updateProductLink = (newCapacity: string) => {
    const capacityRegex = /(\d+)gb/;
    const capacityMatch = pathname.match(capacityRegex);

    if (!capacityMatch) {
      return;
    }
    
    const updatedCapacity = `${newCapacity}gb`;

    return pathname.replace(capacityRegex, updatedCapacity);
  };
  
  return (
    <div className={styles.capacities}>
      <h3 className={styles.capacities_header}>
        Select capacity
      </h3>

      <div className={styles.capacities_options}>
        {capacities.map(capacity => {
          const capacityNumber = capacity.split('GB').join('');
          const updatedLink = updateProductLink(capacityNumber);
        
          return (
            <NavLink
              className={
              ({ isActive }) => classNames(
                styles.capacities_button,
                {
                  [styles.capacities_button__active]: isActive, 
                },
              )
            }
              key={capacity}
              to={`${updatedLink}`}
            >
              {`${capacityNumber} GB`}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};