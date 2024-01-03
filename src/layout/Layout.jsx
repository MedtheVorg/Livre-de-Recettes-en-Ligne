import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "../components";
import { ErrorPage, RecipeAddPage, RecipePage, RecipesPage } from "../pages";
import { AnimatePresence } from "framer-motion";
import withAnimation from "../components/withAnimation";
import RecipeUpdatePage from "../pages/RecipeUpdatePage";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Footer from "../components/Footer";

const HomePageWA = withAnimation(HomePage);
const AboutPageWA = withAnimation(About);
const RecipePageWA = withAnimation(RecipePage);
const RecipeAddPageWA = withAnimation(RecipeAddPage);
const RecipeUpdatePageWA = withAnimation(RecipeUpdatePage);
const RecipesPageWA = withAnimation(RecipesPage);
const ErrorPageWA = withAnimation(ErrorPage);

const Layout = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col  min-h-screen  ">
      <header>
        <Navbar />
      </header>
      <main className="grow bg-customLightGray overflow-hidden ">
        <AnimatePresence initial={false} mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePageWA />} />
            <Route path="/about" element={<AboutPageWA />} />
            <Route path="/recipe/:recipeId" element={<RecipePageWA />} />
            <Route path="/recipe/add" element={<RecipeAddPageWA />} />
            <Route
              path="/recipe/update/:recipeId"
              element={<RecipeUpdatePageWA />}
            />
            <Route path="/recipes" element={<RecipesPageWA />} />
            <Route path="/*" element={<ErrorPageWA />} />
          </Routes>
        </AnimatePresence>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
