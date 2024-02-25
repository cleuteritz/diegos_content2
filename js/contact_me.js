// Event Handling
var fullName = $("#fullName");
var feedbackMsg = $("#feedback");

function checkName() {
	if (fullName.val() === '') {
		feedbackMsg.html("You did not enter a name. Please try again.");
		fullName.css("border-color", "red");
	} else if (fullName.val().split(' ').length < 2) {
		feedbackMsg.html("You did not enter your full name (First and Last). Please try again.");
		fullName.css("border-color", "red");
	} else {
		feedbackMsg.html("");
		fullName.css("border-color", "#ccc");
		validName = true;
	}
}

fullName.on('focus', function () {
	feedbackMsg.html("Please enter your full name (First and Last)");
});

fullName.on('blur', checkName);

// Looping Through A Nodelist
var nodeList = $(".element-class");

if (nodeList.length > 0) {
	nodeList.each(function () {
		// Code to apply to each element in the nodeList
		$(this).css("color", "blue");
	});
}

// DOM Manipulation
var newElement = $("<div></div>").text("New content");

var parentElement = $("#parentElement");
var referenceElement = $("#referenceElement");

newElement.insertBefore(referenceElement);
