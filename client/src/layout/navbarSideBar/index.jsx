import React, { useContext } from 'react'
import { ClickContext } from '../../context/ClickContext'

const NavbarSideBar = () => {
    const { isActive } = useContext(ClickContext);

    return (
        <>
            {isActive && (
                <div className="w-6/12 md:w-4/12 bg-white h-screen fixed left-0 top-0 bottom-0 z-20 text-black">
                    sa
                </div>
            )}
        </>
    );
};

export default NavbarSideBar