let todos = [];
let currentFilter = "all";
const form = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const clearCompletedButton = document.getElementById("clear-completed");

function addTodo(text) {
  const newTodo = {
    id: Date.now(),
    text,
    completed: false,
  };
  todos.push(newTodo);
  renderTodos();
}
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const todoInput = document.getElementById("todo-input");
  if (todoInput.value.trim() !== "") {
    addTodo(todoInput.value.trim());
    todoInput.value = "";
  }
});

function createTodoElement(todo) {
  const li = document.createElement("li");
  li.dataset.id = todo.id;
  li.className = todo.completed ? "completed" : "";
  li.textContent = todo.text;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete";
  li.appendChild(deleteButton);

  return li;
}

function renderTodos() {
  todoList.innerHTML = "";
  let filtered = todos;
  if (currentFilter === "active") {
    filtered = todos.filter((todo) => !todo.completed);
  } else if (currentFilter === "completed") {
    filtered = todos.filter((todo) => todo.completed);
  }
  filtered.forEach((todo) => {
    todoList.appendChild(createTodoElement(todo));
  });

  updateStats();
}

todoList.addEventListener("click", (event) => {
  const id = event.target.parentElement.dataset.id;

  if (event.target.tagName === "LI") {
    toggleTodo(event.target.dataset.id);

    if (event.target.classList.contains("delete")) {
      deleteTodo(id);
    }
  }
});

function toggleTodo(id) {
  todos = todos.map((todo) => {
    return todo.id == id ? { ...todo, completed: !todo.completed } : todo;
  });
  renderTodos();
}

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  renderTodos();
}

// filters
// filterButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     currentFilter = button.dataset.filter;
//     renderTodos();
//   });
// });

// Stats
function updateStats() {
  const activeCount = todos.filter((todo) => !todo.completed).length;
  itemsLeft.textContent = `${activeCount} item${activeCount !== 1 ? "s" : ""} left`;
}

// Clear completed
clearCompletedButton.addEventListener("click", () => {
  todos = todos.filter((todo) => !todo.completed);
  renderTodos();
});

// Edit Tasks  (Double-click to edit, Enter saves, Escape cancels.)
todoList.addEventListener("dblclick", (event) => {
  if (
    event.target.tagName === "LI" &&
    !event.target.classList.contains("delete")
  ) {
    const id = event.target.dataset.id;
    const todo = todos.find((todo) => todo.id === id);
    const inputEdit = document.createElement("input");
    inputEdit.type = "text";
    inputEdit.value = todo.text;
    event.target.appendChild(inputEdit);
    inputEdit.focus();

    inputEdit.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        const newText = inputEdit.value.trim();
        if (newText !== "") {
          todos = todos.map((t) => (t.id === id ? { ...t, text: newText } : t));
          renderTodos();
        }
      }
    });
  }
});

const filterButtons = document.querySelectorAll(".filter");
filterButtons.forEach((filterBtn) => {
  filterBtn.addEventListener("click", () => {
    // remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));

    // Add active class to clicked button
    filterBtn.classList.add("active");
    // update current filter based on button's data-filter
    currentFilter = filterBtn.dataset.filter;
    // re-render the todo list to apply the new filter
    renderTodos();
  });
});
