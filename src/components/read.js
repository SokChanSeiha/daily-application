const params = new URLSearchParams(window.location.search);
const noteId = params.get("id");

window.addEventListener("load", () => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const note = notes.find((note) => note.id === noteId);

    if (note) {
      document.getElementById("title-read").value = note.title;
      document.getElementById("message-read").value = note.description;
      document.getElementById("date-read").value = note.date;
    };
});

document.getElementById("arrow-return").addEventListener("click", () => {
    window.location.href = "../index.html";
  });