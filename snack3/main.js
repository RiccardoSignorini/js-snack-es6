/*
---PROBLEMA---
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).

L'array generato da parte vostra dovrà essere di, ad esempio, nomi o cose: ['alberto', 'michele','angelo','simone']

Se come numeri ad esemio ho 2 e 4 devo inserire in un array nuovo l'elemento in posizione 3

La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

Usiamo i nuovi metodi degli array foreach o filter.
*/

// ARRAY DI NOMI
const nomi = [
    'Riccardo',
    'Sara',
    'Giovanni',
    'Rosanna',
    'Mario',
]

// INSERIMENTO NUMERI
let numero1 = prompt('Scrivi un numero di partenza tra 0 e 4')

let numero2 = prompt('Scrivi un numero di partenza tra 0 e 4')

// FUNZIONE FILTRO NOMI IN BASE AI NUMERI
function filtArray(array,x,y){
    let arrayFilt = array.filter((element, index)=>{

        if(x<index && y>index){
            return element
        }

    })

    console.log(arrayFilt)
}

// FILTRO NOMI IN BASE AI NUMERI
filtArray(nomi,numero1,numero2)

