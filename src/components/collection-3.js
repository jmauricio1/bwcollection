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
            <img id="plus" className="position-absolute shape" src={plus}/>
            <img id="mountain" className="scroll position-absolute" src={mountain} data-rate="-0.5"/>
            <img id="umbrella" className="scroll" src={umbrella} data-rate="-0.4"/>
            <img id="lines-right" className="position-absolute shape" src={linesRight} />
            <img id="building" className="scroll" src={building}/>
            <img id="lines-horiz" className="position-absolute shape" src={linesHoriz} />
        </section>
    )
}

export default Collection3;