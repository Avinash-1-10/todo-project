import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from "../actionTypes";

// Action creator for adding a new task
export const addTask = (task) => ({
  type: ADD_TASK, // Action type to add a task
  payload: task, // Task data to be added
});

// Action creator for updating an existing task
export const updateTask = (task) => ({
  type: UPDATE_TASK, // Action type to update a task
  payload: task, // Updated task data
});

// Action creator for deleting a task
export const deleteTask = (taskId) => ({
  type: DELETE_TASK, // Action type to delete a task
  payload: taskId, // Id of the task to be deleted
});
