class Page_4 extends HTMLElement {
    
    connectedCallback() {
    
        const contacts = [
            { name: "Email", image: "./images/Gmail.svg", link: "mailto:ipewzner@gmail.com" },
            { name: "WhatsApp", image: "./images/whatsapp.png", link: "https://wa.me/+972548410620" },
            { name: "Telegram", image: "./images/telegram.png", link: "https://t.me/ipewzner" },
            { name: "LinkedIn", image: "./images/linkedin.png", link: "https://www.linkedin.com/in/ipewzner/" },
            { name: "GitHub", image: "./images/github.png", link: "https://github.com/ipewzner" },
            { name: "Phone", image: "./images/phone_call.png", link: "tel:+972548410620" } // Add phone number here
        ];
        
        let contactButtonsHTML = '<ul class="contact-list">';
        
        for (const contact of contacts) {
            contactButtonsHTML += `
                <li>
                    <a href="${contact.link}" target="_blank" rel="noopener noreferrer" class="contact-button">
                      <img src="${contact.image}" alt="${contact.name}" class="contact-icon"> 
                      <p class="page-4-p-button">${contact.name}</p>
                    </a>
                </li>`;
        }
        contactButtonsHTML += '</ul>';

        this.innerHTML = `
            <section lang="heb" class="contact-page" id="contact_page">
                <h2 data-key="page_4_h2" class="page_4_h2">Contact Me:</h2>
               
                <p data-key="page_4_p_name" class="page-4-p">Ishayahu Pewzner</p>
                <p data-key="page_4_p_phone" class="page-4-p">972-54-8410620</p>
                <p data-key="page_4_p_email" class="page-4-p">ipewzner@gmail.com</p>

                <div class="Page-4-container">
                    ${contactButtonsHTML}
                </div>
            </section>`;
    }
}

customElements.define('app-page_4', Page_4);
