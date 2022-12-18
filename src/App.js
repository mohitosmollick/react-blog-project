import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../src/contexts/AuthContext";
import AboutPage from "./pages/AboutPage";
import CategoryPostPage from "./pages/CategoryPostPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PageLayout from "./pages/PageLayout";
import PostCreatePage from "./pages/PostCreatePage";
import RegisterPage from "./pages/RegisterPage";
import UserPage from "./pages/UserPage";
import ViewPostPage from "./pages/ViewPostPage";
import "./styles/App.css";

const App = () => {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <BrowserRouter>
      <AuthProvider>
        <PageLayout open={open} setOpen={setOpen} ref={menuRef}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/post" element={<PostCreatePage />} />
            <Route path="/user_page" element={<UserPage />} />
            <Route path="/view_post" element={<ViewPostPage />} />
            <Route path="/catetegory_post" element={<CategoryPostPage />} />
          </Routes>
        </PageLayout>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
