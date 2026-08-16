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
    title: 'Jack (B.) Wiese',
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
    sigSuffix: "My life purpose (raison d'être): proliferate creative expression in the physical world and lay the foundation for a global human renaissance.",
    scroll: 'SCROLL',
  },
  manifesto: {
    eyebrow: '§ I · Manifesto',
    ledePrefix: 'A',
    ledeSuffix: ': a storyteller who joins things together.',
    purposeP1: 'I am on this earth to',
    purposeAccent1: 'proliferate creativity and introspection',
    purposeP2: 'for humankind. To make every person on earth a creator. To set in motion a',
    purposeAccent2: 'global human renaissance',
    purposeP3: '.',
    vowPrefix: 'For this cause, I am an',
    vowAccent: 'unwavering knight',
    vowSuffix: ', and everything I do is aligned to this purpose.',
  },
  brandStrip: {
    eyebrow: "Brands I've contributed to.",
    subEyebrow: '(via product design and creation)',
    tail: 'And more.',
  },
  pubStrip: {
    eyebrow: 'I work behind the scenes - my clients appear in:',
    tail: 'And more.',
  },
  marginalia: {
    eyebrow: '§ III · Marginalia',
    heading: 'Factoids.',
    facts: [
      'I have helped shape over 50M products globally.',
      "I influenced Emma Chamberlain's style before she became a household name.",
      'I have done business in over 46 - and counting - countries.',
      "I am your favorite designer's favorite designer.",
      'My materials are used in fashion schools and programs all across the world as an exemplary standard.',
      'Tens of thousands of designers around the world depend on my technical frameworks and resources.',
      'I am fiercely autodidactic.',
      'I have generated over 20M impressions on social media.',
      'I have built my life and practice to serve as a bridge between dreams and physical reality for others - at scale. This is what fulfills me.',
      'I grew up in Dyersville, Iowa, where the baseball movie "Field of Dreams" was filmed. If you build it, they will come!',
      'Grant Wood, who painted American Gothic, was born 35 miles from where I grew up.',
      'I never had coffee until I was 22.',
      'My favorite designers are Vivienne Westwood, Raf Simons, and Ralph Lauren.',
      'My favorite artists are Max Ernst, Yves Klein, Theo Van Doesburg, Kurt Schwitters, and Thomas Rowlandson.',
      'My favorite book is Don Quijote de La Mancha.',
    ],
  },
  vita: {
    epigraph: 'I am nothing and know nothing, thus, I can do anything.',
    eyebrow: '§ II · Vita',
    portraitCaption: 'Portrait · ROMULUS',
    paragraphs: [
      'The basement had a screenprinter, a sewing machine, and an embroidery machine. My parents gave me the space and the permission - the tools were mine to bring in. That apparatus for creative expression turned into self-discovery, self-discovery into purpose. Everything I have built since is purpose-built to give others a similar space and permission to be creative and discover their authentic selves.',
      "I was raised in Iowa, in a family that has been nobly getting it out of the dirt for hundreds of years. My grandmother was an art teacher and painter. My parents both worked at Macy's before I was born. Art and fashion are in my blood as much as the land.",
      'I left at sixteen and did not stop. East Coast, Europe, San Francisco. A decade in fashion design and manufacturing, building the bridge between imagination and physical reality for thousands of dreamers across the globe.',
      "There have been stretches of my life spent in designer clothes, a Rolex, etc. through more airports than I can remember. There have been also been stretches of my life when I did not know where next week's food or bed would come from. Both are true. Through all of it, my purpose and the obsession with my mission were still inescapable.",
      'The obsession was inherited. My father has been to war for our family three times. All my siblings serve. I chose the creative less certain path, but I carry their same militaristic sense of rigor, dedication, excellence.',
      "That same inexhaustible fire that fueled me in that small town Iowa basement still burns bright today, only difference is, those dreams are becoming reality - and a few other quixotic dreamers and I are working to hand that same fire to every human on earth to light the way for a global renaissance...",
    ],
  },
  worldview: {
    eyebrow: '§ IV · Worldview',
    theses: [
      {
        title: 'Technology should free humanity to make and play.',
        body: 'The printing press freed reading. The loom freed weaving. Software freed writing. The next layer does not replace the creator - it removes the secretarial labor between a vision and its realization. The result is not fewer artists but a civilization of them. Humankind was born to create.',
      },
      {
        title: 'We need more libraries and art centers.',
        body: 'Rocket ships and data centers have their place. But the balance right now is tilted too heavily toward tech-industry monuments and not enough toward free public libraries and art centers. Technology should serve the proliferation of human culture in the physical world. What we build with our wealth is what we actually value. I want to build the modern Mouseion alongside the modern moonshot.',
      },
      {
        title: 'Dream the impossible dream. Live it voraciously.',
        body: 'Don Quixote tilted at windmills because the dream was bigger than the wind. The dream is always bigger than the wind. Dream past what they say can be done. Find the biggest windmill on your horizon, the one that gives you the most fear, but elicits the most excitement in your heart, and charge at it with full speed and courage.',
      },
      {
        title: 'Iowa boys do not stop.',
        body: 'Generations of my farming family got it out of the dirt because they had no other choice. What was pure survival for them is now my unfair advantage. I do not fold, I do not complain, I make it work. That is what I inherit, and it is what I owe. We may be a bit rough around the edges at times, but there is never a day we are not working. Iowa boys are inevitable.',
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
        body: "The product design and creation platform for the world's taste-led brands. 40-hour design-to-factory handoff, compressed to ten minutes. 260x increase in productivity while keeping brand identity and taste central. Named for the tailoring technique of cutting fabric at 45 degrees to the grain, against orthodoxy, for drape and give.",
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
        body: 'A door into the industry I made and opened myself, because I wanted in. DTC e-commerce fashion company. 10,000 sales globally before my sophomore year of high school.',
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
    paintingCaptionLead2: 'Dar al través (scuttle the ships):',
    paintingCaption2: 'When commitment becomes irreversible.',
    paintingCaptionLead3: 'Theo van Doesburg:',
    paintingCaption3: 'Where the inspiration for the square on the bias comes from. The unique directionality against orthodoxy.',
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
