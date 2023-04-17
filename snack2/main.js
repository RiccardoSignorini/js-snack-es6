/*
---PROBLEMA---
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.

Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.

Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

// ARRAY DI OGGETTI
const squadre = [
    {
        nomeSquadra: 'Manchester City',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nomeSquadra: 'Roma',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nomeSquadra: 'Barcellona',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nomeSquadra: 'Bayern Monaco',
        puntiFatti: 0,
        falliSubiti: 0
    }
]

// FUNZIONE NUMERI CASUALI
function randomNum(){
    return Math.floor(Math.random()*100)+1
}

// RANDOMIZZAZIONE PUNTI E FALLI
squadre.forEach((element)=>{
    element.puntiFatti = randomNum()

    element.falliSubiti = randomNum()
})

console.log(squadre)

// ARRAY RISULTATO
let risultato = []

squadre.forEach((element)=>{
    // DESTRTUCTURING
    let {nomeSquadra, falliSubiti} = element

    // PUSH RISULTATO
    risultato.push({nomeSquadra, falliSubiti})
})

// STAMPA IN CONSOLE
console.log(risultato)