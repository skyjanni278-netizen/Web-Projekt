# DHBW Web Design Projekt - Dokumentation

**Projektname:** Website für SV Ente Heidenheim  
**Studiengang:** Wirtschaftsinformatik  
**Institution:** DHBW Heidenheim  
**Datum:** November 2025  
**Technologien:** HTML5, CSS3  
**Repository:** https://github.com/Ruekan/Web-Projekt

---

## 1. Einleitung

### 1.1 Thema der Webseite

Die Website präsentiert den fiktiven Sportverein "SV Ente Heidenheim" mit Fokus auf Sportangebote, Vereinsnachrichten und Merchandising. Der Verein bietet verschiedene Sportarten (Fußball, Handball, Basketball sowie Tennis, Badminton und Tischtennis) und richtet sich an sportbegeisterte Menschen in der Region Heidenheim.

### 1.2 Zweck und Zielsetzung

Die Website verfolgt folgende Hauptziele:

- **Information:** Umfassende Darstellung der Sportangebote und Vereinsaktivitäten
- **Mitgliedergewinnung:** Ansprache potenzieller neuer Mitglieder durch attraktive Präsentation
- **Kommunikation:** Bereitstellung aktueller Vereinsnachrichten und Informationen
- **Kommerz:** Präsentation und Verkauf von Vereinsartikeln im integrierten Shop
- **Kontaktaufnahme:** Niederschwellige Kontaktmöglichkeiten für Interessenten

### 1.3 Kontext der Nutzung

Die Website wird in folgenden Situationen genutzt:

- **Informationssuche:** Interessenten recherchieren Sportangebote und Trainingszeiten
- **Mobile Nutzung:** Schneller Zugriff auf Kontaktdaten und Standortinformationen unterwegs
- **Vereinsleben:** Mitglieder informieren sich über News und Veranstaltungen
- **Shopping:** Fans und Mitglieder bestellen Vereinsartikel
- **Desktop-Nutzung:** Ausführliche Recherche zu Sportarten und Vereinsphilosophie

---

## 2. Ideal Customer Profile (ICP)

### 2.1 Zielgruppen

**Primäre Zielgruppe: Sportbegeisterte Erwachsene (18-45 Jahre)**
- Sportlich aktive Menschen aus Heidenheim und Umgebung
- Berufstätige mit Interesse an Freizeitsport
- Familien, die Sportangebote für sich und ihre Kinder suchen

**Sekundäre Zielgruppe: Jugendliche und Kinder (10-17 Jahre)**
- Schüler mit Interesse an Mannschaftssport
- Jugendliche, die soziale Kontakte durch Sport suchen
- Nachwuchstalente auf der Suche nach Vereinsanbindung

**Tertiäre Zielgruppe: Vereinsfans und Unterstützer**
- Bestehende Mitglieder und deren Familien
- Fans, die Vereinsartikel erwerben möchten
- Ehemalige Mitglieder mit emotionaler Bindung

### 2.2 Bedürfnisse der Zielgruppe

- **Schnelle Information:** Übersichtliche Darstellung verfügbarer Sportarten
- **Einfache Navigation:** Intuitive Menüführung, auch auf mobilen Geräten
- **Vertrauensbildung:** Professionelle Präsentation und authentische Inhalte
- **Kontaktmöglichkeiten:** Unkomplizierte Wege zur Kontaktaufnahme
- **Aktualität:** Regelmäßig aktualisierte News und Informationen
- **Visuelle Ansprache:** Hochwertige Bilder und ansprechendes Design

### 2.3 Pain Points

- **Unübersichtliche Websites:** Viele Vereinsseiten sind veraltet und schwer zu navigieren
- **Mobile Probleme:** Oft keine optimierte Darstellung für Smartphones
- **Fehlende Informationen:** Trainingszeiten und Kontaktdaten schwer auffindbar
- **Lange Ladezeiten:** Zu große Bilder und schlechte Performance
- **Umständliche Kontaktaufnahme:** Keine klaren Call-to-Actions
- **Veraltete Inhalte:** News-Bereiche werden nicht gepflegt

### 2.4 Optimierung der Webseite

**Responsive Design (320px - 1920px)**
- Mobile-First-Ansatz für optimale Smartphone-Nutzung
- Flexible Layouts passen sich allen Bildschirmgrößen an
- Touch-freundliche Buttons und Navigationselemente

**Klare Informationsarchitektur**
- Sportangebote prominent im Hauptmenü platziert
- Dropdown-Navigation für schnellen Zugriff auf Sportarten
- Kontaktseite mit allen relevanten Informationen auf einen Blick

**Visuelle Hierarchie**
- Hero-Banner auf Startseite für sofortige Aufmerksamkeit
- Karten-basiertes Layout für bessere Übersicht
- Konsistente Farbgebung für Wiedererkennung

**Performance-Optimierung**
- Optimierte Bildgrößen für schnelle Ladezeiten
- Konsolidiertes CSS für minimale HTTP-Requests
- Semantisches HTML für schnelles Rendering

**Barrierefreiheit**
- Ausreichende Farbkontraste (WCAG 2.2 Level A)
- Skip-to-Content Links für Screenreader
- Alt-Texte für alle relevanten Bilder
- Semantische HTML5-Struktur

## 3. Planung der Webseite

### 3.1 Recherche und Inspiration

**Analyse bestehender Vereinswebsites**
- Untersuchung moderner Sportverein-Websites (nationale und regionale Vereine)
- Identifikation von Best Practices im Webdesign für Non-Profit-Organisationen
- Analyse von E-Commerce-Integrationen im Vereinskontext

**Design-Trends**
- Card-basierte Layouts für bessere mobile Darstellung
- Hero-Sections mit überlagerten Call-to-Actions
- Minimalistisches Design mit Fokus auf Inhalte
- Sportliche, dynamische Bildsprache

**Technische Recherche**
- CSS Grid und Flexbox für moderne Layouts
- Mobile-First Responsive Design Patterns
- Barrierefreiheitsrichtlinien WCAG 2.2
- Browser-Kompatibilität ohne JavaScript

### 3.2 Inhaltsstruktur

Die Website umfasst 10 HTML-Seiten mit unterschiedlichen Layouts und Funktionen:

**Hauptseiten (Core Pages):**

1. **index.html - Startseite**
   - Hero-Banner mit Willkommensnachricht
   - Drei Content-Cards (Über uns, Veranstaltungen, Mitgliedschaft)
   - Call-to-Action: "Mitglied werden"
   - Layout: Hero + 3-Spalten-Grid

2. **Sportangebote.html - Sportarten-Übersicht**
   - Übersicht aller Sportangebote in Kartenform
   - 6 Sportkarten mit Bildern und Beschreibungen
   - Links zu Detailseiten für Hauptsportarten
   - Layout: Grid-Layout mit 2-3 Spalten (responsive)

3. **newspage.html - News-Übersicht**
   - 7 aktuelle Vereinsnachrichten als Karten
   - Vorschaubilder, Titel, Textauszüge
   - Autor und Datum pro Artikel
   - Layout: Grid-Layout mit Karten

4. **shop.html - Vereinsshop**
   - 8 Produkte in Produktgalerie
   - Filter nach Kategorie, Preis und Sortierung
   - Suchfunktion (UI-Element, keine Backend-Funktion)
   - Warenkorb-Sidebar (rein visuell)
   - Layout: Grid mit Filtern und Sidebar

