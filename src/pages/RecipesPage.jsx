// import RecipesCard from '../components/ReipesPage/RecipesCard';
// import Recipesfilter from '../components/ReipesPage/Recipesfilter';
// import {getRecipies} from '../../server/apiMethods';

const RecipesPage = () => {
  
return (
    <>
      <div className='text-gray-600 '>
        <div className="bg-customGreen text-customWhite h-2/3 py-10">
          <div className='text-center mx-auto flex flex-col justify-center items-center flex-wrap w-1/2 mb-7'>
            <h2 className='my-6 text-4xl'>Fruits & Vegetables</h2>
            <p className='my-6 lg:w-3/4 sm:w-1/2'>Lorem ipsum dolor sit amet consectetur. Condimentum sed sed blandit purus nec nibh tortor ipsum.</p>
          </div>
        </div>
        <div className='lg:mx-28 sm:mx-20 mt-24 grid grid-cols-10 gap-4 h-screen'>
          {/* START FILTER SIDEBAR */}
          <div className='col-span-full mx-2 lg:col-span-3  bg-customLightGray rounded-lg  flex flex-col p-4'>
            <div className='text-customBlack'>
              <h1 className='font-extrabold	text-2xl my-4'>
                <a href="/">Search Your Product</a>
              </h1>
              <div className='my-6'>
                <input className='p-2 w-full placeholder:Search For' type="text" />
              </div>
            </div>
            <div>
              <h3 className='text-customBlack font-extrabold	text-2xl my-4'>Recipes Categories</h3>
            </div>
            <ul className='mt-2'>
              <li className='font-medium text-xl mb-2 text-categoryFilterColor' >
                <a href="#">
                  <span>Moroccan</span>
                </a>
              </li>
              <li className='font-medium text-xl mb-2 text-categoryFilterColor' >
                <a href="#">
                  <span>Italien</span>
                </a>
              </li>
              <li className='font-medium text-xl mb-2 text-categoryFilterColor' >
                <a href="#">
                  <span>Mexecan</span>
                </a>
              </li>
              <li className='font-medium text-xl mb-2 text-categoryFilterColor' >
                <a href="#">
                  <span>Canadien</span>
                </a>
              </li>
             
            </ul>
          </div>
          {/* END FILTER SIDEBAR */}
          <main className='lg:col-span-7 col-span-full  mx-2  p-4'>
            <div className='text-customWhite rounded-lg bg-cover bg-center h-72 flex flex-justify-center items-center px-3 mb-10' style={{ backgroundImage: 'url(https://premium-html-templates.mgtechnologies.co.in/mg-organics/assets/images/banner/product-grid-banner.jpg)' }}>
              <div>
                <h3 className='font-extrabold	text-3xl my-2'>You’re what you eat, so
                </h3>
                <p className='font-medium	text-3xl my-2'>
                    Don’t Be Fast, Cheap, Easy Or Fake
                </p>
              </div>
            </div>
            <div>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-16'>
                {/* recipes Cards  */}
                <div className='px-2 rounded-2xl border-borderColorCard border-2 flex flex-col justify-center'>
                  <img  className='w-full h-3/6 rounded-2xl'
                  src="
                  https://premium-html-templates.mgtechnologies.co.in/mg-organics/assets/images/products/single-product-slider1.jpg" alt="" />
                  
                  <div className='my-2'>
                    <h5 className='	text-1xl text-customBlack font-bold'>Title</h5>
                    <p className="text-xl text-customBlack font-semibold mb-2">category</p>
                    <button className="bg-customGreen w-full hover:bg-sky-950  text-white py-2 px-4 rounded-2xl">Show More</button>
                  </div>
                </div>
               
              </div>
            </div>
          </main>
        </div>
      </div>

    </>
);
}
export default RecipesPage;