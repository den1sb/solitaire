// TO DO
/*
- placer roi dans colonne vide
- multiselection pour deplacement
- deplacer pioche vers colonne
- deplacer pioche vers fundation



*/




/*_________________________________________________________
        Repartition des cartes dans un tableau
_________________________________________________________*/

let cardNumber = [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13];
let cardColor = ['coeur', 'carreau', 'pique', 'trefle'];
let cards = [];
let cardsReserve = [];
let deck = [];
let column = document.querySelector('#column');
let hiddenFace = document.querySelector('#hiddenFace');
let visibleFace = document.querySelector('#visibleFace')
let img = document.querySelectorAll('#column img');




// rempli le tableau avec les chemins des cartes
cardNumber.forEach(number => {
    cardColor.forEach(color => {
        cards.push(number + '_' + color + '.png')
    });
});


begin()


// fonction de distribution des cartes en début de partie
function begin() {
    for (let i = 1; i < 8; i++) {
        for (let j = 1; j < i + 1; j++) {
            let img = document.createElement('img');
            let column = '#column' + i;
            if (i == j) {
                let indice = Math.floor(Math.random() * Math.floor(cards.length));
                img.src = "image/" + cards[indice];
                img.draggable = true;
                img.setAttribute("class", "visible_card");
                giveClass(img)
                cards.splice(indice, 1);
            } else {
                img.src = "image/back.png";
                img.draggable = false;
            }
            document.querySelector(column).append(img);
            img.style.position = "absolute";
            img.style.marginTop = (50 * j - 50) + "px";
        }
    }
    randomize(cards)
    for (let i = 0; i < 21; i++) {
        let indice = Math.floor(Math.random() * Math.floor(cards.length));
        cardsReserve.push(cards[indice])
        cards.splice(indice, 1);
    }
    randomize(cardsReserve)
    // verso pour carte pioche
    let img = document.createElement('img');
    img.src = "image/back.png";
    img.draggable = false;
    hiddenFace.append(img);
}



function randomize(tab) {
    var i, j, tmp;
    for (i = tab.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        tmp = tab[i];
        tab[i] = tab[j];
        tab[j] = tmp;
    }
    return tab;
}



// // Clic sur la pioche (coté gauche : la pile retournée)
// hiddenFace.addEventListener('click', function (e) {
//     let coteCarte = document.createElement('img');
//     console.log(cards[0])
//     // si l'emplacement deck à son tableau vide, récuperer le contenu du tableau
//     if (cards.length == 0) {
//         cards = deck; // le cards(face cachée) récupère le contenu de deck(face visible) lorsque la pioche est vide
//         coteCarte.src = "image/back.png"; // afficher le verso de la carte pioche
//         hiddenFace.append(coteCarte);
//     }
//     // Dans tous les cas, enlève du cards (versoCarte) pour mettre dans le deck(face visible)

//     coteCarte.src = "image/" + cards[0];
//     coteCarte.style.position = "absolute";
//     coteCarte.classList.add('visible_card')
//     coteCarte.setAttribute('draggable', true);
//     giveClass(coteCarte);
//     deck.push(cards[0]); // transferer avant de supprimer!!!
//     cards.splice(0, 1);
//     visibleFace.append(coteCarte);
// });




// Clic sur la pioche (coté gauche : la pile retournée)
hiddenFace.addEventListener('click', function (e) {
    let coteCarte = document.createElement('img');
    console.log(deck)
    // si l'emplacement deck a son tableau vide, récuperer le contenu du tableau
    if (cards.length === 0) {
        hiddenFace.firstChild.src = "image/back.png";
        cards = deck; // le cards(face cachée) récupère le contenu de deck(face visible) lorsque la pioche est vide
        deck = []
        while (visibleFace.firstChild) {
            visibleFace.removeChild(visibleFace.firstChild);
          }
        console.log(deck)
    }

    // Dans tous les cas, enlève du cards (versoCarte) pour mettre dans le deck(face visible)
    coteCarte.src = "image/" + cards[0];
    coteCarte.classList.add("visible_card");
    coteCarte.setAttribute('draggable', true);
    coteCarte.style.position = "absolute";
    giveClass(coteCarte);
    deck.push(cards[0]); // transferer avant de supprimer!!!
    
        if (cards.length === 1) {
            hiddenFace.firstChild.src = "image/fundation.png";
        }
        cards.splice(0, 1);
    visibleFace.append(coteCarte);

});







let coeur = [];
let carreau = [];
let trefle = [];
let pique = [];

doubleClic()

