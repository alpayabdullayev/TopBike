import React, { useEffect, useState } from "react";
import axios from "axios";

const Services = () => {
  const [data, setData] = useState(null);

  async function getAllServices() {
    try {
      const res = await axios.get("http://localhost:7200/api/services");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getAllServices();
  }, []);
  return (
    <>
      <section className=" py-20">
        <div className="wrapper">
          <div className="flex justify-center items-center gap-12  flex-wrap w-full">
            {data &&
              data.map((item) => (
                <div className="border border-solid border-black w-[370px] py-2">
                  <div className="flex flex-col justify-center items-center">
                    <div>
                      <img src={item.image} alt="" />
                    </div>
                    <h1 className=" tracking-[.3em]">{item.name}</h1>
                    <h1 className="leading-[1.6]">{item.description}</h1>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
