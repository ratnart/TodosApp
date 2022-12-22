import React,{useContext} from 'react'
import TodosList from './TodosList';
import { TodosContext } from '../store/todos-context';
import classes from './Todos.module.css'
const Todos:React.FC=(props) =>{ //optional by items?:string[]
    const todosCtx=useContext(TodosContext);
    return (
        <ul className={classes.todos}>
            {todosCtx.items.map(item=><TodosList key={item.id} text={item.text} onRemoveTodo={todosCtx.removeTodo.bind(null,item.id)}/>)}
        </ul>
    );
}

export default Todos;