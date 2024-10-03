import { useNavigate } from "react-router-dom";
import { IoReturnDownBack } from "react-icons/io5";

const Venta = () => {
  const navigate = useNavigate();
  const handleNav = () => navigate(-1);
  return (
    <>
      <div>Venta</div>
      <IoReturnDownBack
        className="iconBtnDetails"
        onClick={handleNav}
        title="Volver"
      />
    </>
  );
};

export default Venta;
