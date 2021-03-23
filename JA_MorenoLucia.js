//Declaro 3 constantes de String
const texto1 = "Hola amigx";
const texto2 = "Esto es un ejemplo";
const texto3 = "Adios";

// Callback
recorrerTexto(texto1, (params)=>{
    recorrerTexto(texto2, (params)=>{
        recorrerTexto(texto3, (params)=> console.log(`Proceso completo. Palabras en total: ${params}`), params)
    }, params, 2000)
}, 0, 2000)

//Función que recorre el texto
function recorrerTexto(texto, callback, params, time_ms=2000){
    
    let splittedText = texto.split(' ');
    let numberWords = splittedText.length;
    let index = 0;

    let intervalId = setInterval(()=>{
        console.log(splittedText[index]);
        index++;

        if(index === numberWords){
            clearInterval(intervalId)
            endMessage(numberWords, time_ms)
            callback(params+numberWords)
        }
    }, time_ms)
    return numberWords
}

//Función que llamamos cada vez que imprimimos una palabra
function endMessage(numberWords, delay_ms){
    console.log(`Se imprimieron ${numberWords} palabras con un intervalo de: ${delay_ms/1000} segundos.`);
}