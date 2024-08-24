/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Escribe un comentario en una línea
// Diego

// 2. Escribe un comentario en varias líneas
/* 
Hola
Diego
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let nombre = "Diego"
let edad = 21
let isStudent = true
let undefinedValue
let nullValue = null
let mySymbol = Symbol("mysymbol")
let myBigInt = 34572345629384523874562834562893475n

// 4. Imprime por consola el valor de todas las variables
console.log(nombre)
console.log(edad)
console.log(isStudent)
console.log(undefinedValue)
console.log(nullValue)
console.log(mySymbol)
console.log(myBigInt)

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof nombre)
console.log(typeof edad)
console.log(typeof isStudent)
console.log(typeof undefinedValue)
console.log(typeof nullValue)
console.log(typeof mySymbol)
console.log(typeof myBigInt)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
nombre = "Mod"
edad = 20
isStudent = false
mySymbol = Symbol("mymod")
myBigInt = 861657687651751984158649849165491651n

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
nombre = 7
edad = "Diego"
isStudent = null
undefinedValue = 8.2
nullValue = 9847523645798263408572638475n
mySymbol = false
myBigInt = Symbol("mysymbol2")

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const nombreC = "Diego"
const edadC = 21
const isStudentC = true
/*
No esta permitido declarar una constante sin valor asignado
const undefinedValueC
*/
const nullValueC = null
const mySymbolC = Symbol("mysymbol")
const myBigIntC = 34572345629384523874562834562893475n

// 9. A continuación, modifica los valores de las constantes
/* Los valores de las constantes no se pueden modificar
nombreC = "Mod"
edadC = 26
isStudentC = false
mySymbolC = Symbol("mymod")
myBigIntC = 853467356743567393475n
*/

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse