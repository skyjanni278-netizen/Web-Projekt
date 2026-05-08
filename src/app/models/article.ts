export interface Comment {
  id: string;
  articleSlug: string;
  author: string;
  text: string;
  date: string; // ISO: "2025-11-05"
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  author: string;
  date: string; // ISO: "2025-11-05"
  excerpt: string;
  content: string; // HTML-String
  image: string;
  imageAlt: string;
  tags: string[];
}

export const ALL_TAGS = [
  'Fußball',
  'Handball',
  'Basketball',
  'Tennis',
  'Tischtennis',
  'Badminton',
  'Veranstaltungen',
  'Trainingslager',
  'Allgemein',
] as const;

export const DEFAULT_ARTICLES: Article[] = [
  {
    id: '1',
    slug: 'jugendabteilung-trainingskonzept',
    title: 'Jugendabteilung startet mit neuem Trainingskonzept in die Saison',
    author: 'Sarah Müller',
    date: '2025-11-05',
    image: '/Bilder/Jugendbild.png',
    imageAlt: 'Jugend Training',
    tags: ['Allgemein'],
    excerpt:
      'Die Jugendabteilung beginnt die Saison mit einem neuen Trainingskonzept, das Technik, Teamgeist und individuelle Förderung in den Fokus rückt. Erste Rückmeldungen zeigen eine positive Resonanz und gesteigerte Motivation im Training.',
    content: `<p>Mit viel Motivation und frischen Ideen startet die Jugendabteilung des Vereins in die neue Saison. Im Mittelpunkt steht ein innovatives Trainingskonzept, das nicht nur die sportliche Entwicklung der jungen Talente fördern soll, sondern auch deren persönliche Entfaltung.</p>
<p><em>„Unser Ziel ist es, die Kinder und Jugendlichen ganzheitlich zu fördern"</em>, erklärt Jugendleiterin Lisa Berger. <em>„Neben Technik und Taktik legen wir großen Wert auf Teamgeist, Fairness und Spaß am Spiel."</em></p>
<ul class="artikel-list">
  <li><strong>Individuelle Förderung:</strong> Jeder Spieler erhält gezielte Trainingsimpulse, abgestimmt auf seine Stärken und Entwicklungsfelder.</li>
  <li><strong>Moderne Trainingsmethoden:</strong> Mit digitalen Tools, Videoanalysen und altersgerechten Übungen wird das Training abwechslungsreicher und effektiver gestaltet.</li>
  <li><strong>Mentale und soziale Entwicklung:</strong> Workshops zu Themen wie Motivation, Konfliktlösung und gesunde Ernährung ergänzen das sportliche Programm.</li>
</ul>
<p>Besonders stolz ist die Abteilung auf die enge Zusammenarbeit mit erfahrenen Trainern und Pädagogen. <em>„Wir wollen mehr sein als nur ein Fußballverein – wir wollen ein Ort sein, an dem junge Menschen wachsen können"</em>, so Berger.</p>
<p>Die ersten Trainingseinheiten zeigen bereits Wirkung: Die Jugendlichen sind mit Begeisterung dabei, die Stimmung ist positiv, und auch die Eltern zeigen sich beeindruckt vom neuen Ansatz.</p>
<p>Mit dem neuen Trainingskonzept setzt die Jugendabteilung ein starkes Zeichen für die Zukunft – und beweist, dass moderne Nachwuchsarbeit weit über das Spielfeld hinausgeht.</p>`,
  },
  {
    id: '2',
    slug: 'kapitaen-interview-teamgeist',
    title: 'Interview der Woche: Kapitän spricht über Teamgeist und Ziele',
    author: 'Thomas Weber',
    date: '2025-11-08',
    image: '/Bilder/Kapitan.png',
    imageAlt: 'Interview Kapitän',
    tags: ['Allgemein'],
    excerpt:
      'Im aktuellen Interview teilt der Mannschaftskapitän seine Sicht auf den starken Zusammenhalt im Team und die Bedeutung gegenseitiger Unterstützung sowie die Saisonziele.',
    content: `<p>Im Gespräch mit unserem Redakteur gab Mannschaftskapitän Markus Hofer tiefe Einblicke in den Zusammenhalt der Truppe und die Erwartungen an die laufende Saison.</p>
<p><em>„Wir sind in diesem Jahr eine echte Einheit. Jeder gibt alles für den anderen – das spürt man auf dem Platz sofort"</em>, betont Hofer. Diese Einigkeit sei das Ergebnis intensiver Teamarbeit und gegenseitigem Vertrauen.</p>
<p>Die Saisonziele formuliert der Kapitän klar: „Wir wollen in der oberen Tabellenhälfte bleiben, den Pokal so weit wie möglich kommen und vor allem unsere Fans stolz machen." Dafür trainiert die Mannschaft hart und arbeitet täglich an Fitness und Taktik.</p>
<p>Auf die Frage nach Verbesserungsbedarf antwortet Hofer bescheiden: <em>„Wir können noch besser werden – in der Defensive und beim schnellen Umschaltspiel. Daran arbeiten wir täglich."</em> Der Kapitän zeigt sich überzeugt, dass das Team am Ende der Saison seinen Ansprüchen gerecht werden wird.</p>`,
  },
  {
    id: '3',
    slug: 'vereinsfest-2025',
    title: 'Vereinsfest 2025: Fans, Familie und viel Sport',
    author: 'Lisa Schmidt',
    date: '2025-11-02',
    image: '/Bilder/Fest.png',
    imageAlt: 'Vereinsfest',
    tags: ['Veranstaltungen'],
    excerpt:
      'Beim Vereinsfest 2025 kamen Fans, Familien und Spieler zu einem Tag voller Sport, Spaß und Gemeinschaft zusammen. Zahlreiche Aktivitäten sorgten für beste Stimmung.',
    content: `<p>Das Vereinsfest 2025 war ein voller Erfolg: Hunderte von Fans, Familien und Mitgliedern kamen zusammen, um gemeinsam zu feiern, Sport zu treiben und die Vereinsgemeinschaft zu erleben.</p>
<p>Das Programm bot für jeden etwas: Von Vorführungsmatches und Schnuppertraining über Hüpfburgen für die Jüngsten bis hin zu Musik und kulinarischen Spezialitäten war das gesamte Gelände in festlicher Stimmung.</p>
<p>Besonders beliebt war das Showspiel der ersten Männermannschaft, das die Zuschauer mit spektakulären Aktionen begeisterte. Auch die Jugendmannschaften zeigten ihr Können und ernteten viel Applaus.</p>
<p><em>„Das Vereinsfest ist für uns mehr als ein Event – es ist ein Zeichen unserer Gemeinschaft"</em>, sagte Vereinsvorsitzender Hans Meier in seiner Ansprache. „Ich bin stolz, wie viele Menschen den Verein unterstützen."</p>
<p>Die Verantwortlichen planen bereits für 2026 und versprechen eine noch größere Veranstaltung mit neuen Attraktionen.</p>`,
  },
  {
    id: '4',
    slug: 'trainingszeiten-winter',
    title: 'Neue Trainingszeiten und Angebote: So startet der Verein in den Winter',
    author: 'Michael Bauer',
    date: '2025-11-10',
    image: '/Bilder/Trainingszeiten.png',
    imageAlt: 'Neue Trainingszeiten',
    tags: ['Allgemein'],
    excerpt:
      'Der Verein startet mit angepassten Trainingszeiten und neuen Angeboten in die Wintersaison, um optimale Bedingungen für alle Mitglieder zu schaffen.',
    content: `<p>Pünktlich zum Beginn der Wintersaison hat der Verein die Trainingszeiten angepasst und ein erweitertes Angebot für alle Altersgruppen eingeführt.</p>
<p>Ab sofort stehen folgende Neuerungen auf dem Programm:</p>
<ul class="artikel-list">
  <li><strong>Hallentraining:</strong> Die Mannschaften wechseln in die Sporthalle; alle Trainingszeiten wurden entsprechend angepasst.</li>
  <li><strong>Fitnesskurse:</strong> Zweimal wöchentlich werden offene Fitnesstrainings angeboten, die allen Vereinsmitgliedern zugänglich sind.</li>
  <li><strong>Technikeinheiten:</strong> Spezielle Einheiten zur Verbesserung der Ballkontrolle und Schusstechnik ergänzen das Pflichtprogramm.</li>
</ul>
<p>Die genauen Zeiten werden auf der Vereinstafel und über den Mitglieder-Newsletter kommuniziert. Anmeldungen sind über den Trainer oder direkt beim Vereinsbüro möglich.</p>
<p><em>„Wir möchten sicherstellen, dass der Winter keine Ausrede für fehlende Fitness ist"</em>, sagt Cheftrainer Peter Braun. „Mit unserem neuen Programm bleiben wir das ganze Jahr über auf hohem Niveau."</p>`,
  },
  {
    id: '5',
    slug: 'neuer-torwarttrainer',
    title: 'Neuer Torwarttrainer verstärkt das Coaching-Team ab sofort',
    author: 'Julia Hoffmann',
    date: '2025-11-01',
    image: '/Bilder/Torwart.png',
    imageAlt: 'Torwarttraining',
    tags: ['Fußball'],
    excerpt:
      'Ab sofort ergänzt ein neuer Torwarttrainer das Coaching-Team des Vereins. Er bringt frisches Fachwissen mit, um die Torhüter gezielt weiterzuentwickeln.',
    content: `<p>Der Verein freut sich, die Verpflichtung von Stefan Albrecht als neuen Torwarttrainer bekanntzugeben. Ab sofort verstärkt der erfahrene Fachmann das Coaching-Team.</p>
<p>Stefan Albrecht bringt über 15 Jahre Erfahrung als aktiver Torwart auf Verbandsebene sowie fünf Jahre als Torwarttrainer bei verschiedenen Vereinen mit. <em>„Ich freue mich riesig auf die neue Aufgabe und kann es kaum erwarten, mit den Torhütern zu arbeiten"</em>, so Albrecht bei seiner Vorstellung.</p>
<p>Cheftrainer Peter Braun begrüßt die Verstärkung: <em>„Mit Stefan haben wir einen absoluten Experten für die Torwartposition gewonnen. Unsere Keeper werden von seiner Erfahrung und seinem Fachwissen enorm profitieren."</em></p>
<p>Stefan Albrecht wird ab sofort das Training der ersten und zweiten Mannschaft sowie der Torhüter aus der Jugendabteilung leiten. Seine Schwerpunkte liegen auf moderner Torwarttechnik, Stellungsspiel und der mentalen Stärke im Tor.</p>`,
  },
  {
    id: '6',
    slug: 'schnuppertraining-nachwuchs',
    title: 'Großer Andrang beim Schnuppertraining: Nachwuchsarbeit trägt Früchte',
    author: 'Anna Schneider',
    date: '2025-11-07',
    image: '/Bilder/Jugendbild.png',
    imageAlt: 'Schnuppertraining',
    tags: ['Allgemein'],
    excerpt:
      'Beim Schnuppertraining herrschte großer Andrang, was die erfolgreiche Nachwuchsarbeit des Vereins deutlich zeigt. Viele junge Talente nutzten die Gelegenheit.',
    content: `<p>Zum ersten Mal in der Geschichte des Vereins kamen über 80 Kinder und Jugendliche zum großen Schnuppertraining – ein klares Zeichen für die erfolgreiche Nachwuchsarbeit der letzten Jahre.</p>
<p>In Gruppen aufgeteilt nach Alter und Erfahrung durften die jungen Talente das Vereinstraining hautnah erleben. Erfahrene Trainer begleiteten die Einheiten und zeigten den Nachwuchsspielern erste Grundtechniken.</p>
<p><em>„Es war überwältigend zu sehen, wie viele Kinder heute hier waren"</em>, sagte Jugendkoordinatorin Anna Schneider sichtlich gerührt. „Das zeigt, dass unsere Arbeit Früchte trägt und der Verein in der Region verwurzelt ist."</p>
<p>Viele Eltern nutzten die Gelegenheit, sich über Trainingszeiten, Kosten und die Vereinsphilosophie zu informieren. Erste Anmeldungen wurden bereits vor Ort entgegengenommen.</p>
<p>Wer Interesse hat, am nächsten Schnuppertraining teilzunehmen, kann sich beim Vereinsbüro anmelden. Der nächste Termin wird rechtzeitig bekanntgegeben.</p>`,
  },
  {
    id: '8',
    slug: 'handball-damen-derby',
    title: 'Handball-Damen gewinnen spannendes Derby gegen den Nachbarverein',
    author: 'Felix Wagner',
    date: '2025-10-28',
    image: '/Bilder/Handball.png',
    imageAlt: 'Handball Damen',
    tags: ['Handball'],
    excerpt:
      'In einem packenden Duell setzten sich die Handball-Damen des Vereins mit 24:21 gegen den Lokalrivalen durch und feierten damit ihren dritten Saisonsieg in Folge.',
    content: `<p>Was für ein Abend in der heimischen Halle! Die Handball-Damen lieferten vor ausverkauftem Haus eine kämpferische Leistung und bezwangen den Lokalrivalen mit 24:21 – der dritte Saisonsieg in Folge.</p>
<p>Besonders überzeugend war die geschlossene Teamleistung. Torfrau Sabrina Heck hielt in der zweiten Halbzeit mehrfach glänzend und verhinderte den Ausgleich. Mit zwölf Toren war Stürmerin Lea Krämer die überragende Spielerin des Abends.</p>
<p><em>„Wir haben von der ersten Minute an als Team gespielt – das war heute der Schlüssel zum Sieg"</em>, freute sich Trainerin Monika Hartmann nach dem Abpfiff.</p>
<p>Mit diesem Erfolg klettert die Mannschaft auf Tabellenplatz zwei. Das nächste Heimspiel findet in zwei Wochen statt – die Fans dürfen sich auf ein weiteres Highlight freuen.</p>`,
  },
  {
    id: '9',
    slug: 'handball-neue-trainingshalle',
    title: 'Neue Trainingshalle eingeweiht: Handballabteilung freut sich über moderne Anlage',
    author: 'Sandra Meier',
    date: '2025-10-15',
    image: '/Bilder/Handball.png',
    imageAlt: 'Neue Trainingshalle',
    tags: ['Handball', 'Veranstaltungen'],
    excerpt:
      'Mit einem Festakt wurde die neue Trainingshalle offiziell eingeweiht. Die Handballabteilung profitiert ab sofort von modernsten Bedingungen.',
    content: `<p>Ein großer Tag für den Verein: Die neue Trainingshalle wurde feierlich eingeweiht. Mit über 200 Gästen, Ehrungen verdienter Mitglieder und einem Showspiel der ersten Mannschaft wurde der Moment gebührend gefeiert.</p>
<p>Die neue Anlage bietet zwei vollwertige Spielfelder, moderne Umkleidekabinen sowie eine Tribüne für bis zu 300 Zuschauer. Besonders die Handballabteilung, die bisher auf zu kleine Trainingskapazitäten angewiesen war, profitiert unmittelbar.</p>
<p>Vereinsvorsitzender Hans Meier zeigte sich stolz: <em>„Diese Halle ist eine Investition in die Zukunft unserer Mitglieder und Talente. Hier werden in den kommenden Jahren viele Erfolgsgeschichten geschrieben."</em></p>
<p>Der Bau wurde dank Fördermitteln des Landessportbunds und großzügiger Sponsoren ermöglicht. Ein besonderer Dank gilt den vielen ehrenamtlichen Helfern, die den Bau tatkräftig unterstützten.</p>`,
  },
  {
    id: '10',
    slug: 'basketball-junioren-landesmeisterschaft',
    title: 'Basketball-Junioren qualifizieren sich für die Landesmeisterschaft',
    author: 'Kevin Braun',
    date: '2025-10-22',
    image: '/Bilder/Basketball.png',
    imageAlt: 'Basketball Junioren',
    tags: ['Basketball'],
    excerpt:
      'Mit einer beeindruckenden Serie von fünf Siegen in Folge haben sich die Basketball-Junioren des Vereins erstmals für die Landesmeisterschaft qualifiziert.',
    content: `<p>Historischer Moment für die Basketballabteilung: Die U18-Junioren haben sich mit fünf Siegen in Folge erstmals in der Vereinsgeschichte für die Landesmeisterschaft qualifiziert. Ein Meilenstein für das gesamte Team.</p>
<p>Das entscheidende Qualifikationsspiel gewann die Mannschaft souverän mit 78:54. Angeführt von Spielmacher Jonas Reiter, der alleine 22 Punkte erzielte, dominierte das Team von der ersten bis zur letzten Sekunde.</p>
<p><em>„Die Jungs haben in dieser Saison eine unglaubliche Entwicklung hingelegt. Diesen Erfolg haben sie sich wirklich verdient"</em>, sagte Trainer Michael Schulz nach dem Spiel sichtlich bewegt.</p>
<p>Die Landesmeisterschaft findet im Februar 2026 statt. Der Verein unterstützt die Mannschaft mit einem Extratraining und plant eine offizielle Verabschiedung vor dem Turnier.</p>`,
  },
  {
    id: '11',
    slug: 'basketball-neuer-trainer',
    title: 'Neuer Cheftrainer Basketball: Willkommen, Coach Martinez!',
    author: 'Lisa Vogel',
    date: '2025-10-05',
    image: '/Bilder/Basketball.png',
    imageAlt: 'Coach Martinez',
    tags: ['Basketball'],
    excerpt:
      'Der Verein freut sich, Carlos Martinez als neuen Cheftrainer der Basketballabteilung vorzustellen. Er bringt internationale Erfahrung und frische Impulse mit.',
    content: `<p>Der Verein begrüßt herzlich Carlos Martinez als neuen Cheftrainer der Basketballabteilung. Der 38-jährige Spanier kommt mit einer beeindruckenden Vita: Acht Jahre Profikarriere in der spanischen ACB-Liga und fünf Jahre als Nachwuchscoach auf internationalem Niveau.</p>
<p><em>„Ich habe sofort gespürt, dass hier eine tolle Gemeinschaft und echte Leidenschaft für Basketball vorhanden sind. Ich freue mich riesig darauf, dieses Potenzial weiterzuentwickeln"</em>, sagte Martinez bei seiner Vorstellung.</p>
<p>Sein Fokus liegt auf einem modernen Angriffsspiel mit klaren Strukturen und der gezielten Förderung junger Spieler. In den ersten Trainingseinheiten setzte er bereits neue Akzente im Bereich Taktik und Athletik.</p>
<p>Vereinspräsident Hans Meier ist überzeugt: <em>„Mit Carlos haben wir genau den Trainer gefunden, der unsere Basketballabteilung auf das nächste Level bringt."</em></p>`,
  },
  {
    id: '12',
    slug: 'tennis-hallensaison',
    title: 'Tennisabteilung startet mit vollen Platzbelegungen in die Hallensaison',
    author: 'Anna Berger',
    date: '2025-11-03',
    image: '/Bilder/Tennis.png',
    imageAlt: 'Tennis Halle',
    tags: ['Tennis'],
    excerpt:
      'Mit dem Ende der Freiplatz-Saison wechselt die Tennisabteilung in die Halle. Die Nachfrage ist so groß wie nie zuvor – alle Zeiten sind ausgebucht.',
    content: `<p>Pünktlich zum November hat die Tennisabteilung den Betrieb in der vereinseigenen Halle aufgenommen – und die Nachfrage übertrifft alle Erwartungen. Sämtliche Trainingszeiten sind bereits vergeben, die Warteliste wächst von Woche zu Woche.</p>
<p>Besonders erfreulich: Der Zuwachs bei Kindern und Jugendlichen ist enorm. Das neue Schnupperprogramm, das im Sommer eingeführt wurde, zeigt deutlich Wirkung.</p>
<p>Abteilungsleiter Robert Klein freut sich über das Wachstum: <em>„Tennis war lange als Einzelsport bekannt, aber bei uns ist das Vereinsgefühl stark. Die Leute kommen nicht nur zum Spielen, sondern auch zum Miteinander."</em></p>
<p>Für Interessierte, die noch keinen Platz ergattern konnten, empfiehlt die Abteilung, sich auf die Warteliste eintragen zu lassen. Neue Zeiten könnten ab Dezember verfügbar sein.</p>`,
  },
  {
    id: '13',
    slug: 'tischtennis-vereinsturnier',
    title: 'Rekordbeteiligung beim Tischtennisturnier: 64 Spieler am Start',
    author: 'Petra Wolf',
    date: '2025-10-18',
    image: '/Bilder/Tischtennis.png',
    imageAlt: 'Tischtennisturnier',
    tags: ['Tischtennis', 'Veranstaltungen'],
    excerpt:
      'Das alljährliche Vereinsturnier der Tischtennisabteilung verzeichnete mit 64 Teilnehmern eine Rekordbeteiligung. Spannung und Spaß waren garantiert.',
    content: `<p>Was für ein Turnier! 64 Spielerinnen und Spieler aus acht verschiedenen Vereinen nahmen am diesjährigen Tischtennisturnier teil – ein neuer Rekord. Von der U10 bis zu den Senioren lieferten sich die Teilnehmer packende Duelle.</p>
<p>Im Finale der Herren setzte sich Vereinsmitglied Tobias Krug in einem spannenden Fünf-Satz-Match gegen den Gästefahrer aus dem Nachbarort durch. Bei den Damen holte sich Maria Fischer den Titel und verteidigte damit ihren Vorjahreserfolg.</p>
<p>Neben dem sportlichen Wettkampf sorgten Kaffee, Kuchen und eine Tombola für eine familiäre Atmosphäre. <em>„Dieses Turnier ist jedes Jahr ein Highlight für unsere Abteilung – es bringt Alt und Jung zusammen"</em>, sagte Abteilungsleiter Georg Huber.</p>
<p>Der Termin für das nächste Turnier wird rechtzeitig im Vereinsnewsletter bekanntgegeben.</p>`,
  },
  {
    id: '14',
    slug: 'badminton-kreisturnier',
    title: 'Badminton-Nachwuchs glänzt beim Kreisturnier mit drei Podiumsplätzen',
    author: 'Jonas Ritter',
    date: '2025-11-09',
    image: '/Bilder/Badminton.png',
    imageAlt: 'Badminton Kreisturnier',
    tags: ['Badminton'],
    excerpt:
      'Drei Podiumsplätze, darunter ein Turniersieg: Die jungen Talente der Badmintonabteilung überzeugten beim Kreisturnier mit starken Leistungen.',
    content: `<p>Großer Erfolg für den Nachwuchs der Badmintonabteilung: Beim Kreisturnier in Heidenheim sicherten sich drei Vereinsspieler Podiumsplätze und sorgten für Begeisterung bei Trainern und Eltern.</p>
<p>Den Turniersieg in der Altersklasse U14 holte sich Niklas Bauer mit einer souveränen Vorstellung im gesamten Turnierverlauf. Ebenfalls aufs Podium schafften es Emma Koch (2. Platz, U16) und Leon Maier (3. Platz, U14).</p>
<p>Trainer Oliver Stein zeigte sich begeistert: <em>„Die Entwicklung unserer Jugend in den letzten Monaten ist bemerkenswert. Diese Ergebnisse sind eine direkte Folge des konsequenten Trainings und des Teamgeists, den wir aufgebaut haben."</em></p>
<p>Als nächstes steht für die Talente das Bezirksturnier im Dezember auf dem Programm. Die Erwartungen sind nach diesem starken Auftritt berechtigt hoch.</p>`,
  },
  {
    id: '15',
    slug: 'weihnachtsfeier-2025',
    title: 'Weihnachtsfeier 2025: Alle Mitglieder herzlich eingeladen',
    author: 'Redaktion',
    date: '2025-11-20',
    image: '/Bilder/Fest.png',
    imageAlt: 'Weihnachtsfeier',
    tags: ['Veranstaltungen'],
    excerpt:
      'Am 20. Dezember laden wir alle Mitglieder, Familien und Freunde des Vereins zur alljährlichen Weihnachtsfeier ein. Programm, Glühwein und gute Stimmung garantiert.',
    content: `<p>Der Jahresabschluss naht – und damit auch die alljährliche Weihnachtsfeier des Vereins! Am 20. Dezember 2025 laden wir alle Mitglieder, Familien und Freunde herzlich in die Vereinshalle ein.</p>
<p>Das Programm verspricht einen unvergesslichen Abend:</p>
<ul class="artikel-list">
  <li><strong>18:00 Uhr:</strong> Einlass und Empfang mit Glühwein und Kinderpunsch</li>
  <li><strong>19:00 Uhr:</strong> Begrüßung und Jahresrückblick durch den Vereinsvorstand</li>
  <li><strong>19:30 Uhr:</strong> Ehrungen verdienter Mitglieder und Sportler des Jahres</li>
  <li><strong>20:00 Uhr:</strong> Abendessen und gemütliches Beisammensein</li>
  <li><strong>Ab 21:00 Uhr:</strong> Musik, Tanz und Tombola</li>
</ul>
<p>Die Teilnahme ist kostenlos für alle Vereinsmitglieder. Gäste sind herzlich willkommen (Unkostenbeitrag: 5 Euro).</p>
<p>Anmeldungen bitte bis zum 10. Dezember beim Vereinsbüro oder per E-Mail an info@sv-ente.de. Wir freuen uns auf einen schönen gemeinsamen Abend!</p>`,
  },
  {
    id: '7',
    slug: 'trainingslager-neapel',
    title: 'Vorbereitung auf die Rückrunde startet: Trainingslager in Neapel bestätigt',
    author: 'Markus Fischer',
    date: '2025-11-12',
    image: '/Bilder/Trainingslager.png',
    imageAlt: 'Trainingslager in Neapel',
    tags: ['Trainingslager'],
    excerpt:
      'Die Mannschaft beginnt die Vorbereitung auf die Rückrunde mit einem Trainingslager in Neapel, das nun offiziell bestätigt wurde.',
    content: `<p>Die Vorbereitung auf die Rückrunde nimmt Fahrt auf: Das lang ersehnte Trainingslager in Neapel wurde offiziell bestätigt. Vom 15. bis 22. Januar 2026 reist die erste Mannschaft in die süditalienische Metropole.</p>
<p>In Neapel erwartet die Spieler ein intensives Programm mit zwei Trainingseinheiten täglich, taktischen Videoanalysen und einem Testspiel gegen einen lokalen Verein. Die Wetterbedingungen in Süditalien werden deutlich bessere Trainingsbedingungen bieten als heimische Hallenalternativen.</p>
<p><em>„Ein Trainingslager im Ausland ist eine enorme Möglichkeit für den Zusammenhalt und die sportliche Entwicklung"</em>, betont Cheftrainer Peter Braun. „Wir werden die Woche intensiv nutzen, um für die Rückrunde gerüstet zu sein."</p>
<p>Neben dem Training sollen die Spieler auch die Kultur der Stadt kennenlernen – ein gemeinsamer Ausflug und ein Mannschaftsessen sind bereits geplant.</p>
<p>Auf das Trainingslager folgt direkt der Rückrundenauftakt am 31. Januar. Der Kader wird in der zweiten Januarwoche bekanntgegeben.</p>`,
  },
];
