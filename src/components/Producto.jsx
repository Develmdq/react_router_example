import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoReturnDownBack } from "react-icons/io5";

import { ProductContext } from "../context/ProductContext";

const Producto = () => {
  const productos = useContext(ProductContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const producto = productos.find((producto) => producto.id.toString() === id);

  const handleNav = () => navigate(-1);

  return (
    <div className="containerProduct">
      <img src={`../../${producto.img}`} className="imgDetails" />
      <div>
        <h1>{producto.nombre}</h1>
        <h3>${producto.precio}</h3>

        <IoReturnDownBack
          className="iconBtnDetails"
          onClick={handleNav}
          title="Volver"
        />
      </div>
    </div>
  );
};

export default Producto;
