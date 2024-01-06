import React, { useContext, useState } from "react";
import { ClickContext } from "../../context/ClickContext";
import LoginForm from "../loginForm";
import RegisterFormModal from "../registerFormModal";

const LoginRegisterModal = () => {
  const [isLogin, setLogin] = useState(true);
  const { isModal,handleModal } = useContext(ClickContext);

  const toggleForm = () => {
    setLogin(!isLogin);
  };

  return (
    isModal && (
      <div className="fixed z-[20] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   ">
        <div className="text-white text-right text-xl">
          <span onClick={handleModal} className="cursor-pointer inline-block hover:rotate-180 transform transition-transform duration-300">
            X
          </span>
        </div>
        <div className="bg-white p-8 ">
          {isLogin ? (
            <LoginForm toggleForm={toggleForm}/>
          ) : (
           <RegisterFormModal toggleForm={toggleForm}/>
          )}
        </div>
      </div>
    )
  );
};

export default LoginRegisterModal;
