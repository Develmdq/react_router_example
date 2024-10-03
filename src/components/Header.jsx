import { Link} from "react-router-dom";
import NavLinks from './NavLinks'

const Header = () => {


  return (
    <div className="headerContainer">
      <Link to={"/"}>
        <img src="../../public/react-router.svg" alt="logo" style={{width:'3rem'}} title="Ir al Home" />
      </Link>
      <NavLinks />
    </div>
  );
};

export default Header;
