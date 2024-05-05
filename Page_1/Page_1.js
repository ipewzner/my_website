class Page_1 extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` 
        <section  lang="heb" class="start-page" id="start_page">
            <h2 data-key="page_1_h2" class="page_1_h2">Embdded devoloper</h2>
                <div class="Page-1-container">
                    <p data-key="page_1_p"  class="page_1_p"> </p>
                    <p data-key="page_1_p1" class="page_1_p"> </p>
                    <p data-key="page_1_p2" class="page_1_p"> </p>
                    <p data-key="page_1_p2_2" class="page_1_p"> </p>
                    <p data-key="page_1_p3" class="page_1_p"> </p>
                    <p data-key="page_1_p4" class="page_1_p"> </p>
                </div>
        </section>
`;
    }
}

customElements.define('app-page_1', Page_1);
