import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import "./index.scss";
import Button from "../button";
import axios from "axios";
const Hero = () => {
  const [data, setData] = useState(null);

  async function getAllSlider() {
    const res = await axios.get("http://localhost:7200/api/heroslider/");
    setData(res.data);
  }

  useEffect(() => {
    getAllSlider();
  }, []);

  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        

        {data &&
          data.map((item) => (
            <SwiperSlide className="" key={item._id}>
              <div className={` z-[1]  min-h-[100vh] bg-no-repeat bg-center bg-cover flex justify-between items-center flex-wrap`} style={{ backgroundImage: `url("${item.image}")` }}>
                <div className="wrapper py-20">
                  <h1 className="text-white font-semibold [font-size:_clamp(2em,5vw,10em)]">
                    {item.title}
                  </h1>
                  <p className="text-white  [font-size:_clamp(1em,1vw,5em)]   ">
                    {item.description}
                  </p>
                  <div className="py-4">
                    <Button
                      children={"SHOP NOW"}
                      bgColor={""}
                      bghoverColor={"bg-yellow-500"}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Hero;
