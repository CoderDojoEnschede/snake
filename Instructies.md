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

▶▶▶ Zoek *Opdracht 4* in het bestand `snake.js`.

### TODO

- laat de slang bewegen
- laat de slang door de muur gaan
- bestuur de slang met de knoppen
- bestuur de slang met het toetsenbord
- laat de slang het eten opeten
- kleurtjes


## Extra opdrachten voor gevorderden

De opdrachten hieronder zijn moeilijker dan de opdrachten tot nu toe. Je moet zelf code kunnen begrijpen en typen om de opdrachten te kunnen voltooien.

Mocht je er niet uitkomen, vraag dan een begeleider van de CoderDojo om hulp!

### TODO

- snelheid configurabel maken
- opvullen van barrieres
- rand is dodelijk
- score (tijd?)
- high score
  - localstorage for persistence
- bericht in beeld als je af gaat
- meerdere stukjes eten
- laat slang op willekeurige plek beginnen
