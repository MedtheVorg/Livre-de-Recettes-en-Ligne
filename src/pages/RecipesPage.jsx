// import RecipesCard from '../components/ReipesPage/RecipesCard';
// import Recipesfilter from '../components/ReipesPage/Recipesfilter';
import { useEffect, useState } from 'react';
import { getRecipes } from '../../server/apiMethods';
import { Link } from 'react-router-dom';

const RecipesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [recipes, setRecipes] = useState([]);
  // / Assuming categories is an array of objects with id, name, and recipes properties.
  const [categories, setCategories] = useState([]);

  // --------------------Unnecessary-------------
  // useEffect(() => {
  //   const uniqueCategories = [
  //     ...new Set(recipes.map((recipe) => recipe.category)),
  //   ];
  //   const updatedCategories = uniqueCategories.map((categoryName, index) => ({
  //     id: index + 1,
  //     name: categoryName,
  //     recipes: recipes.filter((recipe) => recipe.category === categoryName),
  //   }));
  //   setCategories(updatedCategories);
  // }, [recipes]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRecipes();
      setRecipes(data);

      //get categories from Recipes array
      setCategories(Array.from(new Set(data.map((ele) => ele.category))));
    };
    fetchData();
  }, []);

  const filterRecipes =
    selectedCategory === null
      ? recipes
      : recipes.filter((recipe) => recipe.category === selectedCategory);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <div className="mb-6  bg-white">
        {/* Start Hero Section */}
        <div className="bg-customGreen text-customWhite h-2/3 py-10">
          <div className="text-center mx-auto flex flex-col justify-center items-center flex-wrap w-1/2 mb-7">
            <h2 className="my-6 text-4xl">Fruits & Vegetables</h2>
            <p className="my-6 lg:w-3/4 sm:w-1/2">
              Lorem ipsum dolor sit amet consectetur. Condimentum sed sed
              blandit purus nec nibh tortor ipsum.
            </p>
          </div>
        </div>
        {/* End Hero Section */}

        <div className="lg:mx-24 sm:mx-20 mt-24 grid grid-cols-10 gap-4">
          {/* START FILTER SIDEBAR Section*/}
          <div className="h-max pb-8 pt-4 rounded-2xl col-span-full mx-2 lg:col-span-3 bg-customLightGray  p-4">
            <div className="text-customBlack">
              <h1 className="font-extrabold	text-2xl my-4">
                <a href="/">Search Your Product</a>
              </h1>
              <div className="my-6">
                <input
                  className="p-2 w-full rounded-lg focus:outline-none font-semibold"
                  placeholder="Search For..."
                  type="text"
                />
              </div>
            </div>
            <div>
              <h3 className="text-customBlack font-extrabold	text-2xl my-4">
                Recipes Categories
              </h3>
            </div>
            <ul className="mt-2">
              {/*  ALL*/}
              <li
                onClick={() => handleCategoryClick(null)}
                className="cursor-pointer"
              >
                <p className="text-base font-semibold flex justify-between mb-2 text-categoryFilterColor hover:text-customGreen">
                  <span className="">All</span>
                  <span className="">({recipes.length})</span>
                </p>
              </li>
              {categories.map((category, index) => (
                <li
                  key={index}
                  onClick={() => handleCategoryClick(category)}
                  className="cursor-pointer"
                >
                  <p className="text-base font-semibold flex justify-between mb-2 text-categoryFilterColor hover:text-customGreen">
                    <span className="">{category}</span>
                    <span className="">
                      (
                      {
                        recipes.filter((ele) => ele.category === category)
                          .length
                      }
                      )
                    </span>
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-11">
              <h5 className="text-customBlack font-extrabold	text-2xl my-4">
                Best Recipes
              </h5>
            </div>
            <div
              className="h-80 mt-4 text-customWhite rounded-2xl bg-cover bg-center flex items-center px-3 mb-10"
              style={{
                backgroundImage:
                  'url(https://premium-html-templates.mgtechnologies.co.in/mg-organics/assets/images/products/side-content-category-img1.png)',
              }}
            >
              <div>
                <p className="font-medium	text-lg my-2">Beverage</p>
                <p className="font-semibold	text-3xl my-2">Daily & Beverages</p>
                {/* <button className="mt-2 bg-transparent border w-4/5 hover:bg-customYellow  text-white py-2 px-4 rounded-2xl">Discover Now</button> */}
              </div>
            </div>
          </div>
          {/* END FILTER SIDEBAR  Section*/}

          {/* Start Recipes Cards Section */}
          <main className="lg:col-span-7 col-span-full mx-2 p-4">
            <div className="flex justify-end">
              <Link
                to={'/recipe/add'}
                className="bg-customGreen mb-5 hover:bg-customYellow  text-white py-2 px-4 rounded-2xl"
              >
                Add Your Own Recipie
              </Link>
            </div>
            <div
              className="text-customWhite rounded-2xl bg-cover bg-center h-72 flex flex-justify-center items-center px-3 mb-10"
              style={{
                backgroundImage:
                  'url(https://premium-html-templates.mgtechnologies.co.in/mg-organics/assets/images/banner/product-grid-banner.jpg)',
              }}
            >
              <div>
                <h3 className="font-extrabold	text-3xl my-2">
                  You’re what you eat,so
                </h3>
                <p className="font-medium	text-3xl my-2">
                  Don’t Be Fast, Cheap, Easy Or Fake
                </p>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-16">
                {/* recipes Cards  */}
                {/* {recipes.filter((recipe) => recipe.category === selectedCategory).map((recipe,index) => (
                      
                    ))} */}
                {filterRecipes.map((recipe, index) => (
                  <div
                    key={index}
                    className="p-2 rounded-2xl border-borderColorCard border max-h-max  flex gap-3 flex-col justify-center"
                  >
                    <img
                      className="w-full h-3/6 rounded-2xl"
                      src={recipe.imageUrl}
                      alt=""
                    />

                    <div className="flex gap-4 flex-col justify-center">
                      <h5 className="text-base  text-customBlack font-extrabold truncate">
                        {recipe.title}
                      </h5>
                      <p className="text-lg text-customBlack font-semibold mb-2">
                        {recipe.category}
                      </p>
                      <Link
                        to={`/recipe/${recipe.id}`}
                        className="bg-customGreen w-full hover:bg-customYellow  text-white py-2 px-4 rounded-2xl"
                      >
                        Show More
                      </Link>
                    </div>
                  </div>
                ))}

                {/*  */}
              </div>
            </div>
          </main>
          {/* End Recipes Cards Section */}
        </div>
      </div>
    </>
  );
};
export default RecipesPage;
