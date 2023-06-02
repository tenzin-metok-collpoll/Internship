// Get references to the HTML elements
var taskInput = document.getElementById("taskInput");
var addButton = document.getElementById("addButton");
var taskList = document.getElementById("taskList");
var taskCount = document.getElementById("taskCount");

// Function to add a new task
function addTask() {
  var task = taskInput.value;
  
  if (task !== "") {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(task));
    
    // Add a delete button to each task
    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    deleteButton.classList.add("deleteButton");
    li.appendChild(deleteButton);
    
    taskList.appendChild(li);
    taskInput.value = "";
    updateTaskCount();
  }
}

// Function to delete a task
function deleteTask(event) {
  var listItem = event.target.parentNode;
  taskList.removeChild(listItem);
  updateTaskCount();
}

// Function to update the task count
function updateTaskCount() {
  var count = taskList.getElementsByTagName("li").length;
  taskCount.textContent = count;
}

// Event listener for the add button
addButton.addEventListener("click", addTask);

// Event listener for the enter key press
taskInput.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) { // 13 is the code for the enter key
    addTask();
  }
});

// Event delegation for the delete buttons
taskList.addEventListener("click", function(event) {
  if (event.target.classList.contains("deleteButton")) {
    deleteTask(event);
  }
});
