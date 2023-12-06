import { NavLink } from 'react-router-dom';

const Dropdown = ({ submenus, dropdown }) => {
  return (
    <ul className={`dropdown ${dropdown ? 'show' : ''}`}>
      {submenus.map((submenu, index) => (
        <li key={index} className="menu-items">
          <NavLink to={submenu.url}>{submenu.title}</NavLink>
        </li>
      ))}
    </ul>
  );
};
export default Dropdown;
