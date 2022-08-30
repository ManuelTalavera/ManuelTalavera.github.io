const btnCopy = document.querySelector(".copiar");
let texto1,mensaje;
function botones(){
    texto1 = document.querySelector (".texto1")
    mensaje = document.querySelector (".texto2")
}
function btnEncriptar() {
    botones();
    const textoencriptar = encriptado(texto1.value)
    mensaje.value= textoencriptar;
    mensaje.style.backgroundImage = "none";
   
}
function botonDesencriptar(){
    botones();
    const textodesencriptar = descencriptar(texto1.value);
    mensaje.value= textodesencriptar;
    mensaje.style.backgroundImage = "none";
}
function encriptado (encriptado){
    let codigo = [["e","enter"],["i","imes"],[ "a","ai"],["o","ober"],["u","ufat"]]
    encriptado = encriptado.toLowerCase();
   
    for (let i = 0; i< codigo.length; i++ ){
        if(encriptado.includes(codigo[i][0])){
            encriptado = encriptado.replaceAll(codigo[i][0],codigo[i][1]);   
        }
       
    }
    return encriptado;
}
function descencriptar (encriptado){
    let codigo = [["e","enter"],["i","imes"],[ "a","ai"],["o","ober"],["u","ufat"]]
    encriptado = encriptado.toLowerCase();
   
    for (let i = 0; i< codigo.length; i++ ){
        if(encriptado.includes(codigo[i][1])){
            encriptado = encriptado.replaceAll(codigo[i][1],codigo[i][0]);   
        }
       
    }
    return encriptado;
}
function copiar() {
    
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}