document.getElementById("arrow-return").addEventListener("click", () => {
  window.location.href = "../index.html";
});

document.getElementById("create-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const id = Date.now().toString();
  const title = document.getElementById("title-create").value;
  const description = document.getElementById("message-create").value;
  const date = document.getElementById("date-create").value;

  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  const newNote = { id, title, description, date };
  const updateNotes = [...notes, newNote];
  // notes.push(newNote);
  localStorage.setItem("notes", JSON.stringify(updateNotes));

  window.location.href = "../index.html";
});
