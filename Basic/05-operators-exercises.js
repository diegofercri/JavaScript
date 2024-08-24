/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Crea una variable para cada operación aritmética
let suma = 4+2
let resta = 4-2
let multiplicacion = 4*2
let division = 4/2
let resto = 4%2
let exponente = 4**2

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let suma_a = 2 
suma_a += suma
let resta_a = 2
resta_a -= resta
let multiplicacion_a = 2
multiplicacion_a *= multiplicacion 
let division_a = 2
division_a /= division
let resto_a = 2
resto_a %= resto
let exponente_a = 2
exponente_a **= exponente

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación
console.log(8>4)
console.log(4=="4")
console.log(1<3)
console.log(4!=6)
console.log(5===5)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(4>8)
console.log(4=="5")
console.log(87<4)
console.log(6!=6)
console.log("6"===5)

// 5. Utiliza el operador lógico and
console.log(5<6 && 6<7)

// 6. Utiliza el operador lógico or
console.log(5<6 || 6<7)

// 7. Combina ambos operadores lógicos
console.log((5<6 || 6<7) && 8==9)

// 8. Añade alguna negación
console.log(!((5<6 || 6<7) && 8==9))

// 9. Utiliza el operador ternario
6>7 ? console.log("Es mayor") : console.log("No es mayor")

// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log(((5*4>6 || 7!="7") && 9==9))

