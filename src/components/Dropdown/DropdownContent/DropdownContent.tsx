import classNames from 'classnames';

import { DropdownItem } from '../DropdownItem';

import styles from './DropdownContent.module.scss';

type DropdownContentProps = {
  dropdownItems: string[] | number[],
  selectOption: (option: string) => void,
  formatValue: (enumValue: string) => string,
  isActive: boolean,
};

export const DropdownContent = ({
  dropdownItems,
  selectOption,
  formatValue,
  isActive,
}: DropdownContentProps) => {
  return (
    <div
      className={classNames(
        styles.dropdown_content,
        { [styles.dropdown_content_hidden]: !isActive },
      )}
    >
      {dropdownItems.map(dropdownItem => {
        const optionItemToString = dropdownItem.toString();
        const formattedItem = formatValue(optionItemToString);

        const handleDropdownItemClick = () => {
          selectOption(optionItemToString);
        };

        return (
          <DropdownItem
            key={formattedItem}
            formattedItem={formattedItem}
            handleClick={handleDropdownItemClick}
          />
        );
      })}
    </div>
  );
};