import React from "react";
import icon from "../assets/logo-arch.svg";
import Button from "../layout/Button";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between p-4 px-5 m-2 md:px-32 ">
      <div className="flex flex-row items-center gap-12 p-2 text-lightText">
        <div>
          <img src={icon} alt="logo" />
        </div>

        <nav className="hidden gap-4 md:flex">
          <a className="transition-all hover:text-brightRed" href="/works">
            How it Works
          </a>
          <a className="transition-all hover:text-brightRed" href="/gallery">
            Design Gallery
          </a>
          <a className="transition-all hover:text-brightRed" href="/Architects">
            Architects
          </a>
          <a className="transition-all hover:text-brightRed" href="/Articles">
            Articles
          </a>
        </nav>
      </div>

      <div className="flex flex-row items-center gap-4 p-2">
        <a href="/signIn">Sign In</a>
        <Button title="Sign Up" />
      </div>
    </div>
  );
};

export default Navbar;
