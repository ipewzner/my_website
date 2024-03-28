class Page_3 extends HTMLElement {
    connectedCallback() {
        const icons = [
            { src: "./images/prizmatix.jfif", alt: "prizmatix" },
            { src: "./images/THE-HUNTER-LOGO.svg", alt: "THE-HUNTER" },
        ];
  
        const iconsHTML = icons.map(icon => `
        <div class="Page_3_icon"><img src="${icon.src}" alt="${icon.alt}"></div>`).join('');
  
        this.innerHTML = `
        <section lang="heb" class="cestumers-page" id="cestumers_page">
        <h3 data-key="page_3_h3" class="page-3-h3"> in my cestumers: </h3>
        <div class="Page-3-container">
                ${iconsHTML}
            </div>
        </section>`;
    }
}

customElements.define('app-page_3', Page_3);

