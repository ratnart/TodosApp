import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
    items: Todo[]; addTodo: (text:string) => void; removeTodo: (id: string) => void;
}
export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => { },
    removeTodo: (id: string) => { }
});
const TodosContextProvider:React.FC<{children?:React.ReactNode}>=(props) => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const addTodosHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);
        setTodos((prevTodos) => {
            return prevTodos.concat(newTodo)
        })
    };
    const removeTodosHandler = (todoId: string) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(Todos => Todos.id !== todoId);
        })
    }
    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodosHandler,
        removeTodo: removeTodosHandler
    };
    return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>
}
export default TodosContextProvider;