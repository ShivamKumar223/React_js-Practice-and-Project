import {useState} from "react";
import { PiChecksDuotone } from "react-icons/pi";
import { MdDeleteForever } from "react-icons/md";

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

  const handleDeleteBtn=(value)=>{
     let temp = task.filter((item)=>{
      if(item.content !== value.content)
        return item;
     })
     setTask(temp);
  }

  const handleCheckBtn =(value)=>{
    let temp =task.map((item)=>{
       if(item.id == value.id)
        item.checked = !value.checked;
      return item;
    })
    setTask(temp);
  }

    return (
      <>
      <form className="FromButton">
        <input type="text" onChange={(event)=>handleInput(event.target.value)} value={inputValue}/>
        <button type="submit" onClick={(event)=>handleFormSubmit(event)}>add</button> 
      </form> 

        <ol className="list">
           { 
                 task.map((item,index)=>{
                 return <li key={index}>
                    <p className={item.checked?"checked":"notChecked"}>{item.content}</p>
                 <button className="checkBtn" onClick={()=>handleCheckBtn(item)}><PiChecksDuotone/></button>
                 <button className="deleteBtn"onClick={()=>handleDeleteBtn(item)} ><MdDeleteForever/></button>
                 </li>
                    })
           }
        </ol>
      </>
    )
    
}