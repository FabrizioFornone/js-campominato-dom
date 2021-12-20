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
    console.log(this);
    this.classList.add("azure");
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
    console.log(this);
    this.classList.add("azure");
  });
}

// Funzione di generazione quadrati medium, "container" sarà il mio stampHtml

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
    console.log(this);
    this.classList.add("azure");
  });
}

// funziona che genera una bomba con un numero da 1 a squaresNumbers

function randomBomb(squaresNumbers) {
  const result = Math.floor(Math.random() * (squaresNumbers + 1 - 1)) + 1;
  // Return per poterla portare fuori

  return result;
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

const button1 = document.getElementById("js-btn-hook1");

const button2 = document.getElementById("js-btn-hook2");

const button3 = document.getElementById("js-btn-hook3");

// button1 genera ciclo for per creare griglia facile

button1.addEventListener("click", function () {
  newGame(stampHtml, 100, easyBoxGenerator);
  //inserisco in un array vuoto 16 bombe casuali non ripetute
  let arrayNumbers = [];
  /* fai il ciclo FINCHE' l'array non diventa
   di 15 elementi + 1 elemento extra aggiunto sotto e si chiude */
  while (arrayNumbers.length < 16) {
    // dichiaro cost random associata alla funzione
    const random = randomBomb(100);
    // Se l'array non include questo numero
    if (!arrayNumbers.includes(random)) {
      // PUSHALO nell'array
      arrayNumbers.push(random);
    }
  }
  console.log(arrayNumbers);
});

// button2 genera ciclo for per creare griglia media

button2.addEventListener("click", function () {
  newGame(stampHtml, 81, mediumBoxGenerator);
  // dichiaro un array vuoto
  let arrayNumbers = [];
  /* fai il ciclo FINCHE' l'array non diventa
   di 15 elementi + 1 elemento extra aggiunto sotto e si chiude */
  while (arrayNumbers.length < 16) {
    // dichiaro cost random associata alla funzione
    const random = randomBomb(81);
    // Se l'array non include questo numero
    if (!arrayNumbers.includes(random)) {
      // PUSHALO nell'array
      arrayNumbers.push(random);
    }
  }
  console.log(arrayNumbers);
});

// button3 genera ciclo for per creare griglia difficile

button3.addEventListener("click", function () {
  newGame(stampHtml, 49, hardBoxGenerator);
  // dichiaro un array vuoto
  let arrayNumbers = [];
  /* fai il ciclo FINCHE' l'array non diventa
   di 15 elementi + 1 elemento extra aggiunto sotto e si chiude */
  while (arrayNumbers.length < 16) {
    // dichiaro cost random associata alla funzione
    const random = randomBomb(49);
    // Se l'array non include questo numero
    if (!arrayNumbers.includes(random)) {
      // PUSHALO nell'array
      arrayNumbers.push(random);
    }
  }
  console.log(arrayNumbers);
});
