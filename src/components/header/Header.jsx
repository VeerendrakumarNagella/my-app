import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <NavLink to="/">
            <img src="https://via.placeholder.com/150" alt="logo" />
          </NavLink>
        </div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
