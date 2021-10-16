# Snake

Hallo! Vandaag gaan we het spel *Snake* maken, op de computer.

Op de computer kan je zelf dingen maken door het in *code* te typen. Dat noemen we ook wel *programmeren*. Wij gaan het spel *Snake* programmeren.

Het is moeilijk om dat helemaal zelf te leren. Daarom hebben de begeleiders van de CoderDojo Enschede alvast een begin gemaakt. Hieronder vind je instructies waarmee je stap voor stap aan de slag kan.

Elke opdracht bevat uitleg, en dingen die jij zelf moet doen. De dingen die jij zelf moet doen, staan aangegeven met `▶▶▶`.

### Opdracht 0: Openen van programmeeromgeving

De code staat in *Trinket*. Dat is een website waarop je kan programmeren, en direct het resultaat kan bekijken.

▶▶▶ Open Trinket door op de link te klikken: # TODO

Je moet nu aan de linker kant code zien, en aan de rechter kant het Snake spel.

Als je aan de linker kant de code aanpast, dan verandert de website automatisch na een paar seconden aan de rechterkant.

Dat was gemakkelijk! Nu komt het echte werk!

### Opdracht 1: Teken de slang

Op de website staat alleen het veld waar de slang gaat bewegen, en waar de appel komt te liggen. Maar we zien nog niets!

Laten we de slang als eerste tekenen zodat we kunnen zien waar hij is in het veld.

▶▶▶ Open aan de bovenkant de tab met de naam `snake.js`.

In dit bestand staat *JavaScript* code. JavaScript is een taal om in te programmeren.

Tussen de code staan stukken tekst. Je kan tekst herkennen aan dat het begint met `//`. De tekst staat er om de code uit te leggen. Je kunt de tekst lezen zonder de code te begrijpen.

▶▶▶ Zoek *Opdracht 1* in het bestand `snake.js`.

Opdracht 1 staat in een *functie*, een stukje code dat wordt uitgevoerd voor elk stukje van de slang. Elk stukje van de slang heet een *cell*, en gaan we tekenen als een blokje op het scherm.

Elk blokje (`cell`) heeft een locatie, gegeven door `x` (horizontaal) en `y` (verticaal). Die locatie kunnen we gebruiken om het blokje op de goede locatie te tekenen.

▶▶▶ Typ de regel `tekenVierkant('green', cell.x, cell.y, rasterGrootte - 1, rasterGrootte - 1)`.

Dit is code. De code tekent een vierkant. De kleur van het vierkant wordt opgegeven (`'green'`), de locatie van het vierkant wordt opgegeven (`cell.x` en `cell.y`) en de grootte van het blokje wordt opgegeven (`rasterGrootte - 1` horizontaal en verticaal).

Zie je de slang verschijnen op het scherm?

![](images/TODO.png)

### Opdracht 2: Teken de appel

In het spel Snake hebben we niet alleen een slang, maar ook een appel. De slang wil de appel opeten, maar dat kan hij alleen doen als hij de slang kan zien.

▶▶▶ Zoek *Opdracht 2* in het bestand `snake.js`.

De appel heet `appel` in de code. De appel heeft een locatie `x` (horizontaal) en `y` (verticaal), net als de stukjes van de slang.

▶▶▶ Teken een groen (`'green'`) vierkant op de locatie `x`, `y` van de appel, met grootte `rasterGrootte - 1`.

Kijk naar de vorige opdracht als je er niet uit komt hoe je een vierkant kan tekenen.

De appel moet nu op het scherm verschijnen. Elke keer dat het spel opstart, begint de appel op een andere willekeurige locatie.

### Opdracht 3: Glibberen

De slang staat op het scherm, maar er gebeurt nog niets. De slang heeft honger, dus we gaan hem laten bewegen.

Echte slangen kunnen bewegen waar ze naartoe willen. Deze slang niet, want dit is een computerslang. Een computerslang kan alleen naar boven, naar onder, naar links en naar rechts bewegen.

▶▶▶ Zoek *Opdracht 3* in het bestand `snake.js`.

Het hoofd van de slang heeft een locatie op het scherm. De locatie is `snake.x` (horizontaal) en `snake.y` (verticaal).

