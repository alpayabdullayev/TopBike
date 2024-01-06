import React from "react";

const SectionTitle = ({children}) => {
  return (
    <>
      <div>
        <h1 className=" font-semibold text-5xl flex justify-center items-center">
          {children}
        </h1>
      </div>
    </>
  );
};

export default SectionTitle;
