let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('#navbar');

menuIcon.onclick =() =>{
    menuIcon.classList.toggle('bx-x-circle');
   navbar.classList.toggle('active');
}


const tiltContainer = document.getElementById("tiltContainer");

    tiltContainer.addEventListener("mousemove", (event) => {
        const { offsetWidth: width, offsetHeight: height } = tiltContainer;
        const { offsetX: x, offsetY: y } = event;

        // Calculate rotation angles based on cursor position
        const rotateX = ((y / height) - 0.9) * 20; 
        const rotateY = ((x / width) - 0.9) * -20; 

        // Apply the transform to the image
        tiltContainer.querySelector(".tilt-image").style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    // Reset the tilt when the mouse leaves the container
    tiltContainer.addEventListener("mouseleave", () => {
        tiltContainer.querySelector(".tilt-image").style.transform = "rotateX(0) rotateY(0)";
    });





//Services details
    function toggleContent(serviceId) {
        var content = document.getElementById("moreContent" + serviceId);
        var button = document.getElementById("toggleButton" + serviceId);
    
        if (content.style.display === "none" || content.style.display === "") {
            content.style.display = "block";  
            button.innerText = "Show Less";  
        } else {
            content.style.display = "none";  
            button.innerText = "Show More";  
        }
    }
    
    // Ensure all hidden content is hidden on page load
    document.addEventListener("DOMContentLoaded", function() {
        document.querySelectorAll('.hidden').forEach(function(content) {
            content.style.display = "none";  
        });
    });
    
    