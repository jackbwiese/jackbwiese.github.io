// Canonical EN dictionary. Other languages live in strings.<lang>.js and are
// merged in below. Keep keys flat-named and stable - section components
// reference them via t(lang, 'section.key').

import { es } from './locales/es.js';
import { fr } from './locales/fr.js';
import { it } from './locales/it.js';
import { de } from './locales/de.js';
import { pt } from './locales/pt.js';
import { nl } from './locales/nl.js';
import { hi } from './locales/hi.js';
import { tr } from './locales/tr.js';
import { ar } from './locales/ar.js';
import { ko } from './locales/ko.js';
import { zhCN } from './locales/zh-cn.js';
import { ja } from './locales/ja.js';
import { ru } from './locales/ru.js';
import { zhTW } from './locales/zh-tw.js';
import { vi } from './locales/vi.js';
import { id } from './locales/id.js';

export const en = {
  meta: {
    title: 'Jack (B.) von Wiese und Kaiserswaldau',
    description: 'Founder. Knight. Pirate. Dandy. Worldbuilder. Founder + CEO of ONTHEBIAS.',
  },
  nav: {
    manifesto: 'Manifesto',
    marginalia: 'Marginalia',
    worldview: 'Worldview',
    vita: 'Vita',
    arsenal: 'Arsenal',
    obsessions: 'Obsessions',
    cabinet: 'Cabinet',
    contact: 'Contact',
  },
  hero: {
    est: 'EST. 2001',
    tags: 'FOUNDER · CURATOR · DESIGNER · ARTIST · TASTEMAKER · AESTHETE · DANDY · WORLDBUILDER · KNIGHT · PIRATE',
    sigSuffix: 'the storyteller who joins things together.',
    scroll: 'SCROLL',
  },
  manifesto: {
    eyebrow: '§ I · Manifesto',
    ledePrefix: 'A',
    ledeSuffix: ': a storyteller who joins things together.',
    purposeP1: 'I am on this earth to',
    purposeAccent1: 'proliferate creativity and introspection',
    purposeP2: 'for humankind. To make them all creators. To set in motion a',
    purposeAccent2: 'global human renaissance',
    purposeP3: '.',
  },
  brandStrip: {
    eyebrow: "Brands I've contributed to.",
    subEyebrow: '(via product design and creation)',
    tail: 'And more.',
  },
  pubStrip: {
    eyebrow: 'I work behind the scenes, my clients appear in:',
    tail: 'And more.',
  },
  marginalia: {
    eyebrow: '§ II · Marginalia',
    heading: 'Factoids.',
    facts: [
      'I have helped shape over 50M products globally.',
      "I influenced Emma Chamberlain's style before she became a household name.",
      'I have done business in over 46 - and counting - countries.',
      "I am your favorite designer's favorite designer.",
      'My materials are used in fashion schools and programs all across the world as an exemplary standard.',
      'Tens of thousands of designers around the world depend on my frameworks and resources.',
      'I am fiercely autodidactic.',
      'I have generated over 20M impressions on social media.',
      'I have built my life and practice to serve as a bridge between dreams and reality for others - at scale. This is what fulfills me.',
      'I grew up in Dyersville, Iowa, where the baseball movie "Field of Dreams" was filmed. If you build it, they will come!',
      'I never had coffee until I was 22.',
      'My favorite designers are Vivienne Westwood, Raf Simons, and Ralph Lauren.',
      'My favorite artists are Max Ernst, Yves Klein, Theo Van Doesburg, Kurt Schwitters, and Thomas Rowlandson.',
      'My favorite book is Don Quijote de La Mancha.',
    ],
  },
  vita: {
    epigraph: 'I am nothing and know nothing, thus, I can do anything.',
    eyebrow: '§ IV · Vita',
    portraitCaption: 'Portrait · ROMULUS',
    paragraphs: [
      'I was raised in Iowa, in a family that has been nobly getting it out of the dirt for hundreds of years.',
      'Childhood was building and creating: LEGO, stop-motion, books, writing, and fashion. Through these mediums, I discovered my love for storytelling, and bringing things from 0 to 1 (imagination to reality). I also discovered at an early age my fundamental fascination with all forms of human expression, and my mission to proliferate it in all forms.',
      'I left at sixteen for the East Coast and then headed west to San Francisco - the long-walked path from a small town to a big stage.',
      'Five companies before concluding university, then a decade in apparel design and manufacturing, scaling my love for being the bridge between dreams and reality globally for thousands.',
    ],
  },
  worldview: {
    eyebrow: '§ III · Worldview',
    theses: [
      {
        title: 'Technology should free humanity to make.',
        body: 'The printing press freed reading. The loom freed weaving. Software freed writing. The next layer does not replace the creator - it removes the secretarial labor between a vision and its realization. The result is not fewer artists but a civilization of them. Humankind was born to create.',
      },
      {
        title: 'Dream the impossible dream. Live it voraciously.',
        body: 'Don Quixote tilted at windmills because the dream was bigger than the wind. The dream is always bigger than the wind. Dream past what they say can be done. Find the biggest windmill on your horizon, the one that gives you the most fear, but elicits the most excitement in your heart, and charge at it with full speed and courage.',
      },
    ],
  },
  arsenal: {
    eyebrow: '§ V · Arsenal',
    heading: 'Involvement.',
    tiles: [
      {
        title: 'ONTHEBIAS',
        years: '2024 -',
        role: 'Founder + CEO',
        body: "The product design and creation platform for the world's taste-led brands. 40 hours of design-to-factory in ten minutes. 260x increase in productivity while keeping brand identity and taste central.",
      },
      {
        title: 'RedBoxMe × Cartier',
        years: '2025 -',
        role: 'Member',
        body: 'Paris-based philanthropic + cultural initiative under the Cartier umbrella, gathering a new generation of patrons and builders.',
      },
      {
        title: 'The Residency',
        years: '2026',
        role: 'Cohort Founder',
        body: 'Program in San Francisco supporting founders and exceptional individuals. Backed by Sam Altman. ~0.5% acceptance rate.',
      },
      {
        title: 'HRMTG',
        years: '2021 - 2024',
        role: 'Founder',
        body: 'A passion project. Historical Reinterpretations Made Through Garments. A streetwear label shipped to 12+ countries. Campaign partner with Free Arts NYC.',
      },
      {
        title: 'Back by Popular Demand',
        years: '2017 - 2023',
        role: 'Founder',
        body: 'Door into the industry I made and opened myself because I wanted in. DTC e-commerce fashion company. 10,000 sales globally before my sophomore year of high school.',
      },
      {
        title: 'Studio Consulting',
        years: '2017 -',
        role: 'Brand + Marketing + Design',
        body: 'Brand identity, marketing, and design for founders and existing brands alike, building physical-product companies worth building.',
      },
    ],
  },
  triptych: {
    captions: [
      { lead: 'Lifelong dandy.', body: '' },
      { lead: 'Old family farm.', body: 'We ultimately lost it :(' },
      { lead: 'Today.', body: 'Same kid. Bigger floor.' },
    ],
    numerals: ['i.', 'ii.', 'iii.'],
  },
  obsessions: {
    eyebrow: '§ VI · Obsessions',
    heading: 'What I read, what I love, how I think.',
    paintingCaptionLead: 'Don Quijote:',
    paintingCaption: 'The patron saint of dreaming large and taking bold actions towards those dreams.',
    literatureHeader: 'Literature',
    literatureLead: 'Some favorites:',
    literature: [
      'Cervantes - Don Quixote',
      'Homer - Iliad & Odyssey',
      'Tolstoy - War and Peace',
      'Shakespeare - the late tragedies',
      'Emerson - Essays & Self-Reliance',
      'Marcus Aurelius - Meditations',
      'Dante - Divina Commedia',
      'Dumas - The Three Musketeers',
      'Kerouac - On the Road',
      'Hemingway - For Whom the Bell Tolls',
      'Chaucer - Canterbury Tales',
      'Laclos - Les Liaisons Dangereuses',
    ],
    historyHeader: 'History',
    historyLead: 'Any period of profound paradigm shift:',
    history: [
      'The Age of Sail (1500-1850)',
      'Pirates of the Caribbean & Pacific',
      'Mediaeval Europe & Chivalric Orders',
      'Ancient Greece & Rome',
      'Revolutions of 1776 · 1789 · 1848 · 1917',
      'Habsburgs · Bourbons · Romanovs',
      'Renaissance Florence',
    ],
    languagesHeader: 'Languages',
    languagesGoalPrefix: 'Lifetime goal:',
    languagesGoalWord: 'twelve',
    languagesGoalPunct: '.',
    makingHeader: 'Making, beyond the desk',
    makingBody: 'Sculpture, painting, dance, running, learning languages, travel: some of my favorite activities!',
    inOtherFormsLabel: 'In other forms',
    writingsKind: 'Writings',
    writingsTitle: 'A Series of Poems About Someone Who Will Never Read Them',
    writingsBody: 'A testament addressed to a reader who is not watching.',
    soundKind: 'Sound',
    soundTitle: 'Pensive Bouts',
    soundBody: 'For a brief season I kept an auditory journal under the moniker Pensive Bouts. Quiet hours, recorded out loud. A parenthesis.',
    grewUpForget: 'from',
    poemReaderToggleOpen: 'Read the entire series',
    poemReaderToggleClose: 'Close the series',
    poemReaderBylinePrefix: 'by Jack Wiese',
    poemReaderBylineSuffix: 'parts',
    poemReaderEnd: '- end of series -',
    poemReaderCollapse: '↑ Collapse',
  },
  cabinet: {
    eyebrow: '§ VII · Cabinet de Curiosités',
    heading: 'Four personal collections, slowly being assembled.',
    formingALabel: 'forming a collection',
    collections: [
      {
        title: 'Antique tapestries',
        era: '15th – 18th century',
        note: 'Flemish, Aubusson, Gobelins. Mythological, hunting, allegorical. Forming a collection.',
      },
      {
        title: 'Historic arms + armour',
        era: '14th – 18th century',
        note: 'European arms of the chivalric and early-modern eras. Rapiers, helms, partial harnesses. Forming a collection.',
      },
      {
        title: 'Antique maps',
        era: '15th – 19th century',
        note: 'Mercator, Blaeu, Ortelius. Maps of empire, exploration, lost geographies. Forming a collection.',
      },
      {
        title: 'Historic + significant garments',
        era: '14th century – modern',
        note: 'Pieces that mark moments where dress became language. Forming a collection.',
      },
    ],
  },
  contact: {
    eyebrow: '§ VIII · En Correspondance',
    heading: 'Contact.',
    primary: 'jack@onthebias.co',
    cta: 'Book a meeting →',
    linkedinLabel: 'LinkedIn',
    instagramLabel: 'Instagram',
    companyLabel: 'Company',
    where: 'DC · MILANO · PARIS · SFO',
  },
  footer: {
    knightTitle: 'KNIGHT OF THE CRIMSON BIAS',
  },
  languagePicker: {
    aria: 'Change language',
  },
};

export const strings = {
  en,
  es,
  fr,
  it,
  de,
  pt,
  nl,
  hi,
  tr,
  ar,
  ko,
  'zh-cn': zhCN,
  ja,
  ru,
  'zh-tw': zhTW,
  vi,
  id,
};
