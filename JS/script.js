/* L’utente indica un livello di difficoltà in base al quale viene
 generata una griglia di gioco quadrata, in cui ogni cella contiene
  un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Il computer deve generare 16 numeri casuali nello stesso range
 della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l’utente clicca su una cella: se il numero è presente
 nella lista dei numeri generati - abbiamo calpestato una bomba - 
 la cella si colora di rosso e la partita termina, altrimenti la cella
  cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge
 il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, 
cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba. */

// funziona che genera una bomba con un numero da 1 a squaresNumbers

function randomNumber(squaresNumbers) {
  const randomN = Math.floor(Math.random() * (squaresNumbers + 1 - 1)) + 1;
  return randomN;
}

// funziona che crea un array di bombe con un range in base alla difficoltà

function createBombs(squaresNumbers) {
  // dichiaro un array vuoto
  let arrayBombs = [];
  /* fai il ciclo FINCHE' l'array non diventa
    di 15 elementi + 1 elemento extra aggiunto sotto e si chiude */
  while (arrayBombs.length < 16) {
    // dichiaro cost random associata alla funzione
    const redBomb = randomNumber(squaresNumbers);
    // Se l'array non include questo numero
    if (!arrayBombs.includes(redBomb)) {
      // PUSHALO nell'array
      arrayBombs.push(redBomb);
    }
  }
  return arrayBombs;
}

// bombe x difficoltà facile

let easyBombs = createBombs(100);

// bombe x difficoltà media

let mediumBombs = createBombs(81);

// bombe x difficoltà difficile

let hardBombs = createBombs(49);

// Funzione di generazione quadrati easy, "container" sarà il mio stampHtml

function easyBoxGenerator(container, insideNumber) {
  // creo un elemento div dal JS
  const newBox = document.createElement("div");
  // Do a lui la classe square che ho nel css
  newBox.className = "square";
  // append al container
  container.append(newBox);
  //   append insideNumber al newBox
  newBox.append(insideNumber);
  container.classList.remove("width-350");
  container.classList.remove("width-450");
  container.classList.add("width-500");
  newBox.addEventListener("click", function () {
    if (!easyBombs.includes(insideNumber)) {
      this.classList.add("azure");
      boxCounter++;
      if (boxCounter === 100 - 16) {
        body.classList.add("win-body");
        winMsg.classList.remove("hide");
        scoreMsg.innerHTML = `<h3> Il tuo punteggio è: ${boxCounter} </h3>`;
      }
    } else {
      this.classList.add("red");
      body.classList.add("lose-body");
      loseMsg.classList.remove("hide");
    }
  });
}

// Funzione di generazione quadrati medium, "container" sarà il mio stampHtml

function mediumBoxGenerator(container, insideNumber) {
  // creo un elemento div dal JS
  const newBox = document.createElement("div");
  // Do a lui la classe square che ho nel css
  newBox.className = "square";
  // append al container
  container.append(newBox);
  //   append insideNumber al newBox
  newBox.append(insideNumber);
  container.classList.remove("width-350");
  container.classList.remove("width-500");
  container.classList.add("width-450");
  newBox.addEventListener("click", function () {
    if (!mediumBombs.includes(insideNumber)) {
      this.classList.add("azure");
      boxCounter++;
      if (boxCounter === 81 - 16) {
        body.classList.add("win-body");
        winMsg.classList.remove("hide");
        scoreMsg.innerHTML = `<h3> Il tuo punteggio è: ${boxCounter} </h3>`;
      }
    } else {
      this.classList.add("red");
      body.classList.add("lose-body");
      loseMsg.classList.remove("hide");
    }
  });
}

// Funzione di generazione quadrati hard, "container" sarà il mio stampHtml

function hardBoxGenerator(container, insideNumber) {
  // creo un elemento div dal JS
  const newBox = document.createElement("div");
  // Do a lui la classe square che ho nel css
  newBox.className = "square";
  // append al container
  container.append(newBox);
  //   append insideNumber al newBox
  newBox.append(insideNumber);
  container.classList.remove("width-500");
  container.classList.remove("width-450");
  container.classList.add("width-350");
  newBox.addEventListener("click", function () {
    if (!hardBombs.includes(insideNumber)) {
      this.classList.add("azure");
      boxCounter++;
      if (boxCounter === 49 - 16) {
        body.classList.add("win-body");
        winMsg.classList.remove("hide");
        scoreMsg.innerHTML = `<h3> Il tuo punteggio è: ${boxCounter} </h3>`;
      }
    } else {
      this.classList.add("red");
      body.classList.add("lose-body");
      loseMsg.classList.remove("hide");
    }
  });
}

// funzione "newGame" generator, "difficultyGenerator è a sua volta una funzione"

function newGame(stampGrill, numberOfSquares, difficultyGenerator) {
  stampGrill.innerHTML = "";
  for (i = 1; i <= numberOfSquares; i++) {
    difficultyGenerator(stampGrill, i);
  }
}

// dichiarazione costanti associate ad elementi del DOM

const stampHtml = document.querySelector(".hook-js");

const body = document.getElementById("body");

const loseMsg = document.querySelector(".lose-msg");

const winMsg = document.querySelector(".win-msg");

const scoreMsg = document.querySelector(".score");

const button1 = document.getElementById("js-btn-hook1");

const button2 = document.getElementById("js-btn-hook2");

const button3 = document.getElementById("js-btn-hook3");

const loseButton = document.getElementById("js-btn-lose");

const winButton = document.getElementById("js-btn-win");

let boxCounter = 0;

// button1 genera ciclo for per creare griglia facile

button1.addEventListener("click", function () {
  newGame(stampHtml, 100, easyBoxGenerator);
});

// button2 genera ciclo for per creare griglia media

button2.addEventListener("click", function () {
  newGame(stampHtml, 81, mediumBoxGenerator);
});

// button3 genera ciclo for per creare griglia difficile

button3.addEventListener("click", function () {
  newGame(stampHtml, 49, hardBoxGenerator);
});

// Eventi per tentare un'altra partita

loseButton.addEventListener("click", function () {
  window.location.reload();
});

winButton.addEventListener("click", function () {
  window.location.reload();
});
