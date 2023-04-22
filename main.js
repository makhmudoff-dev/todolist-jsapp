'use strict';

const inputBox = document.getElementById('box');
const addItem = document.getElementById('addItem');
const listItem = document.getElementById('list_item');
const deleteBtn = document.getElementById('delete-button');

// Event listeners
inputBox.addEventListener('keyup', function () {
  let userInput = inputBox.value;
  if (userInput.trim() != 0) {
    addItem.classList.add('active');
  } else {
    addItem.classList.remove('active');
  }
});

addItem.addEventListener('click', todoAdd);
listItem.addEventListener('click', todoDelete);

// Function
function todoAdd(event) {
  event.preventDefault();

  const todoLi = document.createElement('li');
  const key = (Math.random() + 1).toString().split('.')[1];
  todoLi.innerText = inputBox.value;
  todoLi.setAttribute('id', key);

  const todoDeleteBtn = document.createElement('button');
  todoDeleteBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
  todoDeleteBtn.classList.add('delete-button');
  todoDeleteBtn.onclick = () => {
    const _key = this.getAttribute('data-key');
    document.getElementById(_key).remove();
    this.remove();
  };

  todoDeleteBtn.setAttribute('data-key', key);
  todoLi.appendChild(todoDeleteBtn);

  todoMain.appendChild(todoLi);

  inputBox.value = '';

  addItem.classList.remove('active');
}

const todoDelete = (e) => {
  const item = e.target;
  if (item.classList[0] === 'delete-button') {
    listItem.removeChild(todoLi);
  }
};
