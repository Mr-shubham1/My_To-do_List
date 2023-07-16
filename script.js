const todoformbutton = document.querySelector(".todo_form button");
const todoforminput = document.querySelector(".todo_form input[type=\"text\"]");
const todolist = document.querySelector(".todo_list");
let listcount = 0;

todoformbutton.addEventListener("click",(e)=>{
    e.preventDefault();

    if(todoforminput.value)
    {
        listcount+=1;
        const newlist = document.createElement("li");
        const newlistinnerhtml = `<div class="list_item">
        <button class="list_item_btn">${listcount}</button>
        <p>${todoforminput.value}</p>
        </div>
        <span class="todo_list_cross">&Cross;</span>`
        newlist.innerHTML = newlistinnerhtml;
        todolist.append(newlist);
        todoforminput.value ="";

    }
    else{
        alert("Please enter task");
    }


})

todolist.addEventListener("click",(e)=>{
    if(e.target.classList.contains("list_item_btn"))
    {
    e.target.style.backgroundColor = "rgb(255, 58, 51)";
    const targetlistpara = e.target.parentNode.childNodes[3];
    console.log(targetlistpara);
    targetlistpara.style.textDecoration = "line-through";
    }
    if(e.target.classList.contains("todo_list_cross")){
        e.target.parentNode.remove();
    }
})

