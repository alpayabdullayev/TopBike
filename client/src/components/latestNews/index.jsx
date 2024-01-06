import React from "react";
import LatesNewsSlider from "../latesNewsSlider";
import SectionTitle from "../sectionTitle";

const LatestNews = () => {
  return (
    <>
      <section id="latestNews" className="py-20 min-h-[100vh]">
        <div className="wrapper">
          <SectionTitle children={"LATEST NEWS"} />
          <LatesNewsSlider />
        </div>
      </section>
    </>
  );
};

export default LatestNews;
