import classNames from 'classnames';

import styles from './DropdownButton.module.scss';

type DropdownButtonProps = {
  isFocused: boolean,
  handleDropdownClick: () => void,
  selectedOptionItem: string,
};

export const DropdownButton = ({
  isFocused,
  handleDropdownClick,
  selectedOptionItem,
}: DropdownButtonProps) => {
  return (
    <button
      className={classNames(
        styles.dropdown_button,
        { [styles.dropdown_button_focused]: isFocused },
      )}
      onClick={handleDropdownClick}
    >
      <p className={styles.dropdown_value}>
        {selectedOptionItem}
      </p>

      <div className={styles.dropdown_icon}></div>
    </button>
  );
};