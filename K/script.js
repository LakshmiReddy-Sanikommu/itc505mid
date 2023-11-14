// Define the story stages
const storyStages = {
    start: {
        text: "You Awakening in an ancient chamber, you find yourself in a realm suspended between time. The choices you make within this enigmatic space will dictate not only your fate but also the equilibrium of this timeless realm.",
        choices: ["Continue"],
        consequences: ["continue"],
        image: "forest.jpg"
    },
    continue: {
        text: "The Chamber of Beginnings",
        text: "In the dimly lit chamber, you discern two diverging paths:",
        choices: ["The Luminescent Passage", "The Enigmatic Shadow"],
        consequences: ["Passage", "Shadow"],
        image: "passage.jpeg",
        image: "shadow.jpeg"
    },
    Passage: {
        text: "You enterd the Luminescent Passage, the gentle glow illuminates your way, leading you to:",
        choices: ["The Azure Cascade", "The Observatory of Stars"],
        consequences: ["Cascade", "Stars"],
        image: "cave.jpg"
    },
    Shadow: {
        text: "When Venturing through the Enigmatic Shadow, you encounter",
        choices: ["The Chamber of Whispers", "The Hall of Illusions"],
        consequences: ["Whispers", "Illusions"],
        image: "lake.jpg"
    },
    Cascade: {
        text: "After choosing the Luminescent Passage and arriving at the Azure Cascade, the player encounters two distinct options:",
        choices: ["The Whispering Pool","The Crystal Archway"],
        consequences: ["Pool","Archway"],
        image: "exitCave.jpg"
    },
    Stars: {
        text: "Having chosen the Luminescent Passage and arrived at the Observatory of Stars, the player faces further diverging paths:",
        choices: ["The Cosmic Lens","The Celestial Globe"],
        consequences: ["Lens","Globe"],
        image: "stayPut.jpg"
    },
    Whispers: {
        text: "Entering The Chamber of Whispers leads to two distinct choices:",
        choices: ["Decipher the Cryptic Voices","Navigate the Shadowed Path"],
        consequences: ["CrypticVoice","ShadowedPath"],
        image: "stayPut.jpg"
    },
    Illusions: {
        text: "Choosing The Hall of Illusions presents two options:",
        choices: ["Embrace the Illusory Realm"],
        consequences: ["IllusoryRealm"],
        image: "stayPut.jpg"
    },
    Pool: {
        text: "There is a crocodile and it eaten you alive",
        choices: ["Restart The Game"],
        consequences: ["start"],
        image: "stayPut.jpg"
    },
    Archway: {
        text: "You crossed the archway and found some people.",
        choices: ["Talk to the person and worktogether","Leave them"],
        consequences: ["worktogether","Leave"],
        image: "stayPut.jpg"
    },
    worktogether:{
        text: "You all worked together. And find the way to escape",
        choices: "Start a new Game",
        consequences:["start"],
        image: ""
    },
    leave:{
        text: "You lost the route",
        choices: ["Restart the game"],
        consequences: ["start"],
        image: ""
    },
    Lens: {
        text: "A mysterious lens that refracts celestial light in patterns across the room.which lead you to dead.",
        choices: ["Restart the game"],
        consequences: ["start"],
        image: "exitCave.jpg"
    },
    Globe: {
        text: "out of frustation throws the globe and founds a map",
        choices: ["Map"],
        consequences: ["map"],
        image: "exitCave.jpg"
    },
    map: {
        text: "You Read the map and found the route to escape",
        choices: ["Start a new game"],
        consequences: ["start"],
        image: "s.jpg"
    },
    CrypticVoice: {
        text: "Concentrate on understanding the enigmatic messages echoing within the chamber.and escapes",
        choices: ["Start a new game"],
        consequences: ["start"],
        image: "s.jpg"
    },
    ShadowedPath: {
        text: "You found two chambers following gthe shadow path",
        choices: ["Chamber 1","Chamber 2"],
        consequences: ["c1","c2"],
        image: "s.jpg"
    },
    c1:{
        text: "You Unexpectedly enters into wrong chamber and dies",
        choices: ["Restart the game"],
        consequences: ["start"]
    },
    c2:{
        text: "You founds secret chambers,",
        choices: ["Start a new game"],
        consequences: ["start"]
    },
    IllusoryRealm: {
        text: "Embracing the tranquil waters, the player faces two distinct choices:",
        choices: ["Dance with the Shadows","Merge with Fantasia"],
        consequences: ["dance","merge"],
        image: "s.jpg"
    },
    dance:{
        text: "Effortlessly navigating through the illusions enables the player to unveil hidden chambers and pathways, revealing the escape path",
        choices: ["Escape"],
        consequences: ["Ending"]
    },
    merge:{
        text: "Player dies",
        choices: ["Restart the game"],
        consequences: ["start"],
        image: "s.jpg"
    },
    Ending: {
        text: "Congratulations! You have found the way and escaped completed your adventure.",
        choices: [],
        consequences: [],
        image: "treasure.jpg"
    },
};

// Function to start/restart the game
function startGame() {
    currentStage = "start";
    updatePage();
}

// Function to update the page based on the current stage
function updatePage() {
    const stage = storyStages[currentStage];
    document.getElementById("story").innerText = stage.text;
    document.getElementById("choices").innerHTML = "";

    // Display image
    document.getElementById("story-image").src = stage.image;

    // Create buttons for choices
    stage.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.innerText = choice;
        button.addEventListener("click", () => makeChoice(index));
        document.getElementById("choices").appendChild(button);
    });
}

// Function to handle player choices
function makeChoice(choiceIndex) {
    const stage = storyStages[currentStage];
    const nextStage = stage.consequences[choiceIndex];
    
    if (nextStage) {
        currentStage = nextStage;
        updatePage();
    } else {
        // Handle reaching an ending or unexpected situation
        console.error("Invalid choice consequence:", stage, choiceIndex);
    }
}

// Initialize the game
let currentStage;
startGame();
