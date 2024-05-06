class Page_3 extends HTMLElement {
    connectedCallback() {
        const cestumers = [
            { src: "./images/PrizmatixLogo-s.jpg", alt: "Prizmatix" ,link:"https://www.prizmatix.com/"},
            { src: "./images/THE-HUNTER-LOGO.svg", alt: "THE-HUNTER" ,link:"https://the-hunters.co.il/"},
            { src: "./images/atlasensebiomed.png", alt: "AtlasenseBiomed" ,link:"https://atlasensebiomed.com/"},
        ];

      

            let cestumerButtonsHTML = '<ul class="cestumer-list">';
        
            for (const cestumer of cestumers) {
                cestumerButtonsHTML += `
                    <li>
                        <a href="${cestumer.link}" target="_blank" rel="noopener noreferrer" class="cestumer-button">
                          <img src="${cestumer.src}" alt="${cestumer.alt}" class="cestumer-icon"> 
                         <!-- <p>${cestumer.alt}</p>-->
                        </a>
                    </li>`;
            }
            cestumerButtonsHTML += '</ul>';
    
            this.innerHTML = `
            <section lang="heb" class="cestumers-page" id="cestumers_page">
                    <h2 data-key="page_3_h2" class="page_3_h2">Cestumer:</h2>
                    <div class="Page-3-container">
                        ${cestumerButtonsHTML}
                    </div>
                </section>`;
      
    }
}

customElements.define('app-page_3', Page_3);
