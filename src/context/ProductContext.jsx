import { useState, useEffect,createContext } from "react";


export const ProductContext = createContext([])


const ProductProvider = ({children}) => {
  const [productos, setProductos] = useState([]);
 
  useEffect(() => {
    const getProductos = async () => {
      const resp = await fetch("../../api.json");
      const data = await resp.json();
      setProductos(data);
    };
    getProductos();
  }, []);

  return (
    <ProductContext.Provider value={productos}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider
