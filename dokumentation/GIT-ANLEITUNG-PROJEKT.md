# 🚀 Git-Anleitung für das Vereinswebsite-Projekt

Eine praktische Anleitung für die Arbeit mit unserem Web-Projekt Repository

---

## 📋 Projekt-Übersicht

**Repository:** [Web-Projekt](https://github.com/Ruekan/Web-Projekt)  
**Branch:** `main`  
**Technologie:** HTML, CSS (konsolidiert in `main-consolidated.css`)

---

## ⚡ Schnellstart für dieses Projekt

### Option 1: Projekt zum ersten Mal klonen (empfohlen für neue Teammitglieder)
```bash
git clone https://github.com/Ruekan/Web-Projekt.git
cd Web-Projekt
code .
```

### Option 2: Bestehenden Ordner zu Git-Repository machen (wenn du schon den Ordner hast)

**Situation:** Du hast bereits den Projekt-Ordner auf deinem Computer, aber er ist noch nicht mit Git verbunden.

**Schritt-für-Schritt:**

1. **Ordner in VS Code öffnen:**
   - `File > Open Folder`
   - Wähle deinen Website-Ordner (z.B. `web-seitenprojekt`)

2. **Terminal in VS Code öffnen:**
   - `Ctrl + Shift + ` (Backtick)
   - Oder `Terminal > New Terminal`

3. **Git initialisieren:**
   ```bash
   git init
   ```

4. **Remote Repository hinzufügen:**
   ```bash
   git remote add origin https://github.com/Ruekan/Web-Projekt.git
   ```

5. **Neueste Version vom Repository holen:**
   ```bash
   git fetch origin
   git checkout main
   ```

6. **Lokale Änderungen mit Remote synchronisieren:**
   ```bash
   # Falls du bereits Dateien hast:
   git add .
   git commit -m "Initiale lokale Dateien"
   git pull origin main --allow-unrelated-histories
   git push -u origin main
   ```

### Option 3: VS Code Git-Integration nutzen

1. **In VS Code:**
   - `Ctrl + Shift + P`
   - Tippe: "Git: Clone"
   - URL eingeben: `https://github.com/Ruekan/Web-Projekt.git`
   - Zielordner auswählen

2. **Repository öffnen:**
   - VS Code fragt automatisch, ob du das geklonte Repository öffnen möchtest
   - Klicke "Open"

---

## 🔍 Überprüfen ob Git richtig verbunden ist

Nach dem Setup solltest du folgendes prüfen:

```bash
# Überprüfe Git-Status
git status

# Überprüfe Remote-Verbindung
git remote -v
# Sollte zeigen:
# origin  https://github.com/Ruekan/Web-Projekt.git (fetch)
# origin  https://github.com/Ruekan/Web-Projekt.git (push)

# Überprüfe aktuellen Branch
git branch
# Sollte zeigen: * main
```

**VS Code Indikatoren:**
- ✅ Unten links in der Status-Bar sollte "main" stehen
- ✅ Source Control Panel (`Ctrl + Shift + G`) zeigt Repository-Info
- ✅ Dateien haben Git-Symbole (M für Modified, etc.)

---

## 🔄 Standard-Workflow für Website-Updates

### Täglicher Workflow:

```bash
# 1. Neueste Änderungen holen (IMMER zuerst!)
git pull

# 2. Deine Änderungen machen (HTML/CSS bearbeiten)
# - Dateien in VS Code bearbeiten
# - Testen im Browser

# 3. Alle Änderungen hinzufügen
git add .

# 4. Commit mit sinnvoller Beschreibung
git commit -m "Beschreibung der Änderung"

# 5. Zu GitHub hochladen
git push
```

---

## 📝 Gute Commit-Messages für unser Projekt

### Template:
```
[Bereich]: Was wurde gemacht

Beispiele:
```

### ✅ Gute Beispiele:
```bash
git commit -m "feat: Neue Kontaktseite hinzugefügt"
git commit -m "fix: Navigation Dropdown repariert"
git commit -m "style: Shop-Seite CSS verbessert"
git commit -m "content: News-Artikel über Basketball-Turnier"
git commit -m "responsive: Mobile Ansicht für Sportangebote optimiert"
git commit -m "images: Neue Vereinsfotos hinzugefügt"
```

### ❌ Schlechte Beispiele:
```bash
git commit -m "fix"
git commit -m "changes"
git commit -m "test"
```

---

## 🎯 Häufige Szenarien in unserem Projekt

### Szenario 1: Homepage Text ändern
```bash
# 1. Neueste Version holen
git pull

# 2. index.html bearbeiten
# 3. Änderungen committen
git add index.html
git commit -m "content: Vereins-Beschreibung aktualisiert"
git push
```

### Szenario 2: CSS-Styles anpassen
```bash
# 1. Neueste Version holen
git pull

# 2. main-consolidated.css bearbeiten
# 3. In mehreren HTML-Dateien testen
# 4. Änderungen committen
git add main-consolidated.css
git commit -m "style: Button-Farben und Hover-Effekte verbessert"
git push
```

### Szenario 3: Neue Sportart hinzufügen
```bash
# 1. Neueste Version holen
git pull

# 2. Neue HTML-Datei erstellen (z.B. Tennis1.html)
# 3. Sportangebote.html erweitern
# 4. Eventuell CSS anpassen
# 5. Alle Änderungen committen
git add .
git commit -m "feat: Tennis-Sektion mit neuer Unterseite hinzugefügt"
git push
```

### Szenario 4: Shop-Produkte hinzufügen
```bash
# 1. Neueste Version holen
git pull

# 2. shop.html bearbeiten
# 3. Eventuell neue Bilder hinzufügen
# 4. Änderungen committen
git add .
git commit -m "products: Neue Vereins-T-Shirts im Shop hinzugefügt"
git push
```

### Szenario 5: News-Artikel erstellen
```bash
# 1. Neueste Version holen
git pull

# 2. Neue HTML-Datei für Artikel erstellen
# 3. newspage.html mit Link erweitern
# 4. Änderungen committen
git add .
git commit -m "news: Artikel über Jahreshauptversammlung 2025"
git push
```

---

## 🛠️ VS Code für unser Projekt nutzen

### Source Control Panel (`Ctrl + Shift + G`)

**Projekt-spezifische Tipps:**
- **Rote M**: Geänderte Dateien (z.B. index.html)
- **Grüne U**: Neue Dateien (z.B. neue Sportart-Seite)
- **Rote D**: Gelöschte Dateien

### Live Preview testen:
1. Rechtsklick auf `index.html`
2. "Open with Live Server" (Extension installiert?)
3. Website im Browser testen
4. Erst dann committen!

---

## 📁 Wichtige Dateien in unserem Projekt

```
Web-Projekt/
├── index.html            # Startseite
├── shop.html              # Shop-Seite
├── Sportangebote.html     # Sportarten-Übersicht
├── Basketball1.html       # Basketball-Unterseite
├── Fußball1.html         # Fußball-Unterseite
├── Handball1.html        # Handball-Unterseite
├── newspage.html         # News-Übersicht
├── newseins.html         # Beispiel-Artikel
├── Kontakt.html          # Kontakt-Seite
├── main-consolidated.css # ALLE Styles (wichtigste CSS-Datei!)
├── images/               # Bilder-Ordner
└── .gitignore           # Git-Ignore Datei
```

### ⚠️ Wichtig:
- **Bearbeite nur `main-consolidated.css`** für Styles
- Die alten CSS-Dateien (`style.css`, `shop.css`, etc.) sind veraltet
- Teste Änderungen in mehreren HTML-Dateien

---

## 🚨 Wichtige Regeln für unser Team

### Vor jeder Arbeit:
```bash
git pull  # IMMER zuerst die neueste Version holen!
```

### Vor jedem Push:
1. **Testen**: Website im Browser öffnen und prüfen
2. **Alle Seiten testen**: Nicht nur die geänderte Seite
3. **Navigation prüfen**: Alle Links funktionieren?
4. **Mobile ansicht**: Responsive Design noch ok?

### Bei Problemen:
```bash
# Wenn jemand gleichzeitig geändert hat
git pull  # Versuche neueste Version zu holen

# Bei Merge-Konflikten
# VS Code zeigt die Konflikte an - manuell lösen
# Dann:
git add .
git commit -m "fix: Merge-Konflikt behoben"
git push
```

---

## 📱 Mobile Testing Checklist

Nach CSS-Änderungen immer testen:
- [ ] Homepage lädt korrekt
- [ ] Navigation funktioniert (Dropdown)
- [ ] Shop-Seite responsive
- [ ] Sportangebote-Karten passen
- [ ] Kontakt-Formular funktioniert
- [ ] Footer sieht gut aus

**Tipp:** In Chrome `F12` → "Device Toolbar" für Mobile-Ansicht

---

## 🔧 Häufige Probleme & Lösungen

### Problem: "Permission denied" beim Push
```bash
# Repository-URL prüfen
git remote -v

# Falls HTTPS nicht funktioniert:
git remote set-url origin https://github.com/Ruekan/Web-Projekt.git
```

### Problem: Jemand hat gleichzeitig geändert
```bash
# NICHT PANIK! Einfach:
git pull
# Konflikte in VS Code lösen, dann:
git add .
git commit -m "fix: Merge-Konflikt behoben"
git push
```

### Problem: Falschen Commit gemacht
```bash
# Letzten Commit rückgängig (Änderungen bleiben)
git reset --soft HEAD~1
# Dann nochmal richtig committen
```

### Problem: Website funktioniert nicht nach CSS-Änderung
```bash
# Schnell zur letzten funktionierenden Version:
git log --oneline  # Letzten guten Commit finden
git checkout abc1234 -- main-consolidated.css  # Bestimmte Datei zurücksetzen
git add main-consolidated.css
git commit -m "fix: CSS auf funktionierende Version zurückgesetzt"
git push
```

---

## 📊 Projekt-Status überprüfen

### Aktuellen Status sehen:
```bash
git status    # Was ist geändert?
git log -5    # Letzte 5 Commits
git remote -v # Repository-URL prüfen
```

### Wer hat was geändert:
```bash
git log --oneline --author="Name"  # Commits von bestimmter Person
git blame index.html               # Wer hat welche Zeile geändert
```

---

## 🎯 Häufige Situationen beim ersten Setup

### "Ich habe den Ordner schon, aber Git funktioniert nicht"

**Anzeichen:**
- VS Code zeigt keine Git-Symbole
- Source Control Panel ist leer
- Terminal-Befehle wie `git status` geben Fehler

**Lösung:**
```bash
# 1. Überprüfe ob du im richtigen Ordner bist
pwd  # Zeigt aktuellen Pfad

# 2. Überprüfe ob Git initialisiert ist
ls -la  # Suche nach .git Ordner

# 3. Falls kein .git Ordner:
git init
git remote add origin https://github.com/Ruekan/Web-Projekt.git
git fetch origin
git checkout main
```

### "Ich will mit einem bestehenden Team-Repository arbeiten"

**Schritte:**
1. **Repository-URL vom Team bekommen:** `https://github.com/Ruekan/Web-Projekt.git`
2. **Neuen Ordner erstellen** (nicht in bestehenden Website-Ordner!)
3. **Repository klonen:**
   ```bash
   git clone https://github.com/Ruekan/Web-Projekt.git
   cd Web-Projekt
   code .
   ```

### "Ich habe bereits lokale Dateien und will sie ins Repository übertragen"

**Vorsichtig vorgehen:**
```bash
# 1. Erstelle Backup deiner lokalen Dateien!
# 2. Klone das Repository in neuen Ordner
git clone https://github.com/Ruekan/Web-Projekt.git Web-Projekt-Neu

# 3. Vergleiche deine Dateien mit Repository-Dateien
# 4. Kopiere deine Änderungen manuell rüber
# 5. Dann normal committen und pushen
```

---

## 🎯 Arbeitsablauf für Website-Updates

### 1. **Planung** (vor dem Coden)
- Was soll geändert werden?
- Welche Dateien betroffen?
- Backup-Plan falls etwas schief geht?

### 2. **Vorbereitung**
```bash
git pull  # Neueste Version holen
```

### 3. **Entwicklung**
- Änderungen in VS Code machen
- Regelmäßig im Browser testen
- Mobile Ansicht prüfen

### 4. **Testing**
- Alle betroffenen Seiten testen
- Navigation prüfen
- Formulare testen (falls geändert)

### 5. **Commit & Push**
```bash
git add .
git commit -m "Beschreibung der Änderung"
git push
```

### 6. **Verifikation**
- Auf GitHub prüfen ob Push erfolgreich
- Eventuell Live-Website prüfen

---

## 📚 Nützliche Git-Befehle für unser Projekt

```bash
# Repository-Info
git remote -v                    # GitHub-URL anzeigen
git branch                       # Aktueller Branch (sollte 'main' sein)
git status                       # Geänderte Dateien

# Änderungen verwalten
git add .                        # Alle Änderungen hinzufügen
git add *.html                   # Nur HTML-Dateien hinzufügen
git add main-consolidated.css    # Nur CSS-Datei hinzufügen

# Commits
git commit -m "Nachricht"        # Commit erstellen
git log --oneline               # Commit-Historie
git show HEAD                   # Letzten Commit anzeigen

# Mit GitHub synchronisieren
git pull                        # Änderungen holen
git push                        # Änderungen senden
git fetch                       # Status vom Server holen (ohne merge)
```

---

## 🎉 Zusammenfassung für unser Team

**Die 3 wichtigsten Befehle:**
1. `git pull` - Vor der Arbeit
2. `git commit -m "Was gemacht"` - Nach Änderungen  
3. `git push` - Nach dem Commit

**Goldene Regeln:**
- ✅ Immer `git pull` vor der Arbeit
- ✅ Nur funktionierende Änderungen committen
- ✅ Aussagekräftige Commit-Messages
- ✅ Regelmäßig pushen (täglich)
- ✅ Bei Problemen: Ruhe bewahren und im Team fragen

---

## 🆘 Schnelle Hilfe - Häufigste Fragen

### "Wie erkenne ich ob ich im Git-Repository arbeite?"
**VS Code Indikatoren:**
- Unten links steht "main" (Branch-Name)
- Source Control Panel zeigt Dateien
- Dateien haben Git-Symbole (M, U, etc.)

### "Wie komme ich von meinem lokalen Ordner zum Repository?"
```bash
# Option A: Repository neu klonen (sauberste Lösung)
git clone https://github.com/Ruekan/Web-Projekt.git
cd Web-Projekt

# Option B: Bestehenden Ordner verbinden
cd dein-website-ordner
git init
git remote add origin https://github.com/Ruekan/Web-Projekt.git
git fetch origin
git checkout main
```

### "Ich habe den Ordner geöffnet, aber sehe keine Git-Sachen"
1. **Terminal öffnen** (`Ctrl + Shift + ``)
2. **Prüfen wo du bist:** `pwd`
3. **Git initialisieren:** `git init`
4. **Repository verbinden:** `git remote add origin https://github.com/Ruekan/Web-Projekt.git`

### "Jemand anderes hat auch Änderungen gemacht"
```bash
git pull  # Holt die Änderungen der anderen
# Falls Konflikte: In VS Code lösen, dann:
git add .
git commit -m "Merge-Konflikt gelöst"
git push
```

### "Ich will sichergehen dass meine Änderungen gespeichert sind"
```bash
git status       # Zeigt den aktuellen Status
git log -3       # Zeigt die letzten 3 Commits
git remote -v    # Zeigt GitHub-Verbindung
```

**Bei Fragen:** Issues auf GitHub erstellen oder direkt im Team fragen! 🚀

---

*Diese Anleitung ist speziell für unser Vereinswebsite-Projekt erstellt. Für allgemeine Git-Fragen gibt es viele Online-Tutorials.*