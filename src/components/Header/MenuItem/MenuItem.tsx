import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

interface Props {
  to: string;
  content: string;
  classNameItem: string;
  classNameLink: string;
  classNameActiveLink: string;
  onClickLink?: () => void;
}

export const MenuItem: React.FC<Props> = ({
  to,
  content,
  classNameItem,
  classNameLink,
  classNameActiveLink,
  onClickLink
}) => {
  return (
    <li className={classNameItem}>
      <NavLink
        to={`/${to}`}
        className={({ isActive }) => (
          classNames(classNameLink,
            {
              [classNameActiveLink] : isActive,
            }
          ))
        }

      onClick={onClickLink}
      >
        {content}
      </NavLink>
    </li>
  );
};
