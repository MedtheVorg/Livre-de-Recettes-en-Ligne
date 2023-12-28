import { Routes, Route } from "react-router-dom";
import { ErrorPage, RecipieAddPage } from "../pages";
import RecipesPage from "../pages/RecipesPage";

const Layout = () => {
  return (
    <div className="flex flex-col  h-screen">
      <header></header>
      <main className="grow ">
        <Routes>
          {/* // copy the next line and add your componenet path + component name */}
          <Route path="/recipie/add" element={<RecipieAddPage />} />
          <Route path="/*" element={<ErrorPage />}/>
          <Route path="/recipes" element={<RecipesPage />}/>
        </Routes>
      </main>
    </div>
  );
};

export default Layout;
