const game = [{
    question: "What does SARS stand for?",
    a: "Severe acute respiratory syndrome",
    b: "Save Aforin Resarch sandorin",
    c: "Soft Automation Rowing Size",
    d: "Simulation Attack Rating Social ",
    correct: "a"
}, {
    question: "Book is to Reading as Fork is to:",
    a: "drawing",
    b: "stirring",
    c: "eating",
    d: "writing",
    correct: "c"
}, {
    question: "4127",
    a: "four twenty seven hundred",
    b: "four hundred twenty seven",
    c: "four thousand one hundred twenty seven",
    d: "four one two seven",
    correct: "c"
}, {
    question: "Which mountain peak is the highest in the world?",
    a: "Fansipan",
    b: "Pusilung ",
    c: "Kanchenjunga ",
    d: "Everest",
    correct: "d"
}, {
    question: "Where is not the name of a rare animal?",
    a: "Amur leopard",
    b: "Gorilla",
    c: "Crocodile",
    d: "Sumatran rhino",
    correct: "c"
}, {
    question: "What does stand for of USB",
    a: "Unpredictable Series Bus",
    b: "Universal Serial Bus",
    c: "Unity Software Buntual",
    d: "Unbuntu So Beautiful <3",
    correct: "b"
}, {
    question: "Which is correctly of a hex color",
    a: "#333",
    b: "RGB(255,255,255,0.1)",
    c: "#333333",
    d: "HSL(360deg,100%,100%)",
    correct: "c"
}, {
    question: "How many buttons are there on a standard keyboard?",
    a: "73",
    b: "81",
    c: "104",
    d: "90",
    correct: "c"
}, {
    question: "Name of a programming language?",
    a: "HyperText Markup Language",
    b: "Lion",
    c: "Mongo Database",
    d: "Sona calculation",
    correct: "a"
}, {
    question: "Isn't that the name of a software?",
    a: "DreamViewer",
    b: "App store",
    c: "QR Checker",
    d: "Github",
    correct: "d"
}, {
    question: "Where is a word that means?",
    a: "Functionahilacotimoli",
    b: "Floccinaucinihilipilification",
    c: "Fundamentialocationitional",
    d: "Famouliousiourly",
    correct: "b"
}, {
    question: "Which number should come next in the series? \n1 - 1 - 2 - 3 - 5 - 8 - 13",
    a: "19",
    b: "20",
    c: "21",
    d: "22",
    correct: "c"
}, {
    question: "PEACH is to HCAEP as 46251 is to:",
    a: "12564",
    b: "25146",
    c: "15264",
    d: "51462",
    correct: "c"
}, {
    question: "Choose the number that is 1/4 of 1/2 of 1/5 of 200=",
    a: "2",
    b: "5",
    c: "10",
    d: "25",
    correct: "b"
}, {
    question: "If you rearrange the letters LNGEDNA \n you have the name of a(n):",
    a: "City",
    b: "Animal",
    c: "Country",
    d: "Ocean",
    correct: "a"
}, {
    question: "The first person to set foot on the moon?",
    a: "David R. Scott",
    b: "Ed White",
    c: "James A. Lovell Jr",
    d: "Neil Armstrong",
    correct: "d"
}, {
    question: "IQ stands for",
    a: "Initalize Questions",
    b: "intelligence quotient.",
    c: "Identity Quarantince",
    d: "Index Question",
    correct: "b"
}, {
    question: "How many planets are there in the solar system?",
    a: "7",
    b: "11",
    c: "8",
    d: "12",
    correct: "c"
}, {
    question: "x=0;console.log(x++, x+=5, x*x, x + (x + 5 *10))",
    a: "0 6 36 62",
    b: "0 6 30 10",
    c: "1 6 25 0",
    d: "1 6 30 10",
    correct: "a"
}, {
    question: "Which results from air pollution?",
    a: "fog",
    b: "smog",
    c: "sleet",
    d: "oil",
    correct: "b"
}, ]

const qu = document.getElementById("qu");
const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");
const BtnSubmit = document.getElementById("btn");
const hideSoccer = document.getElementById("hide-soccer");
const wrapTable = document.getElementById("wrap");
const finishedTable = document.getElementById("final");
const newGame = document.getElementById("new");
let currentQuestion = 0;
let soccer = 0;

function init() {

    qu.innerHTML = game[currentQuestion].question;
    a.innerHTML = game[currentQuestion].a;
    b.innerHTML = game[currentQuestion].b;
    c.innerHTML = game[currentQuestion].c;
    d.innerHTML = game[currentQuestion].d;
}
init();


BtnSubmit.addEventListener("click", () => {
    CheckResult();


})

function finalAndTotalSoccer() {
    wrapTable.style.display = "none";
    finishedTable.style.display = "unset";

    hideSoccer.innerHTML = `Highest Soccer:<span id="redColor">${soccer}</span> points`;
}

function CheckResult() {
    const Chosse = document.querySelector('input[name="uni"]:checked').value;
    if (Chosse == game[currentQuestion].correct) {
        soccer += 5;
        currentQuestion++;

        if (currentQuestion >= 20) {
            finalAndTotalSoccer();
            return false;
        } else {

            init();
        }

    } else {
        soccer = soccer;

        currentQuestion++;
        if (currentQuestion >= 20) {
            finalAndTotalSoccer();
            return false;
        } else {

            init();
        }
        init();
    }
}
newGame.addEventListener('click', () => {
    currentQuestion = 0;
    soccer = 0;
    wrapTable.style.display = "flex";
    finishedTable.style.display = "none";
    init();

})