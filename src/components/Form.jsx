import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { yearValidate, MSJ_ERRORS } from "../utils";

const Form = () => {
  const { register, handleSubmit, reset, watch, formState } = useForm();
  const { errors } = formState;
  const [viewPass, setViewPass] = useState("password");
  const [isRegister, setIsRegister] = useState(false);
  const [recover, setRecover] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    isRegister && (localStorage.setItem("user", JSON.stringify(data)), setIsRegister(false));
    !isRegister && !recover ? navigate("/home") : setIsRegister(false);      
    reset();
  };
  console.log(watch("nombre"));

  const errorMsj = (type) => MSJ_ERRORS[`${type}`];

  return (
    <>
      <h2>
        {isRegister
          ? "Crear cuenta"
          : recover
          ? "Ingresa tu email"
          : "Iniciar Sesión"}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {!recover && (
          <>
            <input //NOMBRE
              // defaultValue="test"
              {...register("nombre", { required: true, maxLength: 10 })}
              placeholder="nombre"
            />
            {errorMsj(errors.nombre?.type)}
            <div className="containerPass">
              <input // PASSWORD
                {...register("password", { required: true, maxLength: 10 })}
                placeholder="password"
                type={viewPass}
              />
              <FaEye
                className="iconEye"
                onMouseEnter={() => setViewPass("")}
                onMouseLeave={() => setViewPass("password")}
              />
            </div>
            {errorMsj(errors.password?.type)}
          </>
        )}

        {isRegister && (
          <>
            <select {...register("pais")}>
              <option value="Argentina">país</option>
              <option value="Argentina">Argentina</option>
              <option value="España">España</option>
            </select>

            <input //EDAD
              {...register("edad", { required: true, validate: yearValidate })}
              placeholder="edad"
            />
            {errorMsj(errors.edad?.type)}
          </>
        )}
        {!isRegister && recover && (
          <>
            <input //EMAIL
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/i,
              })}
              placeholder="email"
            />
            {errorMsj(errors.email?.type)}
          </>
        )}

        <input type="submit" value={isRegister ? "Enviar" : 'Iniciar'} />
      </form>
      <button
        onClick={() => {
          setIsRegister(!isRegister);
          setRecover(false);
        }}
      >
        {isRegister ? "Tengo una cuenta" : "Crear cuenta"}
      </button>
      {!isRegister && !recover && (
        <span
          onClick={() => {
            setRecover(true);
          }}
        >
          {"No recuerdo mis datos"}
        </span>
      )}
    </>
  );
};

export default Form;
