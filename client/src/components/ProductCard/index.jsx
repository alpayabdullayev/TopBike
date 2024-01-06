import React from "react";
import { CiHeart } from "react-icons/ci";
const ProductCard = () => {
  return (
    <>
      <div className="group relative overflow-hidden duration-300  ">
        <div className=""> 
            <img src="https://topbike-store-demo.myshopify.com/cdn/shop/products/product16_f996b4d3-b7d2-4a6e-9fbd-a430d3143e19.jpg?v=1608082060" className="group-hover:scale-105 duration-300 "  alt="" />
            <div className="w-12 h-12 rounded-full absolute top-8 right-0 opacity-0 group-hover:opacity-100 translate-x-[0] group-hover:translate-x-[-10px] duration-200 bg-white hover:bg-yellow-500 hover:text-white flex justify-center items-center text-black shadow-lg">
                <span>
                <CiHeart />
                </span>
            </div>
            <div className="w-12 h-12 rounded-full absolute  top-[88px] right-0 opacity-0 group-hover:opacity-100 translate-x-[0] group-hover:translate-x-[-10px]  duration-700 bg-white  hover:bg-yellow-500 hover:text-white flex justify-center items-center text-black shadow-lg">
                <span>
                <CiHeart />
                </span>
            </div>
            <div className="w-12 h-12 rounded-full absolute  top-[150px] right-0 opacity-0 group-hover:opacity-100 translate-x-[0] group-hover:translate-x-[-10px]  duration-[700ms] bg-white  hover:bg-yellow-500 hover:text-white flex justify-center items-center text-black shadow-lg">
                <span>
                <CiHeart />
                </span>
            </div>
            
        </div>
        <div className="py-4">
            <h1 className=" hover:text-yellow-500 duration-300">RELEASE 2</h1>
            <p>$3,250.00</p>
        </div>

      </div>
    </>
  );
};

export default ProductCard;
