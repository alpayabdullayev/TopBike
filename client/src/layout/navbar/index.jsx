import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
        className={`fixed w-full py-6 duration-500 z-20 ${
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
                    <h1 className="text-2xl font-bold  text-black">
                      <NavLink to="/shop">Shop Layout</NavLink>
                    </h1>
                    <li>Pagination</li>
                    <li>Ajax Loading</li>
                    <li>List Wiev</li>
                    <li>Background Modern</li>
                    <li>FullWidth layout</li>
                    <li>Sidebar layout</li>
                  </ul>

                  <ul className="text-black">
                  <h1 className="text-2xl font-bold text-zinc-700">
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
                  <h1 className="text-2xl font-bold text-zinc-700">
                      <NavLink to="/shop">Filter Layout</NavLink>
                    </h1>
                    <li>Pagination</li>
                    <li>Ajax Loading</li>
                    <li>List Wiev</li>
                    <li>Background Modern</li>
                    <li>FullWidth layout</li>
                    <li>Sidebar layout</li>
                  </ul>
                  <ul className="text-black">
                  <h1 className="text-2xl font-bold text-zinc-700">
                      <NavLink to="/shop">Product Layout</NavLink>
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
                  <h1 className="text-2xl font-bold text-zinc-700">
                      <NavLink to="/shop">Product Type</NavLink>
                    </h1>
                    <li>Pagination</li>
                    <li>Ajax Loading</li>
                    <li>List Wiev</li>
                    <li>Background Modern</li>
                    <li>FullWidth layout</li>
                    <li>Sidebar layout</li>
                  </ul>
                  <ul className="text-black">
                  <h1 className="text-2xl font-bold text-zinc-700">
                      <NavLink to="/shop">Product Extends</NavLink>
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
              <li>
                <CiSearch />
              </li>
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
