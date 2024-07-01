// (1) 
let form = document.getElementById("form");
// (2)
let inputTitle = document.getElementById("title-input")


form.addEventListener("submit", (e) => {
    console.log("clicked");
    e.preventDefault();
    formValidation();
});

let formValidation = () => {
    if(inputTitle.value === ""){
        console.log("failure");
    }
    else{
        console.log("success");
    }
}