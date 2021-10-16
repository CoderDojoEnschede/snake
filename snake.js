// Op een canvas kan je tekenen
const canvas = document.getElementById('spel');
// De maten van het canvas
const bcr = canvas.getBoundingClientRect();

const rasterGrootte = 16;
const breedte = Math.floor(bcr.width / rasterGrootte) * rasterGrootte;
const hoogte = Math.floor(bcr.height / rasterGrootte) * rasterGrootte;
const aantalHorizontaleCellen = breedte / rasterGrootte;
const aantalVerticaleCellen = hoogte / rasterGrootte;

canvas.width = breedte; // Dit zorgt ervoor dat de canvas de correct hoogte en breedte krijgt.
canvas.height = hoogte;

// Het veld waar we op kunnen tekenen
const tekenVeld = canvas.getContext('2d');

// De locatie van de appel
let appel = maakWillekeurigeAppel();
let snake = maakNieuweSlang();

// Pak willekeurige hele nummers in een specifiek bereik
// @see https://stackoverflow.com/a/1527820/2124254
function maakWillekeurigGetal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function maakNieuweSlang() {
    return {
        // Locatie van de voorkant van de slang
        x: 5 * rasterGrootte,
        y: 5 * rasterGrootte,

        // Snelheid van de slang. Beweegt elke keer 1 rasterGrootte lengte in de x- of y-richting.
        horizontaleSnelheid: rasterGrootte,
        verticaleSnelheid: 0,

        // Houdt bij waar alle onderdelen van het slangenlichaam zich bevinden
        slangCellen: [
            {x: 5 * rasterGrootte, y: 5 * rasterGrootte},
            {x: 4 * rasterGrootte, y: 5 * rasterGrootte},
            {x: 3 * rasterGrootte, y: 5 * rasterGrootte},
            {x: 2 * rasterGrootte, y: 5 * rasterGrootte},
        ],

        // lengte van de slang. Neemt toe wanneer een appel gegeten wordt.
        aantalCellen: 4,
    };
}

function maakWillekeurigeAppel() {
    return {
        x: maakWillekeurigGetal(0, aantalHorizontaleCellen) * rasterGrootte,
        y: maakWillekeurigGetal(0, aantalVerticaleCellen) * rasterGrootte,
    };
}

function maakVeldLeeg() {
    tekenVeld.clearRect(0, 0, breedte, hoogte);

}

function tekenVierkant(kleur, x, y, breedte, hoogte) {
    tekenVeld.fillStyle = kleur;
    tekenVeld.fillRect(x, y, breedte, hoogte);
}

function tekenRaster() {
    maakVeldLeeg();

    const kleur = '#333333';
    for (let y = 0; y < aantalVerticaleCellen; y++) {
        const verticaal = y * rasterGrootte - 1;
        tekenVierkant(kleur, 0, verticaal, breedte, 1);
        for (let x = 0; x < aantalHorizontaleCellen; x++) {
            tekenVierkant(kleur, x * rasterGrootte - 1, verticaal + 1, 1, rasterGrootte - 1);
        }
    }
}

function beweegSlang() {

    // ▼▼▼ Opdracht 3 ▼▼▼ //

    // Beweeg de slang met behulp van de snelheid
    snake.x += snake.horizontaleSnelheid;
    snake.y += snake.verticaleSnelheid;

    // ▲▲▲ Opdracht 3 ▲▲▲ //

    // Zorg ervoor dat de slang bijv. links is, dat de slang rechts verder gaat.
    if (snake.x < 0) {

        // ▼▼▼ Opdracht 4a ▼▼▼ //

        snake.x = breedte - rasterGrootte;

        // ▲▲▲ Opdracht 4a ▲▲▲ //

    } else if (snake.x >= breedte) {

        // ▼▼▼ Opdracht 4b ▼▼▼ //

        snake.x = 0;

        // ▲▲▲ Opdracht 4b ▲▲▲ //
    }

    // Zorg ervoor dat de slang bijv. bovenaan is, dat de slang beneden verder gaat.
    if (snake.y < 0) {
        snake.y = hoogte - rasterGrootte;
    } else if (snake.y >= hoogte) {
        snake.y = 0;
    }

    // Houdt bij waar de slang is geweest. De eerste cell is altijd het hoofd van de slang
    if (snake.slangCellen[0].x !== snake.x || snake.slangCellen[0].y !== snake.y) {
        snake.slangCellen.unshift({x: snake.x, y: snake.y});
    }

    // Verwijder cellen als we bewegen
    if (snake.slangCellen.length > snake.aantalCellen) {
        snake.slangCellen.pop();
    }

}

function verwerkSlangenCell(cell, index) {

    // ▼▼▼ Opdracht 1 ▼▼▼ //

    // 1 pixel kleiner tekenen dan de rasterGrootte zorgt ervoor dat het lichaam van de slang duidelijk zichtbaar is en je direct de lengte kunt zien
    tekenVierkant('green', cell.x, cell.y, rasterGrootte - 1, rasterGrootte - 1);

    // ▲▲▲ Opdracht 1 ▲▲▲ //

    // De slang heeft de appel opgegeten
    if (cell.x === appel.x && cell.y === appel.y) {
        snake.aantalCellen++;
        appel = maakWillekeurigeAppel();
    }

    // Controleer botsing met alle cellen na de huidige cell (Aangepast bubble sort (https://nl.wikipedia.org/wiki/Bubblesort))
    for (let i = index + 1; i < snake.slangCellen.length; i++) {

        // De huidige cell bevindt zich op dezelfde plek als een andere cell, dit betekent een botsing.
        // We gaan het spel opnieuw beginnen.
        if (cell.x === snake.slangCellen[i].x && cell.y === snake.slangCellen[i].y) {
            snake = maakNieuweSlang();
            appel = maakWillekeurigeAppel();
        }
    }
}

// Spel lus
function spelLus() {

    tekenRaster();

    beweegSlang();

    // ▼▼▼ Opdracht 2 ▼▼▼ //

    // Teken appel
    tekenVierkant('red', appel.x, appel.y, rasterGrootte - 1, rasterGrootte - 1);

    // ▲▲▲ Opdracht 2 ▲▲▲ //

    // Teken de slangen cellen
    for (let i = 0; i < snake.slangCellen.length; i++) {
        verwerkSlangenCell(snake.slangCellen[i], i)
    }
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

    // Pijltje links
    if (e.which === 37) {
        naarLinks();
    }
    // Pijltje omhoog
    else if (e.which === 38) {
        naarBoven();
    }
    // Pijltje rechts
    else if (e.which === 39) {
        naarRechts();
    }
    // Pijltje beneden
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