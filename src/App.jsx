import React from "react";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";

const App = () => {
  return (
    <div>
      {/* Render the TaskInput component to allow users to add tasks */}
      <TaskInput />

      {/* Render the TaskList component to display the list of tasks */}
      <TaskList />
    </div>
  );
};

export default App;
