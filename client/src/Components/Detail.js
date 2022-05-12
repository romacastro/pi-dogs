// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";
// //import Nav from "../Nav/nav.jsx";
// import gif from "./pics/bella2.jpeg";
// import "./Detail.css";
// const Detail = () => {
//   const [dog, setDog] = useState({});
//   let { name } = useParams();
//   useEffect(() => {
//     fetch(`http://localhost:3001/dogs/${name}`)
//       .then((response) => response.json())
//       .then((response) => setDog(response))
//       .catch((error) => {
//         window.location.replace("/*");
//       });
//   }, []);
//   const dispatch = useDispatch();

//   return (
//     <>
//       <div className="detail">
       

//         <div
//           className="loading"
//           style={!dog.name ? { display: "block" } : { display: "none" }}
//         >
//           <p> LOADING!</p>
//           <img
//             src={gif}
//             alt="CASI...."
//             height="300"
//             width="300"
//           ></img>
//         </div>
//         <div style={dog.name ? { display: "block" } : { display: "none" }}>
//           <div className="detail2">
//             <img
//               src={dog.image?.url}
//               onError={({ currentTarget }) => {
//                 currentTarget.onerror = null;
//                 currentTarget.src =
//                   "./pics/bella2.jpeg";
//               }}
//               alt="Dog NOT FOUND"
//             ></img>
//             <div>Name: {dog.name}</div>
//             <div>Life span: {dog.life_span} years</div>
//             <div>Weight: {dog.weight?.metric} Kg.</div>
//             <div>Height: {dog.height?.metric} Cm.</div>
//             <div>Temperaments: {dog.temperament?.map((el) => el.name)}</div>
//             <div>Origin: {dog.origin ? dog.origin : "Unknown"}</div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Detail;

import React from "react";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";
import { useParams } from "react-router"; 
import {getDetail} from "../actions/index";
import "./Detail.css"


export default function Detail(){
    const {id}= useParams();
    const dispatch=useDispatch();
    const myDog= useSelector((state)=>state.detail[0])

    useEffect(()=>{
        dispatch(getDetail(id))
    },[id, dispatch]);

    return(
        <div className="container">
            {
                myDog?
                <div className="dog">
                <h3>{myDog.name}</h3>  

                <img class="detail-image" src={myDog.image}alt="dog" />

                <h5>Altura mínima:{myDog.height_min && myDog.Dog.height_min}cm</h5> 
                <h5>Altura máxima:{myDog.height_max && myDog.Dog.height_max}cm</h5>
                <h5>Peso mínimo:{myDog.weight_min && myDog.weight_min}cm</h5>
                <h5>Peso máximo:{myDog.weight_max && myDog.weight_max}cm</h5>
                <h5>Temperamento:{myDog.temperament?.map((e)=>e.name)}</h5>
                <h5>Vida promedio mínima:{myDog.life_span_min}años</h5>
                <h5>Vida promedio máxima:{myDog.life_span_max.slice(0,2)}años</h5>
                </div>
                   :<p>Loading...</p>
            }
            <div className="detail-link">
            <Link to= "/home">
                <button>Volver</button>
                </Link>   
            </div>
        </div>
    )
}