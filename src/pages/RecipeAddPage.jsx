import React, { useState } from "react";
import darkSoulsImage from "./dark_souls.jpg";
import { ItemsList } from "../components";

const RecipeAddPage = () => {
  const [recipeImage, setRecipeImage] = useState("");
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(1);
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [equipements, setEquipements] = useState([]);

  function uploadRecipe(eventObject) {
    eventObject.preventDefault();
    console.log(`ingredients : ${ingredients}`);
    console.log(`instructions : ${instructions}`);
    console.log(`equipements : ${equipements}`);
    console.log(`<title></title> : ${title}`);
    console.log(`rating : ${rating}`);
    console.log(`description : ${description}`);
    console.log(`Image : ${recipeImage}`);
  }

  function handleImageUpload() {}

  return (
    <section className="container  h-full p-2 md:p-0  ">
      <div className="md:mt-6 border-2 border-customBorderColor p-6 max-w-screen-md mx-auto rounded-[20px] flex flex-col gap-y-4">
        <h1 className="text-4xl capitalize font-semibold text-center">
          add your own Recipe !{" "}
        </h1>

        {/* image */}
        <div>
          <div className="max-h-80 overflow-hidden bg-slate-600">
            <img
              src={darkSoulsImage}
              alt="random image"
              className="object-cover aspect-video w-full h-full"
            />
          </div>
          <input
            type="file"
            accept="image/*"
            className=" file:bg-customGreen file:text-white file:mt-4 file:rounded-full file:p-3  file:uppercase file:text-sm file:font-semibold file:duration-200 file:hover:text-customBlack file:hover:bg-customYellow file:border-none file:cursor-pointer file:mr-6"
            name="image"
            onChange={(eventObject) => {
              setRecipeImage(eventObject.target.value);
            }}
          />
        </div>

        {/* title */}
        <hr className="w-1/2 mx-auto my-4" />
        <div className="flex flex-col gap-y-4">
          <label className="capitalize text-xl font-semibold">title : </label>
          <input
            type="text"
            className="bg-customLightGray p-4  transition-all duration-200 ease-in-out  border-2 border-transparent  focus:rounded-xl focus-within:border-customBorderColor placeholder:text-customBlack"
            placeholder="Title"
            value={title}
            onChange={(eventObject) => {
              setTitle(eventObject.target.value);
            }}
          />
        </div>

        {/*rating  */}
        <hr className="w-1/2 mx-auto my-4" />
        <div className="flex flex-col gap-y-4">
          <label className="capitalize text-xl font-semibold">rating : </label>
          <select
            name="rating"
            className="bg-customLightGray p-4  transition-all duration-200 ease-in-out  border-2 border-transparent  focus:rounded-xl focus-within:border-customBorderColor placeholder:text-customBlack cursor-pointer text-xl font-bold"
            onChange={(eventObject) => {
              setRating(eventObject.target.value);
            }}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>

        {/* description */}
        <hr className="w-1/2 mx-auto my-4" />
        <div className="flex flex-col gap-y-4">
          <label className="capitalize text-xl font-semibold">
            description :{" "}
          </label>
          <textarea
            value={description}
            onChange={(eventObject) => {
              setDescription(eventObject.target.value);
            }}
            className="bg-customLightGray p-4  transition-all duration-200 ease-in-out  border-2 border-transparent  focus:rounded-xl focus-within:border-customBorderColor placeholder:text-customBlack h-32"
          ></textarea>
        </div>

        {/* ingredients */}
        <ItemsList
          itemsList={ingredients}
          setItemsList={setIngredients}
          label={"ingredients"}
          placeholder={"ingredient"}
        />

        {/* instructions */}
        <ItemsList
          itemsList={instructions}
          setItemsList={setInstructions}
          label={"instructions"}
          placeholder={"instruction"}
        />
        {/* instructions */}
        <ItemsList
          itemsList={equipements}
          setItemsList={setEquipements}
          label={"equipements"}
          placeholder={"equipement"}
        />

        <button
          onClick={uploadRecipe}
          className="bg-customGreen text-white mt-4 rounded-full p-3 uppercase text-sm font-semibold  duration-200 hover:text-customBlack hover:bg-customYellow tracking-wider"
        >
          upload
        </button>
      </div>
    </section>
  );
};

export default RecipeAddPage;
