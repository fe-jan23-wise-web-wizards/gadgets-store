import classNames from 'classnames';
import styles from './ProductColors.module.scss';

interface ProductColorsProps {
  currentColor: string;
  colors: string[];
  onColorChange: (newColor: string) => void;
  productId: string;
}

export const ProductColors = ({
  currentColor,
  colors,
  onColorChange,
  productId,
}: ProductColorsProps) => {
  const generateId = () => {
    let sixDigitsId = 0;

    for (let i = 0; i < productId.length; i++) {
      sixDigitsId = (sixDigitsId + productId.charCodeAt(i)) * 31;
    }
    
    sixDigitsId = sixDigitsId % 1000000;
    return sixDigitsId;
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