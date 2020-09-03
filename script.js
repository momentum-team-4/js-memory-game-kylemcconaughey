// ## data

const deck = [
    {
        animal: 'eagle', picSource: 'cardPics/eagle.jpg'
    },
    {
        animal: 'eagle', picSource: 'cardPics/eagle.jpg'
    },
    {
        animal: 'flamingo', picSource: 'cardPics/flamingo.jpg'
    },
    {
        animal: 'flamingo', picSource: 'cardPics/flamingo.jpg'
    },
    {
        animal: 'horse', picSource: 'cardPics/horsey.jpg'
    },
    {
        animal: 'horse', picSource: 'cardPics/horsey.jpg'
    },
    {
        animal: 'iguana', picSource: 'cardPics/iguano.jpg'
    },
    {
        animal: 'iguana', picSource: 'cardPics/iguano.jpg'
    },
    {
        animal: 'turtle', picSource: 'cardPics/iLikeTurtles.jpg'
    },
    {
        animal: 'turtle', picSource: 'cardPics/iLikeTurtles.jpg'
    },
    {
        animal: 'giraffe', picSource: 'cardPics/jraff.jpg'
    },
    {
        animal: 'giraffe', picSource: 'cardPics/jraff.jpg'
    }

]
let timer = document.querySelector('#timer');
const dropdown = document.querySelector('#dropdown');
let records = document.querySelector('#records');
let leaderboard = document.querySelector('#leaderboard');
let cardContainer = document.querySelector('#cardContainer');


window.addEventListener('load', function () {
    displayCards(deck)
})


function shuffleCards(deck) {
    deck = deck.slice()
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = deck[i]
        deck[i] = deck[j]
        deck[j] = temp
    }
    return deck
}


function makeCard(x) {
    let num = cardContainer.childElementCount;
    let card = document.createElement('div');
    let cardFront = document.createElement('img');
    // let cardBack = document.createElement('img');
    let cardAnimal = document.createElement('div');
    card.id = 'card' + (num + 1);
    card.classList.add('card');
    cardFront.src = x.picSource;
    // cardBack.src = 'cardPics/momentum.png'
    card.appendChild(cardFront);
    // card.appendChild(cardBack);
    cardContainer.appendChild(card);
    cardFront.classList.add('facedown');
    cardFront.classList.add('unsolved');
    cardAnimal.innerHTML = x.animal;
    cardAnimal.classList.add('cardAnimal');
    cardAnimal.style.display = 'none';
    card.appendChild(cardAnimal);
    card.addEventListener('click', function () {
        flipCard(cardFront)
    })

}


function flipCard(card) {
    let cardsUp = document.querySelectorAll('.faceup');
    if (cardsUp.length === 0) {
        //flip card
    } else if (cardsUp.length === 1) {
        //if card is up, turn it face down
        //else, flip card face up
        //check against other card that's up
        //if they both match, let user know, make them un-clickable

    }
}






// let faceUp = 0;

// function flipCard(cf) {
//     if (!(cf.classList.contains('solved'))) {
//         if (faceUp === 0) {
//             console.log('faceup === 0');
//             cf.classList.toggle('facedown');
//             cf.classList.toggle('faceup');
//             faceUp += 1;
//             console.log('cf.src: ' + cf.src)

//             console.log('card1: ' + card1 + ' and faceUp: ' + faceUp)
//         } else if (faceUp === 1) {
//             let card1 = document.querySelector('.faceup');
//             if (cf.src === card1.src) {
//                 console.log('match!')
//                 card1.classList.toggle('faceup');
//                 card1.classList.add('solved');
//                 cf.classList.toggle('facedown');
//                 cf.classList.toggle('faceup');
//                 cf.classList.add('solved');
//                 faceUp = 0;
//             } else {
//                 cf.classList.toggle('facedown');
//                 cf.classList.toggle('faceup');
//                 faceUp += 1;
//                 console.log(faceUp);
//             }
//         } else if (faceUp === 2) {
//             let temp = document.querySelectorAll('.faceup');
//             temp.forEach(el => {
//                 el.classList.toggle('faceup')
//                 el.classList.toggle('facedown')
//             })
//             cf.classList.toggle('facedown');
//             cf.classList.toggle('faceup');
//             faceUp = 1;
//         }
//     }
// }





function displayCards(deck) {
    let x = shuffleCards(deck);
    x.forEach(cd => {
        makeCard(cd)
    })
}


// - when the game started

// cardContainer.addEventListener('click', function () {
//     startTimer()
// })


// - listen for clicks on the cards
// ## when a card is clicked
// - if the timer has not been started, start the timer
// - check how many unmatched cards are face-up, if 2 or more stop
// - display its image
// - if another card is clicked
//   - check to see if the two cards' values match
//   - if the two cards match
//     - alert the user
//     - remove/disable the cards
//     - check if there are any unmatched cards left
//       - if no, stop the timer, game over
//   - if the two cards don't match
//     - flip the unmatched cards face-down
// ## every second
// - display the timer