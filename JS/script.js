/* L’utente indica un livello di difficoltà (3 pulsanti)
 in base al quale viene generata una griglia di gioco quadrata,
  in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.*/

// Funzione di generazione quadrati easy, "container" sarà il mio stampHtml

function easyBoxGenerator(container) {
  // creo un elemento div dal JS
  const newBox = document.createElement("div");
  // Do a lui la classe square che ho nel css
  newBox.className = "square";
  // append al container
  container.append(newBox);
//   container.innerText = num
  container.classList.remove("width-350");
  container.classList.remove("width-450");
  container.classList.add("width-500");
  newBox.addEventListener("click", function () {
    console.log(this);
    this.classList.toggle("azure");
  });
}

// Funzione di generazione quadrati medium, "container" sarà il mio stampHtml

function mediumBoxGenerator(container) {
  // creo un elemento div dal JS
  const newBox = document.createElement("div");
  // Do a lui la classe square che ho nel css
  newBox.className = "square";
  // append al container
  container.append(newBox);
  container.classList.remove("width-350");
  container.classList.remove("width-500");
  container.classList.add("width-450");
  newBox.addEventListener("click", function () {
    console.log(this);
    this.classList.toggle("azure");
  });
}

// Funzione di generazione quadrati medium, "container" sarà il mio stampHtml

function hardBoxGenerator(container) {
  // creo un elemento div dal JS
  const newBox = document.createElement("div");
  // Do a lui la classe square che ho nel css
  newBox.className = "square";
  // append al container
  container.append(newBox);
  container.classList.remove("width-500");
  container.classList.remove("width-450");
  container.classList.add("width-350");
  newBox.addEventListener("click", function () {
    console.log(this);
    this.classList.toggle("azure");
  });
}

// funzione "newGame" generator, "difficultyGenerator è a sua volta una funzione"

function newGame(stampGrill, numberOfSquare, difficultyGenerator) {
  stampGrill.innerHTML = "";
  for (i = 1; i <= numberOfSquare; i++) {
    difficultyGenerator(stampGrill);
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
});

// button2 genera ciclo for per creare griglia media

button2.addEventListener("click", function () {
  newGame(stampHtml, 81, mediumBoxGenerator);
});

// button3 genera ciclo for per creare griglia difficile

button3.addEventListener("click", function () {
  newGame(stampHtml, 49, hardBoxGenerator);
});
