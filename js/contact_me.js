// Event Handling
var fullName = document.getElementById("fullName");
var feedbackMsg = document.getElementById("feedback");

function checkName() {
	if (fullName.value === '') {
		feedbackMsg.innerHTML = "You did not enter a name. Please try again.";
		fullName.style.borderColor = "red";
	} else if (fullName.value.split(' ').length < 2) {
		feedbackMsg.innerHTML = "You did not enter your full name (First and Last). Please try again.";
		fullName.style.borderColor = "red";
	} else {
		feedbackMsg.innerHTML = "";
		fullName.style.borderColor = "#ccc";
		validName = true;
	}
}

fullName.addEventListener('focus', function () {
	feedbackMsg.innerHTML = "Please enter your full name (First and Last)";
}, false);

fullName.addEventListener('blur', checkName, false);

// Looping Through A Nodelist
var nodeList = document.querySelectorAll(".element-class");

if (nodeList.length > 0) {
	for (var i = 0; i < nodeList.length; i++) {
		// Code to apply to each element in the nodeList
		nodeList[i].style.color = "blue";
	}
}

// DOM Manipulation
var newElement = document.createElement("div");
var newText = document.createTextNode("New content");

newElement.appendChild(newText);

var parentElement = document.getElementById("parentElement");
var referenceElement = document.getElementById("referenceElement");

parentElement.insertBefore(newElement, referenceElement);