5. **Kontakt.html - Kontaktseite**
   - Kontaktformular (mailto-Action)
   - Kontaktinformationen und Öffnungszeiten
   - Eingebettete OpenStreetMap-Karte
   - Layout: Zweispaltig (Formular + Infos)

**Detail-Seiten (Sportarten):**

6. **Fußball1.html**
7. **Handball1.html**
8. **Basketball1.html**
   - Hero-Bild mit Overlay-Text
   - 3 Textbereiche (Teamgeist, Kampfgeist, Taktik)
   - Call-to-Action: "Mitglied werden"
   - Layout: Hero + 3-Spalten-Flex-Layout

**Zusatzseiten:**

9. **newseins.html - News-Detailseite**
   - Vollständiger Artikel mit strukturiertem Text
   - Layout: Artikel-Layout mit schmaler Spalte

10. **leer.html - Platzhalter**
    - Minimale Seite für noch nicht fertiggestellte Inhalte
    - Layout: Einfaches Hero-Section

### 3.3 Navigationskonzept

**Primäre Navigation (Header)**
- Home
- News
- Shop
- Sportangebote (mit Dropdown-Menü)
  - Fußball
  - Handball
  - Basketball
- Kontakt

**Sekundäre Navigation (Footer)**
- Kontaktinformationen
- Schnelle Links (Impressum, Datenschutz, Satzung, Vorstand, Newsletter)
- Social Media Links
- Copyright-Hinweis

**Navigation-Features:**
- Sticky Header für permanente Erreichbarkeit
- Aktive Seite wird visuell hervorgehoben
- Dropdown-Menü für Unterseiten
- Mobile: Hamburger-Menü (rein CSS-basiert, kein JavaScript)

### 3.4 Wireframe-Konzepte

**Startseite (Desktop)**
```
+--------------------------------------------------+
|  Logo              Navigation         [Warenkorb]|
+--------------------------------------------------+
|                                                   |
|         Hero-Banner mit Overlay-Text              |
|              [Call-to-Action Button]              |
|                                                   |
+--------------------------------------------------+
|   [Card 1]        [Card 2]        [Card 3]       |
|   Über uns      Veranstaltungen  Mitgliedschaft  |
+--------------------------------------------------+
|  Footer: Kontakt | Links | Social Media          |
+--------------------------------------------------+
```

**Shop-Seite (Desktop)**
```
+--------------------------------------------------+
|  Header mit Navigation                            |
+--------------------------------------------------+
|  [Suchfeld]  [Kategorie] [Preis] [Sortierung]   |
+--------------------------------------------------+
| [Produkt] [Produkt] [Produkt] [Produkt]         |
| [Produkt] [Produkt] [Produkt] [Produkt]         |
+--------------------------------------------------+
|  Footer                                           |
+--------------------------------------------------+
```

**Mobile Wireframe (320px)**
```
+----------------------+
| Logo    [☰ Menü]    |
+----------------------+
|                      |
|    Hero-Banner       |
|    [CTA-Button]      |
|                      |
+----------------------+
|     [Card 1]         |
+----------------------+
|     [Card 2]         |
+----------------------+
|     [Card 3]         |
+----------------------+
|     Footer           |
+----------------------+
```

### 3.5 Mobile-First-Überlegungen

**Design-Entscheidungen:**
- Inhalte werden vertikal gestapelt bei kleinen Bildschirmen
- Touch-freundliche Button-Größen (mindestens 44x44px)
- Reduzierte Textmengen für bessere Lesbarkeit auf kleinen Displays
- Bilder werden skaliert, aber behalten Aspect Ratio
- Navigation wird zu Hamburger-Menü (CSS-only)

**Breakpoints-Strategie:**
- 320px: Mobile Phones (Basis)
- 768px: Tablets (2-Spalten-Layout)
- 1024px: Desktop (3-Spalten-Layout)
- 1920px: Large Desktop (maximale Breite)

**Mobile-Optimierungen:**
- Große, lesbare Schriftgrößen (mindestens 16px Basis)
- Ausreichend Padding und Margin für Touch-Targets
- Vereinfachte Navigation auf kleinen Screens
- Progressive Enhancement: Mobile zuerst, dann Desktop-Features

---

## 4. Technische Umsetzung

### 4.1 HTML-Struktur

**Semantische HTML5-Elemente**

Die Website nutzt konsequent semantische HTML5-Tags für bessere Struktur, SEO und Barrierefreiheit:

```html
<header>     - Kopfbereich mit Logo und Navigation
<nav>        - Navigationselemente
<main>       - Hauptinhalt der Seite
<section>    - Thematische Abschnitte
<article>    - Eigenständige Inhalte (News-Artikel)
<aside>      - Ergänzende Inhalte (DHBW-Banner)
<footer>     - Fußbereich mit Kontakt und Links
```

**Beispiel-Struktur (index.html):**
```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SV Ente Heidenheim - Startseite</title>
    <link rel="stylesheet" href="main-consolidated.css">
</head>
<body>
    <a href="#main-content" class="skip-link">Zum Hauptinhalt springen</a>
    
    <aside class="dhbw-banner">DHBW Projekt-Banner</aside>
    
    <header>
        <div class="header-container">
            <a href="index.html" class="logo">Logo</a>
            <nav>Navigation</nav>
        </div>
    </header>
    
    <main id="main-content">
        <section class="hero-banner">Hero Content</section>
        <div class="container">
            <div class="content-grid">Cards</div>
        </div>
    </main>
    
    <footer>Footer Content</footer>
</body>
</html>
```

**Barrierefreiheits-Features:**
- `role` und `aria-label` Attribute für Screenreader
- Skip-to-Content Link am Seitenanfang
- Aussagekräftige Alt-Texte bei Bildern
- Logische Heading-Hierarchie (h1 → h2 → h3)
- `lang="de"` Attribut für Sprachidentifikation

### 4.2 CSS-System

**Dateistruktur:**
- `main-consolidated.css` - Zentrale Stylesheet-Datei für alle Seiten
- Konsolidierung reduziert HTTP-Requests
- Logische Gruppierung nach Komponenten

**Farb-System:**
```css
Primärfarben:
- Header/Footer: Dunkles Grau (#333)
- Hintergrund: Weiß (#fff), Hellgrau (#f4f4f4)
- Akzentfarbe: Vereinsfarbe (für Buttons und Highlights)
- Text: Dunkelgrau (#333), Hellgrau für Footer (#ddd)

Kontraste:
- Text auf Weiß: 4.5:1 (WCAG AA konform)
- Text auf dunklem Hintergrund: 7:1 (WCAG AAA konform)
```

**Typografie:**
```css
Schriftarten: System-Font-Stack für beste Performance
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", 
             Roboto, "Helvetica Neue", Arial, sans-serif;

Größen:
- Basis: 16px (1rem)
- h1: 2.5rem (40px)
- h2: 2rem (32px)
- h3: 1.5rem (24px)
- Body: 1rem (16px)

Zeilenhöhe: 1.6 für bessere Lesbarkeit
```

**Layout-System:**

*CSS Grid für Hauptstrukturen:*
```css
.content-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}
```

*Flexbox für Komponenten:*
```css
.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

**Responsive Breakpoints:**
```css
/* Mobile First - Basis 320px */
/* Tablet */
@media (min-width: 768px) { ... }

/* Desktop */
@media (min-width: 1024px) { ... }

