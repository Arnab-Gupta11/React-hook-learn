import { useReducer } from "react";

// Reducer function
const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case "TOGGLE_TODO":
      return state.map((todo) => (todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo));
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

// Component using useReducer
const TodoList = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  //Using payload in actions is a common convention in Redux and similar state management patterns. It allows you to pass additional data along with the action type, providing the necessary information to update the state appropriately.
  const addTodo = (text) => {
    dispatch({ type: "ADD_TODO", payload: text });
  };

  const toggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const removeTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  return (
    <div className="mt-5 border-2 p-5">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="mt-5  flex justify-between items-center">
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }} onClick={() => toggleTodo(todo.id)} className="cursor-pointer">
              {todo.text}
            </span>
            <button className="btn btn-error ml-5" onClick={() => removeTodo(todo.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <input
        className="mt-5 border px-5 py-3 border-gray-700"
        type="text"
        placeholder="Add todo..."
        onKeyDown={(e) => {
          if (e.key === "Enter" && e.target.value.trim() !== "") {
            addTodo(e.target.value.trim());
            e.target.value = "";
          }
        }}
      />
    </div>
  );
};

export default TodoList;
