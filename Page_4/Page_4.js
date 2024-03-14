class Page_4 extends HTMLElement {
    connectedCallback() {
        const contacts = [
            { name: "Email", image: "./images/Gmail.svg", link: "mailto:ipewzner@gmail.com" },
            { name: "WhatsApp", image: "./images/whatsapp.png", link: "https://wa.me/+972548410620" },
            { name: "Telegram", image: "./images/telegram.png", link: "https://t.me/ipewzner" },
            { name: "LinkedIn", image: "./images/linkedin.png", link: "https://www.linkedin.com/in/ipewzner/" },
            { name: "GitHub", image: "./images/github.png", link: "https://github.com/ipewzner" }
        ];
        
        let contactButtonsHTML = '<ul class="contact-list">';
        for (const contact of contacts) {
            contactButtonsHTML += `
                <li>
                    <a href="${contact.link}" target="_blank" rel="noopener noreferrer" class="contact-button">
                      <img src="${contact.image}" alt="${contact.name}" class="contact-icon"> ${contact.name}
                    </a>
                </li>`;
        }
        contactButtonsHTML += '</ul>';

        this.innerHTML = `
            <section lang="heb" class="about_page2" id="contact_page">
                <h3>Contact Me:</h3>
                <div class="Page_2_container">
                    ${contactButtonsHTML}
                </div>
            </section>`;
    }
}

customElements.define('app-page_4', Page_4);