/* Large Desktop */
@media (min-width: 1440px) { ... }
```

### 4.3 Responsive Konzept

**Mobile-First-Ansatz:**
1. Basis-Styles für mobile Geräte (320px+)
2. Progressive Erweiterung für größere Screens
3. Flexible Bilder: `max-width: 100%; height: auto;`
4. Flexible Schriftgrößen mit `rem` statt `px`

**Grid-Anpassungen:**
- Mobile: 1 Spalte
- Tablet: 2 Spalten
- Desktop: 3 Spalten
- Shop: 2-4 Spalten je nach Viewport

**Navigation:**
- Mobile: Vereinfachte Darstellung
- Desktop: Vollständige Horizontal-Navigation mit Dropdown

**Bilder:**
- Responsive Images ohne JavaScript
- `max-width: 100%` für automatische Skalierung
- Aspect-Ratio beibehalten durch CSS
- Optimierte Bildgrößen für schnelles Laden

### 4.4 Barrierefreiheit (WCAG 2.2 Level A)

**Farbkontraste:**
- Text auf Hintergrund: Mindestens 4.5:1
- Große Texte (>18pt): Mindestens 3:1
- Interaktive Elemente: Deutlich erkennbar

**Keyboard-Navigation:**
- Alle interaktiven Elemente mit Tab erreichbar
- Sichtbarer Focus-State für alle fokussierbaren Elemente
- Logische Tab-Reihenfolge

**Screenreader-Unterstützung:**
- Skip-to-Content Link: `<a href="#main-content" class="skip-link">`
- ARIA-Labels für Icons: `aria-label="Projekt-Information"`
- Alt-Texte: Beschreibende Texte für alle Bilder
- Versteckte Überschriften: `.visually-hidden` Klasse

**Semantische Struktur:**
- Korrekte Heading-Hierarchie (h1 nur einmal pro Seite)
- Landmarks: header, nav, main, footer
- Listen für Navigationselemente
- Formular-Labels korrekt verknüpft

**Visuell versteckte Elemente:**
```css
.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
}
```

### 4.5 Browserkompatibilität

**Getestete Browser-Engines:**

1. **Chromium-basiert (Blink)**
   - Google Chrome (neueste Version)
   - Microsoft Edge (neueste Version)
   - Brave Browser

2. **Gecko (Firefox)**
   - Mozilla Firefox (neueste Version)
   - Firefox Developer Edition

**Kompatible CSS-Features:**
- CSS Grid (seit 2017 in allen modernen Browsern)
- Flexbox (seit 2015 vollständig unterstützt)
- CSS Custom Properties (2016+)
- Media Queries (seit IE9)

**Fallback-Strategien:**
- System-Font-Stack ohne Webfonts
- Progressive Enhancement statt Graceful Degradation
- Keine experimentellen CSS-Features
- Kein JavaScript = keine JavaScript-Kompatibilitätsprobleme

### 4.6 Ordnerstruktur

```
web-seitenprojekt/
├── index.html
├── Sportangebote.html
├── shop.html
├── newspage.html
├── newseins.html
├── Kontakt.html
├── Fußball1.html
├── Handball1.html
├── Basketball1.html
├── leer.html
├── main-consolidated.css
├── README.md
│
├── Bilder/
│   ├── SvEnteHeidenheimLogo.png
│   ├── Fuball1.png
│   ├── Basketball.png
│   ├── Handball.png
│   ├── Tennis.png
│   ├── Badminton.png
│   ├── Tischtennis.png
│   ├── vereinsT-shirt.png
│   ├── vereinsJacke.png
│   ├── vereinsSchal.png
│   ├── vereinsCap.png
│   ├── vereinsRucksack.png
│   ├── vereinsSporttasche.png
│   ├── vereinsTrinkflasche.png
│   ├── vereinsHandtuch.png
│   ├── Jugendbild.png
│   ├── Kapitan.png
│   ├── Fest.png
│   ├── Trainingszeiten.png
│   ├── Torwart.png
│   └── Trainingslager.png
│
├── backup/
│   ├── main-backup.css
│   ├── main.css
│   ├── shop.css
│   ├── Sportangebote.css
│   ├── style.css
│   ├── untersport.css
│   └── README.md
│
└── dokumentation/
    ├── GIT-ANLEITUNG-PROJEKT.md
    ├── README.md
    ├── Shop-Dokumentation.md
    └── Seiten-Dokumentation.md (diese Datei)
```

**Struktur-Logik:**
- Alle HTML-Dateien im Root-Verzeichnis für einfache Verlinkung
- Zentrale CSS-Datei im Root
- Bilder-Ordner für alle Assets
- Backup-Ordner für Entwicklungsversionen
- Dokumentation getrennt in eigenem Ordner

### 4.7 Besonderheiten der Implementierung

**1. Konsolidierte CSS-Datei**
- Alle Styles in einer Datei (`main-consolidated.css`)
- Reduzierung von HTTP-Requests
- Verbesserte Performance durch Single-File-Loading
- Backup-Versionen im `backup/` Ordner erhalten

**2. OpenStreetMap statt Google Maps**
- Lizenzfreie Alternative für Kartendarstellung
- Eingebettet via iFrame auf Kontaktseite
- Keine API-Keys oder JavaScript notwendig

**3. Shop ohne Backend**
- Rein visuelle Darstellung von E-Commerce-Features
- Filter und Sortierung als UI-Elemente implementiert
- Warenkorb-Sidebar zeigt Konzept, keine Funktionalität
- Produktkategorien über `data-category` Attribute vorbereitet

**4. DHBW-Banner**
- Prominent platzierter Hinweis auf Projekthintergrund
- Als `<aside>` Element für semantische Trennung
- Link zur DHBW Heidenheim Website

**5. Wiederverwendbare Komponenten**
- Content-Cards mit einheitlichem Design
- Product-Cards im Shop
- News-Cards mit Meta-Informationen
- Konsistente Button-Styles
- Einheitliches Formular-Design

**6. Bildoptimierung**
- PNG-Format für Logo (Transparenz)
- PNG/JPG für Content-Bilder
- Dateinamen ohne Sonderzeichen (außer Umlaute)
- Sinnvolle Dateinamen für SEO

---

## 5. Entwicklungsprozess

### 5.1 Vorgehensweise Schritt für Schritt

**Phase 1: Konzeption (Woche 1)**
1. Anforderungsanalyse und Zielgruppendefinition
2. Sitemap-Erstellung (10 Seiten)
3. Wireframes für Haupt-Layouts skizziert
4. Farbschema und Typografie festgelegt
5. Ordnerstruktur aufgesetzt

**Phase 2: HTML-Grundgerüst (Woche 1-2)**
1. Erstellung der Startseite mit semantischem HTML
2. Header und Footer als wiederverwendbare Strukturen
3. Navigation mit Dropdown-Menü implementiert
4. Alle 10 HTML-Seiten mit Basis-Struktur erstellt
5. Inhalte eingefügt (Texte, Bilder, Links)

**Phase 3: CSS-Styling (Woche 2-3)**
1. CSS Reset und Basis-Styles definiert
2. Layout-System mit Grid und Flexbox implementiert
3. Komponenten gestylt (Cards, Buttons, Forms)
4. Shop-Seite mit Produktgalerie gestaltet
5. Footer und Header finalisiert

**Phase 4: Responsive Design (Woche 3)**
1. Mobile-First Styles als Basis
2. Breakpoints für Tablet (768px) definiert
3. Desktop-Layout (1024px+) optimiert
4. Navigation für mobile Geräte angepasst
5. Tests auf verschiedenen Bildschirmgrößen

**Phase 5: Barrierefreiheit (Woche 3-4)**
1. Alt-Texte für alle Bilder hinzugefügt
2. ARIA-Labels und Roles implementiert
3. Skip-Links eingefügt
4. Kontraste überprüft und angepasst
5. Keyboard-Navigation getestet

**Phase 6: Content und Verfeinerung (Woche 4)**
1. Realistische Inhalte erstellt und eingefügt
2. News-Artikel geschrieben
3. Produktbeschreibungen im Shop verfasst
4. Bilder optimiert und eingefügt
5. Konsistenzprüfung aller Seiten

**Phase 7: Testing und Optimierung (Woche 4-5)**
1. Browserkompatibilität getestet (Chrome, Firefox)
2. Responsive Tests auf realen Geräten
3. Performance-Optimierungen durchgeführt
4. W3C HTML/CSS Validierung
5. Barrierefreiheit mit WAVE Tool geprüft

**Phase 8: Dokumentation und Deployment (Woche 5)**
1. README-Dateien erstellt
2. Code-Kommentare ergänzt
3. Projektdokumentation verfasst
4. Git-Repository finalisiert
5. Vorbereitung für DHBW-Server Upload

### 5.2 Wiederverwendbare Komponenten

**Content Cards**
```css
.content-card {
    background: white;
    border-radius: 8px;
    padding: 2rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}
