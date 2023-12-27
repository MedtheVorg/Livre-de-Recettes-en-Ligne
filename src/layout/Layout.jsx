import { Routes, Route } from "react-router-dom";
import { ErrorPage, RecipieAddPage } from "../pages";

const Layout = () => {
  return (
    <div className="flex flex-col  h-screen">
      <header>// add NavBar component here</header>
      <main className="grow ">
        <Routes>
          // copy the next line and add your componenet path + component name
          <Route path="/recipie/add" element={<RecipieAddPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default Layout;
