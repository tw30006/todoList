import { useState } from "react";
import CreateForm from './CreateForm'
import Todo from './Todo'

function TodoWrapper(){
    const [todos, setTodos] = useState([
        {content: '修改履歷', id:Math.random(), isCompleted: false, isEditing: false},
        {content: '做專案', id:Math.random(), isCompleted: false, isEditing: false},
    ]);

    const addTodo = (content, isCompleted, isEditing) => {
        setTodos([...todos, {content,id: Math.random(), isCompleted, isEditing}])
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo)=>{
            return todo.id !== id
        }))
    }

    const toggleCompleted = (id) => {
        setTodos(todos.map((todo) => {
            return todo.id === id 
            ? {...todo, isCompleted: !todo.isCompleted}
            : todo
        }))
    }

    const toggleIsEditing = (id) => {
        setTodos(todos.map((todo) => {
            return todo.id === id 
            ? {...todo, isEditing: !todo.isEditing}
            : todo
        }))
    }

    const editTodo = (id,newContent) => {
        setTodos(todos.map((todo) => {
            return todo.id === id
            ? {...todo, content: newContent, isEditing: false}
            : todo
        }))
    }
    
    return (
        <div className="wrapper">
            <h2>待辦事項</h2>
            <CreateForm addTodo = {addTodo}/>
            {todos.map((todo) => {
                return <Todo todo={todo} key={todo.id} 
                deleteTodo = {deleteTodo} toggleCompleted = {toggleCompleted} editTodo = {editTodo}
                toggleIsEditing = {toggleIsEditing}
                />
            })}
        </div>
    )
}

export default TodoWrapper