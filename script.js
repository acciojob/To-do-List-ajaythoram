//your code here
const txt = document.getElementById("newTodoInput");
const btn = document.getElementById("addTodoBtn");
  function add() {
  	let text = txt.value.trim();
	  const li = document.createElement("li");
	  li.innerText = text;
	  const ul = document.getElementById("todoList");
	  ul.appendChild(li);
  }