De slang heeft ook een snelheid. Het hoofd van de slang beweegt in de richting van de snelheid. De snelheid van de slang is `snake.horizontaleSnelheid` (horizontaal) en `snake.verticaleSnelheid` (verticaal).

Opdracht 3 is een functie `beweegSlang`. Deze code wordt uitgevoerd als de slang moet bewegen.

▶▶▶ Verander de horizontale locatie van de slang door de horizontale snelheid op te tellen bij de horizontale locatie van de slang. Bijvoorbeeld met `snake.x = snake.x + snake.horizontaleSnelheid;`.

▶▶▶ Verander de verticale locatie van de slang door de verticale snelheid op te tellen bij de verticale locatie van de slang.

Nu gaat de slang glijden over het veld!

### Opdracht 4: Door de muur

Kijk eens goed wat er gebeurt als de slang aan de rechterkant van het veld is.

De slang gaat door de muur, en verwijnt! Dat klopt niet.

▶▶▶ Zoek *Opdracht 4a* in het bestand `snake.js`.

Deze code staat in `if (snake.x < 0)`, dus als de slang links van het scherm af valt. Dan moet de slang aan de rechterkant er weer uit komen.

▶▶▶ Zet de `x` positie van de slang op `breedte - rasterGrootte`.

▶▶▶ Zoek *Opdracht 4b* in het bestand `snake.js`.

Deze code staat in `if (snake.x >= breedte)`, dus als de slang rechts van het scherm af valt. Dan moet de slang aan de linkerkant er weer uit komen.

▶▶▶ Zet de `x` positie van de slang op `0`.

Nu moet de slang succesvol 'door de muur' heen glijden.

### Opdracht 5: Besturen met de knoppen

De slang gaat alleen nog maar rechtdoor. Met de knoppen die op het scherm staan, gaan we de slang besturen.

We besturen de slang door te zeggen wat er moet gebeuren als je op de knop klikt. Bijvoorbeeld als je op de knop naar rechts klikt, dan moet een *functie* worden aangeroepen die ervoor zorgt dat de slang naar rechts gaat.

Er zijn vier functies:
- `naarBoven()`
- `naarBeneden()`
- `naarLinks()`
- `naarRechts()`

▶▶▶ Zoek *Opdracht 5* in het bestand `snake.html` (let op, dit is een andere tab dan de voorgaande opdrachten).

`<button ...>` is een knop waar je op kan klikken. Elke knop heeft een `id`, een technische naam. Elke knop heeft een `onclick=""`. Tussen de `"` in kan je invullen welke functie aangeroepen moet worden.

▶▶▶ Zorg dat de knop `links` de functie `naarLinks()` aanroept door het in `onclick` in te vullen.

▶▶▶ Zorg dat de knoppen `boven`, `beneden` en `rechts` ook de correcte functies aanroepen.

Je moet nu met behulp van de knoppen de slang kunnen besturen. De slang kan niet omkeren, hij kan alleen bochtjes om.

### Opdracht 6: Besturen met het toetsenbord

Met de muis op de knoppen klikken is leuk, maar niet zo handig voor een snel spelletje als Snake.

We gaan het toetsenbord gebruiken om de slang te besturen.

▶▶▶ Zoek *Opdracht 6* in het bestand `snake.js`.

Er staat vier keer een `if (toetsCode === ...)` met een code. Elke toets op je toetsenbord heeft een code. Wij hebben de codes alvast ingevuld.

Kijk naar het commentaar (tekst dat begint met `//`) boven elke `if`. Die vertelt welke code bij welke pijltjestoets hoort.

▶▶▶ Vul voor elke `if` een functie in die de slang in de goede richting stuurt, net als in opdracht 5.

Probeer maar om met je toetsenbord de slang te besturen.

### Opdracht 7: Honger

Inmiddels kan de slang bewegen over het veld, en kunnen we de slang op twee manieren besturen.

De slang heeft honger! Op het veld ligt een appel.

▶▶▶ Probeer met de slang de appel te eten.

Er gebeurt niets, de slang eet de appel niet en glijdt er pal overheen.

▶▶▶ Zoek *Opdracht 7* in het bestand `snake.js`.

De slang weet hoe lang hij is. De lengte van de slang is opgeslagen in `snake.aantalCellen`. Als de slang een appel heeft gegeten, dan wordt hij een blokje langer.

