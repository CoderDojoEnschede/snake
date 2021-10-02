const canvas = document.getElementById('spel');
const bcr = canvas.getBoundingClientRect();

const rasterGrootte = 16;
const breedte = Math.floor(bcr.width / rasterGrootte) * rasterGrootte;
const hoogte = Math.floor(bcr.height / rasterGrootte) * rasterGrootte;
const aantalHorizontaleCellen = breedte / rasterGrootte;
const aantalVerticaleCellen = hoogte / rasterGrootte;

canvas.width = breedte; // Dit zorgt ervoor dat de canvas de correct hoogte en breedte krijgt.
canvas.height = hoogte;

const tekenVeld = canvas.getContext('2d');

const snake = {};
initialiseerSpel();

function initialiseerSpel() {
    snake.x = 5 * rasterGrootte;
    snake.y = 5 * rasterGrootte;
    // Snelheid van de slang. Beweegt elke keer 1 rasterGrootte lengte one rasterGrootte length every frame in either the x or y direction
    snake.horizontaleSnelheid = rasterGrootte;
    snake.verticaleSnelheid = 0;
    // Houdt bij waar alle onderdelen van het slangenlichaam zich bevinden
    snake.slangCellen = [];
    // lengte van de slang. Neemt toe wanneer een appel gegeten wordt.
    snake.aantalCellen = 4;
}

const appel = {};
plaatsAppel();

// Pak willekeurige hele nummers in een specifiek bereik
// @see https://stackoverflow.com/a/1527820/2124254
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function tekenRaster() {
    tekenVeld.clearRect(0, 0, breedte, hoogte);
    tekenVeld.fillStyle = '#333333';

    for (let y = 0; y < aantalVerticaleCellen; y++) {
        const verticaal = y * rasterGrootte - 1;
        tekenVeld.fillRect(0, verticaal, breedte, 1);
        for (let x = 0; x < aantalHorizontaleCellen; x++) {
            tekenVeld.fillRect(x * rasterGrootte - 1, verticaal + 1, 1, rasterGrootte - 1);
        }
    }
}

function beweegSlang() {

    // beweeg de slang met behulp van de snelheid velocity
    snake.x += snake.horizontaleSnelheid;
    snake.y += snake.verticaleSnelheid;


    // Zorg ervoor dat de slang bijv. links is, dat de slang rechts verder gaat.
    if (snake.x < 0) {
        snake.x = breedte - rasterGrootte;
    } else if (snake.x >= breedte) {
        snake.x = 0;
    }

    // Zorg ervoor dat de slang bijv. bovenaan is, dat de slang beneden verder gaat.
    if (snake.y < 0) {
        snake.y = hoogte - rasterGrootte;
    } else if (snake.y >= hoogte) {
        snake.y = 0;
    }

    // Houdt bij waar de slang is geweest. De eerste cell is altijd het hoofd van de slang
    snake.slangCellen.unshift({x: snake.x, y: snake.y});

    // Verwijder cellen als we bewegen
    if (snake.slangCellen.length > snake.aantalCellen) {
        snake.slangCellen.pop();
    }

}

function plaatsAppel() {
    appel.x = getRandomInt(0, aantalHorizontaleCellen) * rasterGrootte;
    appel.y = getRandomInt(0, aantalVerticaleCellen) * rasterGrootte;
}

function verwerkSlangenCell(cell, index) {

    // 1 pixel kleiner tekenen dan de rasterGrootte zorgt ervoor dat het lichaam van de slang duidelijk zichtbaar is en je direct de lengte kunt zien
    tekenVeld.fillRect(cell.x, cell.y, rasterGrootte - 1, rasterGrootte - 1);

    // De slang heeft de appel opgegeten
    if (cell.x === appel.x && cell.y === appel.y) {
        snake.aantalCellen++;
        plaatsAppel();
    }

    // Controleer botsing met alle cellen na de huidige cell (Aangepast bubble sort (https://nl.wikipedia.org/wiki/Bubblesort))
    for (let i = index + 1; i < snake.slangCellen.length; i++) {

        // De huidige cell bevindt zich op dezelfde plek als een andere cell, dit betekent een botsing. We gaan het spel opnieuw beginnen.
        if (cell.x === snake.slangCellen[i].x && cell.y === snake.slangCellen[i].y) {
            initialiseerSpel();
            plaatsAppel();
        }
    }
}

// spel Lus
function spelLus() {

    tekenRaster();

    beweegSlang();

    // teken appel
    tekenVeld.fillStyle = 'red';
    tekenVeld.fillRect(appel.x, appel.y, rasterGrootte - 1, rasterGrootte - 1);

    // teken de slangen cellen
    tekenVeld.fillStyle = 'green';
    snake.slangCellen.forEach(verwerkSlangenCell);
}

function naarLinks() {
    // Zorg ervoor dat de slang alleen maar 90 graden van richting kan veranderen
    // Dus niet naar rechts terwijl de slang al naar links gaat.
    // Of naar boven terwijl de slang naar beneden gaat.
    // In dat geval zou de slang direct tegen zichzelf aan komen
    if (snake.horizontaleSnelheid === 0) {
        snake.horizontaleSnelheid = -rasterGrootte;
        snake.verticaleSnelheid = 0;
    }
}

function naarBoven() {
    if (snake.verticaleSnelheid === 0) {
        snake.verticaleSnelheid = -rasterGrootte;
        snake.horizontaleSnelheid = 0;
    }
}

function naarBeneden() {
    if (snake.verticaleSnelheid === 0) {
        snake.verticaleSnelheid = rasterGrootte;
        snake.horizontaleSnelheid = 0;
    }
}

function naarRechts() {
    if (snake.horizontaleSnelheid === 0) {
        snake.horizontaleSnelheid = rasterGrootte;
        snake.verticaleSnelheid = 0;
    }
}

// Luister naar het toetsenbord om de slang te kunnen bewegen
document.addEventListener('keydown', function (e) {


    // left arrow key
    if (e.which === 37) {
        naarLinks();
    }
    // up arrow key
    else if (e.which === 38) {
        naarBoven();
    }
    // right arrow key
    else if (e.which === 39) {
        naarRechts();
    }
    // down arrow key
    else if (e.which === 40) {
        naarBeneden();
    }
});


let aantalAanroepen = 0;

function beperkAantalVerversingen() {
    requestAnimationFrame(beperkAantalVerversingen);
    // maak het spel iets langzamer (7.5 beelden per seconde) inplaats van de standaard 60 (60/7.5 = 8)
    if (++aantalAanroepen < 8) {
        return;
    }
    aantalAanroepen = 0;
    spelLus();
}

// start het spel
requestAnimationFrame(beperkAantalVerversingen);