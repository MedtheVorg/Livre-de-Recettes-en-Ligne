import React, { useState } from "react";
import { ItemsList } from "../components";
import { uploadImageToCloudinary } from "../utils/cloudinaryConfig";
import { createRecipe } from "../../server/apiMethods";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
import { placehoderImage } from "../assets";

const RecipeAddPage = () => {
  const [recipeImage, setRecipeImage] = useState(null);
  const [displayedImage, setDisplayedImage] = useState(null);
  const [title, setTitle] = useState(null);
  const [rating, setRating] = useState(null);
  const [description, setDescription] = useState(null);
  const [category, setCategory] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [equipements, setEquipements] = useState([]);
  const [nutritions, setNutritions] = useState({
    calories: {
      value: 0,
      unit: "kcal",
    },
    carbohydrates: {
      value: 0,
      unit: "g",
    },
    protein: {
      value: 0,
      unit: "g",
    },
    fat: {
      value: 0,
      unit: "g",
    },
    sodium: {
      value: 0,
      unit: "mg",
    },
    fiber: {
      value: 0,
      unit: "g",
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  async function uploadRecipe(eventObject) {
    eventObject.preventDefault();
    setIsLoading(true);
    if (
      !displayedImage ||
      !title ||
      !rating ||
      !description ||
      !category ||
      ingredients.length == 0 ||
      instructions.length == 0 ||
      equipements.length == 0
    ) {
      toast.warn("all fields are required");
      setIsLoading(false);
      return;
    }
    try {
      const uploadedImageUrl = await uploadImageToCloudinary(recipeImage);
      if (uploadedImageUrl == null) {
        throw new Error("Error occured while  uploading image to cloudinary");
      } else {
        const newRecipe = {
          imageUrl: uploadedImageUrl,
          thumbnail: uploadedImageUrl,
          title: title,
          rating: rating,
          description: description,
          ingredients: ingredients.map((ingredient) => ingredient.text),
          instrctions: instructions.map((intstruction) => intstruction.text),
          equipements: equipements.map((equipement) => equipement.text),
          category: category,
          nutrition: {
            calories: nutritions.calories,
            carbohydrates: nutritions.carbohydrates,
            protein: nutritions.protein,
            fat: nutritions.fat,
            sodium: nutritions.sodium,
            fiber: nutritions.fiber,
          },
        };
        const createdRecipe = await createRecipe(newRecipe);
        if (createRecipe !== null) {
          toast.success("recipe Created");
        }
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  function handleImageUpload(eventObject) {
    if (!eventObject.target.files[0]) return; // if user clicks cancel
    setRecipeImage(eventObject.target.files[0]);
    setFileToBase64(eventObject.target.files[0]);
  }

  function setFileToBase64(file) {
    // files reader API
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = (progressEvent) => {
      setDisplayedImage(progressEvent.currentTarget.result);
    };
  }

  return (
    <section className="container  h-full p-2 md:p-0  ">
      <div className="md:mt-6 border-2 border-customBorderColor p-6 max-w-screen-2xl mx-auto rounded-[20px] flex flex-col gap-y-4 bg-white">
        <h1
          className="text-4xl capitalize font-semibold text-left
           lg:text-6xl text-customGreen mb-8 p-2"
        >
          <span className="text-customYellow">new</span> Recipe.
        </h1>

        {/* image */}
        <div>
          <div className=" max-h-96 overflow-hidden bg-slate-600">
            <img
              src={displayedImage || placehoderImage}
              alt="random image"
              className="object-cover  w-full h-full aspect-video"
            />
          </div>
          <input
            required
            disabled={isLoading}
            type="file"
            accept="image/*"
            className=" file:bg-customGreen file:text-white file:mt-4 file:rounded-full file:p-3  file:uppercase file:text-sm file:font-semibold file:duration-200 file:hover:text-customBlack file:hover:bg-customYellow file:border-none file:cursor-pointer file:mr-6 
            file:disabled:bg-gray-500
            file:disabled:text-gray-400
            file:disabled:cursor-not-allowed
            "
            name="image"
            onChange={handleImageUpload}
          />
        </div>

        {/* title */}
        <hr className="w-1/2 mx-auto my-4" />
        <div className="flex flex-col gap-y-4">
          <label className="capitalize text-xl font-semibold">title :</label>
          <input
            required
            disabled={isLoading}
            type="text"
            className="bg-customLightGray p-4  transition-all duration-200 ease-in-out  border-2 border-transparent  focus:rounded-xl focus-within:border-customBorderColor placeholder:text-customBlack
            disabled:bg-customBorderColor
            disabled:placeholder:text-gray-400
            disabled:cursor-not-allowed
            "
            placeholder="Title"
            value={title}
            onChange={(eventObject) => {
              setTitle(eventObject.target.value);
            }}
          />
        </div>

        <hr className="w-1/2 mx-auto my-4" />

        <div className="grid grid-cols-2 gap-x-4">
          {/*rating  */}
          <div className="flex flex-col gap-y-4">
            <label className="capitalize text-xl font-semibold">rating :</label>
            <select
              disabled={isLoading}
              className="bg-customLightGray p-4  transition-all duration-200 ease-in-out  border-2 border-transparent  focus:rounded-xl focus-within:border-customBorderColor placeholder:text-customBlack cursor-pointer text-xl font-bold *:
            disabled:bg-customBorderColor
            disabled:placeholder:text-gray-400
            disabled:cursor-not-allowed
            "
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
          {/*category  */}
          <div className="flex flex-col gap-y-4">
            <label className="capitalize text-xl font-semibold">
              category :
            </label>
            <select
              disabled={isLoading}
              className="bg-customLightGray p-4  transition-all duration-200 ease-in-out  border-2 border-transparent  focus:rounded-xl focus-within:border-customBorderColor placeholder:text-customBlack cursor-pointer text-xl font-bold disabled:bg-customBorderColor
            disabled:placeholder:text-gray-400
            disabled:cursor-not-allowed container"
              onChange={(eventObject) => {
                setCategory(eventObject.target.value);
              }}
            >
              <option>Moroccan</option>
              <option>Mexican</option>
              <option>Italian</option>
              <option>Turkish</option>
              <option>Chinese</option>
            </select>
          </div>
        </div>

        {/* description */}
        <hr className="w-1/2 mx-auto my-4" />
        <div className="flex flex-col gap-y-4">
          <label className="capitalize text-xl font-semibold">
            description :{" "}
          </label>
          <textarea
            disabled={isLoading}
            value={description}
            onChange={(eventObject) => {
              setDescription(eventObject.target.value);
            }}
            className="bg-customLightGray p-4  transition-all duration-200 ease-in-out  border-2 border-transparent  focus:rounded-xl focus-within:border-customBorderColor placeholder:text-customBlack h-32 disabled:bg-customBorderColor
            disabled:placeholder:text-gray-400
            disabled:cursor-not-allowed"
          ></textarea>
        </div>

        {/* ingredients */}
        <ItemsList
          isLoading={isLoading}
          itemsList={ingredients}
          setItemsList={setIngredients}
          label={"ingredients"}
          placeholder={"ingredient"}
        />

        {/* instructions */}
        <ItemsList
          isLoading={isLoading}
          itemsList={instructions}
          setItemsList={setInstructions}
          label={"instructions"}
          placeholder={"instruction"}
        />
        {/* instructions */}
        <ItemsList
          isLoading={isLoading}
          itemsList={equipements}
          setItemsList={setEquipements}
          label={"equipements"}
          placeholder={"equipement"}
        />

        {/* Nutritions */}
        <hr className="w-1/2 mx-auto my-4" />
        <p className="capitalize text-xl font-semibold text-center mb-4 md:text-2xl ">
          nutritions
        </p>
        <div className="grid grid-cols-2 gap-8">
          {Object.entries(nutritions).map((nutrition, idx) => {
            const nutritionName = nutrition[0];
            const { value, unit } = nutrition[1];
            return (
              <div className="flex flex-col gap-y-4" key={idx}>
                <label className="capitalize font-semibold">
                  {nutritionName}
                </label>
                <div className="flex flex-row  items-center   border-2 border-customBorderColor">
                  <input
                    required
                    disabled={isLoading}
                    type="number"
                    name={nutritionName}
                    className=" grow p-4  transition-all duration-200 ease-in-out  border-2 border-transparent bg-transparent  focus:rounded-xl focus-within:border-customBorderColor placeholder:text-customBlack w-full border-r-2 border-r-customBorderColor
                      disabled:bg-customBorderColor
              disabled:placeholder:text-gray-400
              disabled:cursor-not-allowed
                      "
                    placeholder={nutritionName}
                    value={nutritions[nutritionName].value}
                    onChange={(eventObject) => {
                      setNutritions((prev) => {
                        let targetNutrition = prev[nutritionName];

                        targetNutrition = {
                          ...targetNutrition,
                          value: eventObject.target.value,
                        };

                        return {
                          ...prev,
                          [nutritionName]: targetNutrition,
                        };
                      });
                    }}
                  />
                  <span className="font-bold inline-flex items-center justify-center p-2  w-10">
                    {unit}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <button
          disabled={isLoading}
          onClick={uploadRecipe}
          className="bg-customGreen text-white  rounded-full p-4 uppercase text-sm font-semibold  animate hover:text-customBlack hover:bg-customYellow tracking-wider
          disabled:bg-gray-500
            disabled:text-gray-400
            disabled:cursor-not-allowed
            mt-8
          "
        >
          {isLoading ? <Spinner /> : "upload"}
        </button>
      </div>
    </section>
  );
};

export default RecipeAddPage;
