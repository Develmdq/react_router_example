import { Route, Routes, Navigate } from "react-router-dom";
import { Home, Contact, Error, Servicios } from "../pages";
import {
  Productos,
  Producto,
  Compra,
  Venta,
  Asesoramiento,
  ServicesList,
} from "../components";


const Main = () => {
  return (
    <div className="mainContainer">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:id" element={<Producto />} />
        <Route path="/algo" element={<Navigate to={"/contacto"} />} />
        <Route path="/servicios" element={<Servicios />}>
          <Route index element={<ServicesList />} />
          <Route path="/servicios/compra" element={<Compra />} />
          <Route path="/servicios/venta" element={<Venta />} />
          <Route path="/servicios/asesoramiento" element={<Asesoramiento />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default Main;
