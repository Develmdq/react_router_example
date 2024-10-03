import { Outlet } from "react-router-dom";

const Servicios = () => {
  return (
    <div className="containerServices">
      <h1>Servicios</h1>
      <Outlet />
    </div>
  );
};

export default Servicios;
