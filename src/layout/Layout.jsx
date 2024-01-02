import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components";
import { ErrorPage, RecipeAddPage, RecipesPage } from "../pages";
import HomePage from "../pages/HomePage";
import About from "../pages/About";

const Layout = () => {
  return (
    <div className="flex flex-col  h-screen">
      <header>
        <Navbar />
      </header>
      <main className="grow">
        <Routes>
          <Route path="/recipe" element={<RecipesPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipe/add" element={<RecipeAddPage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default Layout;
