import styles from './ProductsPageOption.module.scss';
import { Dropdown } from '@components/Dropdown';

type ProductsPageOptionProps = {
  title: string,
  searchParamsKey: string,
  optionItems: string[] | number[],
  currentOptionItem: string | number,
};

export const ProductsPageOption = ({
  title,
  searchParamsKey,
  optionItems,
  currentOptionItem,
}: ProductsPageOptionProps) => {
  return (
    <div className={styles.option_wrapper}>
      <p className={styles.option_title}>
        {title}
      </p>

      <Dropdown
        searchParamsKey={searchParamsKey}
        dropdownItems={optionItems}
        currentOptionItem={currentOptionItem}
      />
    </div>
  );
};