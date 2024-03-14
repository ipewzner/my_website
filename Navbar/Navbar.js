class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` 
<nav lang="heb" class="navbar">
    <img src="images/manuIcon.png" alt="logo" class="menu-icon" onclick="togglemenu()"/>

    <div class="menu">
        <ul id="menuList">
            <li><a data-key="start_page_name" href="#start_page">ראשי</a></li>
            <li><a data-key="about_page_name" href="#about_page">אודתינו</a></li>
            <li><a data-key="about_page_name2" href="#about_page2">אודת00ינו2</a></li>
            <li><a data-key="contact_page_name"  href="#contact_page">יצירת קשר</a></li>-->
        </ul>
    </div>
     
    <div class="language-switch">
        <button onclick="toggleLanguage()" class="lang-button" id="lang-button">
            <img src="https://cdn.countryflags.com/thumbs/israel/flag-400.png" alt="heb" id="flag">
        </button>
    </div>

    <div class="icon" href="index.html">
        <img src="images/logo.jpeg" alt="IP" />
    </div>
    
</nav>
`;
    }
}


customElements.define('app-navbar', Navbar);


// Function to toggle language
function toggleLanguage() {
    const langButton = document.getElementById('lang-button');
    const flag = document.getElementById('flag');
    
    const currentLang = document.documentElement.lang;
    
    const newLang = currentLang === 'heb' ? 'en' : 'heb';
    const israelFlag = "https://cdn.countryflags.com/thumbs/israel/flag-400.png"
    const usFlag = "https://cdn.countryflags.com/thumbs/united-states-of-america/flag-400.png";
    
    // Update the HTML lang attribute
    document.documentElement.lang = newLang;
    
    // Update the flag image and alt attribute
    flag.src = newLang === 'heb' ? israelFlag : usFlag ;
    flag.alt = newLang;
    
    // Update the button text
    //langButton.innerText = newLang.toUpperCase();

     // Update lang attribute in specific elements
     document.querySelectorAll('html [lang]').forEach(element => {
        element.lang = newLang;
    });
    
    Update_lang()
    
}

