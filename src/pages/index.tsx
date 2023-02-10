import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const TestPage = lazy(() => import("./test"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<TestPage />} />
    </Routes>
  );
};
