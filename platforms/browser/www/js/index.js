
//Selectors
const todoInput = document.querySelector('todo-input');
const todoButton = document.querySelector('todo-button');
const todoList = document.querySelector('todo-list');

//Event Listeners
todoButton.addEventListener('click', addTodo);

//Functions
function addTodo(Event){
  //Prevent form from submitting
  event.preventDefault();
  //Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Create LI
  const newTodo = document.createElement('li');
  newTodo.innerText = 'hey';
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  //Check mark button
  const completedButton = document.createElement('button');
  completedButton.innerText = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //Check trash button
  const trashButton = document.createElement('button');
  trashButton.innerText = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("complete-btn");
  todoDiv.appendChild(trashButton);
  //Append to list
  todoList.appendChild(todoDiv);
}