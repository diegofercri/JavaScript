// Operadores

// Operadores Aritmeticos
console.log("Operadores Aritmeticos:")
console.log(5+5)
console.log(5-5)
console.log(5*5)
console.log(5/5)
console.log(5%5) // Resto
console.log(2**2) // Exponente

// Incremento
let a = 0
console.log("Incrementos:")
console.log(a++) // Primero muestra "a" y luego incrementa 1
console.log(++a) // Primero incrementa 1 y luego muestra "a"

// Decremento
let b = 2
console.log("Decrementos:")
console.log(b--) // Primero muestra "a" y luego decrementa 1
console.log(--b) // Primero decrementa 1 y luego muestra "a"

// Operadores de asignacion
let c = 4
console.log("Operadores de Asignacion:")
c += 2
console.log(c)
c -= 2
console.log(c)
c *= 2
console.log(c)
c /= 2
console.log(c)
c %= 2
console.log(c)
c **= 2
console.log(c)

// Operadores de Comparacion
const d = 3, e = 5
console.log("Operadores de Comparacion:")
console.log(d > e)
console.log(d < e)
console.log(d >= e)
console.log(d <= e)
console.log(d == 3) // Igualdad por valor
console.log(d == "3")
console.log(d === 3) // Igualdad por identidad, es decir, igualdad por tipo y valor
console.log(d === "3")
console.log(d != 3) // Desigualdad por valor
console.log(d != "3")
console.log(d !== 3) // Desigualdad por identidad, es decir, igualdad por tipo y valor
console.log(d !== "3")

// Peculiaridades
console.log("Peculiaridades:")
console.log(0 == false)
console.log(1 == false)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == '')
console.log(0 == ' ')
console.log(0 == "Diego")
console.log(0 === "")
console.log(undefined == null)
console.log(undefined === null)


// Truthy (valores verdaderos por definicion)

// Todos los numeros positivos y negativos excepto el 0
// Todas las cadenas de texto excepto las vacias
// El boolean True

// Falsy (valores falsos por definicion)

// El 0 y 0n
// null
// undefined
// NaN (Not a Number)
// El boolean False
// Cadenas de texto vacias


// Operadores Logicos
console.log("Operadores Lógicos:")

// And (&&)
console.log(5 > 6 && 15 > 4)
// Or (||)
console.log(5 > 6 || 15 > 4)
// Not (!)
console.log(!true)
console.log(!(5 > 6 && 15 > 4))


// Operadores Ternarios
console.log("Operadores Ternarios:")
const isRaining = false
// Esta formado por los simbolos '?' y ':', despues de '?' se ejecuta el codigo si la condicion es cierta, si no, se ejecuta el codigo despues de ':'
isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo")