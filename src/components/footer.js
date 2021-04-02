import React, { useState } from "react";

function Footer() {
  const [showAbout, setShowAbout] = useState(false);

  function handleAboutClick() {
    setShowAbout(!showAbout);
  }

  return (
    <section id="footer">
      <div
        className="about-page"
        style={{ width: showAbout ? "100%" : "0" }}
      ></div>
      <a
        className="about"
        style={{
          WebkitTextStroke: showAbout ? "2px black" : "2px white",
          color: showAbout ? "white" : "black",
          position: showAbout ? "fixed" : "absolute"
        }}
        onClick={handleAboutClick}
      >
        ABOUT
      </a>
      <div className="footer-padding"></div>
    </section>
  );
}

export default Footer;
