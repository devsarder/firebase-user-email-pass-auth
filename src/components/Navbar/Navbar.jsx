import { NavLink } from "react-router-dom";

const Navbar = () => {
    
  return (
    <div className="text-center flex gap-6 justify-center ">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Log in</NavLink>
      <NavLink to="/register">Register</NavLink>
    </div>
  );
};

export default Navbar;
