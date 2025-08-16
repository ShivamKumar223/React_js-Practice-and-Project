import {useState} from "react"
export const FromButton = ()=>{
  const [task,setTask]=useState([]);

  const handleInput = (value)=>{
           setTask(value);
  }
 
   

    return (
      <form className="FromButton">
        <input type="text" onChange={(event)=>handleInput(event.target.value)} value={task}/>
        <button type="submit">add</button>
      </form>  
    )
    
}