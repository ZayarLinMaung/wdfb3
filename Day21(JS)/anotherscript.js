// Add
document.querySelector("#addBtn").onclick = function() {
    let value = document.querySelector('input').value.trim();
    
    if(!value) {
        document.querySelector('input').focus();
        return
    }
     let li = document.createElement('li')
    li.innerHTML = `
        <span>${value}</span>
        <button onclick="editTodo(this)">Edit</button>
        <button onclick="deleteTodo(this)">Delete</button>
    `
    document.querySelector('ul').appendChild(li);
    document.querySelector('input').value = '';
    document.querySelector('input').focus();
    setLocalStorage();
}

document.querySelector('input').onkeyup = function(event) {
    if(event.key === 'Enter') {
        document.querySelector("#addBtn").onclick()
    }
}

// delete
function deleteTodo(deleteBtn) {
    deleteBtn.parentElement.remove()
    setLocalStorage();
}

// edit
function editTodo(editBtn) {
    let newValue = prompt("Edit", editBtn.previousElementSibling.textContent)
    editBtn.previousElementSibling.textContent = newValue;
    setLocalStorage();
}

function load() {
    JSON.parse(localStorage.getItem('todos'))?.forEach(function(todo, index) {
        let li = document.createElement('li')
        li.innerHTML = `
            <span>${todo}</span>
            <button onclick="editTodo(this, ${index})">Edit</button>
            <button onclick="deleteTodo(this, ${index})">Delete</button>
        `
        document.querySelector('ul').appendChild(li);
    })
}

function setLocalStorage() {
    let todos = [];
    document.querySelectorAll('li')?.forEach(function(li) {
        todos.push(li.firstElementChild.textContent);
    })
    localStorage.setItem('todos',JSON.stringify(todos))
}

load();