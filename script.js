document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
      const taskListItem = document.createElement('li');
      taskListItem.textContent = taskText;

      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.className = 'remove-btn';

      removeButton.addEventListener('click', () => {
        taskListItem.remove();
      });

      taskListItem.appendChild(removeButton);
      taskList.appendChild(taskListItem);

      taskInput.value = '';
    } else {
      alert('Please enter a task');
    }
  }

  addButton.addEventListener('click', addTask);

  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Add an event listener to document for the DOMContentLoaded event
  document.addEventListener('DOMContentLoaded', addTask);
});
