import React from "react";
import ArtistLink from "./artist-link";

import Info from "./../img-info";

function ArtistList() {
  return (
    <p id="list-of-artists">
      {Info.map((element, index) => {
        return (
          <ArtistLink
            key={index}
            id={index}
            imgDesc={element.imgDesc}
            imgLink={element.imgLink}
            artistName={element.artistName}
          />
        );
      })}
      <i>Composed and Website Developed by <b>JOSHUA MAURICIO</b></i>
    </p>
  );
}

export default ArtistList;
