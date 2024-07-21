document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach((taskText) => addTask(taskText, false));
  }

  function addTask(taskText, save = true) {
    const taskListItem = document.createElement('li');
    taskListItem.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';

    removeButton.addEventListener('click', () => {
      taskListItem.remove();
      removeTask(taskText);
    });

    taskListItem.appendChild(removeButton);
    taskList.appendChild(taskListItem);

    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    taskInput.value = '';
  }

  function removeTask(taskText) {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const index = storedTasks.indexOf(taskText);
    if (index !== -1) {
      storedTasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
  }

  loadTasks();

  addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      addTask(taskText);
    } else {
      alert('Please enter a task');
    }
  });

  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        addTask(taskText);
      } else {
        alert('Please enter a task');
      }
    }
  });
});
