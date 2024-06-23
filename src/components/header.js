const createHeader = () => {
    return`
    <header class="header header-size">
    <article>
        Dairy Application
    </article>
    <img src="../icon/hamburger.svg" class="icon-burger" alt="hamburger menu bar">
    </header>
    `
}

class HomePage extends HTMLElement {
    constructor (){
        super()
    }
    connectedCallback(){
        this.innerHTML = createNavbar();
    }
}

//naming a callback component for "Header component"
customElements.define("home-page-content", HomePage)