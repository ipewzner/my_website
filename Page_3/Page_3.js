class Page_3 extends HTMLElement {
    connectedCallback() {
        const cestumers = [
            { src: "./images/prizmatix.jfif", alt: "prizmatix" },
            { src: "./images/THE-HUNTER-LOGO.svg", alt: "THE-HUNTER" },
        ];

        let cestumers_iconsHTML = '<ul class="cestumers-list">';

        for (const cestumer of cestumers) {
            cestumers_iconsHTML += `
                <li>
                    <img src="${cestumer.src}" alt="${cestumer.alt}" class="cestumers-icon">                     
                </li>`;
        }
        cestumers_iconsHTML += '</ul>';

        this.innerHTML = `
        <section lang="heb" class="cestumers-page" id="cestumers_page">
        <h3 data-key="page_3_h3" class="page-3-h3"> in my cestumers: </h3>
        <div class="Page-3-container">
                ${cestumers_iconsHTML}
            </div>
        </section>`;
    }
}

customElements.define('app-page_3', Page_3);

