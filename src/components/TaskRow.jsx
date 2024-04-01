import React, { useState } from "react";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../redux/actions/taskActions";

const TaskRow = ({ task }) => {
  // State to manage task text and edit mode
  const [editedTask, setEditedTask] = useState(task.task);
  const [editMode, setEditMode] = useState(false);

  const dispatch = useDispatch();

  // Function to handle edit mode toggle
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  // Function to handle task update
  const handleUpdate = () => {
    dispatch(
      updateTask({ id: task.id, task: editedTask, completed: task.completed })
    );
    setEditMode(false);
  };

  // Function to handle checkbox change
  const handleCheck = () => {
    const updatedTask = { ...task, completed: !task.completed };
    dispatch(updateTask(updatedTask));
  };

  // Function to handle task deletion
  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50 transition duration-300 ease-in-out">
      {/* Checkbox */}
      <td className="px-4 py-3">
        <input
          type="checkbox"
          checked={task.completed}
          className="form-checkbox h-5 w-5 text-blue-600"
          onChange={handleCheck} // Handle checkbox change
        />
      </td>
      {/* Task */}
      <td className="px-4 py-3">
        {editMode ? (
          // Render input field in edit mode
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-2 py-1 focus:outline-none"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)} // Handle input change
          />
        ) : (
          // Render task text in view mode
          <span
            className={`${task.completed ? "text-green-500 line-through" : ""}`} // Apply line-through style for completed tasks
          >
            {task.task}
          </span>
        )}
      </td>
      {/* Actions */}
      <td className="px-4 py-3 text-right flex items-center gap-5 justify-end">
        {/* Edit or Update Button based on edit mode */}
        {editMode ? (
          <button
            onClick={handleUpdate} // Handle update button click
            className="text-green-600 hover:text-green-900 transition duration-300 ease-in-out "
          >
            <FaCheck />
          </button>
        ) : (
          <button
            onClick={toggleEditMode} // Handle edit button click
            className="text-blue-600 hover:text-blue-900 transition duration-300 ease-in-out "
          >
            <FaEdit />
          </button>
        )}
        {/* Delete Button */}
        <button
          className="text-red-600 hover:text-red-900 transition duration-300 ease-in-out"
          onClick={handleDelete} // Handle delete button click
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default TaskRow;
