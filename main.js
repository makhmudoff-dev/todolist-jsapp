'use strict';

const item = document.getElementById('box');
const listItem = document.getElementById('list_item');
const btn = document.getElementById('addItem');
const removeitem = document.getElementById('removeItem');

btn.addEventListener('click', () => {
  if (item.value !== '') {
    // Creating ol element and adding value to it
    let make_ol = document.createElement('ol');
    make_ol.appendChild(document.createTextNode(item.value));
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    // adding ol to ul

    listItem.appendChild(make_ol);
    listItem.appendChild(deleteButton);
    // reset the value of box
    item.value = '';

    // delete a il item on click

    make_ol = function () {
      this.appendNode.removeChild(this);
    };

    //
    deleteButton.addEventListener('click', function () {
      listItem.remove();
    });
  } else {
    // Alert msg when value of box is ' ' empty
    alert('Please add a value to item');
  }
});
