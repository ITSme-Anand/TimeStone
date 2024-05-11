var button = document.querySelector(".add-task");
button.onclick = ()=>{
    button.style.display = "none";
    var popup = document.createElement("div");
    popup.className = "popup"
    var label = document.createElement("label");
    label.for = "input";
    label.innerHTML = "enter task";
    var input = document.createElement("input");
    input.className = "input";
    input.type = "text";
    var btn = document.createElement("btn");
    btn.className = "addTask";
    btn.innerHTML = "add";
    popup.appendChild(label);
    popup.appendChild(input);
    popup.appendChild(btn);
    document.body.appendChild(popup);
    btn.onclick = ()=>{
        popup.remove();
        button.style.display = "block";
    };};