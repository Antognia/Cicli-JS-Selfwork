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
    

    
   
  



 