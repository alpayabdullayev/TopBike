import React, { useContext } from 'react'
import { CiSearch } from 'react-icons/ci'
import { ClickContext } from '../../context/ClickContext'

const MobileNavbar = () => {
    const { handleClick } = useContext(ClickContext);
    return (
        <>
            <nav className='block lg:hidden fixed top-0 left-0 right-0 bg-white  z-[999]'>
                <div className='wrapper'>
                    <div className='flex justify-between items-center py-4'>
                        <div onClick={handleClick}>
                            <span className=' w-6 bg-black mb-[6px] h-[2px] block'></span>
                            <span className='w-[12px] bg-black mb-[6px] h-[2px] block'></span>
                            <span className='w-6 bg-black mb-[6px] h-[2px] block'></span>
                        </div>
                        <div className="w-2/12">
                            <img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/LOGO.png?v=1613575279" alt="" />
                        </div>
                        <div className='flex items-center gap-4'>
                            <span className=' text-lg'><CiSearch /></span>
                            <span className=' text-lg'><CiSearch /></span>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default MobileNavbar;
