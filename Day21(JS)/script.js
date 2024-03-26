const addBtn = document.querySelector(".addbtn");
addBtn.onclick = function () {
  const task = document.querySelector("input").value.trim();
  const listItem = document.createElement("li");
  if (task !== "") {
    listItem.textContent = task;
    const editBtn = document.createElement("button");
    editBtn.textContent = "edit";
    editBtn.onclick = function () {
      let newTask = prompt("Change the task");
      listItem.textContent = newTask;
      listItem.appendChild(editBtn);
      listItem.appendChild(delBtn);
    };
    const delBtn = document.createElement("button");
    delBtn.textContent = "delete";
    delBtn.onclick = function () {
      listItem.remove();
    };
    document.querySelector("ul").appendChild(listItem);
    listItem.appendChild(editBtn);
    listItem.appendChild(delBtn);
  }
  document.querySelector("input").value = "";
  document.querySelector("input").focus();
};
document.querySelector("input").onkeyup = function (event) {
  if (event.key === "Enter") {
    addBtn.onclick();
  }
};
