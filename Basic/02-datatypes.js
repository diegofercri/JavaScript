// Cadenas de texto (String)
let nombre = "Diego"
let apodo = 'diegofercri'

// Numeros (Number)
let edad = 21 // Entero
let altura = 1.82 // Decimal

// Booleanos (Boolean)
let isWorker = false
let isStudent = true

// No definido (Undefined)
let undefinedValue
console.log(undefinedValue)

// Nulo (Null)
let nullValue = null // En este punto declaramos que la variable INTENCIONALMENTE es un valor nulo

// Simbolo (Symbol)
let mySymbol = Symbol("mysymbol") // Se usan para asignar valores unicos e inmutables

// Numeros Enteros Grandes (BigInt)
let myBigInt = BigInt(34572345629384523874562834562893475)
let myBigInt2 = 34572345629384523874562834562893475n

// Mostramos los tipos de datos
console.log(typeof nombre)
console.log(typeof apodo)

console.log(typeof edad)
console.log(typeof altura)

console.log(typeof isWorker)
console.log(typeof isStudent)

console.log(typeof undefinedValue)

console.log(typeof nullValue)

console.log(typeof mySymbol)

console.log(typeof myBigInt)
console.log(typeof myBigInt2)