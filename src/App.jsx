import { HashRouter } from "react-router-dom";
import { Header, Footer } from "./components";
import Main from "./routes/Main";
import ProductProvider from "./context/ProductContext";

const App = () => {
  return (
    <ProductProvider>
      <HashRouter>
        <Header />
        <Main />
        <Footer />
      </HashRouter>
    </ProductProvider>
  );
};

export default App;
