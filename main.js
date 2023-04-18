"use strict";

const item = document.getElementById("box");
const listItem = document.getElementById("list_item");
const btn = document.getElementById("addItem");

btn.addEventListener("click", () => {
  if (item.value !== "") {
    // Creating ol element and adding value to it
    let make_ol = document.createElement("ol");
    make_ol.appendChild(document.createTextNode(item.value));

    // adding ol to ul

    listItem.appendChild(make_ol);

    // reset the value of box
    item.value = "";

    // delete a il item on click

    make_ol = function () {
      this.appendNode.removeChild(this);
    };
  } else {
    // Alert msg when value of box is ' ' empty
    alert("Please add a value to item");
  }
});
