import {React} from 'react';
// import RecipesCard from '../components/ReipesPage/RecipesCard';
// import Recipesfilter from '../components/ReipesPage/Recipesfilter';
 
const RecipesPage = () => {
  
return (
    <>
      <div className='text-gray-600'>
        <div className="">
          <div>
            <h2>Fruits & Vegetables</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Condimentum sed sed blandit purus nec nibh tortor ipsum.</p>
          </div>
        </div>
        <div>
          {/* START FILTER SIDEBAR */}
          <div>
            <div>
              <h1>
                <a href="/">Food Fliter</a>
              </h1>
            </div>
            <ul>
              <li className='text-gray-700' >
                <a href="#">
                  <span>one</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>two</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>three</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>four</span>
                </a>
              </li>
            </ul>
          </div>
          {/* END FILTER SIDEBAR */}
          <main>
            <div>
              <img src="https://premium-html-templates.mgtechnologies.co.in/mg-organics/assets/images/banner/product-grid-banner.jpg" alt="" />
              <h3>You’re what you eat,
                <span>
                  so Don’t Be Fast, Cheap, Easy Or Fake
                </span>
              </h3>
            </div>
            <div>
              <h4>Latest Recipes</h4>
              <div>
                {/* recipes Cards  */}
                <div>
                  <img src="" alt="" />
                  <div>
                    <h5>title</h5>
                    <h5>category</h5>
                    <button>Show More</button>
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