import { useNavigate } from "react-router-dom";
import { IoReturnDownBack } from "react-icons/io5";

const Compra = () => {
  const navigate = useNavigate();
  const handleNav = () => navigate(-1);
  return (
    <>
      <div>Compra</div>
      <IoReturnDownBack
        className="iconBtnDetails"
        onClick={handleNav}
        title="Volver"
      />
    </>
  );
};

export default Compra;
