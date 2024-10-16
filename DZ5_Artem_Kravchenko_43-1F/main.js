var input = document.getElementById("input");
var createButton = document.getElementById("create_button");
var todoList = document.getElementById("todo_list");

var createTodo = () => {
  if (!input.value.trim()) return alert("Error");

  var div = document.createElement("div");
  var text = document.createElement("h3");
  var buttonsDiv = document.createElement("div");

  var delButton = document.createElement("button");
  var editButton = document.createElement("button");

  div.setAttribute("class", "block_text");
  buttonsDiv.setAttribute("class", "buttons_div");

  text.innerHTML = input.value;

  div.append(text);
  todoList.append(div);

  delButton.innerHTML = "Delete";
  delButton.setAttribute("class", "delete_button");
  delButton.addEventListener("click", () => div.remove());

  editButton.innerHTML = "Edit";
  editButton.setAttribute("class", "edit_button");
  editButton.addEventListener("click", () => {
    var newText = prompt("Напишите измеения :", text.innerHTML);
    if (newText) text.innerHTML = newText;
  });

  buttonsDiv.append(editButton, delButton);
  div.append(text, buttonsDiv);
  todoList.append(div);

  input.value = "";
};

createButton.addEventListener("click", createTodo);

window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") createTodo();
});
