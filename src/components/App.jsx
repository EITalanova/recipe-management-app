import { lazy } from "react";
import { Routes, Route, Navigate, useLocatoin } from 'react-router-dom';


const Main = lazy(() => import('../pages/Main'));

export const App = () => {
  return (
  <>
      <Routes>
        <Route path="/" element={
          <Main />
        } />

        </Routes>
    </>
  );
};
