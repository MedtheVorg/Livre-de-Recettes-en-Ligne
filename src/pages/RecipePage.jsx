import React, { useEffect, useState } from "react";
import { getRecipieById } from "../../server/apiMethods";
import dots from "../assets/6dots.svg";
import cheescake from "../assets/cheescake.png";

const RecipePage = () => {
  const [recipie, setRecipie] = useState([]);


  useEffect(() => {
    

    return handleGetRecipesById();
    
  }, [])

  

  const handleGetRecipesById = () => {
    
    getRecipieById(3).then(data => console.log(data));
  
    // setRecipie(getRecipieById(4))
    // // .then(data => console.log(data))
  }

  // setRecipie(getRecipieById(3))
  // console.log(recipie);

  

  return (
    <div className="container mx-auto my-8 px-8">
      <div>
      <div className="">
        <h1 className="text-4xl my-1">{
            recipie.title
          }</h1>
        <div className="flex justify-between flex-wrap items-center ">
            <div className="flex items-baseline gap-2">
              <img className="w-4" src={dots} alt="dots" />
              <p>{
                recipie.description
              }</p>
            </div>
            <div className="flex gap-4">
              <button className="bg-customGreen text-white rounded uppercase duration-200 hover:text-customBlack hover:bg-customYellow w-36 h-12 mt-2">Update Recipe</button>            
              <button className="bg-customGreen text-white rounded uppercase duration-200 hover:text-customBlack hover:bg-customYellow w-36 h-12 mt-2">Delete Recipe</button>            
            </div>
        </div>
        </div>
        <div className="my-4 rounded">
          <img src={cheescake} alt="cheescake"/>
        </div>
      </div>
      <main>
        <div className="recipe flex mt-8 pb-4">
          <article className="ingredient w-full mr-4 pb-6">
            <h4 className="text-3xl pb-4">Ingredients</h4>
            <div className="ingredietList">
              {
                recipie?.ingredients?.map((e, i) => {
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
            <article className="p-4 shadow-lg rounded-md bg-gray-100">
              <div className="flex items-center mb-3">
                <div className="desc">
                  <h3 className="text-yellow-500 text-xl">Nutrition</h3>
                  <p className="text-gray-500">Per Serving: </p>
                </div>
              </div>
              <div className="nutrition text-lg">
                <div className="mb-3">                    
                  <div className="flex mb-1.5">
                      <h6 className="text-green-900 mr-2">Calories</h6>
                      <p className="leading-[27px]">
                        {recipie?.nutrition?.calories}
                      </p>
                  </div>
                  <div className="flex mb-1.5">
                      <h6 className="text-green-900 mr-2">Carbohydrates</h6>
                      <p className="leading-[27px]">
                        {recipie?.nutrition?.carbohydrates}
                      </p>
                  </div>
                  <div className="flex mb-1.5">
                      <h6 className="text-green-900 mr-2">Protein</h6>
                      <p className="leading-[27px]">
                        {recipie?.nutrition?.protein}
                      </p>
                  </div>
                  <div className="flex mb-1.5">
                      <h6 className="text-green-900 mr-2">Fat</h6>
                      <p className="leading-[27px]">
                        {recipie?.nutrition?.fat}
                      </p>
                  </div>
                  <div className="flex mb-1.5">
                      <h6 className="text-green-900 mr-2">Sodium</h6>
                      <p className="leading-[27px]">
                        {recipie?.nutrition?.sodium}
                      </p>
                  </div>
                  <div className="flex mb-1.5">
                      <h6 className="text-green-900 mr-2">Fiber</h6>
                      <p className="leading-[27px]">
                        {recipie?.nutrition?.fiber}
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
            {
              recipie?.instructions?.map((e, i) => {
                return (
                  <li className="text-1xl mb-3" key={i}><span>{i+1}</span> - {e}</li>
                )
              })
            }
          </ul>
        </article>
      </main>
    </div>
  )
}

export default RecipePage;
