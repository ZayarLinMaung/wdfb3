const addBtn = document.querySelector(".addbtn");
addBtn.onclick = function () {
  const task = document.querySelector("input").value;
  const listItem = document.createElement("li");
  listItem.textContent = task;
  const delbtn = document.createElement("button");
  delbtn.textContent = "delete task";
  document.querySelector("ul").appendChild(listItem);
  listItem.appendChild(delbtn);
};
