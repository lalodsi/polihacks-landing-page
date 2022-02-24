let lang = navigator.language
cambiarIdioma('español', 'english')

// if((lang.toLocaleLowerCase().includes('es')) && (window.location.toString().toLocaleLowerCase().includes('index_es.html')==false)){
//     window.location="./index_es.html"
// }

const langButton = document.getElementById('language-button');

langButton.addEventListener('click', () =>{
    if (lang == 'es-419') {
        cambiarIdioma('español', 'english')
    }
    else{
        cambiarIdioma('english', 'español')
    }
})

function cambiarIdioma(languageHidden, languageShowed){
    const Idioma1 = document.querySelectorAll(`[lang="${languageHidden}"]`);
    const Idioma2 = document.querySelectorAll(`[lang="${languageShowed}"]`);
    Idioma1.forEach( element => {
        element.setAttribute('style', 'display: none;')
    } )
    Idioma2.forEach( element => {
        element.setAttribute('style', 'display: inherit;')
        // element.style.visibility = 'visible';
    } )

    if (lang == 'es-419') {
        lang = 'en'
    }
    else{
        lang = navigator.language
    }
}