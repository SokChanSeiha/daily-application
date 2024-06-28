const createHeader = () => {
    return`
    <header class="header header-size">
    <article>
        Dairy Application
    </article>
    <img src="./icon/hamburger.svg" class="icon-burger" alt="hamburger menu bar">
    </header>
    `
}

class HeaderSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = createHeader();
    }
}


//naming a callback component for "Header component"
customElements.define("header-section", HeaderSection)
