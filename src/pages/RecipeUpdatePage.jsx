import { useState } from 'react';
import { ItemsList } from '../components';
import {
  removeImageFromCloudinary,
  uploadImageToCloudinary,
} from '../utils/cloudinaryConfig';
import { getRecipeById, updateRecipeById } from '../../server/apiMethods';
import Spinner from '../components/Spinner';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { v4 as uuidGenerator } from 'uuid';

const RecipeUpdatePage = () => {
  const [recipeImage, setRecipeImage] = useState(null);
  const [displayedImage, setDisplayedImage] = useState(null);
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(null);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [equipments, setEquipments] = useState([]);
  const [nutritionValues, setNutritionValues] = useState({
    calories: {
      value: 0,
      unit: 'kcal',
    },
    carbohydrates: {
      value: 0,
      unit: 'g',
    },
    protein: {
      value: 0,
      unit: 'g',
    },
    fat: {
      value: 0,
      unit: 'g',
    },
    sodium: {
      value: 0,
      unit: 'mg',
    },
    fiber: {
      value: 0,
      unit: 'g',
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const navigate = useNavigate();

  async function updateRecipe(eventObject) {
    eventObject.preventDefault();
    setIsSubmitting(true);
    if (
      !displayedImage ||
      !title ||
      !rating ||
      !description ||
      !category ||
      ingredients.length == 0 ||
      instructions.length == 0 ||
      equipments.length == 0
    ) {
      toast.warn('all fields are required');
      setIsSubmitting(false);
      return;
    }
    try {
      let uploadedImageUrl;
      if (recipeImage !== null) {
        // we have a new uploaded Image
        uploadedImageUrl = await uploadImageToCloudinary(recipeImage);
        if (uploadedImageUrl == null) {
          throw new Error(
            'Error occurred while  uploading image to cloudinary'
          );
        } else {
          // delete the old image
          const publicId = new URL(displayedImage).pathname.split('/')[4];
          const isDeleted = await removeImageFromCloudinary(
            'recipes_images/1703465910680_ee1jpl.gif'
          );
        }
      }

      const updatedRecipe = {
        imageUrl: uploadedImageUrl || displayedImage,
        thumbnail: uploadedImageUrl || displayedImage,
        title: title,
        rating: rating,
        description: description,
        ingredients: ingredients.map((ingredient) => ingredient.text),
        instructions: instructions.map((instruction) => instruction.text),
        equipments: equipments.map((equipment) => equipment.text),
        category: category,
        nutritionValues: {
          calories: {
            value: nutritionValues.calories.value,
            unit: nutritionValues.calories.unit,
          },
          carbohydrates: {
            value: nutritionValues.carbohydrates.value,
            unit: nutritionValues.carbohydrates.unit,
          },
          protein: {
            value: nutritionValues.protein.value,
            unit: nutritionValues.protein.unit,
          },
          fat: {
            value: nutritionValues.fat.value,
            unit: nutritionValues.fat.unit,
          },
          sodium: {
            value: nutritionValues.sodium.value,
            unit: nutritionValues.sodium.unit,
          },
          fiber: {
            value: nutritionValues.fiber.value,
            unit: nutritionValues.fiber.unit,
          },
        },
      };
      const responseData = await updateRecipeById(
        params.recipeId,
        updatedRecipe
      );

      if (responseData !== null) {
        toast.success('recipe updated Successfully');
      } else {
        toast.error('Error occurred while updating the recipe');
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
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

  useEffect(() => {
    // fetch recipe corresponding  to Id
    async function fetchRecipe() {
      const { recipeId } = params;

      try {
        const fetchedRecipe = await getRecipeById(recipeId);
        if (Object.keys(fetchedRecipe).length == 0) {
          console.log('fetched recipe :', fetchedRecipe);
          // toast.error('Error occurred while fetching recipe data');
          navigate('/');
          return;
        } else {
          setDisplayedImage(fetchedRecipe.imageUrl);
          setTitle(fetchedRecipe.title);
          setRating(Math.floor(fetchedRecipe.rating));
          setDescription(fetchedRecipe.description);
          setCategory(fetchedRecipe.category);
          setIngredients(
            fetchedRecipe.ingredients.map((item) => {
              return { id: uuidGenerator(), text: item };
            })
          );
          setInstructions(
            fetchedRecipe.instructions.map((item) => {
              return { id: uuidGenerator(), text: item };
            })
          );
          setEquipments(
            fetchedRecipe.equipments.map((item) => {
              return { id: uuidGenerator(), text: item };
            })
          );
          setNutritionValues(fetchedRecipe.nutritionValues);

          setIsLoading(false);
        }
      } catch (error) {
        toast.error(error.message);
        console.error(error.message);
      }
    }

    fetchRecipe();
  }, []);

  return (
    <section className="container  h-full p-2 md:p-16  ">
      <div
        className={`md:mt-6 border-2 border-customBorderColor p-6 max-w-screen-2xl mx-auto rounded-[20px] flex flex-col gap-y-4 bg-white relative ${
          isLoading ? 'animate-pulse ' : ''
        }`}
      >
        <h1
          className="text-4xl capitalize font-semibold text-left
           lg:text-6xl text-customGreen mb-8 p-2"
        >
          <span className="text-customYellow">Update </span> Recipe.
        </h1>

        {/* image */}
        <div>
          {displayedImage ? (
            <div className=" max-h-96 overflow-hidden bg-slate-600 ">
              <img
                src={displayedImage}
                alt="random image"
                className="object-cover  w-full h-full aspect-video"
              />
            </div>
          ) : (
            <div className=" h-96 overflow-hidden bg-slate-600/50 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
          )}

          <input
            required
            disabled={isSubmitting || isLoading}
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
            disabled={isSubmitting || isLoading}
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

        {/*rating  */}
        <hr className="w-1/2 mx-auto my-4" />
        <div className="grid grid-cols-2 gap-x-4">
          <div className="flex flex-col gap-y-4">
            <label className="capitalize text-xl font-semibold">rating :</label>
            <select
              disabled={isSubmitting || isLoading}
              className="bg-customLightGray p-4  transition-all duration-200 ease-in-out  border-2 border-transparent  focus:rounded-xl focus-within:border-customBorderColor placeholder:text-customBlack cursor-pointer text-xl font-bold *:
            disabled:bg-customBorderColor
            disabled:placeholder:text-gray-400
            disabled:cursor-not-allowed
            "
              value={rating}
              onChange={(eventObject) => {
                setRating(eventObject.target.value);
              }}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
          {/*category  */}
          <div className="flex flex-col gap-y-4">
            <label className="capitalize text-xl font-semibold">
              category :
            </label>
            <select
              disabled={isSubmitting || isLoading}
              className="bg-customLightGray p-4  transition-all duration-200 ease-in-out  border-2 border-transparent  focus:rounded-xl focus-within:border-customBorderColor placeholder:text-customBlack cursor-pointer text-xl font-bold disabled:bg-customBorderColor
            disabled:placeholder:text-gray-400
            disabled:cursor-not-allowed container"
              value={category}
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
            description :{' '}
          </label>
          <textarea
            disabled={isSubmitting || isLoading}
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
          isSubmitting={isSubmitting}
          itemsList={ingredients}
          setItemsList={setIngredients}
          label={'ingredients'}
          placeholder={'ingredient'}
          isLoading={isLoading}
        />

        {/* instructions */}
        <ItemsList
          isSubmitting={isSubmitting}
          itemsList={instructions}
          setItemsList={setInstructions}
          label={'instructions'}
          placeholder={'instruction'}
          isLoading={isLoading}
        />
        {/* instructions */}
        <ItemsList
          isSubmitting={isSubmitting}
          itemsList={equipments}
          setItemsList={setEquipments}
          label={'equipments'}
          placeholder={'equipement'}
          isLoading={isLoading}
        />

        {/* NutritionValues */}
        <hr className="w-1/2 mx-auto my-4" />
        <p className="capitalize text-xl font-semibold text-center mb-4 md:text-2xl ">
          nutritionValues
        </p>
        <div className="grid grid-cols-2 gap-8">
          {Object.entries(nutritionValues).map((nutritionValue, idx) => {
            const nutritionName = nutritionValue[0];
            const { value, unit } = nutritionValue[1];
            return (
              <div className="flex flex-col gap-y-4" key={idx}>
                <label className="capitalize font-semibold">
                  {nutritionName}
                </label>
                <div className="flex flex-row  items-center   border-2 border-customBorderColor">
                  <input
                    required
                    disabled={isSubmitting || isLoading}
                    type="number"
                    name={nutritionName}
                    className=" grow p-4  transition-all duration-200 ease-in-out  border-2 border-transparent bg-transparent  focus:rounded-xl focus-within:border-customBorderColor placeholder:text-customBlack w-full border-r-2 border-r-customBorderColor
                      disabled:bg-customBorderColor
              disabled:placeholder:text-gray-400
              disabled:cursor-not-allowed
                      "
                    placeholder={nutritionName}
                    value={nutritionValues[nutritionName].value}
                    onChange={(eventObject) => {
                      setNutritionValues((prev) => {
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
          disabled={isSubmitting || isLoading}
          onClick={updateRecipe}
          className="bg-customGreen text-white  rounded-full p-4 uppercase text-sm font-semibold  animate hover:text-customBlack hover:bg-customYellow tracking-wider
          disabled:bg-gray-500
            disabled:text-gray-400
            disabled:cursor-not-allowed
            mt-8
          "
        >
          {isSubmitting ? <Spinner /> : 'update'}
        </button>
      </div>
    </section>
  );
};

export default RecipeUpdatePage;
