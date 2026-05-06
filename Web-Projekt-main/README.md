# SV Ente Heidenheim – Vereinswebsite

Webprojekt für den Studiengang Wirtschaftsinformatik an der DHBW Heidenheim.

## Projektübersicht

Für dieses Projekt haben wir eine Website für den fiktiven Sportverein „SV Ente Heidenheim“ entwickelt. Die Seite stellt alle wichtigen Informationen rund um den Verein bereit – von Sportangeboten bis zum Shop.  
Wichtig war uns, dass die Seite übersichtlich, barrierearm und auf verschiedenen Geräten gut nutzbar ist.

Die Seite umfasst 11 HTML-Seiten mit unterschiedlichen Layout- und Inhaltsbereichen.

## Inhalt der Website

- **Homepage** – Hero-Banner, kurze Einordnung, Infokarten  
- **Sportangebote** – Übersicht + detaillierte Seiten zu Basketball, Fußball, Handball  
- **Shop** – Produktübersicht, Filter visuell umgesetzt (CSS-only)  
- **News** – Nachrichtenseite + einzelne Artikel  
- **Mitgliedschaft** – Informationen + Formular  
- **Kontakt** – Kontaktformular und Vereinsinformationen  

## Technische Umsetzung

### Verwendete Technologien
- **HTML5** für die Struktur und semantische Elemente  
- **CSS3** für Layout, Design, Responsiveness (Flexbox, Grid, Transitions, Media Queries)  


## Design-Entscheidungen

### Farbschema
Passend zum Vereinswappen „Ente“ haben wir uns für grüne und goldene Akzente entschieden:

- Primärfarbe: **#1e5631** (Dunkelgrün)  
- Akzentfarbe: **#c5a572** (Gold)  

### Layout-Varianten
1. Hero-Banner Layout (Startseite)  
2. Grid-basiertes Shop-Layout  
3. Artikel-Layout für News  
4. Sportdetailseiten mit großem Bildbereich  
5. Formular-Layout für Mitgliedschaft & Kontakt  

### Responsive Design
Die Responsiveness basiert auf Breakpoints bei **768px**, **480px** und **320px**.  

## Barrierefreiheit (WCAG 2.2 Level A)

Um die Seite barriereärmer zu gestalten, wurden folgende Punkte umgesetzt:

- **Skip-Link** zu Beginn der Seite  
- **Semantische Struktur**: `<header>`, `<nav>`, `<main>`, `<article>` usw.  
- **Alt-Texte** für alle Bilder  
- **Fokus-Indikatoren** für Tastaturbedienung  
- **ARIA-Labels**, wo zusätzliche Orientierung nötig war  
- **Kontrastverhältnis** von mindestens 4.5:1  
- **Saubere Überschriftenhierarchie** (H1 → H2 → H3)  

## Browser-Kompatibilität

Die Website wurde getestet in:

- Chrome (Windows)  
- Firefox (Windows)  
- Safari (mobil)  

Alle relevanten Seiten wurden auf Darstellung, Responsiveness und Navigierbarkeit geprüft.

## Projektstruktur

```
web-seitenprojekt/
│
├── index.html              # Startseite
├── shop.html               # Shop
├── newspage.html           # News-Übersicht
├── newseins.html           # Blogartikel
├── Sportangebote.html      # Übersicht Sportarten
├── Basketball1.html        # Basketball-Seite
├── Fußball1.html          # Fußball-Seite
├── Handball1.html         # Handball-Seite
├── Mitgliedschaft.html     # Mitgliedschaftsformular
├── Kontakt.html            # Kontaktformular
├── leer.html               # Vorlage/Platzhalter
│
├── main.css                # Zentrales Stylesheet
│
└── Bilder/                 # Bildmaterial
```

# Besonderheiten im Code (Quellcode-Dokumentation)

## 1. Dropdown-Menü ohne JavaScript

Um die Navigation ohne JS umzusetzen, wurde ein CSS-Only Dropdown gebaut.

**HTML-Struktur:**
```html
<li class="dropdown">
  <a href="#">Sportangebote</a>
  <ul class="submenu">
    <li><a href="Basketball1.html">Basketball</a></li>
  </ul>
</li>
```

**CSS-Logik:**
```css
.dropdown:hover .submenu,
.dropdown:focus-within .submenu {
    display: block;
}
```

`:focus-within` sorgt dafür, dass die Navigation auch per Tastatur funktioniert.

## 2. Sticky Header

```css
header {
    position: sticky;
    top: 0;
    z-index: 100;
}
```

Dadurch bleibt der Header beim Scrollen sichtbar.

## 3. Responsive Bilder

```css
img {
    max-width: 100%;
    height: auto;
}
```

Damit passen sich Bilder automatisch der verfügbaren Breite an.

## 4. Shop-Layout mit CSS-Grid

```css
.shop-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.2rem;
}
```

Das Gitter passt sich flexibel an verschiedene Fenstergrößen an.

## 5. Shop-Filter (CSS-only)

Der Filterbereich ist rein optisch vorhanden.  
Eine echte Filterlogik würde JavaScript erfordern.