```
Verwendet auf: Startseite, News-Übersicht, Sportangebote

**Buttons**
```css
.btn {
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    text-decoration: none;
    display: inline-block;
    transition: background-color 0.3s ease;
}
```
Verwendet auf: Alle Seiten für Call-to-Actions

**Product Cards**
```css
.product-card {
    background: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    transition: box-shadow 0.3s ease;
}
```
Verwendet auf: Shop-Seite für Produktdarstellung

**Hero Sections**
```css
.hero-banner {
    background-size: cover;
    background-position: center;
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
}
```
Verwendet auf: Startseite, Sportarten-Detailseiten

### 5.3 Nutzung von KI-Werkzeugen

**Eingesetzte Tools:**
- **GitHub Copilot:** Code-Vervollständigung und CSS-Snippets
- **ChatGPT/Claude:** Texterstellung für News-Artikel und Produktbeschreibungen
- **KI-Bildgenerierung:** Konzeptuelle Unterstützung bei Bildauswahl

**Manuelle Prüfung und Anpassung:**

1. **HTML-Code:**
   - KI-generierte Strukturen auf semantische Korrektheit geprüft
   - Anpassung an konsistente Namenskonventionen
   - Validierung mit W3C Validator

2. **CSS-Code:**
   - Überprüfung auf Browser-Kompatibilität
   - Optimierung für Performance (Vermeidung redundanter Regeln)
   - Anpassung an einheitliches Design-System

3. **Inhalte:**
   - KI-generierte Texte auf Plausibilität geprüft
   - Anpassung an Zielgruppe und Tonalität
   - Rechtschreibung und Grammatik korrigiert
   - Realistische Angaben (Adressen, Telefonnummern) eingefügt

4. **Barrierefreiheit:**
   - KI-Vorschläge für Alt-Texte überarbeitet
   - ARIA-Labels sinnvoll ergänzt
   - Semantik manuell optimiert

**Vorteile der KI-Nutzung:**
- Beschleunigung repetitiver Aufgaben
- Inspiration für Layoutvarianten
- Schnelle Prototypen für Komponenten
- Effiziente Content-Erstellung

**Grenzen und manuelle Eingriffe:**
- KI kennt keine DHBW-spezifischen Anforderungen
- Barrierefreiheit muss manuell validiert werden
- Design-Entscheidungen bleiben beim Entwickler
- Code-Qualität erfordert menschliche Prüfung

### 5.4 Entwicklungstools

**Code-Editor:**
- Visual Studio Code mit Extensions
- Live Server für lokale Vorschau
- HTML/CSS Linter für Code-Qualität

**Versionskontrolle:**
- Git für Versions-Management
- GitHub als Remote-Repository
- Branches für verschiedene Features

**Testing:**
- Chrome DevTools für Responsive Testing
- Firefox Developer Tools für Grid/Flexbox Debugging
- WAVE Browser Extension für Accessibility Check
- W3C Validators für HTML/CSS Validierung

**Design/Prototyping:**
- Figma/Sketch für Wireframes (konzeptuell)
- Browser als primäres Design-Tool (Design im Browser)

### 5.5 Performance-Optimierungen

**Bildoptimierung:**
- Bilder auf maximale Breite von 1920px beschränkt
- Kompression ohne sichtbaren Qualitätsverlust
- Verwendung von PNG nur bei Bedarf (Transparenz)
- JPG für Fotos, PNG für Grafiken und Logo

**CSS-Optimierung:**
- Konsolidierung aller Styles in eine Datei
- Vermeidung von `@import` (blockiert Rendering)
- Effiziente Selektoren (keine zu tiefen Verschachtelungen)
- Entfernung ungenutzter Styles aus Backup-Versionen

**HTML-Optimierung:**
- Minimale DOM-Tiefe für schnelleres Rendering
- Semantische Tags statt generische `<div>`
- Keine unnötigen Wrapper-Elemente
- Inline-Styles vermieden

**Ladezeit-Verbesserungen:**
- CSS im `<head>` für sofortiges Styling
- Keine externen Font-Imports (System-Fonts)
- Keine JavaScript-Dateien = keine Script-Ladezeit
- Optimierte Dateipfade (alle im Root oder /Bilder/)

**Messbare Ergebnisse:**
- Geschätzte Ladezeit: < 2 Sekunden (bei durchschnittlicher Verbindung)
- Minimale HTTP-Requests: HTML + CSS + Bilder
- Dateigröße CSS: ~50KB (unkomprimiert)
- Dateigröße HTML: ~3-8KB pro Seite

---

## 6. Mögliche zukünftige Funktionen

Die aktuelle Website ist als statische HTML/CSS-Lösung konzipiert. Folgende Features könnten in zukünftigen Versionen mit JavaScript und Backend-Technologien implementiert werden:

### 6.1 Shop-Funktionalitäten

**Interaktiver Warenkorb**
- Produkte zum Warenkorb hinzufügen (JavaScript)
- Artikelanzahl anpassen
- Gesamtpreis berechnen
- Persistenz über LocalStorage oder Backend-Anbindung
- Checkout-Prozess mit Zahlungsintegration (Stripe, PayPal)

**Produktfilter**
- Dynamische Filterung nach Kategorie, Preis, Größe
- Echtzeit-Suche mit JavaScript
- Sortierung nach Name, Preis, Beliebtheit
- Farbvarianten auswählen

**Produktdetails**
- Eigene Detailseiten pro Produkt
- Bildergalerie mit Zoom-Funktion
- Größentabellen
- Kundenbewertungen und Rezensionen
- Verfügbarkeitsanzeige

### 6.2 Benutzerverwaltung

**User Accounts**
- Registrierung und Login-System
- Benutzerprofile mit persönlichen Daten
- Passwort-Reset-Funktion
- Bestellhistorie
- Gespeicherte Adressen

**Mitgliederverwaltung**
- Online-Mitgliedsantrag mit Formular-Backend
- Mitgliedsbereich mit geschütztem Content
- Trainingsplan-Download
- Teilnahmelisten für Events
- Digitale Mitgliedskarte

### 6.3 Erweiterte News-Features

**Content Management System**
- Admin-Panel für News-Verwaltung
- WYSIWYG-Editor für Artikel
- Kategorisierung und Tags
- Kommentarfunktion
- Newsletter-Integration

**Interaktive Elemente**
- Bildergalerien mit Lightbox
- Embedded Videos
- Social Media Share-Buttons
- Lesefortschritt-Anzeige
- Related Posts / Empfehlungen

### 6.4 Erweiterte Suchfunktionen

**Site-wide Search**
- Volltextsuche über alle Seiten
- Autocomplete-Vorschläge
- Filter nach Content-Typ (News, Produkte, Seiten)
- Suchergebnis-Seite mit Relevanz-Sortierung

**Sportarten-Finder**
- Quiz: "Welche Sportart passt zu mir?"
- Filterung nach Alter, Fitnesslevel, Interesse
- Interaktive Sportarten-Übersicht

### 6.5 Dark Mode

**Theme-Switcher**
- Toggle-Button für Light/Dark Mode
- Präferenz im LocalStorage speichern
- System-Präferenz respektieren (`prefers-color-scheme`)
- Sanfte Übergänge zwischen Themes

**Design-Anpassungen**
- Invertierte Farbpalette für Dark Mode
- Angepasste Kontraste für Lesbarkeit
- Icons und Bilder für dunklen Hintergrund optimiert

### 6.6 Formulare mit Backend

**Kontaktformular**
- Server-seitige Validierung
- E-Mail-Versand über SMTP
- Spam-Schutz (Honeypot, reCAPTCHA)
- Bestätigungsnachricht an Absender
- Admin-Benachrichtigung bei neuen Anfragen

**Anmeldeformulare**
- Online-Anmeldung für Kurse und Events
- Wartelisten-Management
- Automatische Bestätigungs-E-Mails
- Kalender-Integration (iCal)

### 6.7 Kalender und Events

**Veranstaltungskalender**
- Interaktiver Kalender (JavaScript)
- Filterung nach Sportart und Zielgruppe
- Anmeldung zu Events
- Erinnerungen per E-Mail
- Export zu Google Calendar / Outlook

**Trainingsplan**
- Wochenansicht aller Trainingszeiten
- Filterable nach Altersgruppe
- PDF-Export für Offline-Nutzung

### 6.8 Responsive Enhancements

**Progressive Web App (PWA)**
- Offline-Funktionalität
- App-Installation auf Mobilgeräten
- Push-Benachrichtigungen für News
- App-Icon auf Homescreen

**Performance-Verbesserungen**
- Lazy Loading für Bilder
- Code Splitting für CSS und JavaScript
- Service Worker für Caching
- Image Optimization (WebP, AVIF)

### 6.9 Mehrsprachigkeit

**Internationalisierung**
- Sprachumschaltung (Deutsch, Englisch)
- Übersetzungen für alle Inhalte
- Sprachspezifische URLs
- Automatische Erkennung der Browser-Sprache

### 6.10 Social Media Integration

**Live-Feeds**
- Instagram-Feed auf Startseite
- Twitter/X-Widget für Vereinsnews
- Facebook-Events einbetten
- YouTube-Videos der Mannschaft

**Sharing-Funktionen**
- Share-Buttons für Social Media
- Open Graph Meta-Tags für Preview
- Twitter Cards für optimierte Vorschau

### 6.11 Datenanalyse

**Analytics**
- Besucherstatistiken (Google Analytics / Matomo)
- Heatmaps für User-Behavior
- Conversion-Tracking im Shop
- A/B-Testing für Optimierung

---

## 7. Hosting und Deployment

### 7.1 DHBW-Server

**Geplantes Hosting:**
Die Website ist für das Hosting auf einem DHBW-Server vorgesehen. Dies beinhaltet:

- Upload aller HTML, CSS und Bild-Dateien
- Beibehaltung der Ordnerstruktur (`/Bilder/`, Root-HTML-Dateien)
- Anpassung eventueller absoluter Pfade zu relativen Pfaden
- Test aller Links nach dem Upload
- Überprüfung der Dateirechte (readable für alle Dateien)

**Technische Anforderungen:**
- Webserver: Apache oder Nginx
- Keine serverseitigen Scriptsprachen erforderlich (PHP, Python, etc.)
- Keine Datenbank notwendig
- HTTPS-Unterstützung empfohlen für sichere Übertragung

**Upload-Methoden:**
- FTP/SFTP via FileZilla oder ähnlichen Clients
- Git-basiertes Deployment (falls verfügbar)
- Web-basiertes File-Management-System

### 7.2 Alternative Hosting-Optionen

Falls DHBW-Server nicht verfügbar oder als zusätzliche Deployment-Option:

**GitHub Pages:**
- Kostenloses Hosting für statische Websites
- Automatisches Deployment via Git Push
- URL: `https://ruekan.github.io/Web-Projekt/`
- HTTPS standardmäßig aktiviert

