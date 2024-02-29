// Función que convierte un número de base 10 a cualquier base entre 2 y 16
function conversorBase(numero, base) {
  let restos = [],
    restoActual,
    resultado = '',
    digitos = '0123456789ABCDEF';
  for (let i = 1; numero > 0; i++) {
    restoActual = Math.floor(numero % base);
    restos.push(restoActual);
    console.log("DIVISIÓN #" + i + " - Resto: " + restoActual + " - Número: " + numero + " - Restos: " + restos);
    numero = Math.floor(numero / base);
  }
  while (restos.length > 0) {
    resultado += digitos[restos.pop()];
  }
  return resultado;
}

// Cuando se hace click en convertir
document.getElementById('getResult').addEventListener('click', function() {
  let numero = parseInt(document.getElementById('number').value, 10),
      base = parseInt(document.getElementById('outputBase').value, 10),
      resultado = conversorBase(numero, base);
  document.getElementById('result').textContent = resultado;
});