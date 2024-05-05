let heb = {
    "strings": {
        "title": "IPewzner",
        "start_page_name": "ראשי",
        "about_page_name": "אודות",
        "cestumers_page_name": "לקוחות",
        "contact_page_name": "יצירת קשר",
        "tec_page_name": "טכנולוגיות",

        "page_1_h2": "שלום",
        "page_1_p": 'שמי <b>ישעיהו פבנזר</b>, יש לי תואר ראשון במדעי המחשב מ "המרכז האקדמי לב".',
        "page_1_p1": "יש לי נסיון בתחום מערכות משובצות מחשב, וגם בתחום האינטרנט, ואשמח לשתף איתכם פעולה בתחומים אלו.",
        "page_1_p2": "במערכות משובצות מחשב יש לי נסיון עם הכלים  <b>Linux, Raspberry Pi, Arduino, ESP32, STM32</b>, ועוד.",
        "page_1_p2_2": "ובפיתוח לאינטרנט עם הכלים"+" <b>JavaScript</b> "+" ו "+"<b>React</b>"+" ליצור חויית משתמש דינאמית , "+"ו "+"<b>Node.js</b>"+" ו "+"<b>MongoDB</b> "+"לניהול הנתונים.",
        "page_1_p3": "יש לי נסיון במיוחד בחיבור בין עולמות האמבדד לעולמות האינטרנט ואשמח לקחת את הרעיון שלכם ולהפוך אותו למוצר.",
        //"page_1_p4": `בואו נעבוד ביחד ליצור משהו מדהים. תרגישו בנוח ליצור איתי קשר<a href="#contact_page">כאן</a>.`,
        "page_1_p4": "בואו נעבוד ביחד ליצור משהו מדהים. תרגישו בנוח ליצור איתי קשר "+`<b><a href="#contact_page">`+"כאן"+`</a></b>.`,
        
        "page_2_h3": "פיתוח מערכות משובצות מחשב",
        "page_2_h2": "מפתח:",
        
        "page_3_h2":"לקוחות:",
        
        "page_5_h2": "טכנולוגיות:",
        "page_4_h2": "צור קשר:"
    },
}

let en = {
    "strings": {
        "title": "IPewzner",
        "start_page_name": "Main",
        "about_page_name": "About",
        "cestumers_page_name": "Customer",
        "contact_page_name": "Contact",
        "tec_page_name": "Tec",
        
        "page_1_h2": "Greetings",
        "page_1_p": "My name is <b>Ishayahu Pewzner</b>, and I hold a <b>BSc</b>. in Computer Science from <b>JCT</b>.",
        "page_1_p1": "I have experience in both embedded and web development and would be delighted to collaborate with you in either or even both of these areas.",
        "page_1_p2": "In <b>embedded</b> development, I have extensive experience with <b>Linux, Raspberry Pi, Arduino, ESP32, STM32</b>, and more,",
        "page_1_p2_2": "Iמ <b>web</b> development, I utilize <b>JavaScript</b> and <b>React</b> to create dynamic front-end experiences, and <b>Node.js</b> and <b>MongoDB</b> for efficient database management.Furthermore,",
        "page_1_p3": "I specialize in combining the worlds of embedded systems and web technologies to create innovative and efficient solutions. I have the skills and knowledge to turn your ideas into reality.",
        "page_1_p4": `Let work together to create something extraordinary! Please feel free to contact me <b><a href="#contact_page">here</a></b>.`,
        
        "page_2_h2": "Developing Embedd system",
        "page_2_h4": "Developing:",
        
        "page_2_p": "I am freelance, devoloping Embeded system and Web base GUI, also i'm a Miker ",
        
        "page_3_h2":"Cestumers:",
        
        "page_5_h2": "Technologies:",
        "page_4_h2": "Contact Me:"
        
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
}

function applyStrings(containers) {
    containers.forEach(container => {
        let locale = container.getAttribute('lang')
        container.querySelectorAll('[data-key]').forEach(element => {
            let key = element.getAttribute('data-key');
            let lang = locale.substr(0, 3)
            if (key) {
                element.innerHTML = langdata.languages[lang].strings[key]
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


