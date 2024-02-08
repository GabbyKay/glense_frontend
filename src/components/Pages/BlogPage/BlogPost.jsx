import React, { useState } from "react";
import "./BlogPost.css";
import { Link } from "react-router-dom";

const BlogPost = ({ post }) => {
  const { id, title, shortContent, author, date, imageUrl } = post;

  const [loading, setLoading] = useState(true);

  // Simulating a loading delay of 1.5 seconds
  setTimeout(() => {
    setLoading(false);
  }, 1500);

  return (
    <Link to={`/blog/${id}`} className="blog-post-link">
      <div className={`blog-post ${loading ? "loading" : ""}`}>
        {loading ? (
          <div className="blog-post-skeleton">
            <div className="skeleton-image"></div>
            <div className="skeleton-info">
              <div className="skeleton-title"></div>
              <div className="skeleton-content"></div>
              <div className="skeleton-details">
                <div className="skeleton-author"></div>
                <div className="skeleton-date"></div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <img
              src={imageUrl}
              alt={title}
              className="blog-post-image"
              onLoad={() => setLoading(false)}
            />
            <div className="blog-post-info">
              <h2 className="blog-post-title">{title}</h2>
              <p className="blog-post-content">{shortContent}</p>
              <div className="blog-post-details">
                <span className="blog-post-author">By {author}</span>
                <span className="blog-post-date">{date}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default BlogPost;
