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
    var priorityLabel = document.createElement("label")
    priorityLabel.for = "priority"
    priorityLabel.className = "priorityLabel";
    priorityLabel.innerHTML = '<span class="material-symbols-outlined">flag</span>';
    var prioritydiv = document.createElement("div");
    prioritydiv.className = "prioritydiv";
    var priority = document.createElement("select");
    priority.className = "priority";
    priority.name = "priority";
    priority.id = "priority";
    var option1 = document.createElement("option");
    option1.innerHTML = '&#xE153;';
    option1.value = "priority1"
    priority.appendChild(option1);
    var option2 = document.createElement("option");
    option2.value = "priority2"
    priority.appendChild(option2);
    var option3 = document.createElement("option");
    option3.value = "priority3";
    priority.appendChild(option3);
    prioritydiv.appendChild(priorityLabel);
    prioritydiv.appendChild(priority);
    var timediv = document.createElement("div");
    timediv.className = "timediv";
    var startTime = document.createElement("input");
    startTime.type = "time";
    var endTime = document.createElement("input");
    endTime.type = "time";
    timediv.appendChild(startTime);
    timediv.appendChild(document.createTextNode("to"));
    timediv.appendChild(endTime);
    popup.appendChild(label);
    popup.appendChild(input);
    popup.appendChild(prioritydiv);
    popup.appendChild(timediv);
    popup.appendChild(btn);
    document.body.appendChild(popup);
    btn.onclick = ()=>{
        popup.remove();
        button.style.display = "block";
    };};