import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("./home"));
const ProfilePage = lazy(() => import("./profile"));
const ProfileEditor = lazy(() => import("./profile-editor"));

export const Routing = () => {
  return (
    <Suspense fallback="Loading...">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile/edit" element={<ProfileEditor />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Suspense>
  );
};
