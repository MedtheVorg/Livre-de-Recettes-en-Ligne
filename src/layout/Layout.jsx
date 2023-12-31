import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from '../components';
import { ErrorPage, RecipeAddPage, RecipesPage } from '../pages';
import Test from '../pages/Test';
import { AnimatePresence } from 'framer-motion';
import Animate from '../components/Animate';

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
            <Route
              index
              path="/"
              element={
                <Animate>
                  <Test />
                </Animate>
              }
            />
            <Route
              path="/recipe"
              element={
                <Animate>
                  <RecipesPage />
                </Animate>
              }
            />
            <Route
              path="/recipe/add"
              element={
                <Animate>
                  <RecipeAddPage />
                </Animate>
              }
            />
            <Route
              path="/recipes"
              element={
                <Animate>
                  <RecipesPage />
                </Animate>
              }
            />
            <Route
              path="/*"
              element={
                <Animate>
                  <ErrorPage />
                </Animate>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Layout;
