// Get references to HTML elements
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const addButton = document.getElementById("addButton");
addButton.addEventListener("click", addTask);

// Function to add a task to the to-do list
function addTask() {
    // Check if the input is empty
    if (inputBox.value === '') {
        // alert("You must write something");
        console.log("You must write something");
    } else {
        // Create a new list item
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // Add a close (delete) button to the new list item
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    // Clear the input box
    inputBox.value = "";
    
    // Save the updated to-do list
    saveData();
}

// Event listener for checking or unchecking a task and deleting a task
listContainer.addEventListener("click", function (element) {
    if (element.target.tagName === 'LI') {
        // Toggle the checked class for a task
        element.target.classList.toggle("checked");
    } else if (element.target.tagName === "SPAN") {
        // Remove the parent list item when the close button is clicked
        element.target.parentElement.remove();
    }
}, false);

// Function to save the to-do list data to localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to display saved tasks on page load
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Call the showTask function to display tasks on page load
showTask();
