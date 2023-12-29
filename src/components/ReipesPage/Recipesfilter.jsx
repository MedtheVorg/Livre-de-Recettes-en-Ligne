const Recipesfilter = () => {
    
  return (
    <div className='h-max pb-7 pt-4 rounded-2xl col-span-full mx-2 lg:col-span-3 bg-customLightGray  p-4'>
      <div className='text-customBlack'>
        <h1 className='font-extrabold	text-2xl my-4'>
          <a href="/">Search Your Product</a>
        </h1>
        <div className='my-6'>
          <input className='p-2 w-full rounded-lg focus:outline-none font-semibold' placeholder="Search For..." type="text" />
        </div>
      </div>
      <div>
        <h3 className='text-customBlack font-extrabold	text-2xl my-4'>Recipes Categories</h3>
      </div>
      <ul className='mt-2'>
        <li className='' >
          <a href="#" className="text-base font-semibold flex justify-between mb-2 text-categoryFilterColor hover:text-customGreen">
            <p className="">Moroccan</p>
            <p className="">(33)</p>
          </a>
        </li>
        <li className='' >
          <a href="#" className="text-base font-semibold flex justify-between mb-2 text-categoryFilterColor hover:text-slate-950">
            <p className="">American</p>
            <p className="">(05)</p>
          </a>
        </li>
        <li className='' >
          <a href="#" className="text-base font-semibold flex justify-between mb-2 text-categoryFilterColor hover:text-customGreen">
            <p className="  ">Italien</p>
            <p className="">(10)</p>
          </a>
        </li>
        <li className='' >
          <a href="#" className="text-base font-semibold flex justify-between mb-2 text-categoryFilterColor hover:text-customGreen">
            <p className="  ">Mexecan</p>
            <p className="">(13)</p>
          </a>
        </li>
        <div className="mt-11">
          <h5 className="text-customBlack font-extrabold	text-2xl my-4">Best Recipes</h5>
        </div>
        <div className='h-80 mt-4 text-customWhite rounded-2xl bg-cover bg-center flex items-center px-3 mb-10' style={{ backgroundImage: 'url(https://premium-html-templates.mgtechnologies.co.in/mg-organics/assets/images/products/side-content-category-img1.png)'}}>
          <div>
            <p className='font-medium	text-lg my-2'>Beverage
            </p>
            <p className='font-semibold	text-3xl my-2'>
            Daily & Beverages
            </p>
            {/* <button className="mt-2 bg-transparent border w-4/5 hover:bg-customYellow  text-white py-2 px-4 rounded-2xl">Discover Now</button> */}
          </div>
        </div>
      
      </ul>
    </div>
  )
}

export default Recipesfilter