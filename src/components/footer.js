import React, { useState } from "react";

import Info from './../img-info';

function Footer() {
  const [showAbout, setShowAbout] = useState(false);

  function handleAboutClick() {
    setShowAbout(!showAbout);
  }

  return (
    <section id="footer">
      <div
        className="about-page"
        style={{
          width: showAbout ? "100%" : "0",
          opacity: showAbout ? "1" : "0",
          transition: "1s",
        }}
      >
        <div className="about-info">
          <h3>Support the artists and photographers on Unsplash</h3>
          <p>
            {Info.map((element, index) => {
              return (
                <span>
                  {element.imgDesc} - 
                  <a href={element.imgLink}> @{element.artistName}</a>
                  <br />
                </span>
              )
            })}
          </p>
        </div>
      </div>
      <a
        className="about"
        style={{
          WebkitTextStroke: showAbout ? "2px black" : "2px white",
          position: showAbout ? "fixed" : "absolute",
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
