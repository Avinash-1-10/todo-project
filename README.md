# Task Manager App

This is a simple task manager application built using React and Redux. It allows users to add, delete, update, and check tasks.

## Features

- Add a new task
- Delete an existing task
- Update the task
- Mark a task as completed

## Technologies Used

- React: A JavaScript library for building user interfaces
- Redux: A predictable state container for JavaScript apps
- Redux Persist: Persist and rehydrate a Redux store
- Tailwind CSS: A utility-first CSS framework for styling

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Avinash-1-10/todo-project
   ```

2. Navigate to the project directory:
   ```bash
   cd todo-project
   ```
3. Install dependencies:

   ```bash
   cd task-manager-app
   ```

4. Start the development server:
   ```bash
   cd task-manager-app
   ```
5. Open http://localhost:5173 to view it in the browser.

## Flow

1. **Home Page**:

   - Users land on the home page where they see a list of tasks.

2. **Add Task**:

   - Users can add a new task by clicking on the "+" button.
   - After entering the task details, users can press Enter or click the Add Task button to add the task to the list.

3. **Delete Task**:

   - Each task in the list is accompanied by a delete button (trash icon).
   - Users can click on the delete button next to a task to remove it from the list.

4. **Update Task**:

   - To update a task, users can click on the edit button (pencil icon) next to the task.
   - This switches the task to edit mode, allowing users to modify the task details.
   - Users can click the check button (checkmark icon) to save the changes.

5. **Check Task**:
   - Tasks are displayed with checkboxes.
   - Users can mark a task as completed by checking the checkbox next to it.
   - The task will be visually indicated as completed (e.g., with a strikethrough).
