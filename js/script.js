const form = document.querySelector(".form");
const input = document.querySelector("#input-todo");
const addList = document.getElementById("todo-output");

form.addEventListener("submit", e => {
    e.preventDefault();
    const todoItem = document.createElement("div");
    todoItem.innerText = input.value;
    todoItem.className = "todo-item";
    addList.appendChild(todoItem);
    input.value = "";

    todoItem.addEventListener("click", () => {
        todoItem.remove();

  });
});