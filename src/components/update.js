// create a new instance of the URLSearchParams object of the current URL
const params = new URLSearchParams(window.location.search);
const noteId = params.get("id");

// retrieves notes from local storage, parses them into an array of objects, and then finds a specific note by its id.
window.addEventListener("load", () => {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  const note = notes.find((note) => note.id === noteId);

  // accessing to the value that was inputted and saved in the local storage
  if (note) {
    document.getElementById("title-update").value = note.title;
    document.getElementById("message-update").value = note.description;
    document.getElementById("date-update").value = note.date;
  }
});

// function to update the note by retrieve the saved data for the user to edit
document.getElementById("update-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("title-update").value;
  const description = document.getElementById("message-update").value;
  const date = document.getElementById("date-update").value;

  // 
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes = notes.map((note) =>
    note.id === noteId ? { ...note, title, description, date } : note
  );

  // Store the Updated Notes Back in localStorage
  localStorage.setItem("notes", JSON.stringify(notes));

  window.location.href = "../index.html";
});

// add addEventListener to the arrow to make interaction to index page
document.getElementById("arrow-return").addEventListener("click", () => {
  window.location.href = "../index.html";
});
