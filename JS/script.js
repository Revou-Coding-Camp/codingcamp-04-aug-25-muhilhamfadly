let todoList = [];

function validateForm() {
    const todoInput = document.getElementById('todo-input').value.trim();
    const dateInput = document.getElementById('date-input').value;

    if (todoInput === '' || dateInput === '') {
        alert('Please enter a todo item and a due date.');
    } else {
        addTodo(todoInput, dateInput);
        document.getElementById('todo-input').value = '';
        document.getElementById('date-input').value = '';
    }
}

function addTodo(todo, date) {
    const todoItem = {
        task: todo,
        date: date
    };

    todoList.push(todoItem);
    displayTodos();
}

function displayTodos() {
    const todoListElement = document.getElementById('todo-list');
    todoListElement.innerHTML = ''; 

    if (todoList.length === 0) {
        todoListElement.innerHTML = `<p class="text-gray-400">No todos added yet.</p>`;
        return;
    }

    todoList.forEach((item, index) => {
        const todoItem = document.createElement('div');
        todoItem.className = "bg-gray-700 text-white p-3 rounded mb-2 shadow-sm flex justify-between items-center";
        todoItem.innerHTML = `
            <span class="font-medium">${item.task}</span>
            <span class="text-sm text-gray-300">${item.date}</span>
        `;
        todoListElement.appendChild(todoItem);
    });
}


function clearTodos() {
    todoList = [];
    displayTodos();
}