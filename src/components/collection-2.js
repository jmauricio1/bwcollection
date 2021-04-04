import React from 'react';

import boy from './../images/boy.jpg';
import sitting2 from './../images/sitting2.jpg';
import forest from './../images/forest.jpg';

import linesLeft from './../shapes/lines left.svg';

function Collection2(){
    return(
        <section className="sections">
            <img id="boy" className="scroll position-absolute" src={boy} alt="" data-rate="-0.6"/>
            <img id="sitting2" className="scroll" src={sitting2} alt="" />
            <img id="lines-left" className="position-absolute shape" src={linesLeft} alt="" />
            <img id="forest" src={forest} alt=""/>
        </section>
    )
}

export default Collection2;