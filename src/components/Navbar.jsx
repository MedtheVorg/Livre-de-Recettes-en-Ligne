import React from "react";
import { logoImage } from "../assets";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  return (
    <div className="bg-customGreen flex flex-row p-2   ">
      {/* logo */}
      <div className="flex flex-col">
        <div className="h-[50px] w-[50px]">
          <img
            src={logoImage}
            alt="image of  book "
            className="w-full h-full  object-contain"
          />
        </div>
        <p className="text-white transition-all hover:scale-150 uppercase ">
          Open <span className="font-bold">Recipes</span>
        </p>
      </div>
      {/* nav */}
      <nav>
        <GiHamburgerMenu />
      </nav>
    </div>
  );
};

export default Navbar;
