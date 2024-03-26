const addBtn = document.querySelector(".addbtn");
addBtn.onclick = function () {
  const task = document.querySelector("input").value;
  const listItem = document.createElement("li");
  listItem.textContent = task;
  const delbtn = document.createElement("button");
  delbtn.textContent = "delete task";
  delbtn.onclick = function () {
    listItem.remove();
  };
  document.querySelector("ul").appendChild(listItem);
  listItem.appendChild(delbtn);
};