**Netlify/Vercel:**
- Modernes Hosting mit CDN
- Automatisches Build und Deployment
- Branch-Previews für Testing
- Kostenlose Tier für kleine Projekte

### 7.3 Lizenzierung und Rechtliches

**Bildmaterial:**
- Alle Bilder sind lizenzfrei oder selbst erstellt
- Kommerzielle Nutzung im Projektkontext erlaubt
- Keine Urheberrechtsverletzungen

**Code:**
- Eigenentwicklung unter Nutzung von KI-Tools
- Open Source (MIT License über GitHub)
- Keine proprietären Bibliotheken verwendet

**Datenschutz:**
- Keine Cookies gesetzt (außer bei zukünftiger Implementierung)
- Kein Tracking ohne Einwilligung
- DSGVO-Konformität vorbereitet (Impressum, Datenschutz-Seiten als Platzhalter)

---

## 8. Fazit

### 8.1 Was gut lief

**Technische Umsetzung:**
- Konsequente Anwendung semantischer HTML5-Elemente
- Saubere Trennung von Struktur (HTML) und Design (CSS)
- Erfolgreiche Umsetzung des Mobile-First-Ansatzes
- Barrierefreiheit auf WCAG 2.2 Level A gewährleistet
- Browserkompatibilität ohne JavaScript erreicht

**Design und Usability:**
- Konsistentes, professionelles Design über alle Seiten
- Intuitive Navigation mit klarer Informationsarchitektur
- Responsive Layouts funktionieren auf allen Bildschirmgrößen
- Wiederverwendbare Komponenten erleichtern Wartbarkeit

**Projektmanagement:**
- Strukturierte Vorgehensweise von Konzeption bis Fertigstellung
- Git-Versionskontrolle für nachvollziehbare Entwicklung
- Umfassende Dokumentation für Nachvollziehbarkeit
- Einhaltung aller DHBW-Vorgaben

**Inhalt:**
- Realistische Texte und Produktbeschreibungen
- Mindestens 8 Seiten mit unterschiedlichen Layouts umgesetzt
- Thematisch konsistente Inhalte für Sportverein-Kontext

### 8.2 Herausforderungen

**Responsive Design ohne JavaScript:**
- Dropdown-Navigation rein mit CSS umzusetzen erforderte kreative Lösungen
- Mobile Navigation ohne Hamburger-Menü-Toggle limitiert Funktionalität
- Warenkorb und Filter im Shop sind nur visuell, nicht funktional

