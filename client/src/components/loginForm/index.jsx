import React, { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios"
import { ClickContext } from "../../context/ClickContext";

const LoginForm = ({ toggleForm }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, setRole, setToken } = useContext(UserContext);
  const { handleModal } = useContext(ClickContext);

  const navigate = useNavigate();

  async function Login(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:7200/api/login", {
        username: username,
        password: password,
      });
      localStorage.setItem("token", response.data.token);
      const decoded = jwtDecode(response.data.token);
      localStorage.setItem("role", decoded.role);
      localStorage.setItem("username", decoded.username);
      setUser(decoded.username);
      setToken(response.data.token);
      setRole(decoded.role);
      handleModal()
      navigate("/profile"); 

    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <div className="py-6 pb-10 px-4 ">
        <div className="text-center w-full ">
          <img
            src="https://topbike-store-demo.myshopify.com/cdn/shop/files/LOGO.png?v=1613575279"
            alt=""
            className="mx-auto max-w-48 max-h-32"
          />
        </div>
        <div class="w-full h-[0.5px] my-2 bg-black bg-opacity-70"></div>
        <p className="text-center py-2 text-lg">Great to have you back!</p>
        <form action="" onSubmit={Login} className="py-4 flex flex-col gap-4 ">
          <input
            className="w-full border py-4 px-2 border-black border-opacity-70 outline-none"
            type="text"
            placeholder="Email Adress..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="w-full border py-4 px-2 border-black border-opacity-70 outline-none"
            type="password"
            placeholder="Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="text-left text-xs hover:text-yellow-500 duration-300  w-1/2">
            Forgot your password?
          </button>

          <div className="w-full text-center ">
            <button
              className="bg-black w-full  text-white   py-2 px-4 duration-500"
              type="submit"
            >
              LOG IN
            </button>
          </div>
        </form>
        <p className="py-4 text-base bg-f4 px-4">
          Don’t have an account?{" "}
          <span
            className=" hover:text-yellow-500 duration-300"
            onClick={toggleForm}
          >
            Register now
          </span>
        </p>
      </div>
    </>
  );
};

export default LoginForm;
