// add addEventListener to the arrow to make interaction to index page
document.getElementById("arrow-return").addEventListener("click", () => {
  window.location.href = "../index.html";
});

// get value from input "title, description, date"
document.getElementById("create-form").addEventListener("submit", (event) => {
  event.preventDefault();
// get the current time(hours) and convert to date to string
  const id = Date.now().toString();
  const title = document.getElementById("title-create").value;
  const description = document.getElementById("message-create").value;
  const date = document.getElementById("date-create").value;

  // local storage gets the data from user input
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  const newNote = { id, title, description, date };
  const updateNotes = [...notes, newNote];
  // notes.push(newNote);

  // local storage set (save) the data
  localStorage.setItem("notes", JSON.stringify(updateNotes));
  // link to window of index of HTMLLinkElement
  window.location.href = "../index.html";
});
