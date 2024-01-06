import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";
import Button from "../button";

const OnlyOnline = () => {
  const storedTargetDate = localStorage.getItem("targetDate");
  const defaultTargetDate = new Date();
  defaultTargetDate.setDate(defaultTargetDate.getDate() + 23);

  const [targetDate, setTargetDate] = useState(
    storedTargetDate ? new Date(storedTargetDate) : defaultTargetDate
  );


  useEffect(() => {
    localStorage.setItem("targetDate", targetDate.toISOString());
  }, [targetDate]);

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Geri sayım tamamlandı!</span>;
    } else {
      return (
        <>
          <div className="flex items-center gap-6 flex-wrap">
            <div className="w-32 h-32 bg-white bg-opacity-70 text-red-500 text-center flex justify-center items-center">
              {days}
            </div>
            <div className="w-32 h-32 bg-white bg-opacity-70 text-red-500 text-center flex justify-center items-center">
              {hours}
            </div>
            <div className="w-32 h-32 bg-white bg-opacity-70 text-red-500 text-center flex justify-center items-center">
              {minutes}
            </div>
            <div className="w-32 h-32 bg-white bg-opacity-70 text-red-500 text-center flex justify-center items-center">
              {seconds}
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <section
        className="py-20 min-h-[100vh] bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage:
            "url('https://topbike-store-demo.myshopify.com/cdn/shop/files/countdown-v1.jpg?v=1613575291')",
        }}
      >
        <div className="wrapper py-10 flex">
          <div className="flex flex-col items-center">
            <h1 className="text-red-500 text-5xl font-bold py-8">Only Online</h1>
            <Countdown date={targetDate} renderer={renderer} />
            <p className="py-4 text-xl font-semibold">
              GET 30% OFF YOUR ORDER OF $100 OR MORE
            </p>
            <p className="py-4 text-xl font-semibold text-red-500">
              USE CODE “TOPBIKE30”
            </p>
            <div className="py-4">
              <Button
                children={"SHOP NOW"}
                bgColor={"bg-black"}
                bghoverColor={"bg-yellow-500"}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlyOnline;
