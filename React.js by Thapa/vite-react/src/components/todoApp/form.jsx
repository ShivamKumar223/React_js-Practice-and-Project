import {useState} from "react";
import {TodoList} from "./todoList"

export const FormButton = ()=>{

  const [task,setTask]=useState([]);
  const [inputValue, setInputValue]=useState("")

  const handleInput = (value)=>{
           setInputValue(value);
  }
 
  const handleFormSubmit = (event)=>{
    event.preventDefault();
    if(inputValue.trim()=="") return;

    const boolArr = task.map((item)=>{
      if(item.content == inputValue.trim())  
        return true;
      else
        return false;
    })
    if(boolArr.includes(true)) return;

    
    setTask((prev)=>[...prev,{id:inputValue,content:inputValue,checked:false}])

  }

    return (
      <>
      <form className="FromButton">
        <input type="text" onChange={(event)=>handleInput(event.target.value)} value={inputValue}/>
        <button type="submit" onClick={(event)=>handleFormSubmit(event)}>add</button> 
      </form> 
       <TodoList task={task}/>
      </>
    )
    
}