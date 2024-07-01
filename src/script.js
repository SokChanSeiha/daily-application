// (1) 
let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    console.log("clicked");
    e.preventDefault();
});