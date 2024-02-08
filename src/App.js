import React from "react";
import { blogPosts } from "./Data";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutusPage from "./components/Pages/AboutusPage/AboutusPage";
import FaqPage from "./components/Pages/FAQ/FaqPage";
import TestimonialPage from "./components/Pages/TestimonialPage/TestimonialPage";
import PricingPage from "./components/Pages/PricingPage/PricingPage";
import AlbumPage from "./components/Pages/Album/AlbumPage";
import ContactPage from "./components/Pages/ContactPage/ContactPage";
import GalleryPage from "./components/Pages/Gallery/GalleryPage";
import ProcessPage from "./components/Pages/OurProcess/ProcessPage";
import BlogPage from "./components/Pages/BlogPage/BlogPage";
import FullBlogPost from "./components/Pages/BlogPage/FullBlogPost";
// import FullBlogPost from "./components/Pages/FullBlogPost/FullBlogPost"; // Make sure to import FullBlogPost

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutusPage" element={<AboutusPage />} />
        <Route path="/ProcessPage" element={<ProcessPage />} />
        <Route path="/FaqPage" element={<FaqPage />} />
        <Route path="/TestimonialPage" element={<TestimonialPage />} />
        <Route path="/PricingPage" element={<PricingPage />} />
        <Route path="AlbumPage" element={<AlbumPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/GalleryPage" element={<GalleryPage />} />
        <Route path="/BlogPage" element={<BlogPage blogPosts={blogPosts} />} />
        <Route path="/blog/:postId" element={<FullBlogPost blogPosts={blogPosts} />} />
      </Routes>
    </div>
  );
}

export default App;
