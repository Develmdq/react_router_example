import { NavLink } from "react-router-dom";

const ServicesList = () => {
  return (
    <ol>
      <li>
        <NavLink to={'/servicios/compra'}>Compra</NavLink>
      </li>
      <li>
        <NavLink to={'/servicios/venta'}>Venta</NavLink>
      </li>
      <li>
        <NavLink to={'/servicios/asesoramiento'}>Asesoramiento</NavLink>
      </li>
    </ol>
  );
};

export default ServicesList;
