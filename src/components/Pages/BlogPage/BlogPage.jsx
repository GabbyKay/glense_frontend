import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BlogPage.css";
import BlogPost from "./BlogPost";
import Navbar from "../../Navbar/Navbar";
import { blogPosts } from "../../../Data";
import Footer from "../../Footer/Footer";

const BlogPage = () => {
  const [visiblePosts, setVisiblePosts] = useState(6); // Number of initially visible blog posts

  const loadMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 6); // Increment the number of visible blog posts on click
  };

  return (
    <div>
      <Navbar />
      <div className="blog-container">
        <h1 className="blog-heading">Blog Posts</h1>
        <div className="blog-grid">
          {blogPosts.slice(0, visiblePosts).map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`}>
              {/* Use Link to navigate to FullBlogPost with the id parameter */}
              <BlogPost post={post} />
            </Link>
          ))}
        </div>
        {visiblePosts < blogPosts.length && (
          <button className="load-more-button" onClick={loadMorePosts}>
            Load More
          </button>
        )}
      </div>
      <div style={{position:"relative", bottom:"1.2rem"}}>
      <Footer/>

      </div>
    </div>
  );
};

export default BlogPage;
