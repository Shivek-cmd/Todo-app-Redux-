import React, { useState } from "react";
import { FaTimes } from "react-icons/fa"; // Import the cross icon
import { addTodo, removeTodo } from "../actions/todoAction";
import { useDispatch, useSelector } from "react-redux";

function Todo() {
  const [value, setValue] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (value.trim()) {
      dispatch(addTodo(value));
      setValue("");
    }
  };

  const handleKeydown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const handleRemove = (index) => {
    dispatch(removeTodo(index));
  };

  return (
    <div className="h-screen bg-gray-300 flex items-center justify-center">
      <div className="bg-gray-800 text-white w-full max-w-md h-auto border rounded-lg shadow-lg flex flex-col space-y-4 p-6">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Add a new todo"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeydown}
            className="flex-grow p-2 rounded-md border border-gray-600 bg-gray-700 text-white focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out"
          >
            Add Todo
          </button>
        </div>
        <div className="overflow-y-auto max-h-64">
          <ul className="list-disc pl-5 space-y-2">
            {todos.map((item, index) => (
              <li
                key={index}
                className="bg-gray-700 p-2 rounded-md flex items-center justify-between"
              >
                {item}
                <button
                  onClick={() => handleRemove(index)}
                  className="text-red-500 hover:text-red-700 transition duration-300"
                >
                  <FaTimes />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todo;
