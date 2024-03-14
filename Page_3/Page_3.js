class Page_3 extends HTMLElement {
    connectedCallback() {
        const icons = [
            { src: "./images/prizmatix.jfif", alt: "prizmatix" },
            { src: "./images/THE-HUNTER-LOGO.svg", alt: "THE-HUNTER" },
        ];
  
        const iconsHTML = icons.map(icon => `
        <div class="Page_2_icon"><img src="${icon.src}" alt="${icon.alt}"></div>`).join('');
  
        this.innerHTML = `
        <section lang="heb" class="about_page2" id="about_page2">
        <h3> in my cestumers: </h3>
        <div class="Page_2_container">
                ${iconsHTML}
            </div>
        </section>`;
    }
}

customElements.define('app-page_3', Page_3);

