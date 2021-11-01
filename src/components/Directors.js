import React from "react";
import { directors } from "../data";

function Directors() {
  //  {directors.map((director) => 
  //         <div>Name: {director.name}<br/>
  //         Movies:   
  //         <ul>
  //             {director.movies.map((movie)=> <li>{director.movies}</li>)}
  //           </ul>

  //         </div> ) }
  const directorInfo = 
    directors.map((director) =>
     <div key={director.name}>
      <h2 >Name: {director.name}</h2>
      <h2 > Movies:</h2>
        <ul>
         {director.movies.map((movie) => 
         <li key={movie}>
            {movie}
         </li>
         )}

        </ul>
      </div>
      )


  return (<div>
    <h1>Directors Page</h1>
       {directorInfo}
    
  </div>);
}

export default Directors;
