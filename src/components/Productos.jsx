import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const Productos = () => {  
const productos = useContext(ProductContext) 

  return (
    <ul className="containerLinks">
      {productos.map((producto) => (
        <Link
          className="productoLi"
          key={producto.id}
          to={`/productos/${producto.id}`}
        >
          <img src={producto?.img} className="imgList" />
          {producto.nombre}
        </Link>
      ))}
    </ul>
  );
};

export default Productos;
