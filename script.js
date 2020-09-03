
let timer = document.querySelector('#timer');
const dropdown = document.querySelector('#dropdown');
let records = document.querySelector('#records');
let leaderboard = document.querySelector('#leaderboard');
let cardContainer = document.querySelector('#cardContainer');
let startTime;
let endTime;
let timeElapsed = document.querySelector('#timeElapsed');

window.addEventListener('load', function () {
    displayCards(deck12)
})

function start() {
    if (startTime === undefined) {
        startTime = moment()
        console.log(startTime)
    }
}


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
    cardAnimal.innerHTML = x.animal;
    cardAnimal.classList.add('cardAnimal');
    cardAnimal.style.display = 'none';
    card.appendChild(cardAnimal);
    card.addEventListener('click', start);
    card.addEventListener('click', function () {
        flipCard(cardFront)
    })

}

let clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click', function () {
    let temp = document.querySelectorAll('.faceup');
    temp.forEach(el => {
        el.classList.toggle('faceup')
        el.classList.toggle('facedown')
    })
})

let resetBtn = document.querySelector('#resetBtn')
resetBtn.addEventListener('click', function () {
    console.log('resetbtn clicked')
    let temp = document.querySelectorAll('.solved', '.faceup');
    console.log(temp)
    temp.forEach(el => {
        el.classList.remove('faceup', 'solved')
        el.classList.add('facedown')
        // el.classList.remove('')
    })
    startTime = undefined;
    endTime = undefined;
    displayCards(deck12);
})

let cardUp = '';

function flipCard(card) {
    if (!card.classList.contains('solved')) {
        let cardsUp = document.querySelectorAll('.faceup');
        if (cardsUp.length === 0) {
            //flip card
            card.classList.toggle('faceup')
            card.classList.toggle('facedown')
            cardUp = card.src
            console.log(cardUp)
        } else if (cardsUp.length === 1) {
            //if card is up, turn it face down
            if (card.classList.contains('faceup')) {
                card.classList.toggle('faceup')
                card.classList.toggle('facedown')
            } else {
                card.classList.toggle('faceup')
                card.classList.toggle('facedown')
                if (cardUp === card.src) {
                    console.log('match!')
                    let temp = document.querySelectorAll('.faceup');
                    temp.forEach(el => {
                        el.classList.toggle('faceup')
                        el.classList.add('solved')
                    })
                    let down = document.querySelectorAll('.facedown').length;
                    if (down === 0) {
                        endTime = moment();
                        console.log(endTime)
                        timeElapsed.innerHTML += 'Your time was: ' + ((endTime - startTime) / 1000) + ' |  '
                    }
                }
                else {
                    console.log('try again')
                }
            }
            //else, flip card face up
            //check against other card that's up
            //if they both match, let user know, make them un-clickable
            //if they don't match, click anywhere to flip them back down
        }
    }
}


function displayCards(deck) {
    let x = shuffleCards(deck);
    cardContainer.innerHTML = '';
    x.forEach(cd => {
        makeCard(cd)
    })
}