**Barrierefreiheit:**
- Balance zwischen Design-Wünschen und Accessibility-Anforderungen
- Ausreichende Farbkontraste bei gleichzeitig ansprechendem Design
- Semantische Struktur erfordert sorgfältige HTML-Planung

**Content-Erstellung:**
- Realistische Inhalte für 10 Seiten zeitaufwändig
- Konsistente Tonalität über alle Texte hinweg
- Passende lizenzfreie Bilder finden

**CSS-Organisation:**
- Konsolidierung mehrerer CSS-Dateien erforderte Umstrukturierung
- Vermeidung von Redundanzen und Überschreibungen
- Wartbarkeit bei wachsender Dateigröße

**Testing:**
- Manuelle Tests auf verschiedenen Geräten zeitintensiv
- Keine automatisierten Tests möglich (kein JavaScript)
- Browserkompatibilität ohne Polyfills sicherstellen

### 8.3 Learnings

**Technische Erkenntnisse:**
- **Mobile-First spart Zeit:** Erweiterung für Desktop ist einfacher als nachträgliche Mobile-Optimierung
- **Semantisches HTML zahlt sich aus:** Bessere Struktur, SEO und Accessibility
- **CSS Grid und Flexbox sind mächtig:** Moderne Layouts ohne JavaScript möglich
- **Konsolidierung verbessert Performance:** Eine CSS-Datei lädt schneller als mehrere

**Design-Prinzipien:**
- **Konsistenz ist wichtig:** Wiederverwendbare Komponenten sparen Zeit und verbessern UX
- **Weniger ist mehr:** Klares, reduziertes Design ist oft besser als überladene Seiten
- **Barrierefreiheit von Anfang an:** Nachträgliche Implementierung ist aufwändiger

**Projektmanagement:**
- **Frühe Planung lohnt sich:** Wireframes und Sitemap verhindern spätere Umbauten
- **Iterative Entwicklung:** Schrittweise Verfeinerung statt perfektionistischer Erstansatz
- **Dokumentation parallel:** Fortlaufende Dokumentation ist einfacher als nachträgliche

**KI-Nutzung:**
- **KI ist Werkzeug, kein Ersatz:** Menschliche Prüfung und Anpassung unerlässlich
- **Effizienzgewinn bei Routine:** Repetitive Aufgaben können beschleunigt werden
- **Kreativität bleibt menschlich:** Design-Entscheidungen erfordern menschliches Urteilsvermögen

**Barrierefreiheit:**
- **WCAG ist mehr als Checkliste:** Verständnis der Prinzipien wichtiger als Compliance
- **Testen mit echten Tools:** WAVE und Screenreader zeigen reale Probleme
- **Accessibility verbessert UX für alle:** Nicht nur für Menschen mit Behinderungen

### 8.4 Ausblick

**Nächste Schritte:**
1. Upload auf DHBW-Server und finaler Test
2. Feedback von Nutzern einholen
3. Kleinere Anpassungen basierend auf Rückmeldungen
4. Langfristig: JavaScript-Integration für interaktive Features

**Potenzial für Weiterentwicklung:**
Die Website bietet eine solide Grundlage für zukünftige Erweiterungen. Die saubere HTML-Struktur und modulare CSS-Organisation ermöglichen einfache Integration von:
- Backend-Systemen für Shop und Formulare
- JavaScript für Enhanced User Experience
- Content Management System für einfachere Inhaltspflege
- Progressive Web App Features

**Lessons für zukünftige Projekte:**
- Von Anfang an mit realem Content arbeiten (kein Lorem Ipsum)
- Mehr Zeit für Testing einplanen
- Frühzeitig mit echten Usern testen
- Accessibility Tools regelmäßig während Entwicklung nutzen
- Git-Commits kleiner und häufiger machen

---

## 9. Anhang

### 9.1 Übersicht aller Seiten

| Seite | URL | Layout-Typ | Hauptzweck |
|-------|-----|------------|------------|
| Startseite | index.html | Hero + 3-Grid | Willkommen, Übersicht |
| Sportangebote | Sportangebote.html | 6er-Grid | Sportarten-Übersicht |
| Fußball | Fußball1.html | Hero + 3-Flex | Sportart-Detail |
| Handball | Handball1.html | Hero + 3-Flex | Sportart-Detail |
| Basketball | Basketball1.html | Hero + 3-Flex | Sportart-Detail |
| Shop | shop.html | Grid + Sidebar | E-Commerce |
| News | newspage.html | Grid-Karten | News-Übersicht |
| News-Detail | newseins.html | Artikel-Layout | Vollständiger Artikel |
| Kontakt | Kontakt.html | 2-Spalten | Kontaktformular + Info |
| Platzhalter | leer.html | Minimal | Placeholder |

### 9.2 Technische Spezifikationen

**Browser-Support:**
- Chrome/Edge (Chromium): Version 90+
- Firefox: Version 88+
- Safari: Version 14+
- Opera: Version 76+

**Viewport-Unterstützung:**
- Minimum: 320px (iPhone SE)
- Maximum: 1920px (Full HD)
- Optimale Darstellung: 375px - 1440px

**Performance-Metriken (geschätzt):**
- First Contentful Paint: < 1.0s
- Largest Contentful Paint: < 2.0s
- Total Blocking Time: 0ms (kein JavaScript)
- Cumulative Layout Shift: < 0.1

**Accessibility-Compliance:**
- WCAG 2.2 Level A: Erfüllt
- Level AA Kontraste: Weitgehend erfüllt
- Screenreader: NVDA/JAWS kompatibel
- Keyboard-Navigation: Vollständig unterstützt

### 9.3 Verwendete Ressourcen

**Entwicklungstools:**
- Visual Studio Code
- Git und GitHub
- Chrome DevTools
- Firefox Developer Tools
- WAVE Accessibility Tool

**Design-Referenzen:**
- Moderne Sportverein-Websites (Recherche)
- Material Design Principles (Inspiration)
- CSS Grid/Flexbox Best Practices
- WCAG 2.2 Guidelines

**KI-Tools:**
- GitHub Copilot (Code-Completion)
- ChatGPT/Claude (Content-Erstellung)
- KI-gestützte Bildbearbeitung (konzeptuell)

**Lizenzen:**
- Bildmaterial: Lizenzfrei (Unsplash, Pexels) oder selbst erstellt
- Code: MIT License (Open Source via GitHub)
- Fonts: System-Fonts (keine Lizenz erforderlich)

### 9.4 Kontakt und Repository

**GitHub Repository:**
- URL: https://github.com/Ruekan/Web-Projekt
- Branch: main
- Letztes Update: November 2025

**Projektkontext:**
- Institution: DHBW Heidenheim
- Studiengang: Wirtschaftsinformatik
- Semester: WiSe 2025/26
- Modul: Web Design

**Lizenz:**
MIT License - Free for educational use

---

**Ende der Dokumentation**

*Diese Dokumentation wurde erstellt am 26. November 2025 im Rahmen des Web-Design-Moduls an der DHBW Heidenheim.*

---

## 1. index.html - Startseite (Archiv - alte Detaildokumentation)

### Zweck
- Haupteinstiegsseite der Website
- Willkommensseite für Besucher
- Übersicht über Verein und Angebote

### Hauptelemente
- **Hero Banner**: Großes Willkommensbild mit Overlay
  - Überschrift: "Willkommen beim SV Ente Heidenheim"
  - Call-to-Action Button: "Mitglied werden"
