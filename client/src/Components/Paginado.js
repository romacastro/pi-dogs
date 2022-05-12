import React from "react";
import "./Paginado.css";

const Paginado = ({
  DogsPerPage,
  allDogs,
  paginaSig,
  paginaPrev,
  CurrentPage,
  firstPage,
  lastPage,
}) => {
  return (
    <nav className="paginado">
      <button className="botoncito" onClick={firstPage}>
        First Page
      </button>
      <button
        disabled={CurrentPage === 1}
        className="botoncito"
        onClick={paginaPrev}>
        PREV
      </button>
      <button
        className="botoncito"
        disabled={CurrentPage === Math.ceil(allDogs / DogsPerPage)}
        onClick={paginaSig}
      >
        NEXT
      </button>
      <button className="botoncito" onClick={lastPage}>
        Last Page
      </button>
      
    </nav>
  );
};
export default Paginado;

// import React from "react";

// import styles from "./Paginado.css";

// export default function Paginado({dogsPerPage, allDogs, paginado})
// {
//     const pageNumber=[]
//     for(let i=0; i<=Math.ceil(allDogs/dogsPerPage); i++){
//         pageNumber.push(i + 1)
//     }
//     return(
//         <nav>
//             <ul className={styles.paginado}>
//                 {pageNumber && pageNumber.map(number =>{
//                     return(
//                         <li className={styles.number}key={number}>
//                         <a onClick={()=>paginado(number)}>{number}</a>    

//                         </li>
//                     )
//                  })}

//             </ul>
//             </nav>
//     )
// }