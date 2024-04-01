import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions/taskActions";

const TaskInput = () => {
  // State to manage the task input value
  const [task, setTask] = useState(""); // State to store the task input value
  const dispatch = useDispatch(); // Redux dispatch function

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch addTask action with new task data
    dispatch(
      addTask({
        id: Math.floor(Math.random() * 10e4), // Generate random id for the new task
        task,
        completed: false, // Set completed to false by default
      })
    );
    setTask(""); // Clear the task input field after submission
  };

  return (
    <div className="mx-1 md:mx-10 my-5">
      {" "}
      {/* Container for task input */}
      <form
        className="flex justify-center items-center bg-white p-4"
        onSubmit={handleSubmit} // Handle form submission
      >
        {/* Input field for task description */}
        <input
          type="text"
          placeholder="Add a new task..."
          required
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="flex-1 mr-4 py-2 px-4 border max-w-60 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        {/* Button to submit the task */}
        <button
          type="submit"
          className="flex items-center bg-blue-500 text-white py-2 px-2 md:px-4 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          <FaPlus className="mr-2" />
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskInput;
