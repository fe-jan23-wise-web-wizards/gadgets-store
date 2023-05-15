import { useSearchParams } from 'react-router-dom';

import { SortBy } from '@/types/SortBy';
import { PhonesPageOption } from '../PhonesPageOption';

import styles from './PhonesPageOptions.module.scss';

const sortByOptionItems = Object.values(SortBy);
const limitOptionItems = [16, 10, 5];

export const PhonesPageOptions = () => {
  const [searchParams] = useSearchParams();

  const sortBy = searchParams.get('sort') || SortBy.Default;
  const limit = searchParams.get('limit') || 16;

  return (
    <div className={styles.options_wrapper}>
      <PhonesPageOption
        title='Sort by'
        searchParamsKey='sort'
        optionItems={sortByOptionItems}
        currentOptionItem={sortBy}
      />

      <PhonesPageOption
        title='Items on page'
        searchParamsKey='limit'
        optionItems={limitOptionItems}
        currentOptionItem={limit}
      />
    </div>
  );
};