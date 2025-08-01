// import React from "react";
//  import {Fragment} from "react";
import "./App.css"
import NetflixData from './data';

function App() {

return(
 <div> <h1>TV Show</h1>
 < NetflixSearies/>
 </div>
)
}

const NetflixSearies=()=>{
 return( <ul className="grid-container">
{ 
  NetflixData.map((item)=>{
    const class_name = item.rating >8?"rating1":"rating2";

   return( <li className="container" >
      <img src={item.image_url} alt="film image" />
      <div className="dataContainer" >
      <b>Name : {item.name}</b>
      <p>Rating : <span className={`${class_name} rating`}>{item.rating}</span></p>
      <div>Descriptinon : {item.description}</div>
      <button className="button">Watch Now</button>
      </div>
    </li>)
  })
}
  </ul>
 )
}

export default App;