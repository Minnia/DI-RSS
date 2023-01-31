import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import News from "../screens/News";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
