const gameData = {
    introduction: {
        text: "You're an aspiring archaeologist who has just discovered an ancient map leading to the lost Temple of Keshar...",
        choices: [
            { text: "Pack your gear and head out immediately.", nextStage: "immediateDeparture" },
            { text: "Research the temple further.", nextStage: "researchFirst" }
        ],
        image: "images/introduction.jpg",
        ending: false
    },
    immediateDeparture: {
        text: "You arrive at the temple by nightfall and encounter a locked gate.",
        choices: [
            { text: "Look for another entrance.", nextStage: "anotherEntrance" },
            { text: "Try to pick the lock.", nextStage: "pickLock" }
        ],
        image: "images/nightfall.jpg",
        ending: false
    },
    researchFirst: {
        text: "After researching, you learn about a curse and set out for the temple in the morning, taking the longer, but safer, Path of the Sun.",
        choices: [
            { text: "Continue on the Path of the Sun.", nextStage: "pathOfTheSun" },
            { text: "Risk the Path of the Moon.", nextStage: "pathOfTheMoon" }
        ],
        image: "images/research.jpg",
        ending: false
    },
    anotherEntrance: {
        text: "You find a secret passage leading to a puzzle door.",
        choices: [
            { text: "Solve the puzzle.", nextStage: "puzzleSolved" },
            { text: "Force the door open.", nextStage: "doorForced" }
        ],
        image: "images/secret-passage.jpg",
        ending: false
    },
    pickLock: {
        text: "You successfully pick the lock, but trigger a trap that sprays sleeping gas.",
        choices: [
            { text: "Wake up to find the amulet gone.", nextStage: "amuletGone" },
            { text: "Never wake up.", nextStage: "gameOver" }
        ],
        image: "images/pick-lock.jpg",
        ending: false
    },
    pathOfTheSun: {
        text: "You encounter a merchant who offers to sell you a strange old key.",
        choices: [
            { text: "Buy the key.", nextStage: "keyPurchased" },
            { text: "Ignore the merchant.", nextStage: "merchantIgnored" }
        ],
        image: "images/path-sun.jpg",
        ending: false
    },
    pathOfTheMoon: {
        text: "You take the Path of the Moon and get caught in a time loop.",
        choices: [
            { text: "Find a way to break the curse.", nextStage: "curseBroken" },
            { text: "Get stuck in the time loop.", nextStage: "gameOver" }
        ],
        image: "images/path-moon.jpg",
        ending: false
    },
    puzzleSolved: {
        text: "The puzzle door opens to reveal the main chamber with the Amulet of Time.",
        choices: [
            { text: "Use the amulet.", nextStage: "amuletUsed" },
            { text: "Take the amulet to a museum.", nextStage: "amuletToMuseum" }
        ],
        image: "images/puzzle-solved.jpg"
    },
    doorForced: {
        text: "Forcing the door open, you cause damage to the structure, and the ceiling starts to collapse.",
        choices: [
            { text: "Escape with a broken amulet.", nextStage: "brokenAmulet" },
            { text: "Get trapped.", nextStage: "gameOver" }
        ],
        image: "images/door-forced.jpg",
        ending: false
    },
    // Ending stages
    amuletGone: {
        text: "You wake up to find the amulet gone. Someone else has claimed the power of time.",
        image: "images/amulet-gone.jpg",
        ending: true
    },
    gameOver: {
        text: "Your journey ends here, shrouded in darkness and silence.",
        image: "images/game-over.jpg",
        ending: true
    },
    keyPurchased: {
        text: "The key fits perfectly into the temple's gate, avoiding any traps.",
        choices: [
            { text: "Use the key to enter the temple.", nextStage: "puzzleSolved" } // Leads back to a previous stage
        ],
        image: "images/key-purchased.jpg",
        ending: false
    },
    merchantIgnored: {
        text: "Ignoring the merchant, you eventually find a hidden back entrance and make your way to the main chamber.",
        choices: [
            { text: "Enter the main chamber.", nextStage: "puzzleSolved" } // Leads back to a previous stage
        ],
        image: "images/merchant-ignored.jpg",
        ending: false
    },
    curseBroken: {
        text: "After a grueling struggle, you break the curse and find the temple.",
        choices: [
            { text: "Enter the temple.", nextStage: "puzzleSolved" } // Leads back to a previous stage
        ],
        image: "images/curse-broken.jpg",
        ending: false
    },
    amuletUsed: {
        text: "Using the amulet, you harness the power to control time itself, becoming a guardian of history.",
        image: "images/amulet-used.jpg",
        ending: true
    },
    amuletToMuseum: {
        text: "You donate the amulet to a museum, earning fame as the discoverer of the century.",
        image: "images/amulet-to-museum.jpg",
        ending: true
    },
    brokenAmulet: {
        text: "You narrowly escape with the broken amulet, its power lost forever but your life still intact.",
        image: "images/broken-amulet.jpg",
        ending: true
    },
};

function startGame() {
    updatePage('introduction');
}

function updatePage(stage) {
    const stageData = gameData[stage];
    const storyElement = document.getElementById('story');
    const choicesElement = document.getElementById('choices');
    const imageElement = document.getElementById('image');

    storyElement.innerText = stageData.text;
    imageElement.src = stageData.image;
    imageElement.hidden = false;

    if (stageData.ending) {
        endGame(stageData);

        return;
    }

    choicesElement.innerHTML = '';
    stageData.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.addEventListener('click', () => updatePage(choice.nextStage));
        choicesElement.appendChild(button);
    });
}

function endGame(stageData) {
    // const storyElement = document.getElementById('story');
    // const choicesElement = document.getElementById('choices');
    // const imageElement = document.getElementById('image');

    // // Update the story text and image according to the game's outcome
    // storyElement.innerText = stageData.text;
    // choicesElement.innerHTML = '';
    // imageElement.src = stageData.image;

    // console.log('Game end!');
    
    // Set the final story text and image
    document.getElementById('story').innerText = stageData.text;
    document.getElementById('image').src = stageData.image;
    document.getElementById('image').hidden = false;

    // Remove the choices and display end game options
    const choicesElement = document.getElementById('choices');
    choicesElement.innerHTML = '';
    // choicesElement.innerHTML = '<button onclick="startGame()">Play Again</button>';
    const button = document.createElement('button');
    button.innerText = "Play Again";
    button.addEventListener('click', () => startGame());
    choicesElement.appendChild(button);

    // alert('Game end!');

    return;
}

document.addEventListener('DOMContentLoaded', (event) => {
    startGame();

    var x = document.lastModified;
    document.getElementById('lastModified').textContent = x;

    

    addendumButton.addEventListener('click', () => {
        addendum.style.display = 'block';
        document.querySelector('.addendum-overlay').style.display = 'block';
    });

    window.addEventListener('click', (event) => {
        if (!addendum.contains(event.target) && event.target != addendumButton) {
            addendum.style.display = 'none';
            document.querySelector('.addendum-overlay').style.display = 'none';
        }
    });
});
