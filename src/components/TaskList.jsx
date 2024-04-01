import React from "react";
import { useSelector } from "react-redux";
import TaskRow from "./TaskRow";

const TaskList = () => {
  // Fetch tasks from the Redux store
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <div className="container mx-auto px-2 md:px-5">
      <div className="mt-10">
        {/* Task table */}
        <table className="w-full">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-2 py-3 text-left">Check</th>
              <th className="px-4 py-3 text-center">Task</th>
              <th className="px-2 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <TaskRow task={task} key={task.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskList;
