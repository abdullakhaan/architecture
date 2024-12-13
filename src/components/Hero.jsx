import React from "react";
import img from "../assets/homeImg.svg";
import Button from "../layout/Button";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen p-4 px-5 m-2 md:px-32">
      <div className="md:w-3/5">
        <h1 className="font-semibold text-8xl font-playFair">
          Build Your Dream <span className="text-brightRed">House</span>
        </h1>
      </div>
      <div className="flex flex-col pt-8 md:flex-row">
        <div className="p-5 m-2 space-y-5">
          <p>
            100% guaranteed build safe, comfortable and transparent with a
            project management for the best result
          </p>
          <Button title="Free Consultation" />
        </div>
        <div>
          <img className="rounded-md" src={img} alt="heroImg" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
 