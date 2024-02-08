import React, { useState, useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import Background from './Background/Background';
import Aboutus from './AboutUs/Aboutus';
import Ourwork from './Ourwork/Ourwork';
import Text from './text/Text';
import Pricing from './Pricing/Pricing';
import Contactus from './Contactus/Contactus';
import RecentBlogPosts from './Blog/RecentBlogPosts';
import Footer from './Footer/Footer';
import './Home.css'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Adjust the delay time as needed
  }, []);

  return (
    <div>
      <Navbar />
      {isLoading ? <SkeletonLoading /> : (
        <>
          <Background />
          <Aboutus />
          <Ourwork />
          <Text />
          <Pricing />
          <Contactus />
          <RecentBlogPosts />
          <Footer />
        </>
      )}
    </div>
  );
};

const SkeletonLoading = () => {
  return (
    <div className="skeleton-loading">
      {/* Create a loading skeleton for each section */}
      <div className="skeleton-section"></div>
      <div className="skeleton-section"></div>
      <div className="skeleton-section"></div>
      <div className="skeleton-section"></div>
      <div className="skeleton-section"></div>
      <div className="skeleton-section"></div>
      <div className="skeleton-section"></div>
      <div className="skeleton-section"></div>
    </div>
  );
};

export default Home;
