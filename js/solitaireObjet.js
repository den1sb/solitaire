// Variables globales
let deck = [];
let deckUse = [];
let deckReserved = [];
let name;
let color;
let family;


// Constructeur du Deck
function Card(name, family, color, point, src, indice) {
    this.name = name,
        this.family = family,
        this.color = color,
        this.point = point,
        this.src = src,
        this.indice = indice
}


// création des cartes via le constructeur
// boucle pour choix des familles et color
for (let j = 0; j < 4; j++) {
    switch (j) {
        case 0:
            family = "pique";
            color = "black";
            break;
        case 1:
            family = "coeur";
            color = "red";
            break;
        case 2:
            family = "carreau";
            color = "red";
            break;
        case 3:
            family = "trefle";
            color = "black";
            break;
    }

    // boucle pour création des 13 cartes( As à roi) par famille
    for (let i = 1; i < 14; i++) {
        name = i + "_" + family;
        name = new Card(name, family, color, i, "image/" + name + ".png", deck.length);
        deck.push(name)
    }
}


// mélange du deck
randomize(deck);


let img = document.createElement('img');
img.src = deck[0].src;


// Chargement de la partie
begin()


/*_________________________________________________________
                         FONCTIONS
_________________________________________________________*/



// fonction pour lancer la partie
function begin() {

    let deck = [];
    let deckUse = [];
    let deckReserved = [];
    // dispatche les cartes non visibles sur le tapis et les ajoute au deckReserved (21 cartes)
    for (let i = 2; i < 8; i++) {
        for (let j = 1; j < i; j++) {
            let img = document.createElement('img');
            img.src = 'image/back.png';
            let column = '#column' + i;
            document.querySelector(column).append(img);
            deckReserved.push(deck[j]);
        }
    }

    // dispatche les cartes visibles et les enleve du deck (7 cartes)
    for (let j = 0; j < 7; j++) {
        let img = document.createElement('img');
        img.src = deck[j].src;
        let column = '#column' + (j + 1);
        document.querySelector(column).append(img);
        deckUse.push(deck[j]);
        deck.splice(j, 1);
    }
}


// fonction de mélange de deck
function randomize(deck) {
    var i, j, tmp;
    for (i = deck.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        tmp = deck[i];
        deck[i] = deck[j];
        deck[j] = tmp;
    }
    return deck;
}


// fonction qui renvoi l'objet qui correspond à l'image (child) contenu dans les colonnes
function showCard(img) {
    let begin = img.src.lastIndexOf('/') + 1
    let end = img.src.lastIndexOf('.')
    let nameToFind = img.src.substring(begin, end)
    console.log(nameToFind)
    let image;
    deckUse.forEach(element => {
        console.log(element.name)
        if (element.name === nameToFind) {
            image = element
        }
    });
    return image;
}