- **Content Grid**: 3 Karten mit Informationen
  - Über unseren Verein
  - Kommende Veranstaltungen
  - Mitgliedschaft

### Navigation
- Aktive Seite: Home (markiert mit class="active")
- Links zu allen Hauptbereichen

### Besonderheiten
- DHBW-Banner mit Link zur Hochschule
- Skip-to-Content Link für Barrierefreiheit
- Responsive Design

---

## 2. Sportangebote.html - Sportarten-Übersicht

### Zweck
- Übersicht aller Sportangebote des Vereins
- Einstieg zu detaillierten Sportarten-Seiten

### Hauptelemente
- **Headline**: "Unsere Sportangebote"
- **Karten-Container**: 6 Sport-Karten
  1. Fußball (mit Link zu Fußball1.html)
  2. Basketball (mit Link zu Basketball1.html)
  3. Handball (mit Link zu Handball1.html)
  4. Tennis (Platzhalter-Link)
  5. Badminton (Platzhalter-Link)
  6. Tischtennis (Platzhalter-Link)

### Struktur jeder Karte
- Sportbild
- Sportart-Name als Überschrift
- Motivierender Slogan
- Verlinkung zur Detailseite

### Navigation
- Aktive Seite: Sportangebote
- Dropdown-Menü mit Fußball, Handball, Basketball

---

## 3. Fußball1.html - Fußball-Detailseite

### Zweck
- Detaillierte Informationen zur Fußballabteilung
- Mitgliedergewinnung

### Hauptelemente
- **Bildbereich**: Hero-Section mit Fußballbild
  - Overlay-Text: "Fußball"
  - Button: "Zur Mitgliedschaft" (Anchor-Link)
- **Flex-Container**: 3 Textfelder
  1. Teamgeist und Zusammenhalt
  2. Kampfgeist und Leidenschaft
  3. Taktische Intelligenz und Anpassungsfähigkeit
- **Zentrierter Link**: "Mitglied werden" Button

### Navigation
- Aktive Seite: Fußball (im Dropdown)
- Dropdown-Menü unter Sportangebote

### Inhalte
- Ausführliche Beschreibungen der Team-Eigenschaften
- Emotionale, motivierende Texte
- Fokus auf Gemeinschaft und Leistung

---

## 4. Handball1.html - Handball-Detailseite

### Zweck
- Detaillierte Informationen zur Handballabteilung
- Mitgliedergewinnung

### Hauptelemente
- **Bildbereich**: Hero-Section mit Handballbild
  - Overlay-Text: "Handball"
  - Button: "Zur Mitgliedschaft"
- **Flex-Container**: 3 Textfelder (identische Struktur wie Fußball)
  1. Teamgeist und Zusammenhalt
  2. Kampfgeist und Leidenschaft
  3. Taktische Intelligenz und Anpassungsfähigkeit
- **Zentrierter Link**: "Mitglied werden" Button

### Navigation
- Aktive Seite: Handball (im Dropdown)

### Besonderheiten
- Gleiche Text-Struktur wie Fußball-Seite
- Sportspezifisches Hero-Bild

---

## 5. Basketball1.html - Basketball-Detailseite

### Zweck
- Detaillierte Informationen zur Basketballabteilung
- Mitgliedergewinnung

### Hauptelemente
- **Bildbereich**: Hero-Section mit Basketballbild
  - Overlay-Text: "Basketball"
  - Button: "Zur Mitgliedschaft"
- **Flex-Container**: 3 Textfelder (identische Struktur)
  1. Teamgeist und Zusammenhalt
  2. Kampfgeist und Leidenschaft
  3. Taktische Intelligenz und Anpassungsfähigkeit
- **Zentrierter Link**: "Mitglied werden" Button

### Navigation
- Aktive Seite: Basketball (im Dropdown)

### Besonderheiten
- Konsistentes Design mit anderen Sportseiten
- Sportspezifisches Hero-Bild

---

## 6. shop.html - Vereinsshop

### Zweck
- E-Commerce Funktionalität für Vereinsartikel
- Verkauf von Merchandise und Sportartikeln

### Hauptelemente
- **Shop Header**: Begrüßung und Beschreibung
- **Shop Controls**:
  - Suchfunktion (mit Suchfeld)
  - Kategorie-Filter (Kleidung, Accessoires, Sport, Büro & Technik)
  - Preis-Filter (0-20€, 20-50€, 50-100€, 100€+)
  - Sortierung (Name, Preis, Neueste)
- **Product Grid**: 8 Produkte
  - Vereins T-Shirt Premium (35€)
  - Vereinsjacke Softshell (65€, reduziert von 75€)
  - Fanschal (18€, Sale)
  - Baseball Cap (15€)
  - Sportrucksack (45€, Neu)
  - Sporttasche (38€)
  - Trinkflasche (12€)
  - Sporthandtuch (20€, Neu)

### Produktkarten-Struktur
- Produktbild
- Badge (Neu/Sale, falls zutreffend)
- Kategorie
- Titel
- Beschreibung
- Preis (aktuell und durchgestrichen falls reduziert)
- Buttons: "In den Warenkorb" und Favorit (♡)

### Zusätzliche Features
- **Warenkorb-Icon**: Header mit Counter (🛒)
- **Cart Sidebar**: Ausziehbare Warenkorb-Übersicht
  - Artikelliste
  - Gesamtsumme
  - "Zur Kasse gehen" Button
- **Overlay**: Für Warenkorb-Darstellung

### Navigation
- Aktive Seite: Shop
- Footer mit Shop-spezifischen Links (Versandkosten, Rückgabe, etc.)

### Besonderheiten
- Interaktive Filter-Funktionen (über data-attributes)
- Responsive Produktgalerie
- Detaillierte Produktbeschreibungen mit persönlichem Ton

---

## 7. newspage.html - News-Übersicht

### Zweck
- Zentrale Nachrichtenseite
- Übersicht aktueller Vereinsnachrichten

### Hauptelemente
- **Hero Section**: "News" Überschrift mit Beschreibung
- **Content Grid**: 7 News-Karten
  1. Jugendabteilung mit neuem Trainingskonzept (05.11.2025, Sarah Müller)
  2. Interview mit Kapitän (08.11.2025, Thomas Weber)
  3. Vereinsfest 2025 (02.11.2025, Lisa Schmidt)
  4. Neue Trainingszeiten (10.11.2025, Michael Bauer)
  5. Neuer Torwarttrainer (01.11.2025, Julia Hoffmann)
  6. Schnuppertraining (07.11.2025, Anna Schneider)
  7. Trainingslager Neapel (12.11.2025, Markus Fischer)

### News-Karten-Struktur
- Überschrift (als Link)
- Vorschaubild
- Textvorschau
- Meta-Daten: Autor und Datum

### Verlinkungen
- Erste News-Karte → newseins.html
- Andere Karten → leer.html (Platzhalter)

### Navigation
- Aktive Seite: News

---

## 8. newseins.html - News-Detailseite

### Zweck
- Vollständiger Artikel zur Jugendabteilung
- Beispiel für News-Detailseite

### Hauptelemente
- **Artikel Header**:
  - Überschrift: "Jugendabteilung startet mit neuem Trainingskonzept"
  - Meta-Info: Autor und Datum
- **Artikel-Inhalt**:
  - Einleitungstext
  - Zitat von Jugendleiterin Lisa Berger
  - Liste mit drei Kernpunkten:
    - Individuelle Förderung
    - Moderne Trainingsmethoden
    - Mentale und soziale Entwicklung
  - Abschließende Absätze

