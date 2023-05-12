import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

interface Props {
  to: string;
  content: string;
  classNameItem: string;
  classNameLink: string;
  classNameActiveLink: string;
}

export const MenuItem: React.FC<Props> = ({
  to,
  content,
  classNameItem,
  classNameLink,
  classNameActiveLink,
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
      >
        {content}
      </NavLink>
    </li>
  );
};
