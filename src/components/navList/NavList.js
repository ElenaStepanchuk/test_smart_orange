import { NavLink } from 'react-router-dom';

import './navList.scss';

const NavList = () => {
  return (
    <>
      <NavLink to="home" className="nav_link">
        Home
      </NavLink>
      <NavLink to="about" className="nav_link">
        About
      </NavLink>
      <NavLink to="services" className="nav_link">
        Services
      </NavLink>
      <NavLink to="contact" className="nav_link">
        Contact
      </NavLink>
    </>
  );
};
export default NavList;
