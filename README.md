# SV Ente Heidenheim – Vereinswebsite (Semester 2)

Webprojekt für den Studiengang Wirtschaftsinformatik an der DHBW Heidenheim.
Dynamische Web-Applikation auf Basis von Angular 21 und TypeScript – Weiterentwicklung der statischen HTML/CSS-Version aus Semester 1.

## Projektübersicht

Für den fiktiven Sportverein **SV Ente Heidenheim** wurde eine vollständig dynamische Webanwendung entwickelt. Gegenüber der statischen Vorgängerversion bietet die Anwendung interaktive Features wie einen funktionierenden Warenkorb, ein News-CMS mit Kommentarfunktion sowie kombinierbare Shop-Filter. Alles ohne externen Server, ausschließlich mit lokalem State und `localStorage`.

## Setup & Start

### Voraussetzungen

- [Node.js](https://nodejs.org/) (v18 oder neuer)
- npm (wird mit Node.js mitgeliefert)

### Installation & Start

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten (http://localhost:4200)
npm start
```

### Tests ausführen

```bash
# Alle Tests einmalig ausführen
npm test -- --watch=false

# Tests im Watch-Modus (bei Dateiänderungen neu ausführen)
npm test
```

## Features

### Shop mit Filterung und Warenkorb
- Live-Suche über Produktname, Beschreibung und Kategorie
- Kombinierbare Filter: Kategorie, Preisbereich, Größe
- Filterparameter werden in der URL gespeichert (bookmarkbar)
- Warenkorb mit Mengensteuerung und Preisberechnung
- Persistenz via `localStorage` – Warenkorb bleibt nach Reload erhalten
- Automatische Bereinigung veralteter Warenkorbeinträge bei Produktänderungen

### News-CMS
- 15 vorbelegte Artikel mit Kategorisierung (9 Tags)
- Redakteursbereich (PIN-geschützt): Artikel erstellen und löschen
- Automatische Slug-Generierung mit Kollisionserkennung
- Sortierung nach Datum oder Titel, Filterung nach Tags
- Kommentarfunktion mit Formularvalidierung
- Persistenz via `localStorage` inkl. Versionierung

### Sportangebote
- 6 Sportarten (Fußball, Handball, Basketball, Badminton, Tennis, Tischtennis)
- Dynamische Detailseiten über URL-Parameter (`/sportangebote/:sportId`)
- Automatische Weiterleitung bei unbekannter Sport-ID

### Weitere Seiten
- Mitgliedschaft: Informationsseite mit Formular
- Kontakt: Kontaktinformationen und Formular
- 404-Seite für unbekannte Routen

## Projektstruktur

```
src/
└── app/
    ├── data/                    # Statische Vereinsdaten (Sportangebote)
    ├── layout/
    │   ├── site-header/         # Globale Navigation mit Dropdown und Cart-Badge
    │   └── site-footer/         # Globaler Footer
    ├── models/
    │   └── article.ts           # Interfaces: Article, Comment
    ├── pages/
    │   ├── home-page/           # Startseite
    │   ├── sportangebote-page/  # Sportarten-Übersicht
    │   ├── sport-detail-page/   # Dynamische Sportdetailseite
    │   ├── news-page/           # Newsliste mit Filter und Sortierung
    │   ├── news-one-page/       # Einzelartikel mit Kommentaren
    │   ├── news-upload-page/    # Artikelerstellung (PIN-geschützt)
    │   ├── shop-page/           # Produktliste mit Filterung
    │   │   ├── components/
    │   │   │   ├── shop-filter-panel/   # Präsentationskomponente Filter
    │   │   │   └── shop-product-grid/   # Präsentationskomponente Produkte
    │   │   └── data/
    │   │       ├── shop.models.ts       # Typen: ShopProduct, ShopFilterState
    │   │       ├── shop.data.ts         # Produktdaten
    │   │       ├── shop.service.ts      # Filterlogik, Validierung
    │   │       ├── cart.models.ts       # Typen: CartEntry, CartSummary
    │   │       └── cart.service.ts      # Warenkorb-State, localStorage
    │   ├── cart-page/           # Warenkorbverwaltung
    │   ├── mitgliedschaft-page/ # Mitgliedschaftsseite
    │   ├── kontakt-page/        # Kontaktseite
    │   └── not-found-page/      # 404-Seite
    ├── services/
    │   └── news.service.ts      # News-State, localStorage, Kommentare
    ├── app.routes.ts            # Routing-Konfiguration (11 Routen)
    └── app.config.ts            # Angular-Konfiguration
```

## Technologie-Stack

| Bereich | Technologie |
|---------|-------------|
| Framework | Angular 21 (Standalone Components) |
| Sprache | TypeScript 5.9 (strict mode) |
| State Management | Angular Signals (`signal`, `computed`) |
| Persistenz | `localStorage` |
| Tests | Vitest 4 + Angular TestBed |
| Formatter | Prettier 3 |

## Architekturentscheidungen

- **Keine externen API-Calls:** Alle Daten liegen lokal (statische Arrays oder `localStorage`). Die Anwendung ist vollständig offline-fähig.
- **Angular Signals:** Reaktiver State ohne NgRx – `computed()` für abgeleitete Werte, `toSignal()` für RxJS-Integration.
- **Validierung am Data-Layer:** Produkte und gespeicherte Daten werden beim Laden validiert; fehlerhafte Einträge werden verworfen statt die App zum Absturz zu bringen.
- **Presentational vs. Container Components:** `ShopFilterPanel` und `ShopProductGrid` haben keine eigene Logik – sie kommunizieren ausschließlich über `@Input`/`@Output`.

## Farbschema

Passend zum Vereinswappen wurden folgende Farben gewählt:

- Primärfarbe: `#1e5631` (Dunkelgrün)
- Akzentfarbe: `#c5a572` (Gold)

## Barrierefreiheit

- Skip-Link zu Beginn jeder Seite
- Semantische HTML-Elemente (`<header>`, `<nav>`, `<main>`, `<article>`)
- ARIA-Labels auf allen interaktiven Elementen
- Fokusindikatoren für Tastaturnavigation
- Live-Regions für dynamische Statusmeldungen

## Autoren

| Name | Matrikelnummer |
|------|----------------|
| Peter Lang | 8613964 |
| Janek Frank | 5607006 |
| Lukas Reiser | 5527863 |
| Tarek Kadu Turkmani | 1650970 |

DHBW Heidenheim – Studiengang Wirtschaftsinformatik
