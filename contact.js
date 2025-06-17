var sidenav = document.querySelector(".side-navbar")


function showNavbar()
{
    sidenav.style.left="0"
}
function closeNavbar()
{
    sidenav.style.left="-60%"
}
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // Store in localStorage (simple demo purpose)
    const contactData = { name, email, message };
    localStorage.setItem("contactSubmission", JSON.stringify(contactData));
  
    // Show confirmation
    document.getElementById("responseMessage").textContent = "Thanks! We'll get back to you soon.";
  
    // Reset form
    document.getElementById("contactForm").reset();
  });
  