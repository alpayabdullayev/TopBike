import React, { useContext, useState } from "react";
import Button from "../button";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import axios from "axios"

const RegisterFormModal = ({ toggleForm }) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const {setUser,setToken}  = useContext(UserContext)
  const navigate = useNavigate()

  async function register(e) {
    try {
      e.preventDefault()
      const response = await axios.post("http://localhost:7200/api/register/", {
          username: username,
          password: password,
        })
        console.log("user yarandi", response.data);
        const token = response.data.token;
        const decoded = jwtDecode(token);
        setToken(token)
        setUser(decoded)
        console.log("Decoded Token:", decoded);
        toggleForm()
        navigate("/profile");
  } catch (error) {
      console.error(error);
  }
  }

  return (
    <>
      <div className="h-[350px]">
        <h2 className="text-center">REGISTER</h2>
        <form action=""  className="py-4 flex flex-col gap-4 " onSubmit={register}>
            <input className="w-full border py-4 px-2 border-black border-opacity-70 outline-none" type="text"  placeholder="Email Adress..." value={username}
          onChange={(e) => setUsername(e.target.value)} /> 
            <input className="w-full border py-4 px-2 border-black border-opacity-70 outline-none" type="password"  placeholder="Password..."   value={password}
          onChange={(e) => setPassword(e.target.value)}/>

<div className="w-full text-center ">
            <button
              className="bg-black w-full  text-white   py-2 px-4 duration-500"
              type="submit"
            >
              REGISTER
            </button>
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
