import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import EditForm from "./EditForm";

function Todo({ todo, deleteTodo, toggleCompleted, toggleIsEditing, editTodo }) {
  return todo.isEditing ? (
    <EditForm todo={todo} editTodo = {editTodo}/>
  ) : (
    <div className={`todo ${todo.isCompleted ? "completed" : ""}`}>
      <p onClick={() => toggleCompleted(todo.id)}>
      {todo.content}</p>
      <div className="todo-icon">
        <FaRegEdit 
        onClick={() => {toggleIsEditing(todo.id)}}
        style={{ cursor: "pointer" }} />
        <MdDelete
          onClick={() => {deleteTodo(todo.id)}}
          style={{ cursor: "pointer", marginLeft: "5px" }}
        />
      </div>
    </div>
  );
}

export default Todo