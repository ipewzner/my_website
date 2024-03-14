let heb = {
    "strings": {
        "title": "IPewzner",
        "start_page_name":"ראשי",
        "about_page_name":"אודתינו",
        "about_page_name2":"אוד22תינו",
        "contact_page_name":"יצירת קשר",

        "page_1_h3":"Ishayau Pewzner",
        "page_1_h4":"Embdded devoloper",
        "page_1_p":"I am freelance, devoloping Embeded system and Web base GUI, also i'm a Miker ",
       
        "page_2_h3":"Ishayau Pew55zner",
        "page_2_h4":"Embd66ded devoloper",
        "page_2_p":"I am freelance, devoloping Embeded system and Web base GUI, also i'm a Miker ",

    },
}

let langdata = {
    "languages": {
        "heb":heb ,
        "en": {
            "strings": {
                "title": "IPewzner !",
                "start_page_name":"Main",

            },
        }
    }
}

//apply the language values to the content
document.addEventListener('DOMContentLoaded', Update_lang())

function Update_lang()  {
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