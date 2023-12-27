import { Routes, Route } from "react-router-dom";
import { ErrorPage, RecipieAddPage, RecipiePage } from "../pages";

const Layout = () => {
  return (
    <div className="flex flex-col  h-screen">
      <header></header>
      <main className="grow">
        <Routes>
          <Route path="/recipie" element={<RecipiePage/>} />
          <Route path="/recipie/add" element={<RecipieAddPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default Layout;
