// Create Note component HTML
const createNoteHTML = (id, title, description, date) => {
  return `
        <div class="Note" data-id="${id}">
          <div class="Note-header">
            <h2 class="Note-title">${title}</h2>
            <!-- <h2 class="Note-title">New date</h2> -->
          </div>
          <div class="Note-body">
            <p class="Note-description">${description}</p>
            <!-- <p class="Note-description">Wowowwwwww</p> -->
          </div>
          <div class="option">
            <span class="Note-date">${date}</span>
            <!-- <span class="Note-date">2024-06-02</span> -->
            <div class="Note-footer">
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

