import React from "react";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="bg-f4 pt-20 text-black">
        <div className="wrapper pb-20">
          <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-24">
            <div className="">
              <div className="w-8/12">
                <img className="w-full"
                  src="https://topbike-store-demo.myshopify.com/cdn/shop/files/LOGO.png?v=1613575279"
                  alt=""
                />
              </div>
              <ul className="py-6 flex flex-col gap-4">
                <li className="font-medium">
                  The simple, delicate and light design makes it comfortable for
                  everyone.
                </li>
              </ul>
              
            </div>
            
            <div className="">
              <h3 className="text-black  text-xl font-bold relative">Shop
              <span class="absolute left-0 bottom-[-6px] w-1/12 border-b-2 border-black transition-width duration-400"></span>
              </h3>
              
              <ul className="flex flex-col gap-4 py-4">
                <p className=" font-medium">Shopping</p>
                <p className="font-medium">Bicycle</p>
                <p className="font-medium">Bicycle Accessory</p>
                <p className="font-medium">Helmet</p>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="text-black text-2xl font-bold relative">About Us
              <span class="absolute left-0 bottom-[-6px] w-1/12 border-b-2 border-black transition-width duration-400"></span>
              </h3>
              <ul className="flex flex-col gap-4 py-4">
                <li className="">About Us</li>
                <li className="">Pagination</li>
                <li className="">Terms & Conditions</li>
                <li className="">Contact</li>
                <li className="">Accessories</li>
                <li className="">Term of use</li>
              </ul>
            </div>
            <div className="">
              <h3 className="text-black text-2xl font-bold relative">Infomation
              <span class="absolute left-0 bottom-[-6px] w-1/12 border-b-2 border-black transition-width duration-400"></span>
              
              </h3>
              <ul className="flex flex-col gap-4 py-4">
                <li className="">Address</li>
                <li className="">Privacy Policy</li>
                <li className="">Terms & Conditions</li>
                <li className="">Products Return</li>
                <li className="">Wholesale Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
