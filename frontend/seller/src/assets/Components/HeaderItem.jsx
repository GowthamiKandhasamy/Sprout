import React from 'react';
import { NavLink } from 'react-router-dom';

function HeaderItem({ name, Icon, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative flex items-center text-[17px] gap-3 font-semibold cursor-pointer !text-white px-2 py-1 transition-all duration-700 ease-in-out group ${
          isActive
            ? 'after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-white after:transition-all after:duration-700 after:shadow-[0_0_8px_2px_rgba(255,255,255,0.8)]'
            : 'after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-700 group-hover:after:w-full'
        }`
      }
    >
      {Icon}
      <h2>{name}</h2>
    </NavLink>
  );
}

export default HeaderItem;
