import { NavLink, useLocation } from 'react-router-dom';
import styles from './ProductColors.module.scss';
import classNames from 'classnames';

interface ProductColorsProps {
  colors: string[];
}

export const ProductColors = ({ colors }: ProductColorsProps) => {
  const { pathname } = useLocation();

  const updateProductLink = (newColor: string) => {
    const colorRegex = /-(\w+)$/;
    const colorMatch = pathname.match(colorRegex);
  
    if (!colorMatch) {
      return;
    }
  
    const updatedColor = `-${newColor}`;
  
    return pathname.replace(colorRegex, updatedColor);
  };

  const generateId = () => {
    const min = 100000;
    const max = 999999;
    const id = Math.floor(Math.random() * (max - min + 1)) + min;

    return id;
  };

  return (
    <>
      <div className={styles.colors}>
        <div className={styles.colors_header}>
          <p>Available colors</p>
          <p>ID: {generateId()}</p> 
        </div>
  
        <div className={styles.colors_options}>
          {colors.map(color => {
            const updatedLink = updateProductLink(color);

            return (
              <NavLink
                key={color}
                className={
                ({ isActive }) => classNames(
                  styles.colors_circle,
                  {
                    [styles.colors_circle__active]: isActive,
                    [styles[`colors_circle__${color}`]]: true,
                  },
                )}
                to={`${updatedLink}`}
              >
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
};