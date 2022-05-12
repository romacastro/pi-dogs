// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./Card.css";

// const Card = ({ name, weight, image, temperament }) => {
//   let navigate = useNavigate();
//   function DetailHandler(e) {
//     e.preventDefault();
//     navigate(`/dog/${name}`);
//   }
//   return (
//     <>
//       <div className="Card">
//         <img
//           src={image}
//           onError={({ currentTarget }) => {
//             currentTarget.onerror = null; // esto evita que loopee o sea en error no hace nada y setea el src a la img que quiero
//             currentTarget.src =
//             "./pics/bella4.JPG"
//           }}
//           alt="HOLA"
//           width="175vh"
//           height="120vh"
//           onClick={(e) => DetailHandler(e)}
//         ></img>
//         <h3>{name ? name : "XD"}</h3>
//         <div>Weight: {`${weight} KG`}</div>
//         <div>
//           Temperament:
//           {temperament
//             ? temperament.map((e) => e.name)
//             : " No temperaments found."}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Card;

import React from "react";
import {Link} from "react-router-dom";
import  "./Card.css"

export default function Card ({id, image, name, temperament, weight_min, weight_max}){
    return (
        <div className="card">
            <Link to={'/dog/'+id}>
        <img className= "card-image" src={ image ? image : image}
        alt="img dog" width="200px" height="250px"/>

        <h3 className="card-name">{name}</h3>     
        <h5 className="card-temperament">{temperament && temperament.join(",")}</h5>
        <h5 className="card-weight">{weight_min + "kg." + "-" + weight_max + "kg."}</h5>
        
        </Link>
        </div>
)}

