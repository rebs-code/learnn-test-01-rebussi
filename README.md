# Test Tecnico 01 per Learnn

Autore: Giacomo Rebussi

Data: 04 Settembre 2024

## CODING PROBLEMS

### Coding Problem 01 - FOOBAR

Scrivi un piccolo programma che stampi ogni numero da 1 a 100 su una nuova riga.
Per ogni multiplo di 3, stampa “Foo” invece del numero.
Per ogni multiplo di 5, stampa “Bar” invece del numero.
Per ogni numero multiplo di 3 e 5 insieme, stampa “FooBar” invece del numero.

Soluzione:

```
for (let i = 1; i < 101; i++) {
    if (i % 15 === 0) {
        console.log("FooBar");
    } else if (i % 3 === 0) {
        console.log("Foo");
    } else if (i % 5 === 0) {
        console.log("Bar");
    } else {
        console.log(i);
    }
}
```

Per prima cosa, inizializziamo un for loop che itera da 1 a 100:

```
for (let i = 1; i < 101; i++)
```

All'interno del loop, controlliamo se il numero è sia multiplo di 3 che di 5 dividendolo per 15 (il minimo comune multiplo di 3 e 5). Se questa condizione risulta vera, allora il numero è multiplo sia di 3 che di 5, quindi stampiamo 'FooBar':

```
if (i % 15 === 0) {
        console.log("FooBar");
    }
```

Dopo aver controllato se il numero è multiplo sia di 3 che di 5, procediamo con i controlli successivi:

```
else if (i % 3 === 0) {
    console.log("Foo");
}
```

Questo blocco controlla se il numero è multiplo di 3. Se lo è, stampa "Foo".

```
else if (i % 5 === 0) {
    console.log("Bar");
}
```

Questo blocco controlla se il numero è multiplo di 5. Se lo è, stampa "Bar".

```
else {
    console.log(i);
}
```

Se il numero non è multiplo né di 3 né di 5, viene stampato il numero stesso.

### Coding Problem 02 - Carta, forbice e sasso

Sono un assiduo giocatore, per questo voglio giocare a “carta forbice e sasso”.

#### Acceptance Criteria

Posso giocare Umano vs Computer?
Posso giocare Computer vs Computer?
Posso giocare una nuova partita conclusa quella precedente?

#### User Story Back - Technical Constraints

Non è necessaria una GUI appariscente (può essere semplice)
Non dovrebbero essere necessarie librerie o moduli esterni se non per i test
Usa le pratiche riconosciute nell’industry dello sviluppo software
Considera di scrivere codice estendibile. Se lo farai dovrebbe essere relativamente semplice estendere il gioco alla variante Rock, paper, scissors, lizard and Spock
Questo è un Minimum Viable Product: eleganza e semplicità battono una ricca lista di feature

#### Soluzione

La soluzione presentata tiene conto delle caretteristiche principale di un MVP per giocare a Carta, Forbice e Sasso:

- L'intera tavola di gioco e' presentata all'utente fin da subito cosi che appaiono evidenti le feature e le caratteristiche.
- Il design viene rispettato come leggero, miminale, e chiaro. Questo per evitare di aggiungere features indesiderate e permettere all'utente di concentrarsi sulle funzionalita' del prodotto finale

##### Utilizzo

L'utente puo' giocare semplicemente scegliendo una delle tre modalita' proposte:

- Human vs Human
- Human vs PC
- PC vs PC

Dopo aver effettuato questa prima scelta - di default la modalita' selezionata e' Human vs PC - l'utente puo' procedere con le scelte di tiro tramite bottoni. La partita inizia premendo un pulsante sullo schermo che a fine partita permette anche di ricominciare con un nuovo round.

##### Struttura del Progetto

- Main Container

Tutti i componenti sono racchiusi in un contenitore che ricorda lo schermo di uno smartphone. Questo perche' non essendoci grandi elementi di UI, ho preferito condensare tutto al centro dello schermo e racchiuderlo in maniera ordinata. L'utente cosi' non viene distratto da una viewport troppo larga senza motivo.

- Selezionatore di Modalita' di Gioco

Il primo componente e' il selettore della modalita' di gioco tramite selettore radio. Si trova in cima perche' e' la prima scelta che l'utente deve compiere. Di default una modalita' e' gia' selezionata cosi' che l'utente puo' gia' avviare una partita contro il computer. Cambiando modalita' di gioco, si riavvia anche la partita qualora ce ne fosse una in sospeso.

- Display delle scelte dei giocatori

Questo componente comprende due card, in quanto ci saranno sempre e solo due giocatori che mostrano chiaramente le scelte dei due giocator ie il nome degli stessi cosi' da richiamare anche la modalita' di gioco. Infatti se la modalita' scelta e' 'Human vs Human', i nomi saranno 'Player 1' e 'Player 2', se invece uno dei giocatori, o entrambi, sono PC, il nomi saranno 'PC 1' e 'PC 2'. Prima che le scelte vengano effettuate, verra' mostrato un '?'; in seguito, 'Rock', 'Paper' o 'Scissors' in base alla scelta.

- Pulsanti di scelta

Questo componente cambia in base al turno e alla modalita' di gioco. Quando e' il turno di un umano, appaiono tre pulsanti corrispondenti alle tre scelte possibili. Se invece e' il turno del PC, appare un solo pulsante che genera automaticamente la scelta del computer. Una volta che le scelte sono state effettuate, e a partita finita, i pulsanti sono disabilitati. Per riattivarli bastera' ricominciare una nuova partita o cambiare la modalita' di gioco.

- Messaggio di stato di gioco

Questo componente e' fondamentale per l'esperienza utente perche' tiene traccia dello stato del gioco ed e' sempre presente fra i pulsanti di scelta e quello di avvio gara, che e' la zona dello schermo in cui l'utente si soffermera' maggiormente. Ad inizio partita, indica il turno di scelta. Una volta avvenute le scelte, invita l'utente a cliccare il pulsante di avvio della partita. A partita terminata, il messaggio dichiara il vincitore.

- Pulsante di avvio partita

Come dice il nome, avvia la partita. E' disattivato fino a quando entrambi i giocatori non abbiano effettuato una scelta. A partita terminata, invita l'utente a giocarne un'altra e resetta lo stato di gioco.

##### Tecnologie Utilizzate

- Vite ^5.4.1
- React 18
- Tailwind ^3.4.10

##### Estensibilita'

Il progetto è stato progettato pensando all'estensibilità. In particolare, è predisposto per una facile implementazione della variante "Rock, Paper, Scissors, Lizard, Spock". Le funziona di relazione fra le mosse e di determinazione del vincitore permettono di integrare diverse modalita' con facilita':

```
  // relazioni tra le mosse
  const moveRelationships = {
    rock: { beats: ["scissors"] },
    paper: { beats: ["rock"] },
    scissors: { beats: ["paper"] },
  };

  // funzione che determina il vincitore
  const determineWinner = (move1, move2) => {
    if (move1 === move2) return "tie";
    if (moveRelationships[move1].beats.includes(move2)) return "move1";
    return "move2";
  };
```

##### Installazione

1- Clonare la repo da GitHub

2- `npm install`

3- `npm run dev`

4- Il progetto utilizza il server host di default di Vite: localhost:5173
