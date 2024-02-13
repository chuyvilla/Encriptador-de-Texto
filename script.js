const texto = document.getElementById('text');
const resultado = document.getElementById('resultado');
const copiar = document.getElementById('copiar');
const error = document.getElementById('error');
const acentos = /[ÁÉÍÓÚáéíóú]/;

const encriptacion = texto => {
    return texto
        .replace(/a/g, 'ai')
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
};

const desencriptacion = texto => {
    return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
};

function verAcentos(texto) {
    let resultado = acentos.test(texto);
    if (resultado) {
        error.textContent = 'El texto no debe contener acentos.';
        error.classList.add('error');
        return true;
    } else {
        error.textContent = '';
        error.classList.remove('error');
        return false;
    }
}

function encriptar() {
    let textoInicial = texto.value.trim().toLowerCase();
    if (textoInicial === '') {
        resultado.textContent = '';
        copiar.setAttribute('hidden', 'true');
        error.textContent = 'Por favor ingrese un texto.';
        error.classList.add('error');
        return;
    }
    if (!verAcentos(textoInicial)) {
        let textoFinal = encriptacion(textoInicial);
        resultado.textContent = textoFinal;
        resultado.style.overflowWrap = "break-word"; 
        copiar.removeAttribute('hidden');
    } else {
        copiar.setAttribute('hidden', 'true');
    }
}

function desencriptar() {
    let textoInicial = texto.value.trim().toLowerCase();
    if (textoInicial === '') {
        resultado.textContent = '';
        copiar.setAttribute('hidden', 'true');
        error.textContent = 'Por favor ingrese un texto.';
        error.classList.add('error');
        return;
    }
    let textoFinal = desencriptacion(textoInicial);
    resultado.textContent = textoFinal;
    resultado.style.overflowWrap = "break-word"; 
    copiar.removeAttribute('hidden');
}

function copiarResultado() {
    const resultadoText = resultado.textContent;
    if (resultadoText !== '') {
        navigator.clipboard.writeText(resultadoText);
        alert('¡Texto copiado al portapapeles!');
    }
}
