import React from "react";
import "./AboutusPage.css";
import Navbar from "../../Navbar/Navbar";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../../Footer/Footer";

const AboutusPage = () => {
  return (
    <div className="AboutusPage">
      <div>
        <Navbar />
        {/* <h1>oiugyfdghjklj;kjbhvk</h1> */}
        <div className="AboutusPage-container">
          <img
            style={{ opacity: "40%", maxWidth:"100%"}}
            src="images/Aboutimg/img4.jpg  "
            alt=""
          />
        </div>
        <div className="about-heading-txt">
          <h3 className="slide-from-bottom">ABOUT US</h3>
          <h1 className="slide-from-bottom">We create beautiful things</h1>
        </div>
      </div>
      <div className="AboutusPage-text">
        <div className="Aboutpage-left-container slide-from-bottom">
          <div className="Aboutpage-txt-left">
            <h2>Capturing Moments</h2>
            <p>Creating Memories</p>
          </div>
          {/* sec text  */}
          <div className="Aboutpage-txt-left2">
            <h2 style={{ fontSize: "13px" }}>
              Discover Our Photography Portfolio
            </h2>
          </div>
        </div>

        {/* middle container  */}
        <div className="Aboutpage-middle-container slide-from-bottom">
          <div className="Aboutpage-txt-middle1">
            <p>
              Glens Studio is a professional photography outfit based in Lagos
              Nigeria we specialize in digital imagery including but not limited
              to Portrait, Fashion. commercial, product and Events Photography.
            </p>
          </div>
          {/* sec text  */}
          <div className="Aboutpage-txt-middle2">
            <p>
              Our team consists of photographers with passion and skills for
              various genres of photography and other professionals including
              retouchers. graphics designers and wed designers
            </p>
          </div>
          {/* third text  */}
          <div className="Aboutpage-txt-middle3">
            <p>
              {" "}
              Glens Studios offers a unique solution for your creative needs.
              Whether it's documenting your wedding day, shooting your
              engagement photos, or capturing your corporate vision - there is a
              story that's dying to be told and we want to help you tell that
              story.
            </p>
          </div>
        </div>
        {/* right container  */}
        <div className="Aboutpage-right-container slide-from-bottom">
          <div className="Aboutpage-txt-right1">
            <p>
              As a creative studio, we don't have a routine for every session -
              we work with you to decide what works best for your specific
              needs. We interact with our clients to get an understanding of
              their imagination and the kind of images they want us to create.
            </p>
          </div>
          {/* sec text  */}
          <div className="Aboutpage-txt-right2">
            <p>
              Our goal is to provide you with the mosi beautiful version of your
              day, your moment, your life. Our well equipped studio and
              qualified photographers will ensure mat you get te best value for
              your money and time spent with Us
            </p>
          </div>
        </div>
      </div>{" "}
      <div className="abt-img-11-container">
        <img className="abt-img-11" src="./images/Aboutimg/img9.jpg" alt="" />
      </div>
      <div className="AboutusPage-text-container-sec2">
        <div className="AboutusPage-text-sec2">
          <div className="Aboutpage-left-container-sec2 slide-from-bottom">
            <div className="Aboutpage-txt-left-sec2">
              <h2>PRODUCT PHOTOGRAPHY</h2>
              <p>
                Glens Studios offers a unique solution tor your creative needs
                Whether it's documenting your wedding day, shooting your
                Enqdgement onotos, or caplunng vour corporate vision - there is
                a story that's dying to be told and we want to help you tell
                that story.
              </p>
            </div>
            {/* sec text  */}
            <div className="Aboutpage-txt-left-sec2">
              <h2>CORPORATE PHOTOGRAPHY</h2>
              <p>
                Our Corporate photography service includes corporate event
                Photography, corporate headshot, and corporate portrait
                services. The objective is to capture and convey your unique
                appeal to your clients.
              </p>
            </div>

            <div className="Aboutpage-txt-left-sec2">
              <h2>COMMERCIAL PHOTOGRAPHY</h2>
              <p>
                Commercial photography involves taking pictures for commercial
                use for example in adverts. merchandising, and product
                placement. There are a number of ways that photographs can be
                used to better market products
              </p>
            </div>
          </div>

          {/* middle container  */}
          <div className="Aboutpage-middle-container-sec2 slide-from-bottom">
            <div className="Aboutpage-txt-left-sec2">
              <h2>WEDDINGS PHOTOGRAPHY</h2>
              <p>
                Presenting your products in the best light is good for business
                & professional product photography is a necessary investment for
                achieving this. A professional product will consistently &
                efficiently deliver
              </p>
            </div>
            {/* sec text  */}
            <div className="Aboutpage-txt-left-sec2">
              <h2>STUDIO SESSIONS</h2>
              <p>
                We are lovers of great photography and excellent customer care
                and we are all on hand to make your photography experience
                everything you've dreamed of! Trust us when we tell you that you
                really are in the best of hands.
              </p>
            </div>
            {/* third text  */}
            <div className="Aboutpage-txt-left-sec2">
              <h2>STUDIO RENTALS</h2>
              <p>
                Our studio is well equipped with state of the art technology and
                equipment that enable us deliver exceptional services
                seamlessly. Our Studio is suitable for photography, video,
                training, workshop...
              </p>
            </div>
          </div>
          {/* right container  */}
          <div className="Aboutpage-right-container-sec2 slide-from-bottom">
            <div className="Aboutpage-txt-left-sec2">
              <h2>TRAINNING</h2>
              <p>
                This photography mentoring program is for those who are looking
                to advance their craft with a 12-week intensive mentorship that
                ends with a gallery showing of your work at the Glens Studios.
              </p>
            </div>
            {/* sec text  */}
            <div className="Aboutpage-txt-left-sec2">
              <h2>ARTIST AND MODEL PHOTOSHOOT</h2>
              <p>
                You've worked hard to get to where you are, and now you want to
                take your career to the next level. Your headshot or portrait is
                the face of your strategy, and often it's the first thing to
                open a door (or slam it shut).
              </p>
            </div>

            <div className="Aboutpage-txt-left-sec2">
              <h2>BUSINESS VIDEOS</h2>
              <p>
                used to market a particular Promotional dees are suscinct as
                their purpose is to provide the most intormation in the shortest
                amount of time. and to maintain the viewer's interest.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutuspage-services">
        <h1>Our Company Offers Exceptional Services</h1>
        <p>
          Our company comprises experienced professionals committed to
          extracting the finest image qualities from your special moments.
          Whether it's commercial, wedding, or portrait photography, we go above
          and bevond to ensure our clients' satisfaction and bring
          smiles to their faces
        </p>
        <div className="aboutuspage-services-img">
          <img style={{maxWidth:"100%"}} src="./images/servicesimg/img1.jpg" alt="" />
        </div>
      </div>
      <div className="portfolio">
        
        <Portfolio />
      </div>
      <div className="aboutus-footer">
      <Footer />
      </div>
    </div>
  );
};

export default AboutusPage;
