# Demo accessibilità base - file di esercitazione  
In questo repository troverai un esempio di pagina con problemi di accessibilità nella cartella "bad" e la versione migliorata nella cartella "good".  
Non spulciare subito nella good, sbattitu un po' =)  

## Problemi di accessibilità
### Aspetti Visivi

- Presenza di testo lampeggiante non conforme alle WCAG 2.3.1  
- Colori con contrasto insufficiente rispetto allo sfondo (`#ff6b6b`, `#4ecdc4`, `#cccccc`)  
- Testi troppo piccoli (10px, 12px) difficili da leggere  
- Animazioni non disattivabili per utenti sensibili al movimento  

---

### Struttura Semantica e Navigazione 

- Mancanza di un meccanismo per saltare direttamente al contenuto principale  
- Struttura semantica poco chiara o assente (`<main>`, `<header>`, `<nav>`, ecc. non usati correttamente)  
- Assenza di ruoli ARIA per identificare le aree dell'interfaccia  
- Gerarchia dei titoli incoerente o mal definita  

---

### Accessibilità della Tastiera

- Mancanza di indicatore visivo per il focus sugli elementi interattivi  
- Componenti come gli accordion non gestibili da tastiera  
- Modal che non manteneva il focus all’interno, permettendo l’uscita accidentale  
- Impossibilità di chiudere il modal con la tastiera (tasto Escape)  
- Focus non gestito correttamente all’apertura/chiusura dei modal  

---

### Formulari e Etichette

- Etichette dei campi non associate correttamente agli input  
- Campi obbligatori non indicati in modo chiaro e accessibile  
- Focus sui campi poco evidente visivamente  

---

### Contenuti Multimediali e Icone

- Icone decorative interpretate come contenuto dai lettori di schermo  
- Immagini delle auto prive di testo alternativo significativo  
- Contenuti esclusivamente per screen reader non nascosti correttamente  

---

### ARIA e Stati

- Stati degli accordion non comunicati con proprietà ARIA  
- Modali non conformi agli standard ARIA (`aria-labelledby`, `aria-hidden`, ecc. mancanti)  
- Informazioni aggiuntive non collegate tramite `aria-describedby`  

---

### Responsive e Usabilità

- Layout non ottimizzato per dispositivi mobili  
- Aree cliccabili troppo piccole per un’interazione touch efficace  
- Ordine dei contenuti poco logico per l’esperienza con screen reader  
