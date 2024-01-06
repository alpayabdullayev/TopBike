import React, { useContext } from 'react'
import { ClickContext } from '../../context/ClickContext';
import "./index.scss"

const Overlay = () => {
    const { isActive, handleOverlayClick ,isModal,handleModal} = useContext(ClickContext);
    return (
        <>
            {/* <div className={`fixed bg-black bg-opacity-70 w-8/12 left-0 top-0 right-0 z-30 invisible  opacity-0  h-[100%]  translate-x-[400px] duration-500  ${isActive ? ' translate-x-0  opacity-100  visible  z-30' : ''}`} onClick={handleOverlayClick}></div> */}

            <div className={`overlay w-full right-0 ${isActive? 'active' : ''}`}  onClick={handleOverlayClick}></div>
            <div className={`overlay w-full right-0 ${isModal? 'active' : ''}`}  onClick={handleModal}></div>
        </>
    )
}

export default Overlay;
