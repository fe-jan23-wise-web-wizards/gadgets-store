import { FC } from 'react';
import { MenuItem } from '../MenuItem';

interface Props {
  classNameList: string;
  classNameItem: string;
  classNameLink: string;
  classNameActiveLink: string;
  onClickInteractive?:() => void;
}

export const NavBarList: FC<Props> = ({
  classNameList,
  classNameItem,
  classNameLink,
  classNameActiveLink,
  onClickInteractive,
}) => (
  <menu className={classNameList}>
    <MenuItem
      to={''}
      content={'Home'}
      classNameItem={classNameItem}
      classNameLink={classNameLink}
      classNameActiveLink={classNameActiveLink}
      onClickLink={onClickInteractive}
    />

    <MenuItem
      to={'phones'}
      content={'Phones'}
      classNameItem={classNameItem}
      classNameLink={classNameLink}
      classNameActiveLink={classNameActiveLink}
      onClickLink={onClickInteractive}
    />

    <MenuItem
      to={'tablets'}
      content={'Tablets'}
      classNameItem={classNameItem}
      classNameLink={classNameLink}
      classNameActiveLink={classNameActiveLink}
      onClickLink={onClickInteractive}
    />

    <MenuItem
      to={'accessories'}
      content={'Accessories'}
      classNameItem={classNameItem}
      classNameLink={classNameLink}
      classNameActiveLink={classNameActiveLink}
      onClickLink={onClickInteractive}
    />
  </menu>
);