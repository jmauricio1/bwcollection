import React from 'react';

import boy from './../images/boy.jpg';
import sitting2 from './../images/sitting2.jpg';
import forest from './../images/forest.jpg';

function Collection2(){
    return(
        <section id="collection-2">
            <img id="boy" className="scroll" src={boy} data-rate="-0.6"/>
            <img id="sitting2" className="scroll" src={sitting2} />
            <img id="forest" src={forest}/>
        </section>
    )
}

export default Collection2;