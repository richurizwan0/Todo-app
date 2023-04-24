const todoInput = document.querySelector('.todo-input');//input box
const todoButton = document.querySelector('.todo-input-button');//add button
const todoList = document.querySelector('.todo-list');//ul list

todoButton.addEventListener("click",createListItem); //event listner on add button
todoList.addEventListener("click", deleteOrComplete);//event listner on list 


function createListItem(e) {
    e.preventDefault();//preventing page reload
    if(todoInput.value == ''){
        alert("Enter your to-do");
    }
    else{
        const newDiv = document.createElement("DIV");//div created
        const newLi = document.createElement("LI"); //Li tag created
        newLi.classList.add('list-item');//adding classlist to li tag
        newLi.innerText = todoInput.value; //write content to li tag from input field
        todoInput.value = ''; // setting input field as null
        const checkButton = document.createElement("button")//creating check/completed button
        checkButton.classList.add('completed-button');//adding class to completed button
        checkButton.innerHTML = "<i class='bx bx-check'></i>";
        const deleteButton = document.createElement("BUTTON");//creating trash button
        deleteButton.classList.add('delete-button');//adding class to delete button
        deleteButton.innerHTML = "<i class='bx bxs-trash'></i>";//boxicon trash button adding
        newDiv.appendChild(newLi); //appending li to div
        newDiv.appendChild(checkButton); //appending check button to div
        newDiv.appendChild(deleteButton);//appending delete button
        todoList.appendChild(newDiv);//appending div to ul
    }
}

function deleteOrComplete(e) {
    const item = e.target;
    const todoParent = item.parentElement;
    if(item.classList[0] === 'delete-button'){
        todoParent.classList.add('fall');
        todoParent.addEventListener("transitionend",e => {
            todoParent.remove();
        });
    }
    else if(item.classList[0] === 'completed-button'){
        todoParent.classList.toggle('completed');
    }
    
}