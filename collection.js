var sidenav = document.querySelector(".side-navbar")


function showNavbar()
{
    sidenav.style.left="0"
}
function closeNavbar()
{
    sidenav.style.left="-60%"
}
var productContainer = document.getElementById("products");
var search = document.getElementById("search");
var productlist = productContainer.querySelectorAll(".products-box");

search.addEventListener("keyup", function(event) {
    var enteredValue = event.target.value.toUpperCase();

    for (var count = 0; count < productlist.length; count++) {
        var productName = productlist[count].querySelector("p").textContent;

        if (productName.toUpperCase().indexOf(enteredValue) < 0) {
            productlist[count].style.display = "none";
        } else {
            productlist[count].style.display = "block";
        }
    }
});
