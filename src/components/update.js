const params = new URLSearchParams(window.location.search);
const noteId = params.get("id");

window.addEventListener("load", () => {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  const note = notes.find((note) => note.id === noteId);

  if (note) {
    document.getElementById("title-update").value = note.title;
    document.getElementById("message-update").value = note.description;
    document.getElementById("date-update").value = note.date;
  }
});

document.getElementById("update-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("title-update").value;
  const description = document.getElementById("message-update").value;
  const date = document.getElementById("date-update").value;

  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes = notes.map((note) =>
    note.id === noteId ? { ...note, title, description, date } : note
  );
  localStorage.setItem("notes", JSON.stringify(notes));

  window.location.href = "../index.html";
});
