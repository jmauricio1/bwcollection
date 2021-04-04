import React from 'react';

function ArtistLink(props){
  return (
    <span>
                  {props.imgDesc} - 
                  <a href={props.imgLink}> @{props.artistName}</a>
                  <br />
                </span>
  )
}

export default ArtistLink;