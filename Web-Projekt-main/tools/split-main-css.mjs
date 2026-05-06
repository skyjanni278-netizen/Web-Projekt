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
  sliceInclusive(1, 271),
  sliceInclusive(350, 375),
  sliceInclusive(376, 481),
  sliceInclusive(1123, 1173),
  sliceInclusive(1231, 1296),
  sliceInclusive(1716, 2490)
].join('\n\n');

const homeCss = [
  '/* Home page styles (auto-generated from main.css) */',
  sliceInclusive(271, 349)
].join('\n\n');

const shopCss = [
  '/* Shop page styles (auto-generated from main.css) */',
  sliceInclusive(212, 238),
  sliceInclusive(482, 884)
].join('\n\n');

const sportangeboteCss = [
  '/* Sportangebote page styles (auto-generated from main.css) */',
  sliceInclusive(885, 994)
].join('\n\n');

const sportDetailCss = [
  '/* Sport detail styles (auto-generated from main.css) */',
  sliceInclusive(995, 1122)
].join('\n\n');

const kontaktCss = [
  '/* Kontakt page styles (auto-generated from main.css) */',
  sliceInclusive(1174, 1230)
].join('\n\n');

const mitgliedschaftCss = [
  '/* Mitgliedschaft page styles (auto-generated from main.css) */',
  sliceInclusive(1296, 1715)
].join('\n\n');

write('src/styles.css', globalCss);
write('src/app/pages/home-page/home-page.css', homeCss);
write('src/app/pages/shop-page/shop-page.css', shopCss);
write('src/app/pages/sportangebote-page/sportangebote-page.css', sportangeboteCss);
write('src/app/pages/fussball-page/fussball-page.css', sportDetailCss);
write('src/app/pages/handball-page/handball-page.css', sportDetailCss);
write('src/app/pages/basketball-page/basketball-page.css', sportDetailCss);
// news-page.css und news-one-page.css werden vom Sync-Tool nicht angefasst
write('src/app/pages/kontakt-page/kontakt-page.css', kontaktCss);
write('src/app/pages/mitgliedschaft-page/mitgliedschaft-page.css', mitgliedschaftCss);
write('src/app/pages/leer-page/leer-page.css', '/* Leer page intentionally uses shared/global styles only. */');

console.log('CSS-Split abgeschlossen: globale + seitenbezogene Styles wurden erzeugt.');
