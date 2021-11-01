import React from "react";
import { actors } from "../data";

function Actors() {
 const actorInfo = actors.map((actor) => (
   <div key={actor.name}>
     <h2>Name: {actor.name}</h2>
     <h2>Movies: </h2>
      <ul> 
       {actor.movies.map((movie) => (
         <li key={movie}>{movie}</li>
       ))}
     </ul>
   </div>
 ));

  // <div>
  //   Name:{actor.name} <br/>
  //   Movies: <ul>
  //     {actor.movies.map((movie) =>  <li>{actor.movies}</li>)}
  //   </ul>
    
 
  


  return (
   <div>
    <h1>Actors Page</h1>
     {actorInfo}
    
   </div>
    );
  }


export default Actors;
