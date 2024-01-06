import React from "react";
import Button from "../button";

const LoginForm = ({toggleForm}) => {
  return (
    <>
      <div className="py-6 pb-10 px-4 "  >
        <div className="text-center w-full ">
          <img
            src="https://topbike-store-demo.myshopify.com/cdn/shop/files/LOGO.png?v=1613575279"
            alt=""
            className="mx-auto max-w-48 max-h-32"
          />
        </div>
        <div class="w-full h-[0.5px] my-2 bg-black bg-opacity-70"></div>
        <p className="text-center py-2 text-lg">Great to have you back!</p>
        <form action=""  className="py-4 flex flex-col gap-4 ">
            <input className="w-full border py-4 px-2 border-black border-opacity-70 outline-none" type="email"  placeholder="Email Adress..." /> 
            <input className="w-full border py-4 px-2 border-black border-opacity-70 outline-none" type="password"  placeholder="Password..." />
            <button className="text-left text-xs hover:text-yellow-500 duration-300  w-1/2">Forgot your password?</button>
            <div className="w-full ">
                <Button children={"LOG IN"} wFull={"w-full"} bgColor={"bg-black"} />   
            </div>
        </form>
        <p className="py-4 text-base bg-f4 px-4">
          Don’t have an account? <span className=" hover:text-yellow-500 duration-300" onClick={toggleForm}>Register now</span>
        </p>
      </div>
    </>
  );
};

export default LoginForm;
