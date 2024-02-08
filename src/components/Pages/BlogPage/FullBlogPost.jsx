import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./FullBlogPost.css";

const FullBlogPost = ({ blogPosts }) => {
  const { postId } = useParams();
  const post = blogPosts.find((post) => post.id === Number(postId));

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a loading delay of 1.5 seconds
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="skeleton-image"></div>
        <div className="skeleton-content"></div>
        <div className="skeleton-details">
          <div className="skeleton-author"></div>
          <div className="skeleton-date"></div>
        </div>
      </div>
    );
  }

  if (!post) {
    return <div>Post not found.</div>;
  }

  const { title, fullContent, author, date, imageUrl } = post;

  return (
   <div>
     <div className="full-blog-post">
      <img
        src={imageUrl}
        alt={title}
        className="full-blog-post-image"
        onLoad={() => setLoading(false)}
      />
      <div className="full-blog-post-content-container">
        <h2 className="full-blog-post-title">{title}</h2>
        <p className="full-blog-post-content">{fullContent}</p>
        <div className="full-blog-post-details">
          <span className="full-blog-post-author">By {author}</span>
          <span className="full-blog-post-date">{date}</span>
        </div>
      </div>
    </div>
   </div>
  );
};

export default FullBlogPost;
