# Kanban Board - Todo List

A simple and interactive Kanban board application for managing tasks across different stages: **To Do**, **In Progress**, and **Done**.

## Features

- ✅ **Drag and Drop**: Easily move tasks between columns by dragging
- ✅ **Add New Tasks**: Create tasks with title and description
- ✅ **Delete Tasks**: Remove tasks from the board
- ✅ **Task Counter**: Automatic count updates for each column
- ✅ **Local Storage**: Tasks are saved to browser's local storage and persist between sessions
- ✅ **Responsive Design**: Clean, dark-themed UI

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge, etc.)
- No installation or dependencies required

### How to Use

1. Open `index.html` in your web browser
2. Click the **"NEW TASK"** button to add a new task
3. Enter the task **title** and **description**
4. Click **"Add Task"** to create it (tasks are added to the "To Do" column)
5. **Drag and drop** tasks between columns as needed
6. Click **"Delete"** on any task to remove it
7. Your tasks are automatically saved and will be restored when you reload the page

## Project Structure

```
kanban-todo-list/
├── index.html      # HTML structure of the Kanban board
├── script.js       # JavaScript logic and functionality
├── style.css       # Styling and layout
└── README.md       # This file
```

## File Descriptions

### index.html
Defines the structure of the Kanban board with three columns (To Do, In Progress, Done) and a modal for adding new tasks.

### script.js
Handles all functionality including:
- Task creation and deletion
- Drag and drop events
- Local storage management
- Task counter updates

### style.css
Provides the dark-themed UI with styling for:
- Navigation bar
- Task columns
- Task cards
- Modal dialog
- Drag-over hover effects

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Styling and layout
- **JavaScript (Vanilla)**: DOM manipulation, drag-and-drop API, local storage
- **Local Storage API**: Data persistence

## Browser Support

Works on all modern browsers that support:
- HTML5 Drag and Drop API
- LocalStorage API
- ES6 JavaScript

## Features Breakdown

### Drag and Drop
- Click and hold any task to drag it
- Hover over a column to see the drop zone highlight
- Release to drop the task in the desired column

### Task Management
- Add tasks with custom title and description
- Delete tasks individually
- Tasks are automatically counted in each column

### Data Persistence
- All tasks are saved to the browser's local storage
- Tasks persist across browser sessions
- Data is cleared only when explicitly deleted or local storage is cleared

## Future Enhancements

Potential features for future versions:
- Task editing
- Due dates and priorities
- Task filtering and search
- Multiple boards
- Export/import functionality
- Color-coded tasks

## License

This project is open source and available for personal and commercial use.

## Author
@anujkatare
Created as a simple task management tool.
