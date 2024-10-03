import { BrowserRouter } from "react-router-dom";
import { Header, Footer } from "./components";
import Main from "./routes/Main";
import ProductProvider from "./context/ProductContext";

const App = () => {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </ProductProvider>
  );
};

export default App;
