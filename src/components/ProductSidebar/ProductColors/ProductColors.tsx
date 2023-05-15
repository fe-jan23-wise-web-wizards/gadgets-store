import styles from './ProductColors.module.scss';
import classNames from 'classnames';

interface ProductColorsProps {
  currentColor: string;
  colors: string[];
  onColorChange: (newColor: string) => void;
}

export const ProductColors = ({ currentColor, colors, onColorChange }: ProductColorsProps) => {
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
            return (
              <button
                key={color}
                className={classNames(
                  styles.colors_circle,
                  {[styles[`colors_circle__active`]]: color === currentColor },
                  {[styles[`colors_circle__${color.split(' ').join('')}`]]: true },
                )}
                onClick={() => onColorChange(color)}
              >
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};