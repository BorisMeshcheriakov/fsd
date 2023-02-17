import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("./home"));
const TestPage = lazy(() => import("./test"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<TestPage />} />
    </Routes>
  );
};
