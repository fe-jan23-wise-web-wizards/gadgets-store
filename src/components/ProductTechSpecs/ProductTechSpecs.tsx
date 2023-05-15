import { Phone } from "@/types/Phone";

import styles from './ProductTechSpecs.module.scss';
import { Accessory } from "@/types/Accessory";
import { Tablet } from "@/types/Tablet";
import { CommonTechSpecs } from "@/types/CommonTechSpecs";

interface ProductTechSpecsProps {
  product: Phone | (Accessory & CommonTechSpecs) | Tablet;
}

export const ProductTechSpecs = ({ product }: ProductTechSpecsProps) => {
  const {
    screen,
    resolution,
    processor,
    ram,
    capacity,
    cell,
    camera,
    zoom,
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
            {value || '-'}
          </div>
        </div>
      ))}
    </>
  );
};