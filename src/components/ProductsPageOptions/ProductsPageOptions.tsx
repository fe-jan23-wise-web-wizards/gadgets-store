import { useSearchParams } from 'react-router-dom';

import { SortBy } from '@/types/SortBy';
import { ProductsPageOption } from '../ProductsPageOption';

import styles from './ProductsPageOptions.module.scss';

const sortByOptionItems = Object.values(SortBy);
const limitOptionItems = [16, 32, 64];

export const ProductsPageOptions = () => {
  const [searchParams] = useSearchParams();

  const sortBy = searchParams.get('sort') || SortBy.Default;
  const limit = searchParams.get('limit') || 16;

  return (
    <div className={styles.options_wrapper}>
      <ProductsPageOption
        title='Sort by'
        searchParamsKey='sort'
        optionItems={sortByOptionItems}
        currentOptionItem={sortBy}
      />

      <ProductsPageOption
        title='Items on page'
        searchParamsKey='limit'
        optionItems={limitOptionItems}
        currentOptionItem={limit}
      />
    </div>
  );
};