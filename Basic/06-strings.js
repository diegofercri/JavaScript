// Strings

//Concatenacion
let nombre = "Diego"
let saludos = "Hola " + nombre
console.log(saludos)

// Longitud
console.log(saludos.length)

// Acceso a caracteres
console.log(saludos[0])
console.log(saludos[5])

// Metodos comunes
console.log(saludos.toUpperCase())
console.log(saludos.toLowerCase())
console.log(saludos.indexOf("Diego")) // Devuelve el indice si lo encuentra, si no, devuelve -1
console.log(saludos.indexOf("Celia"))
console.log(saludos.includes("Diego")) // Booleano
console.log(saludos.includes("Celia"))
console.log(saludos.slice(0,6))
console.log(saludos.replace("Diego", "diegofercri"))

// Template Literals (Plantillas Literales)
// Con '`' podemos crear cadenas de texto con saltos de linea
let mensaje = `Hola, soy ${nombre} y estoy 
estudiando JS`
console.log(mensaje)

