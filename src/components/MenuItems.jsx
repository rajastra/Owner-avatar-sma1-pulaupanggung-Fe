import { NavLink } from 'react-router-dom';
import Dropdown from './Dropdown';
import { useState } from 'react';

const MenuItems = ({ items }) => {
  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };
  const [dropdown, setDropdown] = useState(false);
  return (
    <li className="menu-items" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {items.submenu ? (
        <>
          <button type="button" aria-haspopup="menu" aria-expanded={dropdown ? 'true' : 'false'} onClick={() => setDropdown((prev) => !prev)}>
            {items.title}{' '}
          </button>
          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <NavLink to={items.url}>{items.title}</NavLink>
      )}
    </li>
  );
};

export default MenuItems;
