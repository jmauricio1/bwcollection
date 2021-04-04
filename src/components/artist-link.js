import React from "react";

function ArtistLink(props) {
  return (
    <span>
      {props.imgDesc} -
      <a href={props.imgLink} className="artist-link">
        {" "}
        @{props.artistName}
      </a>
      <br />
    </span>
  );
}

export default ArtistLink;