▶▶▶ Verhoog de waarde van `snake.aantalCellen` met `1` als de slang een appel eet.

Nu wordt de slang langer als hij een appel heeft opgegeten. Maar de appel blijft op dezelfde plek liggen. Het is zo wel erg makkelijk om de appel opnieuw te eten. We gaan de appel verplaatsen naar een willekeurige andere locatie.

▶▶▶ Maak een willekeurige nieuwe appel met `verplaatsAppelWillekeurig()`.

Elke keer als de slang een appel eet, zal de appel nu verplaatsen naar een andere locatie.

### Opdracht 7: Kleurtjes

De slang is vol van alle appels en we kunnen ons nu bezig houden met andere zaken zoals hoe het spel eruit ziet.

Op een aantal plekken in de code wordt de functie `tekenVierkant` aangeroepen. Daar wordt een kleur meegegeven om aan te geven welke kleur het vierkant getekend moet worden.

In de code staat opdracht 8 niet aangegeven met commentaar. Je moet zelf zoeken naar de locaties waar `tekenVierkant` wordt aangeroepen.

▶▶▶ Open in een nieuw tabblad de website https://htmlcolorcodes.com/color-names/. Zoek een aantal leuke kleuren uit.

▶▶▶ Verander de kleuren van de slang, de appel en van het grijze raster van het veld.

## Extra opdrachten voor gevorderden

De volgende opdrachten zijn moeilijker dan de opdrachten hierboven. Je moet zelf code kunnen begrijpen en typen om de opdrachten te kunnen voltooien.

Mocht je er niet uitkomen, vraag dan een begeleider van de CoderDojo om hulp!

### Opdracht 8: Dodelijke rand

▶▶▶ Zorg ervoor dat het spel herstart als de slang bij een rand komt, in plaats van dat de slang er doorheen gaat.

### Opdracht 9: Score bijhouden

▶▶▶ Zet in het bestand `snake.html` een element waar de score getoond kan worden.

▶▶▶ Zorg ervoor dat elke keer dat de slang beweegt, dat de score `1` hoger wordt.

▶▶▶ Zorg ervoor dat elke keer dat de slang een appel eet, dat de score `10` hoger wordt.

### Opdracht 10: High score bijhouden

▶▶▶ Zet in het bestand `snake.html` een element waar de high score getoond kan worden.

▶▶▶ Zorg ervoor dat elke keer wanneer het spel opnieuw wordt gestart, de high score wordt geüpdated met de hoogste score tot nu toe.

### Opdracht 11: Barrières

▶▶▶ Maak een variabele waarin een lijst van locaties (`x` en `y`) van blokjes staan die barrières zijn.

▶▶▶ Zorg ervoor dat het spel stopt wanneer de slang op een barrière beweegt.

▶▶▶ Zorg ervoor dat een appel niet op een plek van een barrière kan verschijnen.

### Opdracht 12: Bericht als het spel klaar is

▶▶▶ Zorg ervoor dat er een mooi bericht in beeld verschijnt als het spel klaar is, met de score en de lengte van de slang.

### Opdracht 13: Fruit en vlees

Behalve appels, houden slangen ook erg van bananen, muizen, uien en spruitjes.

▶▶▶ Zorg ervoor dat er meerdere stukken eten in het veld liggen.

▶▶▶ Zorg ervoor dat de stukken eten niet op dezelfde plek verschijnen op het veld.

▶▶▶ Geef voor elk stuk eten een andere score.

### Opdracht 14: Willekeurige startlocatie

De slang begint altijd linksboven in de hoek.

▶▶▶ Zorg ervoor dat de slang op een willekeurige locatie begint, maar wel met zijn staart volledig in het veld. Let op bij de rand!

### Opdracht 15: Sneller

De slang glijdt altijd met dezelfde snelheid. Het is leuker als de slang steeds sneller gaat naar mate de slang langer is. Dan wordt het spel nog moeilijker.

▶▶▶ Zorg evoor dat de slang sneller gaat glijden zodra de slang een appel heeft gegeten.

▶▶▶ Maak de beginsnelheid van de slang configurabel met een variabele, zodat je met een langzamere of snellere slang het spel kan beginnen.
