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
    for (let i = 0; i < 21; i++) {
        let indice = Math.floor(Math.random() * Math.floor(cards.length));
        cardsReserve.push(cards[indice])
        cards.splice(indice, 1);
    }

    // verso pour carte pioche
    let img = document.createElement('img');
    img.src = "image/back.png";
    hiddenFace.append(img);
}

// document.querySelector('#hiddenFace').addEventListener('click', () => {
//     pickUp();
// })

// document.querySelector('#visibleFace').addEventListener('click', () => {
//     if (cards.length == 0) {
//         reversePickUp();
//     }
// })


// // fonction de tirage de la pioche pioche
// function pickUp() {
//     if (cards.length == 0) {} else {
//         console.log(cards)
//         let img = document.createElement('img')
//         let indice = Math.floor(Math.random() * Math.floor(cards.length));
//         img.src = "image/" + cards[indice];
//         deck.push(cards[indice])

//         img.style.position = 'absolute';
//         document.querySelector('#visibleFace').append(img);
//         cards.splice(indice, 1);
//     }
//     if (cards.length == 0) {
//         document.querySelector('#hiddenFace').childNodes[0].src = "image/fundation.png"
//     }
// }

// // fonction de retournement de la pioche
// function reversePickUp() {
//     console.log(deck)
//     cards = deck;
//     console.log(cards)
//     deck = [];
//     document.querySelector('#hiddenFace').innerHTML = "";
//     let img = document.createElement('img');
//     img.src = "image/back.png";
//     document.querySelector('#hiddenFace').append(img);
//     document.querySelector('#visibleFace').innerHTML = "";
    // console.log(cards)
// }



// let dropper = document.querySelectorAll('.dropper');


// img.forEach(element => {
//     element.addEventListener('dragstart', dragStart)
//     element.addEventListener('dragend', dragEnd)
// })


// function dragStart() {
//     setTimeout(() => (this.className = 'invisible'), 0);
// }

// function dragEnd() {
//     this.classList.remove("invisible")
// }

// for (const vide of dropper) {
//     vide.addEventListener('dragover', dragOver)
//     vide.addEventListener('dragenter', dragEnter)
//     vide.addEventListener('dragleave', dragLeave)
//     vide.addEventListener('drop', dragDrop)
// }

// function dragOver(e) {
//     e.preventDefault();
//     console.log('over')
// }

// function dragEnter(e) {
//     e.preventDefault();
//     console.log('enter')
// }

// function dragLeave() {
//     console.log('leave')
// }

// function dragDrop() {
//     console.log('drop')
// }








let cards = [];
cards.forEach(element => {
    let indice = Math.floor(Math.random() * Math.floor(cards.length))
    let carteSorti = cards.splice(indice, 1);
    return carteSorti;
});

//Distribution dans éléments
function distribution() {
    let deck=[];
    let cardsPioche=[];

    //au lancement de la partie, remplir la pioche
    function remplirPioche() {
        //Remplir de 24 cartes la pioche
        for (let i = 0; i< 24; i++) {
            cardsPioche.push(carteSorti);
            Math.floor((Math.random().deck.length)+1);
        };
    };      
    // Clic sur la pioche (deck[]);
    hiddenFace.addEventListener('click', function(e){
        // si l'emplacement pioche à son tableau vide,
        if (deck.length>0){
            deck=cardsPioche;// soucy, visual erreur : "message": "Une expression d'accès à un élément doit accepter un argument.",
           deck.splice(carteSorti, 1);
           cardsPioche.push(carteSorti);
           visibleFace.prepend(carteSorti);
        }else{
           deck.splice(carteSorti, 1);
           cardsPioche.push(carteSorti);
           visibleFace.prepend(carteSorti);
        }
    });
                
    }










let coeur = [];
let carreau = [];
let trefle = [];
let pique = [];

img.forEach(element => {
    element.addEventListener('dblclick', ()=> {
        let number = extraitNombre(element.getAttribute('src'))
        if (element.getAttribute('src').includes('coeur')){
            if (number == 1){
                element.style.marginTop = 0;
                document.querySelector('#coeur').append(element);
                coeur.push(number)
            } else if (coeur.length == number-1){
                element.style.marginTop = 0;
                document.querySelector('#coeur').append(element);
                coeur.push(number)
            } 
        } else if (element.getAttribute('src').includes('carreau')){
            if (number == 1){
                element.style.marginTop = 0;
                document.querySelector('#carreau').append(element);
                carreau.push(number)
            } else if (carreau.length == number-1){
                element.style.marginTop = 0;
                document.querySelector('#carreau').append(element);
                carreau.push(number)
            } 
        } else if (element.getAttribute('src').includes('trefle')){
            if (number == 1){
                element.style.marginTop = 0;
                document.querySelector('#trefle').append(element);
                trefle.push(number)
            } else if (trefle.length == number-1){
                element.style.marginTop = 0;
                document.querySelector('#trefle').append(element);
                trefle.push(number)
            } 
        } else if (element.getAttribute('src').includes('pique')){
            if (number == 1){
                element.style.marginTop = 0;
                document.querySelector('#pique').append(element);
                pique.push(number)
            } else if (pique.length == number-1){
                element.style.marginTop = 0;
                document.querySelector('#pique').append(element);
                pique.push(number)
            } 
        }
    })
})


function extraitNombre(str){ return Number(str.replace(/[^\d]/g, "")) }
 