### Navigation
- Standard-Navigation (keine aktive Markierung)

### Besonderheiten
- Strukturierter Artikel mit semantischem HTML
- Verwendung von `<article>`, `<header>`, `<section>`
- Formatierte Listen und Zitate

---

## 9. Kontakt.html - Kontaktseite

### Zweck
- Kontaktinformationen bereitstellen
- Kontaktformular für Anfragen
- Standort auf Karte anzeigen

### Hauptelemente
- **Artikel Header**: "Kontakt"
- **Contact Grid**: Zweispaltig
  1. **Kontaktinformationen**:
     - Adresse: Marienstraße 20, 89518 Heidenheim
     - Telefon: +49 123 456789
     - Email: info@sv-ente.de
     - Öffnungszeiten: Mo-Fr 09:00-16:00, Sa 10:00-13:00
  2. **Kontaktformular**:
     - Felder: Name, Email, Nachricht
     - Submit-Button: "Absenden"
     - Form-Action: mailto:info@sv-ente.de

### Karte
- **OpenStreetMap Embed**: iFrame mit Heidenheim-Karte
- Marker bei den Koordinaten 48.6821, 10.1545

### Navigation
- Aktive Seite: Kontakt

### Besonderheiten
- Barrierefreies Formular mit Labels
- OpenStreetMap statt Google Maps
- mailto-Formular (keine Backend-Verarbeitung)

---

## 10. leer.html - Platzhalter-Seite

### Zweck
- Platzhalter für noch nicht existierende Inhalte
- Fallback für unfertige Verlinkungen

### Hauptelemente
- **Hero Section**: "Diese Seite existiert noch nicht"
- Minimalistischer Aufbau

### Navigation
- Standard-Navigation

### Verwendung
- Ziel für News-Artikel, die noch nicht erstellt wurden
- Placeholder für Tennis, Badminton, Tischtennis

---

## Gemeinsame Komponenten

### Header (auf allen Seiten)
- **Logo**: SV Ente Heidenheim (Bild + Text)
- **Navigation**:
  - Home
  - News
  - Shop
  - Sportangebote (Dropdown: Fußball, Handball, Basketball)
  - Kontakt
- **Warenkorb-Icon** (nur auf shop.html)

### Footer (auf allen Seiten)
- **3-spaltiges Layout**:
  1. Kontakt-Information
  2. Schnelle Links (Impressum, Datenschutz, Satzung, Vorstand, Newsletter)
  3. Social Media (Facebook, Instagram, Twitter, LinkedIn)
- **Copyright**: © 2025 SV Ente Heidenheim

### DHBW Banner (auf allen Seiten)
- Hinweis auf DHBW-Projektseite
- Link zur DHBW Heidenheim
- Icon: 📚

### Accessibility-Features
- Skip-to-Content Link (außer auf leer.html und newseins.html)
- Semantisches HTML
- Alt-Texte für Bilder
- ARIA-Labels

---

## Technische Details

### Stylesheets
- **main-consolidated.css**: Zentrale CSS-Datei für alle Seiten
- Responsive Design
- Konsistente Farbgebung und Typografie

### Bilder-Ordner
- Speicherort: `/Bilder/`
- Verwendete Bilder:
  - SvEnteHeidenheimLogo.png
  - Fuball1.png, Basketball.png, Handball.png
  - Tennis.png, Badminton.png, Tischtennis.png
  - Vereinsartikel-Bilder (T-shirt, Jacke, etc.)
  - News-Bilder (Jugendbild.png, Kapitan.png, etc.)

### Meta-Tags
- charset="UTF-8"
- viewport für Mobile-Optimierung
- title-Tags spezifisch pro Seite (meistens "Vereinsname - Willkommen")

### Barrierefreiheit
- `role` und `aria-label` Attribute
- `.visually-hidden` CSS-Klasse für Screen-Reader
- Semantische HTML5-Tags (`<header>`, `<main>`, `<footer>`, `<nav>`, `<article>`)

---

## Seitenstruktur-Zusammenfassung

| Seite | Hauptzweck | Besondere Features |
|-------|------------|-------------------|
| index.html | Startseite | Hero Banner, Content Cards |
| Sportangebote.html | Sport-Übersicht | 6 Sportkarten mit Bildern |
| Fußball1.html | Fußball-Details | Hero-Bild, 3 Textfelder |
| Handball1.html | Handball-Details | Hero-Bild, 3 Textfelder |
| Basketball1.html | Basketball-Details | Hero-Bild, 3 Textfelder |
| shop.html | Online-Shop | Filter, Warenkorb, 8 Produkte |
| newspage.html | News-Übersicht | 7 News-Karten |
| newseins.html | News-Artikel | Vollständiger Artikel |
| Kontakt.html | Kontakt | Formular, Karte, Info |
| leer.html | Platzhalter | Minimale Seite |

---

## Entwicklungsstand

### Fertiggestellt
- Grundstruktur aller Seiten
- Navigation und Footer
- Startseite mit Content
- Shop-Funktionalität (Frontend)
- News-Übersicht und erste Detailseite
- Kontaktseite mit Formular
- 3 Sportarten-Detailseiten

### Placeholder/In Arbeit
- Weitere News-Detailseiten (aktuell → leer.html)
- Tennis, Badminton, Tischtennis Detailseiten
- Backend-Funktionalität für Shop
- Backend für Kontaktformular
- JavaScript-Funktionalität für Shop-Filter

### Verlinkungen
- Interne Links funktional
- Social Media Links: Placeholder (#)
- Footer-Links (Impressum, etc.): Placeholder (#)

---

## Bildmaterial-Verzeichnis

### Logo & Branding
- `SvEnteHeidenheimLogo.png` - Vereinslogo

### Sportarten
- `Fuball1.png` - Fußball-Bild
- `Basketball.png` - Basketball-Bild
- `Handball.png` - Handball-Bild
- `Tennis.png` - Tennis-Bild
- `Badminton.png` - Badminton-Bild
- `Tischtennis.png` - Tischtennis-Bild

### Shop-Produkte
- `vereinsT-shirt.png` - T-Shirt
- `vereinsJacke.png` - Jacke
- `vereinsSchal.png` - Schal
- `vereinsCap.png` - Cap
- `vereinsRucksack.png` - Rucksack
- `vereinsSporttasche.png` - Sporttasche
- `vereinsTrinkflasche.png` - Trinkflasche
- `vereinsHandtuch.png` - Handtuch

### News-Bilder
- `Jugendbild.png` - Jugendtraining
- `Kapitan.png` - Kapitän-Interview
- `Fest.png` - Vereinsfest
- `Trainingszeiten.png` - Training
- `Torwart.png` - Torwarttraining
- `Trainingslager.png` - Trainingslager

---

## Wartung und Updates

### Regelmäßig zu aktualisieren
- News-Artikel auf newspage.html und neue Detailseiten
- Shop-Produkte und Preise
- Kontaktinformationen und Öffnungszeiten
- Veranstaltungshinweise auf Startseite

### Bei Änderungen zu beachten
- Konsistenz der Navigation auf allen Seiten
- Einheitliches Design und CSS
- Barrierefreiheit beibehalten
- Mobile Responsiveness testen

---

**Dokumentation erstellt am**: 26. November 2025  
**Projektumfang**: 10 HTML-Seiten + 1 CSS-Datei  
**Status**: Entwicklungsversion (Frontend vollständig, Backend ausstehend)
