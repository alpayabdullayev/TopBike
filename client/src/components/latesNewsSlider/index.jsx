import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import "./index.scss";

const LatesNewsSlider = () => {
  const breakpoints = {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  };
  return (
    <>
      <div className="py-6">
        <Swiper
          slidesPerView={5}
          breakpoints={breakpoints}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          //   autoplay={{
          //     delay: 1500,
          //     disableOnInteraction: false,
          //   }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <div className="group relative overflow-hidden duration-300">
                <div>
                  <img
                    className=" group-hover:scale-110 duration-300 group-hover:opacity-70"
                    src="https://topbike-store-demo.myshopify.com/cdn/shop/articles/blog-post3_1024x1024.jpg?v=1607478877"
                    alt=""
                  />
                  <div className="bg-white absolute  right-[20px] top-[20px] text-black w-16 h-16 flex flex-col justify-center items-center text-center">
                    <p className=" relative font-semibold">
                      08
                      <span class="absolute left-0 bottom-0 w-full border-b-2 border-black transition-width duration-400"></span>
                    </p>
                    <span className=" text-xs font-semibold">DEC</span>
                  </div>
                </div>
              </div>
              <div className="body py-4">
                <div>
                  <p className="text-gray-500">NEWS</p>
                  <h1 className="py-2">
                    One Week in Bali: A Great Trip for a Lifetime to Choose
                  </h1>
                  <p className="text-xs py-4 text-gray-400  ">
                    Are you planning to have a short trip to Bali? What is best
                    about a short visit to a particular place is...
                  </p>
                 <div className="py-1">
                 <button className=" border-b  font-bold  border-black hover:text-yellow-500 hover:border-yellow-500 duration-300">Readmore</button>
                 </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="group relative overflow-hidden duration-300">
                <div>
                  <img
                    className=" group-hover:scale-110 duration-300 group-hover:opacity-70"
                    src="https://topbike-store-demo.myshopify.com/cdn/shop/articles/blog-post3_1024x1024.jpg?v=1607478877"
                    alt=""
                  />
                  <div className="bg-white absolute  right-[20px] top-[20px] text-black w-16 h-16 flex flex-col justify-center items-center text-center">
                    <p className=" relative font-semibold">
                      08
                      <span class="absolute left-0 bottom-0 w-full border-b-2 border-black transition-width duration-400"></span>
                    </p>
                    <span className=" text-xs font-semibold">DEC</span>
                  </div>
                </div>
              </div>
              <div className="body py-4">
                <div>
                  <p className="text-gray-500">NEWS</p>
                  <h1 className="py-2">
                    One Week in Bali: A Great Trip for a Lifetime to Choose
                  </h1>
                  <p className="text-xs py-4 text-gray-400  ">
                    Are you planning to have a short trip to Bali? What is best
                    about a short visit to a particular place is...
                  </p>
                 <div className="py-1">
                 <button className=" border-b  font-bold  border-black hover:text-yellow-500 hover:border-yellow-500 duration-300">Readmore</button>
                 </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="group relative overflow-hidden duration-300">
                <div>
                  <img
                    className=" group-hover:scale-110 duration-300 group-hover:opacity-70"
                    src="https://topbike-store-demo.myshopify.com/cdn/shop/articles/blog-post3_1024x1024.jpg?v=1607478877"
                    alt=""
                  />
                  <div className="bg-white absolute  right-[20px] top-[20px] text-black w-16 h-16 flex flex-col justify-center items-center text-center">
                    <p className=" relative font-semibold">
                      08
                      <span class="absolute left-0 bottom-0 w-full border-b-2 border-black transition-width duration-400"></span>
                    </p>
                    <span className=" text-xs font-semibold">DEC</span>
                  </div>
                </div>
              </div>
              <div className="body py-4">
                <div>
                  <p className="text-gray-500">NEWS</p>
                  <h1 className="py-2">
                    One Week in Bali: A Great Trip for a Lifetime to Choose
                  </h1>
                  <p className="text-xs py-4 text-gray-400  ">
                    Are you planning to have a short trip to Bali? What is best
                    about a short visit to a particular place is...
                  </p>
                 <div className="py-1">
                 <button className=" border-b  font-bold  border-black hover:text-yellow-500 hover:border-yellow-500 duration-300">Readmore</button>
                 </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default LatesNewsSlider;
