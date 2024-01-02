import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="bg-customLightGray text-customBlack h-full  flex flex-col items-center justify-center text-center p-8 ">
      <h1 className="text-8xl "> 404</h1>
      <p className="text-3xl font-bold mt-8 mb-4 md:text-4xl">
        Oops! That page can't be found
      </p>
      <p className="md:w-[50%]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et incidunt
        molestiae perferendis? Maxime amet neque facilis alias fuga saepe
        asperiores beatae possimus aperiam maiores voluptatem ex ipsam deserunt,
        repellat vero!
      </p>
      <Link
        to={"/"}
        className="bg-customGreen text-white mt-4 rounded-full p-3 uppercase text-sm font-medium  duration-200 hover:text-customBlack hover:bg-customYellow"
      >
        back to homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
