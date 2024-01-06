import React from "react";
import { NavLink } from 'react-router-dom';

const CollectionCard = ({item}) => {
  return (
    <>
      <div className=" col-span-full md:col-span-1 flex justify-center group relative overflow-hidden duration-300">
        <NavLink to="/shop">
          <img
            src={item.image}
            className="w-full group-hover:scale-110 duration-300 object-cover"
            alt=""
          />
        </NavLink>
        <div className=" opacity-0 invisible absolute bottom-0 bg-white translate-y-[10px]  group-hover:translate-y-[0] w-full left-0 z-10 text-center group-hover:opacity-70 group-hover:visible duration-300">
          <button className=" text-black font-bold  py-[15px] ">
            <NavLink to="/shop">{item.collectionType}</NavLink>
          </button>
        </div>
      </div>
    </>
  );
};

export default CollectionCard;
