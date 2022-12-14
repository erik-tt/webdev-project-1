# IT2810 prosjekt 1

## CSS-grid og CSS-flexbox

Jeg har valgt å benytte meg av både CSS grid og CSS flexbox for å lage layouten til nettsiden. Grunnen til dette var at jeg ønsket å lære om begge løsningene. CSS grid deler nettsiden inn i tre kolonner og fem rader. Jeg har benyttet meg av «grid-template-areas» for å bestemme hvor elementene skal plasseres i rutenettet. Med unntak av overskrift og bunntekst er første og siste del av raden tom for å lage en marg til hovedinnholdet. Jeg eksperimenterte mye med hvordan radene skulle deles inn, men jeg fant ut at auto ga det beste resultat. Uten auto ble det vanskelig å lage en nettside uten mye plass mellom elementene, fordi dokumentasjonen tar opp mye plass når den vises, men den er ikke på skjermen til enhver tid.  

De to bildene er plassert i en horisontal flexbox i hver sin boks. Flexboxen er deretter plassert inn i en rute i gridet. Her kunne det nok ha holdt å dele opp gridet så de ville fått hver sin rute, men jeg valgte å benytte meg av flexbox for kunnskapen sin del. Flexboxen får de to bildene til å legge seg fint over hverandre når vinduet skaleres.

## HTML canvas og SVG

SVG bildet består av firkanter, linjer og sirkler. Styling av SVG bildet er gjort i CSS filen, fordi jeg syntes det virket organisert å plassere dette sammen med stylingen til resten av HTML dokumentet. Animasjonene til svg elementet er gjort med CSS animasjoner, som spesifiserer hvilke farger som skal endre seg og hvor mange prosent ballen og pilen skal flytte seg i bildet. Ballen sin animasjon kjøres ved at brukeren fører musen over bildet. Det interaktive elementet på figurnivå er himmelen som endrer farge ved å flytte musen over. «Hover» selektoren er brukt for å iverksette animasjonen til ballen og for at himmelen skifter farge. Jeg valgte å bruke CSS til animasjonene fordi det virket som en enklere løsning enn løsninger basert på javascript, og det var tilstrekkelig for å animere det jeg ønsket.

HTML canvas bildet sin kode ligger i en egen javascript fil og lenkes til under canvas elementene i HTML filen. Bildet består av firkanter, linjer og sirkler som SVG bildet. Koden er plassert inne i en funksjon «draw» som kalles rekursivt. Canvaset må tegnes på nytt hele tiden for å vise animasjoner. Pilen animeres ved at x verdien til linjene den er bygget opp med inkrementeres med 0.5 helt til den har flyttet seg med 30, før den begynner på nytt. 
Ballen animeres på tilsvarende vis, ved at koordinatene inkrementeres for hver iterasjon til hele animasjonen er kjørt. For å unngå at den starter for fort er det lagt inn 20 iterasjoner pause. Animasjonen av ballen begynner ved at brukeren fører musen over bildet og er gjort med JQuery. Dette kunne gjøres fordi canvaset har en id i HTML dokumentet. Interaktivitet på figurnivå var vanskeligere i HTML canvas, fordi de ulike elementene i bildet ikke kan refereres til med id eller lignende. Min løsning ble å skrive en funksjon som bruker javascript sin «onmousemove event» for å finne ut av når musen beveger seg innenfor himmel området. Himmelen endrer da farge, men til forskjell fra SVG bildet, vil dette kun skje når brukeren beveger på musen innenfor de gitte koordinatene og ikke hvis musen er i ro.


## JQuery
JQuery er et javascript bibliotek som jeg brukt for å skjule og vise dokumentasjonen når man trykker på knappen «dokumentasjon» og til å skjule dokumentasjonen når nettsiden lastes inn. I tillegg bruker jeg det for å iverksette animasjonen til ballen for canvas bildet, siden canvas elementet har id og kan brukes til å sette verdien til en boolean som styrer animasjonen. 
Cross-browser testing
Jeg har testet nettsiden i Safari og Google Chrome på en Mac. Testingen ble gjennomført ved å se hvordan nettsiden skalerte i de to ulike nettleserne og hvordan animasjonene oppførte seg. Nettsiden fungerte godt i begge nettleserne.

## Mest nyttige informasjonskilder
Jeg benyttet meg mye av websider og videoer for å finne informasjon. [https://css-tricks.com] og [https://www.w3schools.com] har vært nyttige websider for å forstå konseptene til blant annet CSS-flexbox og CSS-grid. W3schools har også vært veldig nyttig for å forstå det grunnleggende relatert til SVG og HTML canvas. 

Noen nyttige websider og YouTube videoer jeg brukte for å tilegne meg kunnskap er: 
CSS:
-	Chris Coyier, 2022, A Complete Guide to Flexbox, CSS-Tricks,  ttps://css-tricks.com/snippets/css/a-guide-to-flexbox/
-	Chris House, (2022), A Complete Guide to Grid, CSS-Tricks,  [https://css-tricks.com/snippets/css/complete-guide-grid/]
-	W3Schools, 2022, Flexbox container [https://www.w3schools.com/css/css3_flexbox_container.asp] 
-	W3Schools, 2022, CSS Animations,[https://www.w3schools.com/css/css3_animations.asp]
JQuery
-	JQuery (2022), JQuery API, [https://jquery.com]
-	Traversy Media (2016), jQuery Crash Course [1] – Intro and Selectors [https://www.youtube.com/watch?v=3nrLc_JOF7k&t=626s]
SVG
-	W3Schools (2022) SVG Tutorial, [https://www.w3schools.com/graphics/svg_intro.asp]
Canvas
-	W3Schools (2022) Canvas Tutorial, [https://www.w3schools.com/graphics/canvas_intro.asp] 

Kilder for kode

Inspirasjon for å finne posisjonen til musen ved bevegelse. Det er store forskjeller i min kode og koden fra kilden, men dette var utgangspunktet mitt da jeg skrev koden for å kunne endre farge basert på musepekerens posisjon.:

Stack Overflow, (2016), [https://stackoverflow.com/questions/29300280/update-html5-canvas-rectangle-on-hover]

