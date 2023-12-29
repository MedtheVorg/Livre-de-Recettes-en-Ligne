import { useEffect, useState } from 'react';
import {getRecipies} from '../../../server/apiMethods';

const RecipesCard = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const  fetchData = async () => {
      const data = await getRecipies();
      console.log(data);
      setRecipes(data);
    };
    fetchData();
  }, []);
  return (
    <main className='lg:col-span-7 col-span-full  mx-2  p-4'>
    <div className='flex justify-end'>
      <button className="bg-customGreen mb-5 hover:bg-customYellow  text-white py-2 px-4 rounded-2xl">Add Your Own Recipie</button>
    </div>
    <div className='text-customWhite rounded-2xl bg-cover bg-center h-72 flex flex-justify-center items-center px-3 mb-10' style={{ backgroundImage: 'url(https://premium-html-templates.mgtechnologies.co.in/mg-organics/assets/images/banner/product-grid-banner.jpg)'}}>
      <div>
        <h3 className='font-extrabold	text-3xl my-2'>You’re what you eat, so
        </h3>
        <p className='font-medium	text-3xl my-2'>
            Don’t Be Fast, Cheap, Easy Or Fake
        </p>
      </div>
    </div>
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-16'>
        {/* recipes Cards  */}
        {recipes.map((recipe,index) => ( 
          <div key={index} className='px-2 rounded-2xl border-borderColorCard border flex flex-col justify-center '>
            <img  className='w-full h-3/6 rounded-2xl'
            src="
            https://premium-html-templates.mgtechnologies.co.in/mg-organics/assets/images/products/single-product-slider1.jpg" alt="" />
            
              <div className='my-2'>
                <h5 className='	text-1xl text-customBlack font-bold'>{recipe.title}</h5>
                <p className="text-xl text-customBlack font-semibold mb-2">category</p>
                <button className="bg-customGreen w-full hover:bg-customYellow  text-white py-2 px-4 rounded-2xl">Show More</button>
              </div>
          </div>
        ))}
      </div>
    </div>
  </main>
  )
}

export default RecipesCard