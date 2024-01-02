import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from '../components';
import { ErrorPage, RecipeAddPage, RecipePage, RecipesPage } from '../pages';
import Test from '../pages/Test';
import { AnimatePresence } from 'framer-motion';
import withAnimation from '../components/withAnimation';

const TestWA = withAnimation(Test);
const RecipePageWA = withAnimation(RecipePage);
const RecipeAddPageWA = withAnimation(RecipeAddPage);
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
            <Route index path="/" element={<TestWA />} />
            <Route path="/recipe" element={<RecipePageWA />} />
            <Route path="/recipe/add" element={<RecipeAddPageWA />} />
            <Route path="/recipes" element={<RecipesPageWA />} />
            <Route path="/*" element={<ErrorPageWA />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Layout;
