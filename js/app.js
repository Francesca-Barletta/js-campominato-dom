
console.log('campominato')
//devo recuperare dal dom la select

//devo recuperare dalla select la value
//a seconda della value, il pulsante play deve generare 3 grigle diverse
//devo recuperare dal dom il pulsante play 
const playButton = document.querySelector('.play');
//dargli la funzione addeventlistner e dirgli che al click deve generare una griglia quadrata

let bombList;

playButton.addEventListener('click', function () {
    //devo recuperare dal dom il div con classe grid
    const gridElement = document.querySelector('.grid');
    //devo creare una costante row che salva quante celle voglio in una riga
    //se la difficoltà è hard deve creare una griglia di 100 celle
    const selectElement = document.getElementById("difficolta")
    const optionElement = parseInt(selectElement.value)
    let row = optionElement;
    let cellClass = `cell-${row}`
    // if (selectElement.value === "hard") {
    //     row = 10
    //     cellClass = "hard"
    //     //cellElement.classList.add('hard')
    // } else if (selectElement.value === "normal") {
    //     row = 9
    //     cellClass = "normal"
    //     //cellElement.classList.add('normal')
    // } else if (selectElement.value === "easy") {
    //     row = 7
    //     cellClass = "easy"
    // }
    //devo creare una costante che genera un quadrato moltiplicando row al quadrato
    const gridBox = row ** 2;
    //dentro un ciclo for devo dare un numero per ogni casella

    gridElement.innerHTML = ''
    bombList = bombGenerator(gridBox)
    let allCellNumbers = []
    let clickCounter = 0;
    for (let i = 0; i < gridBox; i++) {
        let number = i + 1;
        allCellNumbers.push(number)

        //console.log(number)
        //devo rendere visibili le singole celle della griglia
        //creo l'elemento div con creteelement
        //let bombList = bombGenerator(gridBox)
        const cellElement = document.createElement('div')
        cellElement.className = 'cell'

        cellElement.classList.add(cellClass)
        //gli dò la classe che ho già creato su css

        //dentro inserisco il numero creato con in ciclo for
        cellElement.innerHTML = number

        //devo aggiungere al grid recuperato dal dom le celle
        gridElement.append(cellElement)
        //quando clicco una casella deve cambiare colore


        cellElement.addEventListener('click', function () {




            //se è già cliccata con .toggle ritorna com'era
            //let numbers;
            if (bombList.includes(number)) {
            //allCellNumbers.forEach(bombList[i]);
                cellElement.classList.add('bg-red');  
            if(allCellNumbers.includes(bombList[i])){
                cellElement.classList.add('bg-red');
            }
            console.log(allCellNumbers.indexOf(bombList[i]));
            console.log(number + 'è una bomba');
            cellElement.classList.add('bg-red');
            gridElement.classList.add('stop');
            console.log(number);
            console.log('tutti i numeri i ', allCellNumbers[i])
            console.log('bomblist i', bombList[i]);
            }else {
                clickCounter += 1;
                cellElement.classList.add('bg-dark');
                cellElement.classList.add('stop');

            } console.log('clickCounter', clickCounter);
            if (clickCounter === gridBox - 16) {
                alert(`hai vinto! punteggio: ${clickCounter}`)
            }
        })

    } console.log(allCellNumbers)


})

/*Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco 
(attenzione: non bisogna copiare tutta la cartella dell’esercizio ma solo l’index.html, 
e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l’inizializzazione di git).
Descrizione:
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, 
perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l’utente clicca su una cella:
se il numero è presente nella lista dei numeri generati 
- abbiamo calpestato una bomba 
- la cella si colora di rosso.
Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba 
o quando raggiunge il numero massimo possibile di numeri consentiti 
(ovvero quando ha rivelato tutte le celle che non sono bombe).

Al termine della partita il software deve comunicare il punteggio, 
cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
Attenzione che l’utente potrebbe cliccare due volte sulla stessa casella…

BONUS 1:
Se non lo avete fatto ieri aggiungete la gestione della difficoltà
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

BONUS 2:
Quando al partita termina mostrare nella griglia tutte le bombe presenti, anche quelle che non erano state trovate.
Tutte le caselle delle bombe devono diventare rosse

BONUS 3:
Una volta che la partita termina l’utente non deve più poter cliccare sulle cella, 
nel senso che se anche ci clicca non deve succedere niente.*/

//devo creare un array di 16 numeri non doppioni random
//devo usare un ciclo while o do while perchè non so quante iterazioni servono


function bombGenerator(max) {
    let randomNumbers = [];
    let copyNumber = false;
    //let randomIndex = randomNumbers[i]
    let randomIndex;
    do {
        //let randomIndex = randomNumbers[i]
        // Genero un numero casuale
        let randomNumber = Math.floor(Math.random() * max) + 1;
        if (randomNumbers.includes(randomNumber) === false) {
            randomNumbers.push(randomNumber);
        }

    } while (randomNumbers.length < 16);
    console.log(randomNumbers);
    return randomNumbers;
}