import React from "react";
import {Link} from "react-router-dom";
import  "./Landing.css";

export default function Landing(){
    return(
        <div>
            <h1>Bienvenidos Amigos!!</h1>
            <div className="image-landingpage"></div>
            <Link to="/home">
                <button className="botoningresar">Ingresar</button>
            </Link>
        </div>
    )
}