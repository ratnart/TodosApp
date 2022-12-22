import React from "react"
import classes from './TodosList.module.css'
const TodosList:React.FC<{text:string;onRemoveTodo:()=>void}>=(props)=>{
    return (<li className={classes.item} onClick={props.onRemoveTodo}>{props.text}</li>);
}
export default TodosList