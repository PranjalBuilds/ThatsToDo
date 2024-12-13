const todoForm = document.querySelector('form');
const todoInput = document.getElementById('todoInput');
const todoListUl = document.getElementById('todo-list');

let allTodos = [];
todoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    addToDo();
})

const addToDo = () => {
    const todoText = todoInput.value.trim();
    
    if(todoText.length > 0) {
        allTodos.push(todoText);
        console.log(allTodos);
        todoInput.value = "";
    }


}   