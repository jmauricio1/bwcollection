import React from 'react';

import turtle from './../images/turtle.jpg';
import statue from './../images/statue.jpg';
import flower from './../images/flower.jpg';
import sitting from './../images/sitting.jpg';
import boy from './../images/boy.jpg';
import sitting2 from './../images/sitting2.jpg';
import forest from './../images/forest.jpg';

function Collection(){
    return(
        <section id="collection-section">
            <img id="turtle" className="scroll" src={turtle} data-rate="-1.4"/>
            <img id="statue" className="scroll" src={statue} data-rate="-0.3"/>
            <img id="flower" className="scroll" src={flower} data-rate="-0.8"/>
            <img id="sitting" src={sitting} />
            <img id="boy" className="scroll" src={boy} data-rate="-0.3"/>
            <img id="sitting2" className="scroll" src={sitting2} />
            <img id="forest" src={forest}/>
        </section>
    )
}

export default Collection;