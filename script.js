// Create Note component HTML
const createNoteHTML = (id, title, description, date) => {
  return `
        <div class="entry" data-id="${id}">
          <div class="entry-header">
            <h2 class="entry-title">${title}</h2>
          </div>
          <div class="entry-body">
            <p class="entry-description">${description}</p>
          </div>
          <div class="option">
            <span class="entry-date">${date}</span>
            <div class="entry-footer">
              <button class="button read" onclick="window.location.href='./pages/read.html?id=${id}'">
                <img class="read" src="./icon/view.svg" alt="Read icon" /></button>        
              <button class="button edit" onclick="window.location.href='./pages/update.html?id=${id}'">
                <img class="edit" src="./icon/update.svg" alt="Update icon" /></button>
              <button class="button delete" onclick="window.location.href='./pages/delete.html?id=${id}'">
                <img class="delete" src="./icon/delete.svg" alt="Delete icon" />
              </button> 
            </div>
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

