const params = new URLSearchParams(window.location.search);
const noteId = params.get("id");

document.getElementById("confirm-delete").addEventListener("click", () => {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes = notes.filter((note) => note.id !== noteId);
  localStorage.setItem("notes", JSON.stringify(notes));

  window.location.href = "index.html";
});
