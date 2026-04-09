import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const projectRoot = process.cwd();
const mainCssPath = join(projectRoot, 'old', 'main.css');
const lines = readFileSync(mainCssPath, 'utf8').split(/\r?\n/);

function sliceInclusive(startLine, endLine) {
  return lines.slice(startLine - 1, endLine).join('\n').trim();
}

function write(relPath, content) {
  const outPath = join(projectRoot, relPath);
  const normalized = `${content}\n`.replace(/url\('Bilder\//g, "url('/Bilder/");
  writeFileSync(outPath, normalized, 'utf8');
}

const globalCss = [
  '/* Global shared styles (auto-generated from main.css) */',
  sliceInclusive(1, 270),
  sliceInclusive(349, 374),
  sliceInclusive(375, 480),
  sliceInclusive(1122, 1172),
  sliceInclusive(1230, 1295),
  sliceInclusive(1715, 2489)
].join('\n\n');

const homeCss = [
  '/* Home page styles (auto-generated from main.css) */',
  sliceInclusive(270, 348)
].join('\n\n');

const shopCss = [
  '/* Shop page styles (auto-generated from main.css) */',
  sliceInclusive(211, 237),
  sliceInclusive(481, 883)
].join('\n\n');

const sportangeboteCss = [
  '/* Sportangebote page styles (auto-generated from main.css) */',
  sliceInclusive(884, 993)
].join('\n\n');

const sportDetailCss = [
  '/* Sport detail styles (auto-generated from main.css) */',
  sliceInclusive(994, 1121)
].join('\n\n');

const newsCss = [
  '/* News page currently uses global/shared article styles. */'
].join('\n\n');

const kontaktCss = [
  '/* Kontakt page styles (auto-generated from main.css) */',
  sliceInclusive(1173, 1229)
].join('\n\n');

const mitgliedschaftCss = [
  '/* Mitgliedschaft page styles (auto-generated from main.css) */',
  sliceInclusive(1295, 1714)
].join('\n\n');

write('src/styles.css', globalCss);
write('src/app/pages/home-page/home-page.css', homeCss);
write('src/app/pages/shop-page/shop-page.css', shopCss);
write('src/app/pages/sportangebote-page/sportangebote-page.css', sportangeboteCss);
write('src/app/pages/fussball-page/fussball-page.css', sportDetailCss);
write('src/app/pages/handball-page/handball-page.css', sportDetailCss);
write('src/app/pages/basketball-page/basketball-page.css', sportDetailCss);
write('src/app/pages/news-page/news-page.css', newsCss);
write('src/app/pages/news-one-page/news-one-page.css', newsCss);
write('src/app/pages/kontakt-page/kontakt-page.css', kontaktCss);
write('src/app/pages/mitgliedschaft-page/mitgliedschaft-page.css', mitgliedschaftCss);
write('src/app/pages/leer-page/leer-page.css', '/* Leer page intentionally uses shared/global styles only. */');

console.log('CSS-Split abgeschlossen: globale + seitenbezogene Styles wurden erzeugt.');
