import React from 'react';

import umbrella from './../images/umbrella.jpg';
import mountain from './../images/mountain.jpg';
import building from './../images/building.jpg';

function Collection3(){
    return(
        <section id="section3">
            <img id="mountain" className="scroll" src={mountain} data-rate="-0.5"/>
            <img id="umbrella" className="scroll" src={umbrella} data-rate="-0.4"/>
            <img id="building" className="scroll" src={building}/>
        </section>
    )
}

export default Collection3;