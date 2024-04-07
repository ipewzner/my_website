let heb = {
    "strings": {
        "title": "IPewzner",
        "start_page_name": "ראשי",
        "about_page_name": "אודתינו",
        "cestumers_page_name": "לקוחות",
        "contact_page_name": "יצירת קשר",

        "page_1_h3": "ישעיהו פבזנר",
        "page_1_h4": "מפתח מערכות משובצות מחשב",
        "page_1_p": "פרילנס ומייקר",

        "page_2_h3": "פיתוח מערכות משובצות מחשב",
        "page_2_h4": "מפתח:",
        
        "page_3_h3":"לקוחות",
        
        "page_4_h3": "צור קשר:"
    },
}

let en = {
    "strings": {
        "title": "IPewzner",
        "start_page_name": "Main",
        "about_page_name": "About",
        "cestumers_page_name": "Customer",
        "contact_page_name": "Contact",
        
        "page_1_h3": "Ishayau Pewzner",
        "page_1_h4": "Embdded devoloper",
        "page_1_p": "I am freelance, devoloping Embeded system and Web base GUI, also i'm a Miker ",
        
        "page_2_h3": "Developing Embedd system",
        "page_2_h4": "Developing:",

        "page_2_p": "I am freelance, devoloping Embeded system and Web base GUI, also i'm a Miker ",
        
        "page_3_h3":"Cestumers:",
        
        "page_4_h3": "Contact Me:"
        
    },
}

let langdata = {
    "languages": {
        "heb": heb,
        "en": en
    }
}

//apply the language values to the content
document.addEventListener('DOMContentLoaded', Update_lang())

function Update_lang() {
    let lang = findLocaleMatch();
    let direction = lang === 'heb' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', direction);


    let zones = document.querySelectorAll(`html [lang]`)
    applyStrings(zones)

    //let lang = findLocaleMatch()
    //let container = document.querySelector(`html [lang*=${lang}]`)
    //container.className = 'lang-match'
}

function applyStrings(containers) {
    containers.forEach(container => {
        let locale = container.getAttribute('lang')
        container.querySelectorAll('[data-key]').forEach(element => {
            let key = element.getAttribute('data-key');
            let lang = locale.substr(0, 3)
            if (key) {
                element.textContent = langdata.languages[lang].strings[key]
            }
        })
    })
}

function findLocaleMatch() {

    let keys = Object.keys(langdata.languages)
    let locales = Intl.getCanonicalLocales(keys)

    let lang = navigator.language
    let locale = Intl.getCanonicalLocales(lang)

    let langMatch = document.documentElement.getAttribute('lang')

    locales = locales.filter(l => locale == l)
    langMatch = (locales.length > 0) ? locales[0] : langMatch

    return langMatch

}