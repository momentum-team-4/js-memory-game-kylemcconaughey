let timer = document.querySelector('#timer');
let records = document.querySelector('#records');
let leaderboard = document.querySelector('#leaderboard');
let cardContainer = document.querySelector('#cardContainer');
let startTime;
let endTime;
let timeElapsed = document.querySelector('#timeElapsed');
let averageTime = document.querySelector('#average');
let runs = 0;
let cumulative = 0;
let dropdown = document.querySelector('#dropdown');
let clearBtn = document.querySelector('#clearBtn');
let resetBtn = document.querySelector('#resetBtn')
let cardUp = '';
let clearTimesBtn = document.querySelector('#clearTimes');

window.addEventListener('load', function () {
    displayCards(deck12)
})

function displayCards(deck) {
    let x = shuffleCards(deck);
    cardContainer.innerHTML = '';
    x.forEach(cd => {
        makeCard(cd)
    })
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

function start() {
    if (startTime === undefined) {
        startTime = moment()
        console.log(startTime)
    }
}

function set() {
    console.log('set called')
    if (dropdown.value === '1') {
        console.log(dropdown.value)
        displayCards(deck12)
    } else if (dropdown.value === '2') {
        console.log(dropdown.value)
        displayCards(deck16)
    } else if (dropdown.value === '3') {
        console.log(dropdown.value)
        displayCards(deck20)
    }
}

function flipCard(card) {
    if (!card.classList.contains('solved')) {
        let cardsUp = document.querySelectorAll('.faceup');
        if (cardsUp.length === 0) {
            card.classList.toggle('faceup')
            card.classList.toggle('facedown')
            cardUp = card.src
            console.log(cardUp)
        } else if (cardsUp.length === 1) {
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
                        timeElapsed.innerHTML += 'Your time was: ' + ((endTime - startTime) / 1000) + ' |  ';
                        runs += 1;
                        console.log(runs)
                        cumulative += ((endTime - startTime) / 1000)
                        console.log(cumulative)
                        averageTime.innerHTML = 'Your average time is: ' + cumulative / runs;
                        console.log(cumulative / runs)
                    }
                }
                else {
                    console.log('try again')
                    let temp = document.querySelectorAll('.faceup');
                    setTimeout(() => {
                        console.log('timeout')
                        temp.forEach(el => {
                            el.classList.toggle('faceup')
                            el.classList.toggle('facedown')
                        })
                    }, 1000)
                }
            }
        }
    }
}

resetBtn.addEventListener('click', function () {
    console.log('resetbtn clicked')
    let temp = document.querySelectorAll('.solved', '.faceup');
    console.log('temp: ' + temp)
    temp.forEach(el => {
        el.classList.remove('faceup', 'solved')
        el.classList.add('facedown')
    })
    startTime = undefined;
    endTime = undefined;
    set()
})

clearBtn.addEventListener('click', function () {
    let temp = document.querySelectorAll('.faceup');
    temp.forEach(el => {
        el.classList.toggle('faceup')
        el.classList.toggle('facedown')
    })
})

clearTimesBtn.addEventListener('click', function () {
    timeElapsed.innerHTML = '';
    averageTime.innerHTML = 'Your average time is: '
    runs = 0;
    cumulative = 0;
})