class Page_2 extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` 
        <section lang="heb" class="about-page" id="about_page">
            <h2 data-key="page_2_h2" class="page_2_h2">מערכות מבוססות</h2>
            <ul class="page_2_ul">
                <li>Linux <p class="page_2_p">(RPI, IoT)</p></li>
                <li>RT <p class="page_2_p">(RTOS, Arduino, Esp32, ROS, IoT, SocketIO)</p></li>
                <li>WEB <p class="page_2_p">(NodeJS, React, MongoDB, SocketIO, WebSocket)</p></li>
            </ul>
    </section>
`;
    }
}

customElements.define('app-page_2', Page_2);
