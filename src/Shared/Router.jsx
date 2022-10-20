import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddPage from "../pages/AddPage";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Todos from "../pages/Todos";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="todos" element={<Todos />} />
        <Route path="todos/:id" element={<Detail />} />
        <Route path="/todos/add" element={<AddPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
