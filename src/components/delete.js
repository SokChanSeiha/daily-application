window.addEventListener("load", () => {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  const note = notes.find((note) => note.id === noteId);

  if (note) {
    document.getElementById("title-delete").value = note.title;
    document.getElementById("message-delete").value = note.description;
    document.getElementById("date-delete").value = note.date;
  }
});

const params = new URLSearchParams(window.location.search);
const noteId = params.get("id");
console.log(noteId);

document.getElementById("confirm-delete").addEventListener("click", () => {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes = notes.filter((note) => note.id !== noteId);
  localStorage.setItem("notes", JSON.stringify(notes));

  window.location.href = "../index.html";
});

document.getElementById("arrow-return").addEventListener("click", () => {
  window.location.href = "../index.html";
});
