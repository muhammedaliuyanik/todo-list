const addUpdate = document.getElementById("addUpdateClick");
const alerting = document.getElementById("alert");
const listItems = document.getElementById("list-items"); 

let todo = JSON.parse(localStorage.getItem("todo-list"));
if(!todo)
    todo = [];

const todoValue = document.getElementById("todoText");
function AddToDoItem(){
    if(todoValue.value){
        let newTask = document.createElement('li');
        let item = document.createTextNode(todoValue.value);
        newTask.appendChild(item);
        listItems.appendChild(newTask);
        todoValue.value = "";
        AddUpdateDeleteItems();
    }
    else{
        alerting.innerText = ("Please enter your todo text!");
    }
}

function AddUpdateDeleteItems(){
    let updateItems = document.getElementById("list-items")
    const updateDeleteItems = 
    `<li>${todoValue.value}
    <img class="edit todo-controls" onclick="UpdateToDoItem(this)" src="/images/update.png" />
    <img class="delete todo-controls" onclick="DeleteToDoItem(this)" src="/images/delete.png" />
    </li>`
    updateItems.innerHTML += updateDeleteItems;
    
}

function UpdateTodoItem(){

}

function DeleteToDoItem(){
    
}

function ListRemovedTaks(){

}

function AddToRemovedTasks(){

}

function RestoreTaskFromRemoved(){

}

function ListToDoItems(){

}

function ShowComplatedTasks(){

}