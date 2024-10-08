import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Home, Contact, Error, Servicios, Login } from "../pages";
import {
  Productos,
  Producto,
  Compra,
  Venta,
  Asesoramiento,
  ServicesList,
} from "../components";
import ProtectedRoute from "./ProtectedRoute";

const Main = () => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const userActive = localStorage.getItem("user");
    userActive && setActive(true)
  }, []);
  
  
  return (
    <div className="mainContainer">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoute canActivate={active}/>}>
          <Route path="/home" element={<Home />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:id" element={<Producto />} />
          <Route path="/algo" element={<Navigate to={"/contacto"} />} />
          <Route path="/servicios" element={<Servicios />}>
            <Route index element={<ServicesList />} />
            <Route path="/servicios/compra" element={<Compra />} />
            <Route path="/servicios/venta" element={<Venta />} />
            <Route
              path="/servicios/asesoramiento"
              element={<Asesoramiento />}
            />
          </Route>
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default Main;
