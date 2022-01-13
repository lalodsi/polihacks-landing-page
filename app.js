cambiarIdioma('español', 'english')
let lang = navigator.language
console.log(lang)

// if((lang.toLocaleLowerCase().includes('es')) && (window.location.toString().toLocaleLowerCase().includes('index_es.html')==false)){
//     window.location="./index_es.html"
// }

const langButton = document.getElementById('language-button');

langButton.addEventListener('click', () =>{
    if (lang == 'es-419') {
        console.log('Changing to english');
        lang = 'en'
        cambiarIdioma('español', 'english')
    }
    else{
        console.log('Cambiando a español');
        lang = navigator.language
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
        element.setAttribute('style', 'display: inline;')
        // element.style.visibility = 'visible';
    } )
}