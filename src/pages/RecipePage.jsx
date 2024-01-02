import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { getRecipeById } from '../../server/apiMethods';
import dots from '../assets/6dots.svg';

const RecipePage = () => {
  const [recipe, setRecipe] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getRecipeById(12).then((data) => {
      setRecipe(data);
    });
  }, []);

  // console.log(recipe.nutritionValues);

  // const { calories, protein } = recipe.nutritionValues;

  return (
    <div className="container mx-auto my-8 px-8">
      <div>
        <div className="">
          <h1 className="text-4xl my-1">{recipe.title}</h1>
          <div className="flex justify-between flex-wrap items-center ">
            <div className="flex items-baseline gap-2">
              <img className="w-4" src={dots} alt="dots" />
              <p>{recipe.description}</p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => navigate(`/RecipeUpdatePage/${recipe.id}`)}
                className="bg-customGreen text-white rounded uppercase duration-200 hover:text-customBlack hover:bg-customYellow w-36 h-12 mt-2"
              >
                Update Recipe
              </button>
              <button className="bg-customGreen text-white rounded uppercase duration-200 hover:text-customBlack hover:bg-customYellow w-36 h-12 mt-2">
                Delete Recipe
              </button>
            </div>
          </div>
        </div>
        <div className="my-4 rounded">
          <img className="w-full rounded" src={recipe.thumbnail} alt="image" />
        </div>
      </div>
      <main>
        <div className="recipe flex mt-8 pb-4">
          <article className="ingredient w-full mr-4 pb-6">
            <h4 className="text-3xl pb-4">Ingredients</h4>
            <div className="ingredietList">
              {recipe?.ingredients?.map((e, i) => {
                return (
                  <div className="text-1xl mb-3" key={i}>
                    <input type="checkbox" className="text-1xl mr-2" />
                    <label>{e}</label>
                  </div>
                );
              })}
            </div>
          </article>
          <aside className="w-80 w-[18rem]">
            <article className="p-4 shadow-lg rounded-md bg-gray-100">
              <div className="flex items-center mb-3">
                <div className="desc">
                  <h3 className="text-yellow-500 text-xl">Nutrition</h3>
                  {/*<p className="text-gray-500">Per Serving: </p>*/}
                </div>
              </div>
              <div className="nutrition text-lg">
                <div className="mb-3">
                  <div className="flex mb-1.5">
                    <h6 className="text-green-900 mr-2">Calories</h6>
                    <p className="leading-[27px]">
                      {recipe?.nutritionValues?.calories.value}
                      {recipe?.nutritionValues?.calories.unit}
                    </p>
                  </div>
                  <div className="flex mb-1.5">
                    <h6 className="text-green-900 mr-2">Carbohydrates</h6>
                    <p className="leading-[27px]">
                      {recipe?.nutritionValues?.carbohydrates.value}
                      {recipe?.nutritionValues?.carbohydrates.unit}
                    </p>
                  </div>
                  <div className="flex mb-1.5">
                    <h6 className="text-green-900 mr-2">Protein</h6>
                    <p className="leading-[27px]">
                      {recipe?.nutritionValues?.protein.value}
                      {recipe?.nutritionValues?.protein.unit}
                    </p>
                  </div>
                  <div className="flex mb-1.5">
                    <h6 className="text-green-900 mr-2">Fat</h6>
                    <p className="leading-[27px]">
                      {recipe?.nutritionValues?.fat.value}
                      {recipe?.nutritionValues?.fat.unit}
                    </p>
                  </div>
                  <div className="flex mb-1.5">
                    <h6 className="text-green-900 mr-2">Sodium</h6>
                    <p className="leading-[27px]">
                      {recipe?.nutritionValues?.sodium.value}
                      {recipe?.nutritionValues?.sodium.unit}
                    </p>
                  </div>
                  <div className="flex mb-1.5">
                    <h6 className="text-green-900 mr-2">Fiber</h6>
                    <p className="leading-[27px]">
                      {recipe?.nutritionValues?.fiber.value}
                      {recipe?.nutritionValues?.fiber.unit}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </aside>
        </div>

        <article className="instructions pb-6">
          <h4 className="text-3xl pb-5">Instructions</h4>
          <ul>
            {recipe?.instructions?.map((e, i) => {
              return (
                <li className="text-1xl mb-3" key={i}>
                  <span>{i + 1}</span> - {e}
                </li>
              );
            })}
          </ul>
        </article>
      </main>
    </div>
  );
};

export default RecipePage;
