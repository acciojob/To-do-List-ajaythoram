//your code here
const txt = document.getElementById("newTodoInput");
const btn = document.getElementById("addTodoBtn");
  function add() {
  	let text = txt.value.trim();
	  if (text.length === 0) { // don't add empty todo items
      return;
    }
	  const li = document.createElement("li");
	  li.innerText = text;
	  const ul = document.getElementById("todoList");
	  ul.appendChild(li);
	  txt.value = "";
  }
