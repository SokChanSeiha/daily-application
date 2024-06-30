const createFooter = () => {
    return `
        <footer class="footer">
            <div class="footer-width">
                <article class="footer-info">
                    <a class="title">More Details :</a>
                    <p>
                        A Dairy Web application project made with creative and dedication which offers an innovative and
                        comprehensive platform for users to manage their daily tasks, schedules, and activities.
                    </p>
                </article>
                <div class="picture">
                    <div class="image-box gmail">
                        <img src="./icon/gmail.svg" class="image-gmail" alt="gmail image">
                        <p class="image-gmail-text">sokchanseiha@gmail.com</p>
                    </div>
                    <div class="image-box">
                        <img src="./icon/astronut.svg" class="image-astronut" alt="astronut image">
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
        this.innerHTML = createFooter();
    }
}

//naming a callback component for "Header component"
customElements.define("footer-section", FooterSection)