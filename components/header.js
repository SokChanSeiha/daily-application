// Function to create the HTML for the header
const createHeader = (path) => {
        // If 'path' is not provided, set it to '.'
    if (!path) {
        path = '.'
    }
        // Return the HTML string for the header, using the provided or default 'path'
    return`
    <header class="header">
        <h1 class="title-header">Dairy Application</h1>
        <img src="${path}/icon/hamburger.svg" class="icon-burger" alt="hamburger menu bar">
    </header>
    `
}

// Define a class for the custom header section component
class HeaderSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const path = this.getAttribute('path');
        this.innerHTML = createHeader(path);
    }
}


//naming a callback component for "Header component"
customElements.define("header-section", HeaderSection)
