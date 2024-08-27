const AreaTexto = document.querySelector(".area-texto");
const mensaje = document.querySelector(".mensaje");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"
function botonencriptar (){
    const textoEncriptado = encriptar (AreaTexto.value)
    mensaje.value = textoEncriptado
    AreaTexto.value="";
    mensaje.style.backgroundImage = "none"
    document.querySelector('.boton-copiar').style.display = 'block';
    document.querySelector('.texto-debajo-imagen').style.display = 'none';
    document.querySelector('.texto-debajo-imagen1').style.display = 'none';
    

}

function botondesencriptar (){
    const textoDesencriptado = desencriptar (AreaTexto.value)
    mensaje.value = textoDesencriptado
    AreaTexto.value="";
    mensaje.style.backgroundImage = "none"
    document.querySelector('.boton-copiar').style.display = 'block';
    document.querySelector('.texto-debajo-imagen').style.display = 'none';
    document.querySelector('.texto-debajo-imagen1').style.display = 'none';

}

function encriptar(string_encriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    string_encriptado = string_encriptado.toLowerCase()
    
    for (let i = 0; i< matrizCodigo.length; i++){
        if(string_encriptado.includes(matrizCodigo[i][0])){
            string_encriptado = string_encriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
        
    }
    return string_encriptado
}


function desencriptar(string_desencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    string_desencriptado = string_desencriptado.toLowerCase()
    
    for (let i = 0; i< matrizCodigo.length; i++){
        if(string_desencriptado.includes(matrizCodigo[i][1])){
            string_desencriptado = string_desencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
        
    }
    return string_desencriptado
}

function copiar(){
    const textoCopiado = mensaje.value;
    navigator.clipboard.writeText(textoCopiado);
    document.querySelector('.boton-copiar').style.display = 'none';
    document.querySelector('.texto-debajo-imagen').style.display = 'block';
    document.querySelector('.texto-debajo-imagen1').style.display = 'block';
    mensaje.style.backgroundImage = 'url("/Imagenes/Muñeco.png")';
    mensaje.value = '';

}
