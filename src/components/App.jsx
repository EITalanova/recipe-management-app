import { lazy } from "react";
import { Routes, Route, Navigate, useLocatoin } from 'react-router-dom';


const Main = lazy(() => import('../pages/Main'));
const Recipe = lazy(() => import('../pages/Recipe'))

export const App = () => {
  return (
  <>
      <Routes>
        <Route path="/" element={
          <Main />
        } />

         <Route
            path="recipe/:recipeId"
            element={
                <Recipe />
            }
        />

        </Routes>
    </>
  );
};
