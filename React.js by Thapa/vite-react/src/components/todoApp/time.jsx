import { useState } from "react";
import "./time.css"
export const HeadingWithDate=()=>{
 
    var [currentDateTime,setCurrentDateTime]=useState("");

    const updateDateTime = ()=>{
      const dateTime =new Date();
    const date = dateTime.toLocaleDateString();
    const time = dateTime.toLocaleTimeString();
     currentDateTime = `${date} - ${time}`; 
    setCurrentDateTime(currentDateTime)
    }
    setInterval(updateDateTime,1000);

    return(
        <div className="HeadingWithDate">
          <h1>Todo List</h1>
          <b>{currentDateTime }</b>
        </div>
    )
}