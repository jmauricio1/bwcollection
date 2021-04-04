import React from 'react';

import turtle from './../images/turtle.jpg';
import statue from './../images/statue.jpg';
import flower from './../images/flower.jpg';
import sitting from './../images/sitting.jpg';

import Xs from './../shapes/x.svg';

function Collection1(){
    return(
        <section className="sections">
            <img id="turtle" className="scroll" src={turtle} data-rate="-1.1"/>
            <img id="statue" className="scroll position-absolute" src={statue} data-rate="-0.4"/>
            <img id="flower" className="scroll position-absolute" src={flower} data-rate="-0.8"/>
            <img id="xs-vert" className="position-absolute shape" src={Xs} />
            <img id="sitting" src={sitting} />
        </section>
    )
}

export default Collection1;