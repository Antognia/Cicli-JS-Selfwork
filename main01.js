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



let bevanda;


  do {
  bevanda  

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

       do {  

           bevanda = prompt (`Scegli la tua Bevanda: \n 1 Acqua \n 2 Coca cola \n 3 Birra`);
          
                if (bevanda == 1){
                    console.log(`E' stata selezionata l' Acqua`);
                  }else if (bevanda == 2){
                      console.log(`E' stata selezionata Coca cola`);
                  }else if (bevanda == 3){
                      console.log(`E' stata selezionata Birra`);  
                  }
                  
            
                 
              } while (bevanda < 1 || bevanda > 3);

    
   
  



 
