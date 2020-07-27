var list = document.getElementById("list");

function addTodo(){
    var items = document.getElementById("items");
    var li = document.createElement("li");
    var liText = document.createTextNode(items.value);
    li.appendChild(liText);
    li.setAttribute("class","dot");

    var editBtn = document.createElement("button");
    var editText = document.createTextNode("Edit");
    editBtn.appendChild(editText);
    editBtn.setAttribute("class","btn-1");
    li.appendChild(editBtn);
    editBtn.setAttribute("onClick","editItem(this)");

    var delBtn = document.createElement("button");
    var delText = document.createTextNode("Delete");
    delBtn.appendChild(delText);
    delBtn.setAttribute("class","btn");
    delBtn.setAttribute("onClick","deleteItem(this)");
    li.appendChild(delBtn);

    list.appendChild(li);
    items.value = "";
}

function deleteItem(e){
   e.parentNode.remove();
}

function deleteAll(){
    list.innerHTML = "";
}

function editItem(e){
    var editting = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter edit value",editting);
    e.parentNode.firstChild.nodeValue = editValue;
}