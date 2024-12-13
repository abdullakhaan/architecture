import React from "react";
import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.svg";
import img3 from "../assets/img3.svg";

const Gallery = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen p-4 px-5 m-2 md:px-32">
      <div className="py-5 md:w-2/6">
        <p className="text-4xl font-medium font-playFair">Build professional valuable room</p>
      </div>
      <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between">
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
