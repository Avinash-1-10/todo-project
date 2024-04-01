import React from "react";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";


const App = () => {
  return (
    <div>
      <TaskInput/>
      <TaskList />
    </div>
  );
};

export default App;
