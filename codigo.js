function aleatorio(min, max) { return Math.floor(Math.random() * (max - min + 1) + min) }
function eleccion(jugada) {
    let resultado = ""
    if (jugada == 1) { resultado = "Rock 🪨" } else if (jugada == 2) { resultado = "Paper 📄" } else if (jugada == 3) { resultado = "Scissors ✂️" } else { resultado = "MAL ELEGIDO" }
    return resultado
}
let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0
while (triunfos < 3 && perdidas < 3) {
    pc = aleatorio(1, 3)
    jugador = prompt("Choose: 1 for Rock, 2 for Paper, 3 for Scissors")
    alert("Computer Choose " + eleccion(pc))
    alert("You Choose " + eleccion(jugador))
    if (pc == jugador) {
        alert("TIE") 
    } else if (jugador == 1 && pc == 3) {
        alert("YOU WON")
        triunfos = triunfos + 1
    } else if (jugador == 2 && pc == 1) {
        alert("YOU WON")
        triunfos = triunfos + 1
    } else if (jugador == 3 && pc == 2) {
        alert("YOU WON")
        triunfos = triunfos + 1
    } else {
        alert("YOU LOST")
        perdidas = perdidas + 1
    }
}
alert("You won " + triunfos + " times. You lost " + perdidas + " times.")