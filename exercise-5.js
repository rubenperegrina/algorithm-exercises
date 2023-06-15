// Given a string s, return the longest clean word in s. A clean word is a word
// where every character in it exists in both uppercase and lowercase If multiple clean words are found,
// return the first occurrence. If none are found, return an empty string
// Example: 
// Input: s = "NatbBbyn"
// Output: "ЬBЬ"

function letrasIgualesJuntas(cadena) {
    // Convertir la cadena a minúsculas para ignorar la distinción entre mayúsculas y minúsculas
    const cadenaMin = cadena.toLowerCase();
    let letrasRepetidas = '';
  
    let i = 0;
    while (i < cadenaMin.length) {
      let j = i + 1;
  
      // Encontrar la posición del último carácter igual consecutivo
      while (j < cadenaMin.length && cadenaMin[i] === cadenaMin[j]) {
        j++;
      }
  
      // Si hay más de una repetición, agregar la primera aparición a la cadena de letras repetidas
      if (j - i > 1) {
        letrasRepetidas += cadena.substring(i, j);
        break; // Salir del bucle interno después de encontrar la primera repetición
      }
  
      i = j;
    }
  
    return letrasRepetidas;
  }
  
  // Ejemplo de uso
  const cadena = 'aAabBb';
  console.log(letrasIgualesJuntas(cadena));  // Resultado: "aA"
  