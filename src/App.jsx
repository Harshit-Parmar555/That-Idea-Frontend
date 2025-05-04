import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Navigate } from "react-router-dom";

// Pages import
import Land from "./pages/Land/Land";
import ViewIdeas from "./pages/Home/ViewIdeas";
import ViewIdea from "./pages/Idea/ViewIdea";
import Profile from "./pages/Profile/Profile";
import ViewUserProfile from "./pages/User-Profile/ViewUserProfile";
import Upload from "./pages/Upload/Upload";
import NotFound from "./pages/404/NotFound";
import Layout from "./Layout";

// Store import
import { AuthStore } from "./store/useAuthStore.js";

import Spinner from "./custom/Spinner";

// Protected route
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = AuthStore();
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
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#111",
            color: "#fff",
            border: "1px solid #333",
            fontFamily: "Inter, sans-serif",
            fontSize: "0.875rem",
            padding: "12px 16px",
          },
          success: {
            iconTheme: {
              primary: "#4ade80",
              secondary: "#000",
            },
          },
          error: {
            iconTheme: {
              primary: "#f87171",
              secondary: "#000",
            },
          },
        }}
      />
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
