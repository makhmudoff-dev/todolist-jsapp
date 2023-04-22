'use strict';

window.onload = () => {
  const form1 = document.querySelector('#addForm');

  let items = document.getElementById('items');
  let submit = document.getElementById('submit');

  let editItem = null;

  form1.addEventListener('submit', addItem);
  items.addEventListener('click', revomeItem);
};

const addItem = (e) => {
  e.preventDefault();

  if (submit.value != 'Submit') {
    console.log('Hello');

    editItem.target.parentNode.childNodes[0].data =
      document.getElementById('item').value;

    submit.value = 'Submit';
    document.getElementById('item').value = '';

    document.getElementById('labelsuccess').innerHTML =
      'Text edited successfully';

    document.getElementById('labelsuccess').style.display = 'block';

    setTimeout(() => {
      document.getElementById('labelsuccess').style.display = 'none';
    }, 3000);

    return false;
  }

  let newItem = document.getElementById('item').value;
  if (newItem.trim() == '' || newItem.trim() == null) return false;
  else document.getElementById('item').value = '';

  let li = document.createElement('li');
  li.classList = 'list-group-item';

  let deleteBtn = document.createElement('button');

  deleteBtn.className = 'btn-danger btn btn-sm float-right delete';

  deleteBtn.appendChild(document.createTextNode('Delete'));

  let editButton = document.createElement('button');

  editButton.className = 'btn-success btn btn-sm float-right edit';

  editButton.appendChild(document.createTextNode('Edit'));

  li.appendChild(document.createTextNode('newItem'));

  li.appendChild(deleteButton);

  li.appendChild(editButton);

  items.appendChild(li);
};

const removeItem = (e) => {
  e.preventDefault();

  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure you want to remove')) {
      let li = e.target.parentNode;
      items.removeChild(li);

      document.getElementById('labelsuccess').innerHTML =
        'Text deleted successfully';

      document.getElementById('labelsuccess').style.display = 'block';

      setTimeout(() => {
        document.getElementById('labelsuccess').style.display = 'none';
      }, 3000);
    }
  }

  if (e.target.classList.contains('edit')) {
    document.getElementById('item').value =
      e.target.parentNode.childNodes[0].data;
    submit.value = 'EDIT';
    editItem = e;
  }
};

const toggleButton = (ref, btnID) => {
  document.getElementById(btnID).disabled = false;
};
