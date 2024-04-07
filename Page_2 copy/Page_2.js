class Page_2 extends HTMLElement {
    connectedCallback() {
        const icons = [
            { src: "./images/c.png", alt: "c" },
            { src: "./images/cpp.png", alt: "cpp" },
            { src: "./images/linux.png", alt: "linux" },
            { src: "./images/mongodb.png", alt: "mongodb" },
            { src: "./images/nodeJs.png", alt: "nodeJs" },
            { src: "./images/python.png", alt: "python" },
            { src: "./images/react.png", alt: "react" },
            { src: "./images/rpi.png", alt: "rpi" },
            { src: "./images/stm32.png", alt: "stm32" },
            { src: "./images/freeRTOS.jpg", alt: "freeRTOS" },
            { src: "./images/ros2.png", alt: "ros2" }
        ];

        const iconsHTML = icons.map(icon => `
            <div class="Page_2_icon"><img class="page-2-img" src="${icon.src}" alt="${icon.alt}"></div>`).join('');
      
            this.innerHTML = `
            <section lang="heb" class="about_page" id="about_page">
                <div class="Page_2_container">
                    ${iconsHTML}
                </div>
            </section>`;

    }
}

customElements.define('app-page_2', Page_2);


