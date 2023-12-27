import { Routes, Route } from "react-router-dom";
import { ErrorPage, RecipeAddPage, RecipePage } from "../pages";
import { Navbar } from "../components";

const Layout = () => {
  return (
    <div className="flex flex-col  h-screen">
      <header>
        <Navbar />
      </header>
      <main className="grow">
        <Routes>
          <Route path="/recipe" element={<RecipePage />} />
          <Route path="/recipe/add" element={<RecipeAddPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default Layout;
