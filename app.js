const todoForm = document.querySelector('form');
const todoInput = document.getElementById('todoInput');
const todoListUl = document.getElementById('todo-list');

let allTodos = getTodos();
updateTodoList();
console.log(allTodos);


todoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    addToDo();
})

function addToDo() {
    const todoText = todoInput.value.trim();
    
    if(todoText.length > 0) {
        allTodos.push(todoText);
        updateTodoList();
        saveTodos();
        todoInput.value = "";
    }

}   

function updateTodoList() {
    todoListUl.innerHTML = "";
    
    allTodos.forEach((todo, todoIndex) => {
        todoItem = createTodoItem(todo, todoIndex)
        todoListUl.append(todoItem);
    })
}

const createTodoItem = (todo, todoIndex) => {
    const todoId = "todo-"+todoIndex;
    const TodoLi = document.createElement("li");
    TodoLi.className = "todo";
    TodoLi.innerHTML = `
         <input type="checkbox" name="" id="${todoId}">
                
            <label for="${todoId}" class="customCb">
                <svg fill="transparent" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
            </label>

            <label for="${todoId}" class="todoTxt">${todo}</label>
        
        <button class="deleteBtn"><svg fill="var(--secondary-color)" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button>
    `
    return TodoLi;
}

const saveTodos = () => {
    const todosJson = JSON.stringify(allTodos);
    localStorage.setItem("todos", todosJson)
}

saveTodos();

function getTodos(){
    const todos = localStorage.getItem("todos") || "[]";
    return JSON.parse(todos); 
}