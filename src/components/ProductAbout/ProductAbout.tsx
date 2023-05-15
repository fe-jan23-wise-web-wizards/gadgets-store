import { Fragment } from 'react';
import { ProductDescription } from "@/types/ProductDescription";

import styles from './ProductAbout.module.scss';

interface ProductAboutProps {
  description: ProductDescription[];
}

export const ProductAbout = ({ description }: ProductAboutProps) => {
  return (
    <>
      <h2 className={styles.about_header}>
        About
      </h2>

      {description.map((spec: ProductDescription) => (
        <Fragment key={spec.title}>
          <h3 className={styles.about_title}>
            {spec.title}
          </h3>

          <p className={styles.about_content}>
            {spec.text.map((text: string) => (
              <span key={text} className={styles.about_text}>
                {text}
              </span>
            ))}
          </p>
        </Fragment>
      ))}
    </>
  );
};