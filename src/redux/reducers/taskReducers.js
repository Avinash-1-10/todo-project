import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from "../actionTypes";

// Initial state for the tasks
const initialState = {
  tasks: [],
};

// Reducer function to handle actions related to tasks
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    // Action to add a new task
    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks], // Add new task to the beginning of the tasks array
      };
    // Action to delete a task
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload), // Filter out the deleted task from the tasks array
      };
    // Action to update a task
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(
          (task) => (task.id === action.payload.id ? action.payload : task) // Update the task with the matching id
        ),
      };
    // Default case for handling unknown actions
    default:
      return state; // Return the current state if the action type is unknown
  }
};

export default taskReducer;
