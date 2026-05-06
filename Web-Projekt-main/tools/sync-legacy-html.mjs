import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const projectRoot = process.cwd();

const pageMap = [
  { source: 'old/index.html', target: 'src/app/pages/home-page/home-page.html' },
  // news-page und news-one-page werden manuell gepflegt und nicht vom Sync-Tool ueberschrieben
  { source: 'old/shop.html', target: 'src/app/pages/shop-page/shop-page.html' },
  { source: 'old/Sportangebote.html', target: 'src/app/pages/sportangebote-page/sportangebote-page.html' },
  { source: 'old/Fußball1.html', target: 'src/app/pages/fussball-page/fussball-page.html' },
  { source: 'old/Handball1.html', target: 'src/app/pages/handball-page/handball-page.html' },
  { source: 'old/Basketball1.html', target: 'src/app/pages/basketball-page/basketball-page.html' },
  { source: 'old/Mitgliedschaft.html', target: 'src/app/pages/mitgliedschaft-page/mitgliedschaft-page.html' },
  { source: 'old/Kontakt.html', target: 'src/app/pages/kontakt-page/kontakt-page.html' },
  { source: 'old/leer.html', target: 'src/app/pages/leer-page/leer-page.html' }
];

const hrefMap = new Map([
  ['index.html', '/'],
  ['newspage.html', '/news'],
  ['newseins.html', '/news/eins'],
  ['shop.html', '/shop'],
  ['Sportangebote.html', '/sportangebote'],
  ['Fußball1.html', '/sportangebote/fussball'],
  ['FuÃŸball1.html', '/sportangebote/fussball'],
  ['Handball1.html', '/sportangebote/handball'],
  ['Basketball1.html', '/sportangebote/basketball'],
  ['Mitgliedschaft.html', '/mitgliedschaft'],
  ['Kontakt.html', '/kontakt'],
  ['leer.html', '/leer']
]);

function convertBodyToAngularTemplate(html) {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) {
    throw new Error('Kein <body>-Inhalt gefunden.');
  }

  let body = bodyMatch[1];

  for (const [file, route] of hrefMap.entries()) {
    const escaped = file.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    body = body.replace(new RegExp(`href="${escaped}"`, 'g'), `routerLink="${route}"`);
  }

  body = body.replace(/src="Bilder\//g, 'src="/Bilder/');
  body = body.replace(/href="Fu[^"]*ball1\.html"/g, 'routerLink="/sportangebote/fussball"');

  return `${body.trimEnd()}\n`;
}

for (const page of pageMap) {
  const sourcePath = join(projectRoot, page.source);
  const targetPath = join(projectRoot, page.target);
  const sourceContent = readFileSync(sourcePath, 'utf8');
  const angularTemplate = convertBodyToAngularTemplate(sourceContent);
  writeFileSync(targetPath, angularTemplate, 'utf8');
}

console.log(`HTML-Sync abgeschlossen: ${pageMap.length} Dateien aktualisiert.`);
