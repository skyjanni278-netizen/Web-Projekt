type RawShopProduct = Record<string, unknown>;

export const SHOP_PRODUCTS_RAW: RawShopProduct[] = [
  {
    id: 'shirt-premium',
    name: 'Vereins T-Shirt Premium',
    category: 'kleidung',
    description:
      'Super bequemes T-Shirt aus Bio-Baumwolle. Das Logo sitzt perfekt und die Qualität ist echt top.',
    price: 35,
    sizes: ['s', 'm', 'l', 'xl'],
    imageUrl: '/Bilder/vereinsT-shirt.png',
    imageAlt: 'Vereins T-Shirt Premium',
    badge: 'neu'
  },
  {
    id: 'softshell-jacke',
    name: 'Vereinsjacke Softshell',
    category: 'kleidung',
    description:
      'Mega praktisch bei Wind und Wetter. Hält was sie verspricht und ist alltagstauglich.',
    price: 65,
    oldPrice: 75,
    sizes: ['s', 'm', 'l', 'xl'],
    imageUrl: '/Bilder/vereinsJacke.png',
    imageAlt: 'Vereinsjacke Softshell'
  },
  {
    id: 'fanschal',
    name: 'Fanschal',
    category: 'accessoires',
    description:
      'Klassischer Fanschal in Vereinsfarben. Perfekt für kalte Spieltage und zum Anfeuern.',
    price: 18,
    sizes: ['one-size'],
    imageUrl: '/Bilder/vereinsSchal.png',
    imageAlt: 'Fanschal',
    badge: 'sale'
  },
  {
    id: 'baseball-cap',
    name: 'Baseball Cap',
    category: 'accessoires',
    description:
      'Klassische Cap mit Vereinslogo. Sitzt bequem und ist im Alltag gut kombinierbar.',
    price: 15,
    sizes: ['one-size'],
    imageUrl: '/Bilder/vereinsCap.png',
    imageAlt: 'Baseball Cap'
  },
  {
    id: 'sportrucksack',
    name: 'Sportrucksack',
    category: 'accessoires',
    description:
      'Praktischer Rucksack für Training und Ausflüge mit viel Stauraum und guten Schultergurten.',
    price: 45,
    sizes: ['one-size'],
    imageUrl: '/Bilder/vereinsRucksack.png',
    imageAlt: 'Sportrucksack',
    badge: 'neu'
  },
  {
    id: 'sporttasche',
    name: 'Sporttasche',
    category: 'accessoires',
    description:
      'Geräumige Sporttasche für Training und Wettkampf. Robustes Material und gute Aufteilung.',
    price: 38,
    sizes: ['one-size'],
    imageUrl: '/Bilder/vereinsSporttasche.png',
    imageAlt: 'Sporttasche'
  },
  {
    id: 'trinkflasche',
    name: 'Vereins Trinkflasche',
    category: 'sport',
    description:
      'BPA-freie Trinkflasche aus Edelstahl. Hält Getränke lange kalt oder warm.',
    price: 12,
    sizes: ['one-size'],
    imageUrl: '/Bilder/vereinsTrinkflasche.png',
    imageAlt: 'Vereins Trinkflasche'
  },
  {
    id: 'sporthandtuch',
    name: 'Sporthandtuch',
    category: 'sport',
    description:
      'Hochwertiges Mikrofaser-Handtuch mit Vereinslogo. Schnelltrocknend und angenehm leicht.',
    price: 20,
    sizes: ['one-size'],
    imageUrl: '/Bilder/vereinsHandtuch.png',
    imageAlt: 'Sporthandtuch',
    badge: 'neu'
  }
];
