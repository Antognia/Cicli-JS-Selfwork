// Ciclo Tabellina del 2


 for (let i = 2; i <= 20; i++) {
     if(i % 2 == 0){         
         console.log(i);
     }
 }



// Ciclo - 2
// Contare da 1 a 20 
// Solo numeri pari

for (let i = 0; i < 20; i++) {
    if (i % 2 == 0){
    console.log(i);
    }
    } 
    
// Ciclo Media Numeri Dispari
let numero = 1;
let somma = 0;

while (numero <= 20) {
    if (numero % 2 !== 0) {
        somma += numero;
    }
    numero++;
}

let mediaDispari = somma / 10;

    console.log(`La Media dei nuemri dispari è ${mediaDispari}`);





