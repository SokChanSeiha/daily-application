const createFooter = (path) => {
    if (!path) {
        path = '.'
    }
    return `
        <footer class="footer">
            <div class="footer-width">
                <article class="footer-info">
                    <h2 class="title">More Details :</h2>
                    <p>
                        A Dairy Web application project made with creative and dedication which offers an innovative and
                        comprehensive platform for users to manage their daily tasks, schedules, and activities.
                    </p>
                </article>
                <div class="picture">
                    <div class="image-box gmail">
                        <img src="${path}/icon/gmail.svg" class="image-gmail" alt="gmail image">
                        <h3 class="image-gmail-text">sokchanseiha@gmail.com</h3>
                    </div>
                    <div class="image-box">
                        <img src="${path}/icon/astronut.svg" class="image-astronut" alt="astronut image">
                    </div>
                </div>
            </div> 
        </footer>`
}

class FooterSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const path = this.getAttribute('path');
        this.innerHTML = createFooter(path);
    }
}

//naming a callback component for "Header component"
customElements.define("footer-section", FooterSection)