import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Navigate } from "react-router-dom";

// Pages import
import Land from "./pages/Land-Page/Land";
import ViewIdeas from "./pages/View-Ideas-Page/ViewIdeas";
import ViewIdea from "./pages/View-Idea-Page/ViewIdea";
import Profile from "./pages/Profile-Page/Profile";
import ViewUserProfile from "./pages/View-User-Profile-Page/ViewUserProfile";
import Upload from "./pages/Upload-Page/Upload";
import NotFound from "./pages/Not-Found-Page/NotFound";
import Layout from "./Layout";

import Spinner from "./custom/Spinner";
import { AuthStore } from "./store/useAuthStore.js";

// Protected route
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = AuthStore();
  if (!isAuthenticated) {
    return <Navigate to="/view-ideas" replace />;
  }
  return children;
};

// Authenticated user route
const RedirectAuthenticatedUser = ({ children }) => {
  const { user, isAuthenticated } = AuthStore();
  if (isAuthenticated && user) {
    return <Navigate to="/view-ideas" replace />;
  }
  return children;
};

const App = () => {
  const { checkAuth, checkingAuth } = AuthStore();
  useEffect(() => {
    checkAuth();
  }, []);

  if (checkingAuth) {
    return <Spinner />;
  }

  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <RedirectAuthenticatedUser>
                <Land />
              </RedirectAuthenticatedUser>
            }
          />
          <Route path="view-ideas" element={<ViewIdeas />} />
          <Route path="view-idea/:id" element={<ViewIdea />} />
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="view-user/:id" element={<ViewUserProfile />} />
          <Route
            path="upload"
            element={
              <ProtectedRoute>
                <Upload />
              </ProtectedRoute>
            }
          />

        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
