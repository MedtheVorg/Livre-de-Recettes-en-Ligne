import platimage from '../assets/images/2.png';
import { Link } from 'react-router-dom';
function HomePage() {
  return (
    <>
      <div className="Hero h-full">
        <div className="container flex  items-center flex-col-reverse md:flex-row md:gap-x-2 h-full">
          <div className="md:w-1/2 p-4 md:p-0">
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

            <div className=" flex justify-between lg:justify-start  lg:gap-x-2 mt-8  px-2 items-center text-sm lg:text-base ">
              <Link
                to={'/recipes'}
                className=" p-3    bg-customGreen border  rounded-full hover:bg-customYellow hover:text-customBlack text-white text-center transition-colors duration-400 ease-in-out"
              >
                discover our collection
              </Link>
              <Link
                to={'/recipe/add'}
                className=" p-3    bg-customGreen border  rounded-full hover:bg-customYellow hover:text-customBlack text-white text-center transition-colors duration-400 ease-in-out"
              >
                Share your recipes
              </Link>
            </div>
          </div>

          <div className=" md:w-1/2   bg-customGreen rounded-b-full md:h-full">
            <img src={platimage} className=" spin w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
