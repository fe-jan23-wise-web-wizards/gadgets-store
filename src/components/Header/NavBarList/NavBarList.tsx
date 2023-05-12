import { FC } from 'react';
import { MenuItem } from '../MenuItem/MenuItem';

interface Props {
  classNameList: string;
  classNameItem: string;
  classNameLink: string;
  classNameActiveLink: string;
};

export const NavBarList: FC<Props> = ({
  classNameList,
  classNameItem,
  classNameLink,
  classNameActiveLink,
}) => (
  <menu className={classNameList}>
    <MenuItem
      to={''}
      content={'Home'}
      classNameItem={classNameItem}
      classNameLink={classNameLink}
      classNameActiveLink={classNameActiveLink}
    />

    <MenuItem
      to={'phones'}
      content={'Phones'}
      classNameItem={classNameItem}
      classNameLink={classNameLink}
      classNameActiveLink={classNameActiveLink}
    />

    <MenuItem
      to={'tablets'}
      content={'Tablets'}
      classNameItem={classNameItem}
      classNameLink={classNameLink}
      classNameActiveLink={classNameActiveLink}
    />

    <MenuItem
      to={'accessories'}
      content={'Accessories'}
      classNameItem={classNameItem}
      classNameLink={classNameLink}
      classNameActiveLink={classNameActiveLink}
    />
  </menu>
);