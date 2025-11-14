const task = document.getElementById("task");
const btn = document.getElementById("btn");
const list = document.getElementById("task_list");

btn.addEventListener("click" ,()=>{
    const value = task.value;
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerText = "X";

    li.innerText = value;
    list.appendChild(li);
    li.appendChild(button);
    task.value = ""

    button.addEventListener("click" , ()=>{
    li.remove();
})
})

