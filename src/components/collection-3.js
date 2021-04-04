import React from 'react';

import umbrella from './../images/umbrella.jpg';
import mountain from './../images/mountain.jpg';
import building from './../images/building.jpg';

import plus from './../shapes/plus.svg';
import linesRight from './../shapes/lines right.svg';
import linesHoriz from './../shapes/lines horiz.svg';

function Collection3(){
    return(
        <section className="sections">
            <img id="plus" className="position-absolute shape" src={plus} alt=""/>
            <img id="mountain" className="scroll position-absolute" src={mountain} alt="" data-rate="-0.5"/>
            <img id="umbrella" className="scroll" src={umbrella} alt="" data-rate="-0.4"/>
            <img id="lines-right" className="position-absolute shape" src={linesRight} alt=""/>
            <img id="building" className="scroll" src={building} alt=""/>
            <img id="lines-horiz" className="position-absolute shape" src={linesHoriz} alt=""/>
        </section>
    )
}

export default Collection3;