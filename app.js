const lang = navigator.language
console.log(lang)

if((lang.toLocaleLowerCase().includes('es')) && (window.location.toString().toLocaleLowerCase().includes('index_es.html')==false)){
    window.location="file:///root/Escritorio/polihacks_landing/polihacks-landing-page/index_es.html"
}