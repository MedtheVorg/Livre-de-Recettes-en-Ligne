import RecipesCard from '../components/ReipesPage/RecipesCard';
import Recipesfilter from '../components/ReipesPage/Recipesfilter';


const RecipesPage = () => {
  
  
return (
      <>
        <div className='mb-6'>
          {/* Start Hero Section */}
          <div className="bg-customGreen text-customWhite h-2/3 py-10">
            <div className='text-center mx-auto flex flex-col justify-center items-center flex-wrap w-1/2 mb-7'>
              <h2 className='my-6 text-4xl'>Fruits & Vegetables</h2>
              <p className='my-6 lg:w-3/4 sm:w-1/2'>Lorem ipsum dolor sit amet consectetur. Condimentum sed sed blandit purus nec nibh tortor ipsum.</p>
            </div>
          </div>
          {/* End Hero Section */}

          <div className='lg:mx-24 sm:mx-20 mt-24 grid grid-cols-10 gap-4'>
            {/* START FILTER SIDEBAR Section*/}
            <Recipesfilter />
            {/* END FILTER SIDEBAR  Section*/}

            {/* Start Recipes Cards Section */}
            <RecipesCard />
            {/* Start Recipes Cards Section */}
          </div>
        </div>
      </>
);
}
export default RecipesPage;