import React from 'react';

import turtle from './../images/turtle.jpg';
import statue from './../images/statue.jpg';
import flower from './../images/flower.jpg';
import sitting from './../images/sitting.jpg';

function Collection1(){
    return(
        <section id="collection-section">
            <img id="turtle" className="scroll" src={turtle} data-rate="-1.1"/>
            <img id="statue" className="scroll" src={statue} data-rate="-0.4"/>
            <img id="flower" className="scroll" src={flower} data-rate="-0.8"/>
            <img id="sitting" src={sitting} />
        </section>
    )
}

export default Collection1;