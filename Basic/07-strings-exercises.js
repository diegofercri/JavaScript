/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.youtube.com/live/euVbF1eatEY?si=nHS3QznAlA_C39NK&t=808
*/

// 1. Concatena dos cadenas de texto
let nombre = "Diego"
let apellido = "Fernandez"
console.log(nombre + " " + apellido)

// 2. Muestra la longitud de una cadena de texto
console.log(nombre.length)

// 3. Muestra el primer y último carácter de un string
console.log(nombre[0])
console.log(nombre[4])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(nombre.toUpperCase())
console.log(nombre.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
console.log(`Hola
soy Diego`)

// 6. Interpola el valor de una variable en un string
console.log(`Hola soy ${nombre}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let nombreYApellido = nombre + " " + apellido
console.log(nombreYApellido.replace(" ","-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(nombreYApellido.indexOf(nombre))
console.log(nombreYApellido.includes(nombre))

// 9. Comprueba si dos strings son iguales
console.log(nombre===nombre)

// 10. Comprueba si dos strings tienen la misma longitud
console.log(nombre.length==apellido.length)