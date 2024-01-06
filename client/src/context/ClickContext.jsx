import React, { createContext, useState } from "react";

export const ClickContext = createContext();

export const ClickProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [isModal, setIsModal] = useState(false);

  function handleClick() {
    setIsActive((prevIsActive) => !prevIsActive);
    console.log("salam");
  }

  function handleModal() {
    setIsModal((prevIsModal) => !prevIsModal);
    console.log("salam");
  }


  function handleOverlayClick() {
    setIsActive(false);
    setIsModal(false)
  }

  const contextValue = { isActive, handleClick, handleOverlayClick,isModal,handleModal,setIsModal };

  return (
    <ClickContext.Provider value={contextValue}>
      {children}
    </ClickContext.Provider>
  );
};