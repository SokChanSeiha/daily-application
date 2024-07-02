// // Function to navigate between pages
// function navigateTo(page, id = "") {
//   const url = id ? `${page}?id=${id}` : page;
//   window.location.href = url;
// }

// // Create card component HTML
// const createCardHTML = (id, title, description, date) => {
//   return `
//       // <div class="card" data-id="${id}">
//       //   <div class="card-header">
//       //     <h2 class="card-title">${title}</h2>
//       //     <span class="card-date">${date}</span>
//       //   </div>
//       //   <div class="card-body">
//       //     <p class="card-description">${description}</p>
//       //   </div>
//       //   <div class="card-footer">
//       //     <button class="btn-update" onclick="navigateTo('/pages/update.html', '${id}')">Update</button>
//       //     <button class="btn-delete" onclick="navigateTo('/pages/delete.html', '${id}')">Delete</button>
//       //   </div>
//       // </div>
//         <div class="entries-content">
//           <form class="entry-card">
//             <input
//               class="title-input"
//               id="entries-title"
//               type="text"
//               placeholder="Untitled"
//             />
//             <textarea class="description-input" id="entries-message" placeholder="Enter a message ..." rows="1" required></textarea>
//             <div class="data-collectors">
//               <span class="card-date">${date}hi</span>
//               <div class="option-buttons">
//                 <a href="./pages/read.html">
//                   <img class="view-icon" src="./icon/view.svg" alt="icon for reading"/>
//                 </a>
//                 <button class="btn-delete" onclick="navigateTo('/pages/delete.html', '${id}')">
//                   <img class="edit-icon" src="./icon/update.svg" alt="icon for reading"/>
//                 </button>
//                 <button class="btn-delete" onclick="navigateTo('/pages/delete.html', '${id}')">
//                   <img class="delete-icon" src="../icon/view.svg" alt="icon for reading"/>
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </section>

      




//     `;
// };

// class CardHTML extends HTMLElement {
//   connectedCallback() {
//     // Initialize DOM elements
//     const form = document.getElementById("form");
//     const inputTitle = document.getElementById("title-input-1");
//     const inputMessage = document.getElementById("message-input-1");
//     const inputDate = document.getElementById("date-input-1");
//     const errorMsg = document.getElementById("msg-1");
//     const entries = document.getElementById("entries-title-1");

//     // Form submission event listener
//     form.addEventListener("submit", (e) => {
//       e.preventDefault();
//       formValidation();
//     });

//     // Form validation function
//     const formValidation = () => {
//       if (inputTitle.value === "") {
//         errorMsg.textContent = "Title is required";
//       } else {
//         errorMsg.textContent = "";
//         acceptData();
//       }
//     };

//     // Data object
//     let data = {};

//     // Accept data function
//     const acceptData = () => {
//       data["id"] = Date.now(); // Generate a unique id based on the current timestamp
//       data["title"] = inputTitle.value;
//       data["description"] = inputMessage.value;
//       data["date"] = inputDate.value;

//       console.log(data);
//       createEntry();
//     };

//     // Create entry function
//     const createEntry = () => {
//       entries.innerHTML += createCardHTML(
//         data.id,
//         data.title,
//         data.description,
//         data.date
//       );
//       form.reset();
//     };

//     // Set inner HTML for the custom element
//     this.innerHTML = "";
//   }
// }

// customElements.define("card-html-component", CardHTML);
