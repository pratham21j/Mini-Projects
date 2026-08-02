# 📝 JavaScript To-Do List

A simple and responsive To-Do List application built using **HTML**, **CSS**, and **Vanilla JavaScript**. The application allows users to add, complete, delete, and permanently store tasks using the browser's Local Storage.

---

## 🚀 Features

- ➕ Add new tasks
- ✅ Mark tasks as completed
- ❌ Delete tasks
- 💾 Persistent storage using Local Storage
- 🎯 Clean and minimal user interface
- ⚡ Instant updates without page reload

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Local Storage API

---

## 📂 Project Structure

```
todo-list/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## ⚙️ How It Works

### 1. Add a Task

- Enter a task in the input field.
- Click the **Add Task** button.
- The task is added to the list and saved in Local Storage.

### 2. Complete a Task

- Click on any task.
- The task is marked as completed.
- Clicking again toggles it back to incomplete.

### 3. Delete a Task

- Click the **Delete** button beside a task.
- The task is removed from both the UI and Local Storage.

### 4. Persistent Storage

- Tasks remain saved even after refreshing or reopening the browser.

---

## 🧠 Core Concepts Used

- DOM Manipulation
- Event Listeners
- Arrays and Objects
- Functions
- Local Storage API
- JSON Parsing & Stringifying
- Event Propagation (`stopPropagation()`)

---

## 📜 Code Workflow

1. Wait for the DOM to load.
2. Retrieve saved tasks from Local Storage.
3. Render all saved tasks.
4. Add new tasks.
5. Toggle task completion.
6. Delete tasks.
7. Save every change back to Local Storage.

---

## 💾 Local Storage Format

Tasks are stored as an array of objects.

Example:

```json
[
  {
    "id": 1722500000000,
    "text": "Complete JavaScript project",
    "completed": false
  },
  {
    "id": 1722500005000,
    "text": "Practice DSA",
    "completed": true
  }
]
```

---

## 📸 Preview

```
------------------------------
|  [ Buy groceries ] [Add]   |
------------------------------

✓ Complete JavaScript Project     Delete

Learn React                     Delete

Study DSA                       Delete
```

---

## ▶️ Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/todo-list.git
```

### Navigate to the project

```bash
cd todo-list
```

### Open the application

Simply open `index.html` in your browser.

No installation or dependencies are required.

---

## 🔮 Future Improvements

- Edit existing tasks
- Due dates
- Categories
- Task priorities
- Dark mode
- Search functionality
- Filters (All, Active, Completed)
- Drag-and-drop task sorting
- Responsive mobile design

---

## 🎯 Learning Outcomes

This project demonstrates:

- Working with the DOM
- Handling user events
- Managing application state
- Using Local Storage for persistence
- Creating reusable JavaScript functions
- Building CRUD functionality in Vanilla JavaScript

---

## 👨‍💻 Author

**Pratham Jain**

---

## 📄 License

This project is open-source and available under the **MIT License**.
