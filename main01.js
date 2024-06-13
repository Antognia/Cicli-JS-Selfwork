// Distributore bevande


let bevanda = prompt(`Scegli la tua Bevanda: \n Acqua \n Coca cola \n Birra`);
  while(bevanda == 'Acqua', 'Coca cola', 'Birra'){

      if (bevanda === 'Acqua'){
          console.log(`E' stata selezionata l' Acqua`);
        }else if (bevanda === 'Coca cola'){
            console.log(`E' stata selezionata Coca cola`);
        }else if (bevanda === 'Birra'){
            console.log(`E' stata selezionata Birra`);  
        }else{
            bevanda = prompt('Risposta non valida! Reinserisci bevanda');
         continue;
        }
        break;
    }






    // Revisone esercizio con i Numeri

       let bevanda;

do {  
    bevanda = prompt(`Scegli la tua Bevanda: \n 1 Acqua \n 2 Coca cola \n 3 Birra`);

    switch(bevanda) {
        case '1':
            console.log("E' stata selezionata l'Acqua");
            break;
        case '2':
            console.log("E' stata selezionata Coca cola");
            break;
        case '3':
            console.log("E' stata selezionata Birra");
            break;
        default:
            console.log("Scelta non valida!");
    }
} while (bevanda < '1' || bevanda > '3');
    
   
  



 
