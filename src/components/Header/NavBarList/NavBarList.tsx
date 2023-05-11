import { FC } from 'react';
// import styles from '@components/Header/Header.module.scss';
import { MenuItem } from '../MenuItem/MenuItem';

interface Props {
  classNameList: string;
  classNameItem: string;
  classNameLink: string;
};

export const NavBarList: FC<Props> = ({
  classNameList,
  classNameItem,
  classNameLink,
}) => (
  <menu className={classNameList}>
    <MenuItem
      to={'home'}
      content={'Home'}
      classNameItem={classNameItem}
      classNameLink={classNameLink}
    />

    <MenuItem
      to={'phones'}
      content={'Phones'}
      classNameItem={classNameItem}
      classNameLink={classNameLink}
    />

    <MenuItem
      to={'tablets'}
      content={'Tablets'}
      classNameItem={classNameItem}
      classNameLink={classNameLink}
    />

    <MenuItem
      to={'accessories'}
      content={'Accessories'}
      classNameItem={classNameItem}
      classNameLink={classNameLink}
    />
  </menu>
);