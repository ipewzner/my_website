

function togglemenu() {
    const currentLang = document.documentElement.lang;
    
    if( currentLang === 'heb'){
        menuList.style.right=0;
    }
    else {menuList.style.left=0;}
    
    if (menuList.style.maxWidth == "200px") { // Change from "maxHeight" to "maxWidth"
        menuList.style.maxWidth = "0px"; // Change from "maxHeight" to "maxWidth"
    } else {
        menuList.style.maxWidth = "200px"; // Change from "maxHeight" to "maxWidth"
    }
}

function openPopup() {
    document.getElementById('popup-container').style.display = 'block';
    document.getElementById('popup-overlay').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup-container').style.display = 'none';
    document.getElementById('popup-overlay').style.display = 'none';
}