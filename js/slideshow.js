// Function to display slides in a slideshow automatically
function showSlides() {
    // Get all elements with the class "mySlides"
    var slides = document.getElementsByClassName("mySlides");
  
    for (var i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
    } 
  
    slideIndex++;
  
    if (slideIndex > slides.length){
     slideIndex = 1;
    }
  
    slides[slideIndex-1].style.display = "block";
  
    setTimeout(showSlides, 5000); 
  }
  
  
  
  /*  
        TO-DO: create a variable to keep track of the slide index
                  initialize it to 0
  
               call the function above
  
  */
  var slideIndex = 0;
  
  showSlides();