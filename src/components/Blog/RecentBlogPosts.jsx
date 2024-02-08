import React from "react";
import "./RecentBlogPosts.css";
const RecentBlogPosts = () => {
  return (
    <div className="recent-blog">
      <div className="recent-blog-container">
        <h4>BLOG</h4>
        <h1>Recent Stories</h1>
       <div className="recent-blog-img-container">
       <div className="recent-blog-img">
          <img src="./images/recentblogimg/img1.jpg" alt="" width={500} />
          <div className="img1-text">
          <div className="img1-inner-text">
          <h1>Tips of The Best Photo</h1>
            <p>Vestibulum finibus congue leo, tristique dignissim tortor. Nunc mollis condimentum felis. Fusce vitae nisl sed justo condimentum gravida.</p>
          </div>
          </div>
        </div>

        <div className="recent-blog-img">
          <img src="./images/recentblogimg/img2.jpg" alt="" width={500} />
          <div className="img1-text">
          <div className="img1-inner-text">
          <h1>Tips of The Best Photo</h1>
            <p>Vestibulum finibus congue leo, tristique dignissim tortor. Nunc mollis condimentum felis. Fusce vitae nisl sed justo condimentum gravida.</p>
          </div>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default RecentBlogPosts;
