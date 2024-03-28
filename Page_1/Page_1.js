class Page_1 extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` 
        <section  lang="heb" class="start_page" id="start_page">
            <h3 data-key="page_1_h3" class="page_1_h3">Ishayau Pewzner</h3>
            <h4 data-key="page_1_h4" class="page_1_h4">Embdded devoloper</h4>
            <p data-key="page_1_p" class="page_1_p">I am freelance, devoloping Embeded system and Web base GUI, also i'm a Miker </p>
        </section>
`;
    }
}

customElements.define('app-page_1', Page_1);