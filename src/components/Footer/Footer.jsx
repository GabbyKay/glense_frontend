import React from "react";
import "./Footer.css";
// Footer component
const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <footer className="Footer">
      <nav className="footer-nav">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/AboutusPage">About</a>
          </li>
          <li>
            <a href="/PricingPage">Pricing</a>
          </li>

          <div className="footer-logo">
            <a href="/">
              <img src="/images/logo2.png" alt="Logo" width={120} />
            </a>
          </div>
          <li>
            <a href="/BlogPage">Blog</a>
          </li>
          <li>
            <a href="/AlbumPage">Album</a>
          </li>
          <li>
            <a href="/contactPage">Contact</a>
          </li>
        </ul>
        <hr className="footer-hr" />
      </nav>
      <div style={{ textAlign: "center", position: "relative", top: "4rem" }}>
        <h3>{year} All Rights Reserved.</h3>
      </div>
    </footer>
  );
};

export default Footer;
