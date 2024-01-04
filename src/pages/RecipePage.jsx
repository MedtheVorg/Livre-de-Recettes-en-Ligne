import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { getRecipeById, deleteRecipeById } from "../../server/apiMethods";
import dots from "../assets/6dots.svg";


const RecipePage = () => {
  const [recipe, setRecipe] = useState([]);
  const {recipeId} = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  useEffect(() => {
    getRecipeById(recipeId).then(data => {
      // Check if the ID is Exist
      if(data.id === undefined) {
        handleGoRecipesPage();
      } else {
        setRecipe(data);
      }
    });

  }, [])

  // Go to Recipes page
  const handleGoRecipesPage = () => {
    navigate('/recipes')
  }

  // Delete From the database
  const handlDeleteRecipe = () => deleteRecipeById(recipeId);

  return <div className="container mx-auto my-8 px-8">
    <div className="">
      <h1 className="text-4xl my-1">{recipe.title}</h1>
      <div className="flex justify-between flex-wrap items-center ">
          <div className="flex items-baseline gap-2">
            <img className="w-4" src={dots} alt="dots" />
            <p>{recipe.description}</p>
          </div>
          <div className="flex gap-4">
            <Link to={`/recipe/update/${recipeId}`} className="p-3.5 text-center bg-customGreen text-white rounded uppercase duration-200 hover:text-customBlack hover:bg-customYellow w-36 h-12 mt-2">Update Recipe</Link>
            <button onClick={() => setShow(!show)} className="p-3.5 text-center bg-red-500 text-white rounded uppercase duration-200 hover:text-customBlack hover:bg-customYellow w-36 h-12 mt-2">
              Delete Recipe
            </button>
            {/*Alert for deleting*/}
            <div className={show ? "block" : "hidden"}>
              <div className="fixed flex flex-col content-center w-full top-0 bottom-0 left-0 right-0 h-screen fixed z-50 flex justify-center items-center bg-gray-100 border border-red-400 text-red-700 px-4 py-3">
                <strong className="font-bold text-xl mb-4">You want to delete this recipe?</strong>
                <div className="flex">
                  <Link to={`/recipes`} onClick={handlDeleteRecipe} className="p-3.5 text-center bg-red-500 text-white rounded uppercase duration-200 hover:text-customBlack hover:bg-customYellow mr-2 w-16">Yes</Link>
                  <button onClick={() => setShow(!show)} className="p-3.5 text-center bg-customGreen text-white rounded uppercase duration-200 hover:text-customBlack hover:bg-customYellow w-16">No</button>
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>
      <div className=" my-4 min-w-3 rounded relative">
        <img className="w-full rounded" src={recipe.imageUrl} alt="image"/>
        <div className="absolute rounded bottom-0 right-0 left-0 w-full text-green-900 bg-yellow-500 text-base p-4 text-xl flex p-1.75 items-center justify-around">
          <h5 className="">Category: <span>{recipe?.category}</span></h5>
          <h5 className="">Rating: <span>{recipe?.rating}</span></h5>
        </div>
      </div>
    
    <main>
      <div className="flex flex-wrap flex-col-reverse sm:flex-row sm:flex-nowrap mt-8 pb-4">
      {/*Ingredients */}
      <article className="w-full mr-4 pb-6">
          <h4 className="text-3xl pb-4">Ingredients</h4>
          <div>
            {
              recipe?.ingredients?.map((e, i) => {
                return (
                  <div className="text-1xl mb-3" key={i}>
                    <input type="checkbox" className="text-1xl mr-2" />
                    <label>{e}</label>
                  </div>
                )
              })
            }
          </div>
        </article>
        <aside className="w-80 w-[18rem]">
          <article className="p-6 mb-12 shadow-lg rounded-md bg-gray-100">
            <div className="mb-3">
                <h3 className="text-yellow-500 text-xl">Nutrition</h3>
            </div>
            <div className="Nutrition text-lg">
              <div className="mb-3">
                <div className="flex mb-1.5">
                  <h6 className="text-green-900 mr-2">calories: </h6>
                  <p className="leading-[27px]">
                    {recipe?.nutritionValues?.carbohydrates.value}
                    {recipe?.nutritionValues?.carbohydrates.unit}
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
      <article className="pb-6">
        <div className="pb-6">
          {/* Instructions */}
          <h4 className="text-3xl pb-6">Instructions:</h4>
          <ul>
            {
              recipe?.instructions?.map((e, i) => {
                return (
                  <li className="text-1xl leading-8 mb-6" key={i}>
                    <span className="text-1xl mr-3 font-bold px-3 py-1.5 text-green-900 bg-yellow-500 rounded-md">{i+1}</span>  
                    {e}
                  </li>
                )
              })
            }
          </ul>
        </div>
        {/*Equipments */}
        <div className="Equipments">
          <h4 className="text-3xl pb-6">Equipments</h4>
          <ul>
            {
              recipe?.equipments?.map((e, i) => {
                return (
                  <li className="text-1xl mb-3" key={i}>
                     {e}
                  </li>
                )
              })
            }
          </ul>
        </div>
      </article>
    </main>
  </div>
}

export default RecipePage;
