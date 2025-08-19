import { PiChecksDuotone } from "react-icons/pi";
import { MdDeleteForever } from "react-icons/md";
export const TodoList = ({task})=>{

    return (
        <ol className="list">
           { 
                 task.map((item,index)=>{
                 return <li key={index}>
                    <p>{item.content}</p>
                 <button className="checkBtn"><PiChecksDuotone/></button>
                 <button className="deleteBtn"><MdDeleteForever/></button>
                 </li>
                    })
           }
        </ol>
    )
}