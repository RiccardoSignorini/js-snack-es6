/*
---PROBLEMA---
Creare un array di oggetti:

Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

// ARRAY OGGETTI
const bici = [
    {
        nome: 'MountainFast',
        peso: 30,
    }, 
    {
        nome: 'StreetFast',
        peso: 20,
    }, 
    {
        nome: 'FastMix',
        peso: 25,
    }
]

// VARIABILE STANDARD BICI PIU' LEGGERA
let biciLight = bici[0]

console.log(biciLight)

// CICLO BICI PIU' LEGGERA
bici.forEach((element)=>{
    if(element.peso<biciLight.peso){
        biciLight = element
    }
})

console.log(biciLight)

// DESTRUCTURING
let {nome, peso} = biciLight

// STAMPA IN PAGINA
document.querySelector('#stampa').innerHTML = `La bici più leggera è ${nome}, che pesa ${peso} chili.`