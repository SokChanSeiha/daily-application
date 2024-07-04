// load the data from local storage of the specific ID
window.addEventListener("load", () => {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  const note = notes.find((note) => note.id === noteId);

  // get the value of title, description, date
  if (note) {
    document.getElementById("title-delete").value = note.title;
    document.getElementById("message-delete").value = note.description;
    document.getElementById("date-delete").value = note.date;
  }
});

const params = new URLSearchParams(window.location.search);
const noteId = params.get("id");
console.log(noteId);

// deletion: reassign the local Storage, except the choosen ID "save the local storage again, except a chosen ID which resulted deleted"
document.getElementById("confirm-delete").addEventListener("click", () => {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  // filtering the array object
  notes = notes.filter((note) => note.id !== noteId);
  localStorage.setItem("notes", JSON.stringify(notes));

  window.location.href = "../index.html";
});

// add addEventListener to the arrow to make interaction to index page
document.getElementById("arrow-return").addEventListener("click", () => {
  window.location.href = "../index.html";
});
