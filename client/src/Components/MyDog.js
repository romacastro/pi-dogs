import React from "react";
import Bella from "../Components/pics/bella.jpeg";

import "./MyDog.css";

export default function MyDog(){
    return(
        <div className="container">
        <div className="my-dog">

        <img src={Bella} alt="Bella"width="250px"/>
        <div className="polaroid">
            <h2>Bella</h2>
            </div>    
            </div>  
            <div className="bella">
                <p>Ella es bellita, mi hija, nos elejimos en un momento de mucha soledad y lleno la casa de diversion y compañia, hoy transitamos la muerte de papá juntas y creo que sin ella seria imposible.
                    Bella tiene 12 años y es una yorshire terrier negra acerada, es mamá de tres hermosos pequeños; Theo, Tara y Manolo,
                    ellos tienen 8 años.
                    Bella es lo mejor que tengo, si volviera a nacer, la volveria a buscar.
                </p>
                </div>  
        </div>
    )
};