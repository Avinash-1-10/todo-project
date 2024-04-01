import { ADD_TASK, CHECK_TASK, DELETE_TASK, UPDATE_TASK } from "../actionTypes";

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const updateTask = (task) => ({
  type: UPDATE_TASK,
  payload: task,
});

export const checkTask = (taskId) => ({
  type: CHECK_TASK,
  payload: taskId,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});
