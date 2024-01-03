import React from "react";
import platimage from "../assets/images/2.png";
import { Link } from "react-router-dom";
// import platimage from '../assets/images/2.png';
function HomePage() {
  return (
    <>
      <div className="Hero">
        <div className="container flex  items-center flex-col-reverse md:flex-row">
          <div className="w-1/2">
            <h1 className=" font-extrabold text-3xl mt-[20px] md:text-5xl text-titleGreen">
              Welcome to our website
            </h1>
            <p className="mt-[20px] md:mt-20">
              Cooking is an art that brings people together. It allows us to
              share our culture, traditions, and experiences through the food we
              prepare and enjoy. Whether you are an experienced chef or a
              beginner in the kitchen, there is always something new to learn
              and discover.
            </p>
            <p className="mt-5">
              With the vast array of culinary recipes available, there is no
              shortage of options to choose from. You can indulge in comforting
              classic dishes or experiment with bold and exotic flavors from
              around the world. From appetizers to desserts, there is a recipe
              for every occasion that can be tailored to your taste and
              preferences.
            </p>

            <div className="btn mb-[10px] mt-[20px]  md:mt-20 ">
              <Link
                to={"/recipes"}
                className="btn p-3  w-[250px]  bg-customGreen border border-btnHomeB rounded-full hover:bg-customYellow hover:text-customBlack text-white text-center transition-colors duration-200 ease-in-out"
              >
                discover our collection
              </Link>
              <Link
                to={"/recipe/add"}
                className="btn p-3 mt-[5px] md:ml-10 w-[250px] text-white bg-customGreen border border-btnHomeB rounded-full hover:bg-customYellow hover:text-black text-center"
              >
                Share your recipes
              </Link>
            </div>
          </div>
          <div className=" w-1/2 container overflow-hidden m-auto md:ml-20 bg-customGreen rounded-b-full">
            <img src={platimage} className="w-[600px] spin" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
