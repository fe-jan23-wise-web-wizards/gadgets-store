import styles from './DropdownItem.module.scss';

type DropdownItemProps = {
  formattedItem: string,
  handleClick: () => void,
};

export const DropdownItem = ({
  formattedItem,
  handleClick,
}: DropdownItemProps) => {
  return (
    <button
      className={styles.dropdown_item}
      onClick={handleClick}
    >
      {formattedItem}
    </button>
  );
};