import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { SortBy } from '@/types/SortBy';
import { DropdownButton } from './DropdownButton';

import styles from './Dropdown.module.scss';
import { DropdownContent } from './DropdownContent';

const SORT_BY_DEFAULT = SortBy.Default;
const ITEM_ON_PAGE_DEFAULT = '16';

const formatValue = (enumValue: string) => {
  const parts = enumValue.split('-');
  const formattedSortBy = parts.map(part => {
    const partUppercased = part.toUpperCase();
    const formattedPart = partUppercased.slice(0, 1) + part.slice(1);

    return formattedPart;
  }).join(' ');

  return formattedSortBy;
};

type DropdownProps = {
  searchParamsKey: string,
  dropdownItems: string[] | number[],
  currentOptionItem: string | number,
};

export const Dropdown = ({
  searchParamsKey,
  dropdownItems,
  currentOptionItem,
}: DropdownProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const defaultValue = searchParamsKey === 'sort'
    ? SORT_BY_DEFAULT : ITEM_ON_PAGE_DEFAULT;

  const handleDropdownClick = () => {
    setIsFocused((prev) => !prev);
  };

  const handleDropdownBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 200);
  };

  const selectOption = (option: string) => {
    if (option === defaultValue) {
      searchParams.delete(searchParamsKey);
    } else {
      searchParams.set(searchParamsKey, option);
    }

    searchParams.delete('page');
    setSearchParams(searchParams);
    setIsFocused(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };
  
    document.addEventListener('click', handleOutsideClick);
  
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const selectedOptionItem = formatValue(String(currentOptionItem));

  return (
    <div className={styles.dropdown} onBlur={handleDropdownBlur} ref={dropdownRef}>
      <DropdownButton
        isFocused={isFocused}
        handleDropdownClick={handleDropdownClick}
        selectedOptionItem={selectedOptionItem}
      />

      <DropdownContent
        dropdownItems={dropdownItems}
        selectOption={selectOption}
        formatValue={formatValue}
        isActive={isFocused}
      />
    </div>
  );
};