# Lanciare un server HTTP da una cartella (Windows e Mac)

Puoi avviare rapidamente un server HTTP locale per condividere file o testare contenuti web. Qui sotto trovi i metodi più semplici per farlo sia su **Windows** che su **macOS**.


## Metodo 1:Node.js con http-server

1. Assicurati di avere **Node.js** installato.
2. Installa `http-server` globalmente:
   ```
   npm install -g http-server
   ```
3. Vai nella cartella da servire:
   ```
   cd /percorso/della/cartella
   ```
4. Lancia il server:
   ```
   http-server
   ```
5. Visita:
   ```
   http://localhost:8080
   ```

---

## Metodo 2: Python

### Con Python 3 (consigliato)

1. Apri il **Terminale** (Mac) o **Prompt dei comandi / PowerShell** (Windows).
2. Vai nella cartella che vuoi servire:
   ```
   cd /percorso/della/cartella
   ```
   Su Windows, ad esempio:
   ```
   cd "C:\Users\tuo-nome\Desktop\mia-cartella"
   ```
3. Avvia il server con:
   ```
   python -m http.server 8000
   ```
4. Apri il browser su:
   ```
   http://localhost:8000
   ```

### Con Python 2 (non consigliato):
```
python -m SimpleHTTPServer 8000
```




---

## Verifica

Dopo aver lanciato il server, apri un browser e visita:
- `http://localhost:8000` (per Python)
- `http://localhost:8080` (per http-server)

Se vuoi che il server sia accessibile da altri dispositivi sulla stessa rete, sostituisci `localhost` con il tuo indirizzo IP locale (es. `http://192.168.1.42:8000`).

---
