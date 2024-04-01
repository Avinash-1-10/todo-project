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
          {/* Table header */}
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-2 py-3 text-left">Check</th>{" "}
              {/* Checkbox column */}
              <th className="px-4 py-3 text-start">Task</th>{" "}
              {/* Task description column */}
              <th className="px-2 py-3 text-right">Actions</th>{" "}
              {/* Actions column */}
            </tr>
          </thead>
          {/* Table body */}
          <tbody>
            {/* Iterate over tasks array and render TaskRow component for each task */}
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
