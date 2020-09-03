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

const dropdown = document.querySelector('#dropdown');
const cardContainer = document.querySelectorAll('#cardContainer');

dropdown.addEventListener('input', function () {
    cardContainer.innerHTML = '';
    let difLevel = dropdown.value;
    if (difLevel === 1) {

    }
})

