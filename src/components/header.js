const createHeader = (path) => {
    if (!path) {
        path = '.'
    }
    return`
    <header class="header header-size">
    <article>
        Dairy Application
    </article>
        <img src="${path}/icon/hamburger.svg" class="icon-burger" alt="hamburger menu bar">
    </header>
    `
}

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
