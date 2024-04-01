function add() {
  listItem.textContent = task;
  const editBtn = document.createElement("button");
  editBtn.textContent = "edit";
  editBtn.onclick = function () {
    let newTask = prompt("Change the task");
    listItem.textContent = newTask;
    listItem.appendChild(editBtn);
    listItem.appendChild(delBtn);
  };
}
