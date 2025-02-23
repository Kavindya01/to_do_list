// Get DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Event listener for adding a new task
addTaskBtn.addEventListener('click', addTask);

function addTask() {
    // Get task input value
    const taskValue = taskInput.value.trim();
    if (taskValue === '') {
        return;
    }

    // Create new list item
    const li = document.createElement('li');
    li.innerHTML = `<span>${taskValue}</span> <button class="delete-btn">X</button>`;
    
    // Add event listener for deleting task
    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
    });

    // Append the new task to the list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = '';
}
