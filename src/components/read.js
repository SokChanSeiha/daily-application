const params = new URLSearchParams(window.location.search);
const noteId = params.get("id");

// retrieves notes from local storage, parses them into an array of objects, and then finds a specific note by its id.
window.addEventListener("load", () => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const note = notes.find((note) => note.id === noteId);

// accessing to the value that was inputted and saved in the local storage
    if (note) {
      document.getElementById("title-read").value = note.title;
      document.getElementById("message-read").value = note.description;
      document.getElementById("date-read").value = note.date;
    };
});

// add addEventListener to the arrow to make interaction to index page
document.getElementById("arrow-return").addEventListener("click", () => {
    window.location.href = "../index.html";
  });