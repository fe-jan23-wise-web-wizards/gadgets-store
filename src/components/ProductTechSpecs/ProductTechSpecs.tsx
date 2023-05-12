import { Phone } from "@/types/Phone";

import styles from './ProductTechSpecs.module.scss';

interface ProductTechSpecsProps {
  product: Phone;
}

export const ProductTechSpecs = ({ product }: ProductTechSpecsProps) => {
  const {
    screen,
    resolution,
    processor,
    ram,
    capacity,
    camera,
    zoom,
    cell,
  } = product;

  const normalizedCells = cell.join(', ');

  const specs = {
    Screen: screen,
    Resolution: resolution,
    Processor: processor,
    RAM: ram,
    Capacity: capacity,
    Camera: camera,
    Zoom: zoom,
    Cell: normalizedCells,
  };

  return (
    <>
      <h2 className={styles.header}>
        Tech specs
      </h2>

      {Object.entries(specs).map(([name, value]) => (
        <div key={name} className={styles.spec}>
          <div className={styles.spec_name}>
            {name}
          </div>
          <div className={styles.spec_value}>
            {value}
          </div>
        </div>
      ))}
    </>
  );
};