# Testhinweise

## Responsiveness getestet
- Browser DevTools verwenden (Geräteansicht)  
- Wichtige Seiten testen: Startseite, Shop, Formulare  
- Typische Testbreiten: **320px**, **480px**, **768px**, **1024px**

## Barrierefreiheit getestet
- Navigation per **Tab-Taste**  
- Skip-Link ausprobieret  
- Fokus-Markierungen  

## Bildquellen
Alle verwendeten Bilder wurden selbst bzw. KI-basiert erzeugt.

## Autoren
Peter Lang (Matrikelnummer: 8613964)  
Janek Frank (Matrikelnummer: 5607006)
Lukas Reiser (Matrikelnummer: 5527863)
Tarek Kadu Turkmani (Matrikelnummer: 1650970)

---

# Versionsverwaltung

## Version 0.1 – News-Seite: Vollständiger Ausbau (06.05.2026)

### Neue Dateien

- **`src/app/models/article.ts`** — `Article`-Interface + 15 Startartikel mit vollständigem Inhalt
- **`src/app/services/news.service.ts`** — Zentrale Datenverwaltung mit `localStorage`-Persistenz
- **`src/app/pages/news-upload-page/`** — Neue Upload-Seite (TS + HTML + CSS)

### Geänderte Dateien

- **`src/app/pages/news-page/`** (TS + HTML + CSS) — Vollständig dynamisch: Sortierung, Kategoriefilter, Löschen, Upload-Button, gleichhohe Kacheln
- **`src/app/pages/news-one-page/`** (TS + HTML + CSS) — Liest Artikel dynamisch per URL-Slug, zeigt Tags und Titelbild
- **`src/app/app.routes.ts`** — Route `/news/neu` und `/news/:slug` hinzugefügt
- **`tools/split-main-css.mjs`** — News-Seiten werden vom CSS-Sync-Tool nicht mehr überschrieben
- **`tools/sync-legacy-html.mjs`** — News-Seiten werden vom HTML-Sync-Tool nicht mehr überschrieben

### Implementierte Features

| Feature | Details |
|---|---|
| **Sortierung** | Nach Datum (↑↓) und Name (↑↓), aktiv-Zustand am Button sichtbar |
| **Kategoriefilter** | Chips: Alle / Fußball / Handball / Basketball / Tennis / Tischtennis / Badminton / Veranstaltungen / Trainingslager / Allgemein |
| **Detailseiten** | Alle Artikel haben vollständigen Text, `/news/:slug` lädt dynamisch |
| **Upload-Formular** | PIN-Schutz, Pflichtfelder mit Validierung, Tags wählbar, Inhalt als Absätze, Route `/news/neu` |
| **Artikel löschen** | Redakteur-Modus per PIN aktivierbar; zeigt rotes ✕ auf jeder Kachel; Löschen sofort persistent |
| **Gleiche Kachelhöhe** | Karten in einer Reihe sind immer gleich hoch; Datum und Tags werden per Flexbox ans untere Ende gedrückt |
| **Grid-Layout** | Feste 3 Spalten (auch bei 1–2 Artikeln kein Strecken); 2 Spalten ab 1100 px, 1 Spalte ab 600 px |
| **Persistenz** | Artikel werden als JSON im `localStorage` gespeichert und bleiben nach Reload erhalten |

### Artikelbestand (15 Startartikel)

| Kategorie | Artikel |
|---|---|
| Allgemein | Jugendabteilung Trainingskonzept, Kapitän Interview, Neue Trainingszeiten, Schnuppertraining |
| Fußball | Neuer Torwarttrainer |
| Handball | Damen gewinnen Derby, Neue Trainingshalle eingeweiht |
| Basketball | Junioren qualifizieren sich für Landesmeisterschaft, Neuer Cheftrainer Martinez |
| Tennis | Start der Hallensaison |
| Tischtennis | Rekordbeteiligung Vereinsturnier |
| Badminton | 3 Podiumsplätze beim Kreisturnier |
| Veranstaltungen | Vereinsfest 2025, Weihnachtsfeier 2025, Neue Trainingshalle (auch Handball) |
| Trainingslager | Trainingslager Neapel bestätigt |

### Technische Details

- Artikeldaten werden als JSON im `localStorage` unter dem versionierten Schlüssel `sv-ente-articles-v{N}` gespeichert
- Die Versionsnummer in `news.service.ts` (`STORAGE_VERSION`) wird hochgezählt, wenn neue Standardartikel hinzukommen — erzwingt automatisches Neu-Laden
- Sortierung und Filterung laufen über Angular Signals (`signal()`, `computed()`) ohne zusätzliche Bibliotheken
- Der Redakteur-PIN ist in `src/app/services/news.service.ts` als `REDAKTEUR_PIN` hinterlegt und kann dort geändert werden (Standard: `1234`)
- Die Route `/news/neu` ist bewusst vor `/news/:slug` registriert, damit Angular „neu" nicht als Slug interpretiert
- Löschen-Button verwendet `stopPropagation()`, damit kein versehentlicher Navigationsklick ausgelöst wird
