const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const dueDate = document.getElementById('due-date');
const todoList = document.getElementById('todo-list');
const deleteAllBtn = document.getElementById('delete-all');

let todos = [];

todoForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const task = todoInput.value.trim();
  const date = dueDate.value;

  if (task && date) {
    todos.push({ task, date, done: false });
    todoInput.value = '';
    dueDate.value = '';
    renderTodos();
  }
});

deleteAllBtn.addEventListener('click', function () {
  todos = [];
  renderTodos();
});

function renderTodos() {
  todoList.innerHTML = '';

  if (todos.length === 0) {
    todoList.innerHTML = '<tr><td colspan="4" class="text-center py-4">No task found</td></tr>';
    return;
  }

  todos.forEach((todo, index) => {
    const tr = document.createElement('tr');
    tr.className = 'border-b border-gray-700';

    tr.innerHTML = `
      <td class="py-2 ${todo.done ? 'line-through text-gray-500' : ''}">${todo.task}</td>
      <td class="py-2">${todo.date}</td>
      <td class="py-2">${todo.done ? 'Completed' : 'Pending'}</td>
      <td class="py-2">
        <button onclick="toggleStatus(${index})" class="bg-green-600 hover:bg-green-700 px-2 py-1 rounded text-xs mr-1">Done</button>
        <button onclick="deleteTodo(${index})" class="bg-red-600 hover:bg-red-700 px-2 py-1 rounded text-xs">Del</button>
      </td>
    `;
    todoList.appendChild(tr);
  });
}

function toggleStatus(index) {
  todos[index].done = !todos[index].done;
  renderTodos();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

document.getElementById('filter-btn').addEventListener('click', () => {
  alert("Filter feature not implemented yet!");
});
