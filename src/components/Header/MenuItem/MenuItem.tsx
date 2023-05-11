import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  to: string;
  content: string;
  classNameItem: string;
  classNameLink: string;
}

export const MenuItem: React.FC<Props> = ({
  to,
  content,
  classNameItem,
  classNameLink
}) => {
  return (
    <li className={classNameItem}>
      <NavLink
        to={`/${to}`}
        className={classNameLink}
      >
        {content}
      </NavLink>
    </li>
  );
};