function doubleClic() {
    document.querySelectorAll('#column img, #visibleFace img').forEach(element => {
        element.addEventListener('dblclick', () => {
            let number = extraitNombre(element.getAttribute('src'))
            if (element.getAttribute('src').includes('coeur')) {
                if (coeur.length == number - 1) {
                    element.style.marginTop = 0;
                    document.querySelector('#coeur').append(element);
                    coeur.push(number);

                    // let newCard = element.previousElementSibling;
                    // newCard.src = "image/" + cardsReserve[0];
                    // newCard.draggable = true;
                    // newCard.classList.add('visible_card');
                    // giveClass(newCard);
                    // cardsReserve.splice(0, 1);
                    // element.style.marginTop = this.childNodes.length * 50 + "px";



                }
            } else if (element.getAttribute('src').includes('carreau')) {
                if (carreau.length == number - 1) {
                    element.style.marginTop = 0;
                    document.querySelector('#carreau').append(element);
                    carreau.push(number)
                }
            } else if (element.getAttribute('src').includes('trefle')) {
                if (trefle.length == number - 1) {
                    element.style.marginTop = 0;
                    document.querySelector('#trefle').append(element);
                    trefle.push(number)
                }
            } else if (element.getAttribute('src').includes('pique')) {
                if (pique.length == number - 1) {
                    element.style.marginTop = 0;
                    document.querySelector('#pique').append(element);
                    pique.push(number)
                }
            }
        })
    })
}

// Récupère toutes les images (même celles de la pioche, il faut empêcher ça)
let images = document.querySelectorAll("img");

// Sélectionne les colonnes
let columnDroppers = document.querySelectorAll(".dropper");

// Sélectionne les fondations/piles
let foundations = document.querySelectorAll(".foundation");

// Stockage de l'élément qui bouge
let draggedElement;


function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    // let lastCard = this.childNodes[this.childNodes.length - 1].getAttribute('src');
    // let numberChild = lastCard.substring(lastCard.indexOf('/')+1, lastCard.indexOf('_'))
    // let colorChild = lastCard.substring(lastCard.indexOf('_')+1, lastCard.indexOf('.'))

    // let numberCard = draggedElement.getAttribute('src').substring(draggedElement.getAttribute('src').indexOf('/')+1, draggedElement.getAttribute('src').indexOf('_'))
    // let colorCard = draggedElement.getAttribute('src').substring(draggedElement.getAttribute('src').indexOf('_')+1, draggedElement.getAttribute('src').indexOf('.'))
}

function dragLeave() {

}

function dragDrop() {



    let lastChild = this.childNodes[this.childNodes.length - 1]
    let lastCard = this.childNodes[this.childNodes.length - 1].getAttribute('src');
    let numberChild = parseInt(lastCard.substring(lastCard.indexOf('/') + 1, lastCard.indexOf('_')))
    let numberCard = parseInt(draggedElement.getAttribute('src').substring(draggedElement.getAttribute('src').indexOf('/') + 1, draggedElement.getAttribute('src').indexOf('_')))
    if (lastChild.classList.contains("red") && draggedElement.classList.contains("black") || lastChild.classList.contains("black") && draggedElement.classList.contains("red")) {
        if (numberCard + 1 === numberChild) {
            // retourne la carte suivante de la colonne apres le deplacement
            if (draggedElement.previousElementSibling) {
                let newCard = draggedElement.previousElementSibling;
                newCard.src = "image/" + cardsReserve[0];
                newCard.draggable = true;
                newCard.classList.add('visible_card');
                giveClass(newCard);
                cardsReserve.splice(0, 1);

            }
            // this.childNodes
            // this.childNodes.forEach(element => {
                
            // });


            if (draggedElement.nextElementSibling){
                draggedElement.nextElementSibling.style.marginTop = this.childNodes.length * 50 + "px";
                this.append(draggedElement.nextElementSibling);
            }
            draggedElement.style.marginTop = this.childNodes.length * 50 + "px";
            this.append(draggedElement);
            

        }
    }



}

for (let image of images) {
    image.addEventListener("dragstart", dragStart);
    image.addEventListener("dragend", dragEnd);
}

function dragStart() {
    setTimeout(() => (this.style.display = 'none'), 0);
    draggedElement = this;


    if (draggedElement.classList.contains("visible_card")) {

        for (let columnDropper of columnDroppers) {
            columnDropper.addEventListener('dragover', dragOver);
            columnDropper.addEventListener('dragenter', dragEnter);
            columnDropper.addEventListener('dragleave', dragLeave);
            columnDropper.addEventListener('drop', dragDrop);
        }
    }


}

function dragEnd() {
    this.style.display = 'block';
}


function extraitNombre(str) {
    return Number(str.replace(/[^\d]/g, ""))
}


function giveClass(newCard) {
    let color = newCard.getAttribute('src').substring(newCard.getAttribute('src').indexOf('_') + 1, newCard.getAttribute('src').indexOf('.'))
    if (color === "coeur" || color === "carreau") {
        newCard.classList.add("red")
    } else {
        newCard.classList.add("black")
    }
    if (color === "coeur") {
        newCard.classList.add("coeur")
    } else if (color === "carreau") {
        newCard.classList.add("carreau")
    } else if (color === "pique") {
        newCard.classList.add("pique")
    } else if (color === "trefle") {
        newCard.classList.add("trefle")
    }
}