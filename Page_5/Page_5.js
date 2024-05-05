class Page_5 extends HTMLElement {
    
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
        
        let iconsHTML = '<ul class="tec-list">';
        
        for (const icon of icons) {
            iconsHTML += `
                <li>
                    <div class="page-5-icon">
                        <img class="page-5-img" src="${icon.src}" alt="${icon.alt}">
                    </div>
                </li>`;
        }
        iconsHTML += '</ul>';

        this.innerHTML = `
            <section lang="heb" class="tec-page" id="tec_page">
                <h2 data-key="page_5_h2" class="page-5-h2">tec:</h2>
                <div class="Page-5-container">
                    ${iconsHTML}
                </div>
            </section>`;
    }
}

customElements.define('app-page_5', Page_5);
