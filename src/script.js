// Create Note component HTML
const createNoteHTML = (id, title, description, date) => {
  return `
      <div class="Note" data-id="${id}">
        <div class="Note-header">
          <h2 class="Note-title">${title}</h2>
          <span class="Note-date">${date}</span>
        </div>
        <div class="Note-body">
          <p class="Note-description">${description}</p>
        </div>
        <div class="Note-footer">
          <button onclick="window.location.href='update.html?id=${id}'">
            <img src="../icon/update.svg" alt="Update icon" /></button>
          <button onclick="window.location.href='delete.html?id=${id}'">
            <img src="../icon/delete.svg" alt="Delete icon" />
          </button>
        </div>
      </div>
    `;
};

// Load notes to index.html
window.addEventListener("load", () => {
  const notesContainer = document.getElementById("notes-container");
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  notesContainer.innerHTML = notes
    .map((note) =>
      createNoteHTML(note.id, note.title, note.description, note.date)
    )
    .join("");
});
