import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (    
      <nav>
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/contacto"}>Contacto</NavLink>
        <NavLink to={"/productos"}>Productos</NavLink>
        <NavLink to={"/servicios"}>Servicios</NavLink>
      </nav>   
  );
};

export default NavLinks;
