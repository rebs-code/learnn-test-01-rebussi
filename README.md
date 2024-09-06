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
