class Page_5 extends HTMLElement {
    
    connectedCallback() {
    
        const icons = [
            { src: "./images/c.png", alt: "C" },
            { src: "./images/cpp.png", alt: "CPP" },
            { src: "./images/linux.png", alt: "Linux" },
            { src: "./images/mongodb.png", alt: "MongoDB" },
            { src: "./images/nodeJs.png", alt: "NodeJS" },
            { src: "./images/python.png", alt: "Python" },
            { src: "./images/react.png", alt: "React" },
            { src: "./images/rpi.png", alt: "RPI" },
            { src: "./images/stm32.png", alt: "STM32" },
            { src: "./images/freeRTOS.jpg", alt: "FreeRTOS" },
            { src: "./images/ros2.png", alt: "Ros2" }
        ];
        
        let iconsHTML = '<ul class="tec-list">';
        
        for (const icon of icons) {
            iconsHTML += `
                <li>
                    <div class="page-5-icon">
                        <img class="page-5-img" src="${icon.src}" alt="${icon.alt}">
                        <p class="page-5-p">${icon.alt}</p>
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
