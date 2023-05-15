import styles from './PhonesPageOption.module.scss';
import { Dropdown } from '../Dropdown/';

type PhonesPageOptionProps = {
  title: string,
  searchParamsKey: string,
  optionItems: string[] | number[],
  currentOptionItem: string | number,
};

export const PhonesPageOption = ({
  title,
  searchParamsKey,
  optionItems,
  currentOptionItem,
}: PhonesPageOptionProps) => {
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