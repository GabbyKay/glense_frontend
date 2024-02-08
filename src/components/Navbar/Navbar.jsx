import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const navLinks = [
    { title: "Home", url: "./" },
    {
      title: "Pages",
      url: "#",
      subLinks: [
        { title: "About Us", url: "/AboutusPage" },
        { title: "Our Process", url: "/ProcessPage" },
        { title: "Testimonials", url: "/TestimonialPage" },
        { title: "Pricing", url: "/PricingPage" },
        { title: "FAQ", url: "/FaqPage" },
      ],
    },
    { title: "Albums", url: "/AlbumPage" },
    { title: "Contact", url: "/ContactPage" },
    { title: "Gallery", url: "/GalleryPage" },
    { title: "Journal", url: "/BlogPage" },
  ];

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__inner">
          <div className="navbar__logo">
            <img src="./images/logo.png" alt="" width={100} />
          </div>

          <button
            className={`navbar__hamburger ${isMobileMenuOpen ? "open" : ""}`}
            onClick={handleMobileMenuToggle}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`navbar__links ${isMobileMenuOpen ? "open" : ""}`}>
            {navLinks.map((link) => (
              <div key={link.title} className="navbar__link-container">
                {link.subLinks ? (
                  <div className="dropdown">
                    <a href={link.url} className="navbar__link">
                      {link.title}
                    </a>
                    <div className="dropdown-content">
                      {link.subLinks.map((subLink) => (
                        <a href={subLink.url} key={subLink.title}>
                          {subLink.title}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a href={link.url} className="navbar__link">
                    {link.title}
                  </a>
                )}
              </div>
            ))}

            <div className="navbar_social_links">
              <a href="#" className="social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
