import React, { useState, useEffect, useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { ClickContext } from "../../context/ClickContext";
import { UserContext } from "../../context/userContext";
import { IoIosLogOut } from "react-icons/io";
import { RiAdminFill } from "react-icons/ri";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const {handleModal} = useContext(ClickContext)
  const { user, setUser, role, setRole, setToken } = useContext(UserContext);

  const removeStorage = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    setToken(null);
    setRole(null);
    setUser(null);
    setBasket(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full py-6 duration-500 z-20 hidden lg:block ${
          isScrolled ? "bg-black opacity-80 top-0 left-0 right-0" : ""
        }`}
      >
        <div className="wrapper ">
          <div className="d-flex">
            <div className="w-1/12">
              <img
                src="https://topbike-store-demo.myshopify.com/cdn/shop/files/Untitled-2.png?v=1613575289"
                alt=""
              />
            </div>
            <ul className="d-flex gap-6 text-white font-semibold  text-2xl">
              <li>Home</li>
              <li className="relative group">
                <NavLink to="/shop">Shop</NavLink>
                <div className=" wrapper flex justify-between   gap-6 text-lg py-6 px-4 opacity-0 invisible translate-y-[0] group-hover:translate-y-[-10px] duration-300 group-hover:opacity-100 group-hover:visible fixed w-full top-20  left-0 right-0    z-10 bg-white">
                  <ul className="text-black">
                      <h1 className="text-2xl font-bold  text-black relative">
                        <NavLink to="/shop">Shop Layout</NavLink>
                        <span class="absolute left-0 bottom-0 w-1/2 border-b-2 border-yellow-500 transition-width duration-400"></span>
                      </h1>
                    <li>Pagination</li>
                    <li>Ajax Loading</li>
                    <li>List Wiev</li>
                    <li>Background Modern</li>
                    <li>FullWidth layout</li>
                    <li>Sidebar layout</li>
                  </ul>

                  <ul className="text-black">
                  <h1 className="text-2xl font-bold text-zinc-700 relative">
                        <span class="absolute left-0 bottom-0 w-1/2 border-b-2 border-yellow-500 transition-width duration-400"></span>
                      <NavLink to="/shop">Shop Heading</NavLink>
                    </h1>
                    <li>Pagination</li>
                    <li>Ajax Loading</li>
                    <li>List Wiev</li>
                    <li>Background Modern</li>
                    <li>FullWidth layout</li>
                    <li>Sidebar layout</li>
                  </ul>
                  <ul className="text-black">
                  <h1 className="text-2xl font-bold text-zinc-700 relative">
                      <NavLink to="/shop">Filter Layout</NavLink>
                      <span class="absolute left-0 bottom-0 w-1/2 border-b-2 border-yellow-500 transition-width duration-400"></span>

                    </h1>
                    <li>Pagination</li>
                    <li>Ajax Loading</li>
                    <li>List Wiev</li>
                    <li>Background Modern</li>
                    <li>FullWidth layout</li>
                    <li>Sidebar layout</li>
                  </ul>
                  <ul className="text-black">
                  <h1 className="text-2xl font-bold text-zinc-700 relative">
                      <NavLink to="/shop">Product Layout</NavLink>
                      <span class="absolute left-0 bottom-0 w-1/2 border-b-2 border-yellow-500 transition-width duration-400"></span>

                    </h1>
                    <li>Pagination</li>
                    <li>Ajax Loading</li>
                    <li>List Wiev</li>
                    <li>Background Modern</li>
                    <li>FullWidth layout</li>
                    <li>Sidebar layout</li>
                    <li>Sidebar layout</li>
                    <li>Sidebar layout</li>
                    <li>Sidebar layout</li>
                    <li>Sidebar layout</li>
                    <li>Sidebar layout</li>
                  </ul>
                  <ul className="text-black">
                  <h1 className="text-2xl font-bold text-zinc-700 relative">
                      <NavLink to="/shop">Product Type</NavLink>
                      <span class="absolute left-0 bottom-0 w-1/2 border-b-2 border-yellow-500 transition-width duration-400"></span>

                    </h1>
                    <li>Pagination</li>
                    <li>Ajax Loading</li>
                    <li>List Wiev</li>
                    <li>Background Modern</li>
                    <li>FullWidth layout</li>
                    <li>Sidebar layout</li>
                  </ul>
                  <ul className="text-black">
                  <h1 className="text-xl font-bold text-zinc-700 relative">
                      <NavLink to="/shop">Product Extends</NavLink>
                      <span class="absolute left-0 bottom-0 w-1/2 border-b-2 border-yellow-500 transition-width duration-400"></span>

                    </h1>
                    <li>Pagination</li>
                    <li>Ajax Loading</li>
                    <li>List Wiev</li>
                    <li>Background Modern</li>
                  </ul>
                  <div className="w-1/12">
                    <img
                      src="https://topbike-store-demo.myshopify.com/cdn/shop/t/2/assets/apmenuitem_ihtml_2.jpg?v=59416964537520428881607489856"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>Featured</li>
              <li>Pages</li>
              <li>Blogs</li>
            </ul>

            <ul className="d-flex gap-4 text-white font-semibold  text-2xl">
              <li>
                <CiSearch />
              </li>


              {
                role ? (
                  <>
                  <NavLink to='/profile'><li >
                  <CiUser />
                  </li></NavLink>

                  <li onClick={() => removeStorage()}><IoIosLogOut /></li>
                  </>
                  
                ) : (              <li onClick={handleModal}>
                  <CiUser />
                  </li>)
              }

              {
                role === 'admin' || role=== "superAdmin" ? (<li>
                  <NavLink to={"/admin"}><RiAdminFill /></NavLink>
                </li>) : null
              }
              <li>
                <CiSearch />
              </li>
              <li>
                <CiSearch />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
