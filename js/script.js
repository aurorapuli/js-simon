// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// creiamo  variabili per l'HTML

const sendButton = document.getElementById('button');

const arrNumber = document.getElementById ('text');


let risultato;

// al click del bottone play succede che

sendButton.addEventListener('click',
  function(){
// creare un arrey con 5 numeri casuali

    let numbers = arreyGenNum(1, 100, 5);

    // creiamo variabile del tempo

    let time = 2;

    let clock = setInterval(
        function (){

            // Quando il tempo ha raggiunto lo 0

            if(time === 0){

                clearInterval(clock);

                // numeri indovinati dall'utente

                let userTentativo = [];

                for(let i = 0; i < 5; i++){

                    // chiedo all'utente di inserire 5 numeri

                    risultato = parseInt(prompt('Digita un numero'));


                    // se il numero digitato è incluso nei numeri del gioco inseriscilo nel numeri indovinati dall'utente

                    if(numbers.includes(risultato)){

                        userTentativo.push(risultato);

                    }

                }  

                console.log(userTentativo);

                // se hai indovinato tutti e 5 i numeri

                if(userTentativo.length == 0){

                    arrNumber.innerHTML = 'Non hai indovinato niente'

                    // altrimenti

                } else{

                    arrNumber.innerHTML = 'Hai indovinato ' + (userTentativo.length) + " numeri " + userTentativo;

                }

                // altimenti continua a scorrere il tempo
        
            } else{

                arrNumber.innerHTML = numbers;
        
                time--;
        
                console.log(time); 
            }
        }, 
        1000
    );
});





// creiamo il nostro arrey di numeri casuali

function arreyGenNum(minNum, maxNum, lengthNum){

    // array da popolare
      const arrayToGen = [];
    
      // ciclo while
    
      while(arrayToGen.length < lengthNum){
    
        let newNumber = numRandom(minNum, maxNum);
    
        if(!arrayToGen.includes(newNumber)){
    
          arrayToGen.push(newNumber);
    
        }
      }
    
       return arrayToGen;
    
    }


// funzione numero random

function numRandom (min, max){

    return Math.floor(Math.random() * (max - min + 1) + min);
 }