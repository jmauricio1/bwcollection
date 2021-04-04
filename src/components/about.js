import React, {useState} from 'react';
import ArtistList from './artist-list';

function About(){
  const [showAbout, setShowAbout] = useState(false);

  function handleAboutClick() {
    setShowAbout(!showAbout);
  }

  return(
    <div>
      <div
        className="about-page"
        style={{
          width: showAbout ? "100%" : "0",
          opacity: showAbout ? "1" : "0",
          transition: "1s",
        }}
      >
        <div className="about-info position-absolute">
          <h3>Support the artists and photographers on Unsplash</h3>
          <ArtistList />
        </div>
      </div>
      <p
        className="about position-absolute"
        style={{
          WebkitTextStroke: showAbout ? "2px black" : "2px white",
          position: showAbout ? "fixed" : "absolute",
        }}
        onClick={handleAboutClick}
      >
        ABOUT
      </p>
    </div>
  )
}

export default About;