import React from "react";
import Button from "../button";

const RegisterFormModal = ({ toggleForm }) => {
  return (
    <>
      <div className="h-[350px]">
        <h2 className="text-center">REGISTER</h2>
        <form action=""  className="py-4 flex flex-col gap-4 ">
            <input className="w-full border py-4 px-2 border-black border-opacity-70 outline-none" type="email"  placeholder="Email Adress..." /> 
            <input className="w-full border py-4 px-2 border-black border-opacity-70 outline-none" type="password"  placeholder="Password..." />

            <div className="w-full ">
                <Button children={"REGISTER"} wFull={"w-full"} bgColor={"bg-black"} />   
            </div>
        </form>
        <p className="bg-f4 py-4 px-4">
          Already have an account?
          <span onClick={toggleForm}> <span className=" hover:text-yellow-500 duration-300"> Back to login</span></span>
        </p>
      </div>
    </>
  );
};

export default RegisterFormModal;
