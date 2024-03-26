import React, { useEffect, useState } from "react";
import "./ProcessPage.css";
import Navbar from "../../Navbar/Navbar";
import Contactus from "../../Contactus/Contactus";
import Footer from "../../Footer/Footer";

const ProcessPage = () => {

  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Adjust the delay time as needed
  }, []);

  const faqData = [
    {
      question: "What is the starting price for a photo session?",
      answer:
        "First and foremost, you never want to go without security protection on your computer. Free Anti-Virus has very low detection rates. Give us a call and we will be happy to inform you of the latest security software we recommend and sell to all our clients for Spyware. ",
    },
    {
      question: "How long does one pose typically last for?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      question:
        "Are there any additional fees for special effects and editing services?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      question:
        "Do you offer digital downloads of photos in addition to physical prints?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      question:
        "is it possible to make changes to the studio setup before a photoshoot?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      question: "Do you provide hair and makeup services on-site?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      question: "How many props do you have available to use during a session?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      question: "Can I reserve a time slot ahead of my photo session date?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      question:
        "Are there staging areas for the subject to be posed in different settings?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      question:
        "is there an area set up where I can view my photos as they are taken?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    // Add more FAQ data as needed
  ];


  
  const [visibleAnswers, setVisibleAnswers] = useState({});

  const toggleAnswer = (index) => {
    setVisibleAnswers((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="process-container">
      <Navbar />
      {isLoading ? <SkeletonLoading /> : (
        <>
          <div className="process-bg-img">
            <img style={{maxWidth:"100%"}} src="./images/Processimg/img1.jpg" alt="" />
            <div className="process-heading">
              <h3>OUR PROCESS</h3>
              <h1>TIMELESS MEMORIES</h1>
            </div>
          </div>
      {/* process content */}
      <div className="process-content">
        <div className="process-content-img">
          <img src="./images/Processimg/img2.jpg" alt="" width={600} />
        </div>
        <div className="process-content-txt">
          <h2>OI.</h2>
          <hr className="process-content-hr" />
          <h1>Artwork Planning</h1>
          <p>
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est, omnis dolor repellendus. Temporibus autem
            quibusdam et aut officiis debitis aut rerum necessitatibus saepe
            eveniet ut et voluptates repudiandae sint et molestiae non
            recusandae.
          </p>
        </div>
      </div>

      {/* process content 2 */}
      <div className="process-content2">
        <div className="process-content2-txt">
          <h2>O2.</h2>
          <hr className="process-content-hr" />
          <h1>Artwork Planning</h1>
          <p>
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est, omnis dolor repellendus. Temporibus autem
            quibusdam et aut officiis debitis aut rerum necessitatibus saepe
            eveniet ut et voluptates repudiandae sint et molestiae non
            recusandae.
          </p>
        </div>
        <div className="process-content2-img">
          <img src="./images/Processimg/img2.jpg" alt="" width={600}/>
        </div>
      </div>
      
      {/* process content3 */}
      <div className="process-content">
        <div className="process-content-img">
          <img src="./images/Processimg/img2.jpg" alt="" width={600} />
        </div>
        <div className="process-content-txt">
          <h2>O3.</h2>
          <hr className="process-content-hr" />
          <h1>Artwork Selection</h1>
          <p>
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est, omnis dolor repellendus. Temporibus autem
            quibusdam et aut officiis debitis aut rerum necessitatibus saepe
            eveniet ut et voluptates repudiandae sint et molestiae non
            recusandae.
          </p>
        </div>
      </div>
      {/* contact us  */}
      <div className="contactus-in-process-container">
      <Contactus/>
      </div>
      
      {/* faqpage  */}
      <div className="the-faq">
        <div className="faq-heading">
          <h3>WE ARE OFTEN ASKED</h3>
          <h1>We Have An Answer To Your Question</h1>
        </div>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <h2 onClick={() => toggleAnswer(index)}>{item.question}</h2>
              {visibleAnswers[index] && <p>{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
                {/* footer */}
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
      {/* Repeat for other sections */}
    </div>
  );
};

export default ProcessPage;
