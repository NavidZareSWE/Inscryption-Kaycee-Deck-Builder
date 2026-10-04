/* ══════════════════ ART ══════════════════
   Card faces and sigil glyphs sliced out of the reference
   sheets, packed into two sprite sheets.                   */
const ART = {
  cols: 11,
  rows: 10,
  pos: {
    Kingfisher: 0,
    RavenEgg: 1,
    Sparrow: 2,
    Magpie: 3,
    Cuckoo: 4,
    Lammergeier: 5,
    Raven: 6,
    Vulture: 7,
    DireWolfCub: 8,
    DireWolf: 9,
    Wolf_Talking: 10,
    WolfCub: 11,
    Bloodhound: 12,
    CagedWolf: 13,
    RedHart: 14,
    Bull: 15,
    Wolf: 16,
    Coyote: 17,
    Alpha: 18,
    Lice: 19,
    AntFlying: 20,
    MealWorm: 21,
    JerseyDevil: 22,
    Snelk: 23,
    Goat: 24,
    ElkCub: 25,
    Tadpole: 26,
    MudTurtle: 27,
    Elk: 28,
    Pronghorn: 29,
    Moose: 30,
    Ijiraq: 31,
    Kraken: 32,
    Hodag: 33,
    HydraEgg: 34,
    MantisGod: 35,
    Mothman_Stage1: 36,
    Bee: 37,
    Beehive: 38,
    AquaSquirrel: 39,
    Raccoon: 40,
    Stoat: 41,
    Wolverine: 42,
    Mantis: 43,
    RingWorm: 44,
    Ant: 45,
    AntQueen: 46,
    Stinkbug_Talking: 47,
    Cockroach: 48,
    Maggots: 49,
    Hydra: 50,
    Geck: 51,
    Ouroboros: 52,
    Bullfrog: 53,
    Skink: 54,
    Adder: 55,
    Snapper: 56,
    Rattler: 57,
    PeltHare: 58,
    PeltWolf: 59,
    PeltGolden: 60,
    MoleMan: 61,
    Amalgam: 62,
    PackRat: 63,
    Daus: 64,
    Urayuli: 65,
    Amoeba: 66,
    Squirrel: 67,
    Cat: 68,
    SquidCards: 69,
    SquidMirror: 70,
    Mole: 71,
    Porcupine: 72,
    Otter: 73,
    Skunk: 74,
    Stoat_Talking: 75,
    Warren: 76,
    Beaver: 77,
    SquidBell: 78,
    FieldMouse: 79,
    RatKing: 80,
    Shark: 81,
    Grizzly: 82,
    Opossum: 83,
    Bat: 84,
    "!STATIC!GLITCH": 85,
    "!DEATHCARD_BASE": 86,
    Boulder: 87,
    DausBell: 88,
    Dam: 89,
    FrozenOpossum: 90,
    Rabbit: 91,
    Smoke: 92,
    Smoke_Improved: 93,
    Mothman_Stage2: 94,
    Mothman_Stage3: 95,
    CatUndead: 96,
    BaitBucket: 97,
    GoldNugget: 98,
    Tree: 99,
    Trap: 100,
    Mule: 101,
    Tree_SnowCovered: 102,
    Starvation: 103,
    TrapFrog: 104,
    Stump: 105,
  },
};
const SIGART = {
  cols: 10,
  rows: 4,
  pos: {
    1: 0,
    2: 1,
    3: 2,
    4: 3,
    5: 4,
    6: 5,
    7: 6,
    8: 7,
    9: 8,
    10: 9,
    11: 10,
    12: 11,
    13: 12,
    14: 13,
    15: 14,
    16: 15,
    17: 16,
    18: 17,
    19: 18,
    20: 19,
    21: 20,
    22: 21,
    23: 22,
    24: 23,
    25: 24,
    26: 25,
    28: 26,
    29: 27,
    31: 28,
    34: 29,
    54: 30,
    75: 31,
    83: 32,
    99: 33,
    100: 34,
    101: 35,
    102: 36,
    103: 37,
    104: 38,
    106: 39,
  },
};

/* ══════════════════ DATA ══════════════════ */
const SIGILS = [
  [
    1,
    "Rabbit Hole",
    "When a card bearing this sigil is played, a Rabbit is created in your hand. A Rabbit is defined as: 0 Power, 1 Health.",
  ],
  [
    2,
    "Bees Within",
    "Once a card bearing this sigil is struck, a Bee is created in your hand. A Bee is defined as: 1 Power, 1 Health, Guardian.",
  ],
  [
    3,
    "Sprinter",
    "At the end of the owner's turn, a card bearing this sigil will move in the direction inscribed in the sigil.",
  ],
  [
    4,
    "Touch of Death",
    "When a card bearing this sigil damages another creature, that creature perishes.",
  ],
  [
    5,
    "Fledgling",
    "A card bearing this sigil will grow into a more powerful form after 1 turn on the board.",
  ],
  [
    6,
    "Dam Builder",
    "When a card bearing this sigil is played, a Dam is created on each empty adjacent space. A Dam is defined as: 0 Power, 2 Health.",
  ],
  [
    7,
    "Hoarder",
    "When a card bearing this sigil is played, you may search your deck for any card and take it into your hand.",
  ],
  [
    8,
    "Burrower",
    "When an empty space would be struck, a card bearing this sigil will move to that space to receive the strike instead.",
  ],
  [
    9,
    "Fecundity",
    "When a card bearing this sigil is played, a copy of it is created in your hand.",
  ],
  [
    10,
    "Loose Tail",
    "When a card bearing this sigil would be struck, a Tail is created in its place and a card bearing this sigil moves to the right.",
  ],
  [
    11,
    "Corpse Eater",
    "If a creature that you own perishes by combat, a card bearing this sigil in your hand is automatically played in its place.",
  ],
  [
    12,
    "Bone King",
    "When a card bearing this sigil dies, 4 bones are awarded instead of 1.",
  ],
  [
    13,
    "Waterborne",
    "A card bearing this sigil submerges itself during its opponent's turn. While submerged, opposing creatures attack its owner directly.",
  ],
  [
    14,
    "Unkillable",
    "When a card bearing this sigil perishes, a copy of it is created in your hand.",
  ],
  [
    15,
    "Sharp Quills",
    "Once a card bearing this sigil is struck, the striker is then dealt a single damage point.",
  ],
  [
    16,
    "Hefty",
    "At the end of the owner's turn, a card bearing this sigil will move in the direction inscribed in the sigil. Creatures in the way will be pushed in the same direction.",
  ],
  [
    17,
    "Ant Spawner",
    "When a card bearing this sigil is played, an Ant is created in your hand.",
  ],
  [
    18,
    "Guardian",
    "When an opposing creature is placed opposite to an empty space, a card bearing this sigil will move to that empty space.",
  ],
  [
    19,
    "Airborne",
    "A card bearing this sigil will strike an opponent directly, even if there is a creature opposing it.",
  ],
  [
    20,
    "Many Lives",
    "When a card bearing this sigil is sacrificed it does not perish.",
  ],
  [
    21,
    "Repulsive",
    "If a creature would attack a card bearing this sigil, it does not.",
  ],
  [
    22,
    "Worthy Sacrifice",
    "A card bearing this sigil is counted as 3 Blood rather than 1 Blood when sacrificed.",
  ],
  [
    23,
    "Mighty Leap",
    "A card bearing this sigil will block an opposing creature bearing the Airborne sigil.",
  ],
  [
    24,
    "Bifurcated Strike",
    "A card bearing this sigil will strike each opposing space to the left and right of the space across from it.",
  ],
  [
    25,
    "Trifurcated Strike",
    "A card bearing this sigil will strike each opposing space to the left, right, and center of it.",
  ],
  [
    26,
    "Frozen Away",
    "When a card bearing this sigil perishes, the creature inside is released in its place.",
  ],
  [27, "Sinkhole", "(No Description)"],
  [
    28,
    "Bone Digger",
    "At the end of the owner's turn, a card bearing this sigil will generate 1 Bone.",
  ],
  [
    29,
    "Trinket Bearer",
    "When a card bearing this sigil is played, you will receive a random item as long as you have less than 3 items.",
  ],
  [
    30,
    "Steel Trap",
    "When a card bearing this sigil perishes, the creature opposing it perishes as well. A pelt is created in your hand.",
  ],
  [
    31,
    "Amorphous",
    "When a card bearing this sigil is drawn, this sigil is replaced with another sigil at random.",
  ],
  [
    32,
    "Tidal Lock",
    "At the beginning of its owner's turn, a card bearing this sigil will pull small creatures, like Squirrels, into its orbit.",
  ],
  [
    33,
    "Omni Strike",
    "A card bearing this sigil will strike each opposing space that is occupied by a creature. It will strike directly if no creatures oppose it.",
  ],
  [
    34,
    "Leader",
    "Creatures adjacent to a card bearing this sigil gain 1 power.",
  ],
  [35, "Brittle", "After attacking, a card bearing this sigil perishes."],
  [
    36,
    "Skeleton Crew",
    "At the end of the owner's turn, a card bearing this sigil will move in the direction inscribed in the sigil and drop a Skeleton in its old space.",
  ],
  [
    37,
    "Green Mox",
    "While a card bearing this sigil is on the board, it provides a Green Gem to its owner.",
  ],
  [
    38,
    "Orange Mox",
    "While a card bearing this sigil is on the board, it provides an Orange Gem to its owner.",
  ],
  [
    39,
    "Blue Mox",
    "While a card bearing this sigil is on the board, it provides a Blue Gem to its owner.",
  ],
  [
    40,
    "Gem Animator",
    "Mox cards on the owner's side of the board gain 1 power.",
  ],
  [
    41,
    "Ruby Heart",
    "When a card bearing this sigil perishes, a Ruby Mox is created in its place.",
  ],
  [
    42,
    "Mental Gemnastics",
    "When a card bearing this sigil is played, you draw cards equal to the amount of Mox cards on your side of the board.",
  ],
  [
    43,
    "Gem Dependant",
    "If a card bearing this sigil's owner controls no Mox cards, a card bearing this sigil perishes.",
  ],
  [
    44,
    "Great Mox",
    "While a card bearing this sigil is on the board, it provides a Green, Orange, and Blue gem to its owner.",
  ],
  [
    45,
    "Handy",
    "When a card bearing this sigil is played, discard your hand then draw a new hand of 4 cards.",
  ],
  [
    46,
    "Squirrel Shedder",
    "At the end of the owner's turn, a card bearing this sigil will move in the direction inscribed in the sigil and drop a Squirrel in their old space.",
  ],
  [
    47,
    "Attack Conduit",
    "Other creatures within a circuit completed by a card bearing this sigil gain 1 power.",
  ],
  [
    48,
    "Spawn Conduit",
    "Empty spaces within a circuit completed by a card bearing this sigil spawn L33pB0ts at the end of the owner's turn.",
  ],
  [
    49,
    "Healing Conduit",
    "Other creatures within a circuit completed by a card bearing this sigil are healed at the end of the owner's turn.",
  ],
  [
    50,
    "Null Conduit",
    "A card bearing this sigil may complete a circuit, but provides no effect.",
  ],
  [
    51,
    "Battery Bearer",
    "When a card bearing this sigil is played, it provides an Energy Cell to its owner.",
  ],
  [
    52,
    "Detonator",
    "When a card bearing this sigil dies, the creature opposing it, as well as adjacent friendly creatures, are dealt 10 damage.",
  ],
  [
    53,
    "Sniper",
    "You may choose which opposing space a card bearing this sigil strikes.",
  ],
  [
    54,
    "Nano Armor",
    "The first time a card bearing this sigil would take damage, prevent that damage.",
  ],
  [
    55,
    "Overclocked",
    "A card bearing this sigil has increased power. But, if a card bearing this sigil perishes, it is permanently removed from your deck.",
  ],
  [
    56,
    "Bomb Latch",
    "When a card bearing this sigil perishes, its owner chooses a creature to gain the Detonator sigil.",
  ],
  [
    57,
    "Brittle Latch",
    "When a card bearing this sigil perishes, its owner chooses a creature to gain the Brittle sigil.",
  ],
  [
    58,
    "Shield Latch",
    "When a card bearing this sigil perishes, its owner chooses a creature to gain the Nano Armor sigil.",
  ],
  [
    59,
    "Dead Byte",
    "When a card bearing this sigil perishes, select a file. Place damage on the scales according to the file's size.",
  ],
  [
    60,
    "Hostage File",
    "When a card bearing this sigil perishes the file used to create it is really deleted from your Hard Drive.",
  ],
  [
    61,
    "Transformer",
    "At the beginning of your turn a card bearing this sigil will transform to, or from, Beast mode.",
  ],
  [
    62,
    "Sentry",
    "When a creature moves into the space opposing a card bearing this sigil, they are dealt 1 damage.",
  ],
  [
    63,
    "Gem Detonator",
    "When Gem Vessels on the owner's side of the board die, they Detonate (the creature opposing them, as well as adjacent friendly creatures, are dealt 10 damage).",
  ],
  [
    64,
    "Gem Guardian",
    "When a card bearing this sigil is played, all Gem Vessels on the owners' side of the board gain Nano Armor.",
  ],
  [
    65,
    "Vessel Printer",
    "Once a card bearing this sigil is struck, draw a card from your Empty Vessel pile.",
  ],
  [
    66,
    "Energy Conduit",
    "If a card bearing this sigil is part of a completed circuit, your Energy never depletes.",
  ],
  [
    67,
    "Bomb Spewer",
    "When a card bearing this sigil is played, fill all empty spaces with Explode Bots.",
  ],
  [
    68,
    "Double Death",
    "When another creature you own dies, it is returned to life and dies again immediately.",
  ],
  [
    69,
    "Power Dice",
    "Pay 1 Energy to set the power of a card bearing this sigil randomly between 1 and 6.",
  ],
  [70, "Bone Dice", "(No Description)"],
  [
    71,
    "Enlarge",
    "Pay 2 Bones to increase the power and health of a card bearing this sigil by 1.",
  ],
  [
    72,
    "Swapper",
    "After a card bearing this sigil is dealt damage, swap its Power and Health.",
  ],
  [73, "Disentomb", "Pay 1 Bone to create a Skeleton in your hand."],
  [
    74,
    "Energy Gun",
    "Pay 1 Energy to deal 1 damage to the creature across from a card bearing this sigil.",
  ],
  [
    75,
    "Bellist",
    "When a card bearing this sigil is played, a Chime is created on each empty adjacent space. A Chime is defined as: 0 Power, 1 Health.",
  ],
  [
    76,
    "Annoying",
    "The creature opposing a card bearing this sigil gains 1 power.",
  ],
  [
    77,
    "Gem Spawn Conduit",
    "Empty spaces within a circuit completed by a card bearing this sigil spawn Gem Vessels at the end of the owner's turn.",
  ],
  [
    78,
    "Gift Bearer",
    "When a card bearing this sigil perishes, a random card is created in your hand.",
  ],
  [
    79,
    "Looter",
    "When a card bearing this sigil deals damage directly, draw a card for each damage dealt.",
  ],
  [
    80,
    "True Scholar",
    "If you have a Blue gem, sacrifice a card bearing this sigil to draw 3 cards.",
  ],
  [
    81,
    "Stimulate",
    "Pay 3 Energy to increase the power and health of a card bearing this sigil by 1.",
  ],
  [82, "Marrow Sucker", "Pay 2 Bones to heal a card bearing this sigil."],
  [
    83,
    "Stinky",
    "The creature opposing a card bearing this sigil loses 1 power.",
  ],
  [
    84,
    "Buff When Powered",
    "If a card bearing this sigil is within a circuit, it gains 2 power.",
  ],
  [
    85,
    "Gift When Powered",
    "If a card bearing this sigil is within a circuit when it perishes, a random card is created in your hand.",
  ],
  [
    86,
    "Trifurcated When Powered",
    "If a card bearing this sigil is within a circuit, it will strike each opposing space to the left, right, and center of it.",
  ],
  [87, "Bonehorn", "Pay 1 Energy to gain 3 Bones."],
  [
    88,
    "Clinger",
    "When one of your creatures is placed in a space, a card bearing this sigil will move towards them as far as possible.",
  ],
  [
    89,
    "Kraken Waterborne",
    "A card bearing this sigil submerges itself during its opponent's turn. While submerged, opposing creatures attack its owner directly.",
  ],
  [
    90,
    "Blood Guzzler",
    "When a creature bearing this sigil deals damage, it gains 1 health for each damage dealt.",
  ],
  [
    91,
    "Haunter",
    "When a creature bearing this sigil dies, it haunts the space it died in. Creatures played on this space gain its old sigils.",
  ],
  [
    92,
    "Exploding Corpse",
    "When a creature bearing this sigil dies, all empty spaces on the board are filled with a Guts card.",
  ],
  [
    93,
    "Apparition",
    "A creature bearing this sigil gains 1 power when you speak 'Bloody Mary' into a connected microphone up to a total of 13 times.",
  ],
  [
    94,
    "Virtual Realist",
    "If a VR headset is connected, a creature bearing this sigil may be played without paying its cost.",
  ],
  [
    95,
    "Head of Edaxio",
    "Edaxio is summoned if you control creatures bearing the sigils of Head, Arms, Legs, and Torso of Edaxio.",
  ],
  [
    96,
    "Arms of Edaxio",
    "Edaxio is summoned if you control creatures bearing the sigils of Head, Arms, Legs, and Torso of Edaxio.",
  ],
  [
    97,
    "Legs of Edaxio",
    "Edaxio is summoned if you control creatures bearing the sigils of Head, Arms, Legs, and Torso of Edaxio.",
  ],
  [
    98,
    "Torso of Edaxio",
    "Edaxio is summoned if you control creatures bearing the sigils of Head, Arms, Legs, and Torso of Edaxio.",
  ],
  [
    99,
    "Brood Parasite",
    "When a card bearing this sigil is played, an egg is created on the opposing space.",
  ],
  [
    100,
    "Double Strike",
    "A card bearing this sigil will strike the opposing space an extra time when attacking.",
  ],
  [
    101,
    "Scavenger",
    "While a card bearing this sigil is on the board, opposing creatures also provide bones when perishing.",
  ],
  [
    102,
    "Rampager",
    "At the end of the owner's turn, a card bearing this sigil will move in the direction inscribed in the sigil. Creatures in the way will be thrown back behind it.",
  ],
  [
    103,
    "Morsel",
    "When a card bearing this sigil is sacrificed, it adds its stat values to the card it was sacrificed for.",
  ],
  [
    104,
    "Blood Lust",
    "When a card bearing this sigil attacks an opposing creature and it perishes, this card gains 1 power.",
  ],
  [
    105,
    "Made of Stone",
    "A card bearing this sigil is immune to the effects of Touch of Death and Stinky.",
  ],
  [
    106,
    "Finical Hatchling",
    "A card bearing this sigil hatches when drawn if the numbers 1 to 5 are represented in the health of creatures in your deck, and in their power, and if there is a creature of each tribe in your deck.",
  ],
];

/* Cards.
   i  internal file name (goes in cardIds)
   n  printed name
   a  power  (null = not verified, "V" = variable stat)
   h  health (null = not verified)
   c  cost type: b=blood, o=bones, f=free
   v  cost value
   t  tribes
   s  printed sigil IDs
   g  group: base | km | given | odd
   q  note                                                          */
const CARDS = [
  /* --- Act I base pool --- */
  {
    i: "Adder",
    n: "Adder",
    a: 1,
    h: 1,
    c: "b",
    v: 2,
    t: ["Reptile"],
    s: [4],
    g: "base",
  },
  {
    i: "Alpha",
    n: "Alpha",
    a: 1,
    h: 2,
    c: "o",
    v: 4,
    t: ["Canine"],
    s: [34],
    g: "base",
  },
  {
    i: "Amalgam",
    n: "Amalgam",
    a: 3,
    h: 3,
    c: "b",
    v: 2,
    t: ["Avian", "Canine", "Hooved", "Reptile", "Insect", "Squirrel"],
    s: [],
    g: "base",
  },
  {
    i: "Amoeba",
    n: "Amoeba",
    a: 1,
    h: 2,
    c: "o",
    v: 2,
    t: [],
    s: [31],
    g: "base",
  },
  {
    i: "Ant",
    n: "Worker Ant",
    a: "V",
    h: 2,
    c: "b",
    v: 1,
    t: ["Insect"],
    s: [],
    g: "base",
    q: "Power equals the number of Ants you control.",
  },
  {
    i: "AntQueen",
    n: "Ant Queen",
    a: "V",
    h: 3,
    c: "b",
    v: 2,
    t: ["Insect"],
    s: [17],
    g: "base",
    q: "Power equals the number of Ants you control.",
  },
  { i: "Bat", n: "Bat", a: 2, h: 1, c: "o", v: 4, t: [], s: [19], g: "base" },
  {
    i: "Beaver",
    n: "Beaver",
    a: 1,
    h: 3,
    c: "b",
    v: 2,
    t: [],
    s: [6],
    g: "base",
  },
  {
    i: "Bee",
    n: "Bee",
    a: 1,
    h: 1,
    c: "f",
    v: 0,
    t: ["Insect"],
    s: [19],
    g: "base",
  },
  {
    i: "Beehive",
    n: "Beehive",
    a: 0,
    h: 2,
    c: "b",
    v: 1,
    t: ["Insect"],
    s: [2],
    g: "base",
  },
  {
    i: "Bloodhound",
    n: "Bloodhound",
    a: 2,
    h: 3,
    c: "b",
    v: 2,
    t: ["Canine"],
    s: [18],
    g: "base",
  },
  {
    i: "Bullfrog",
    n: "Bullfrog",
    a: 1,
    h: 2,
    c: "b",
    v: 1,
    t: ["Reptile"],
    s: [23],
    g: "base",
  },
  {
    i: "CagedWolf",
    n: "Caged Wolf",
    a: 0,
    h: 6,
    c: "b",
    v: 2,
    t: ["Canine"],
    s: [],
    g: "base",
    q: "Not obtainable in Kaycee's Mod through normal play.",
  },
  { i: "Cat", n: "Cat", a: 0, h: 1, c: "b", v: 1, t: [], s: [20], g: "base" },
  {
    i: "CatUndead",
    n: "Undead Cat",
    a: 3,
    h: 6,
    c: "b",
    v: 1,
    t: [],
    s: [],
    g: "given",
  },
  {
    i: "Cockroach",
    n: "Cockroach",
    a: 1,
    h: 1,
    c: "o",
    v: 4,
    t: ["Insect"],
    s: [14],
    g: "base",
  },
  {
    i: "Coyote",
    n: "Coyote",
    a: 2,
    h: 1,
    c: "o",
    v: 4,
    t: ["Canine"],
    s: [],
    g: "base",
  },
  {
    i: "Daus",
    n: "The Daus",
    a: 2,
    h: 2,
    c: "b",
    v: 2,
    t: [],
    s: [75],
    g: "base",
  },
  {
    i: "DefaultTail",
    n: "Tail",
    a: 0,
    h: 2,
    c: "f",
    v: 0,
    t: [],
    s: [],
    g: "given",
  },
  {
    i: "Elk",
    n: "Elk",
    a: 2,
    h: 4,
    c: "b",
    v: 2,
    t: ["Hooved"],
    s: [3],
    g: "base",
  },
  {
    i: "ElkCub",
    n: "Elk Fawn",
    a: 1,
    h: 1,
    c: "b",
    v: 1,
    t: ["Hooved"],
    s: [3, 5],
    g: "base",
  },
  {
    i: "FieldMouse",
    n: "Field Mice",
    a: 2,
    h: 2,
    c: "b",
    v: 2,
    t: [],
    s: [9],
    g: "base",
  },
  {
    i: "Geck",
    n: "Geck",
    a: 1,
    h: 1,
    c: "f",
    v: 0,
    t: ["Reptile"],
    s: [],
    g: "base",
  },
  {
    i: "Goat",
    n: "Black Goat",
    a: 0,
    h: 1,
    c: "b",
    v: 1,
    t: ["Hooved"],
    s: [22],
    g: "base",
  },
  {
    i: "Grizzly",
    n: "Grizzly",
    a: 4,
    h: 6,
    c: "b",
    v: 3,
    t: [],
    s: [],
    g: "base",
  },
  {
    i: "JerseyDevil",
    n: "Child 13",
    a: 0,
    h: 1,
    c: "b",
    v: 1,
    t: ["Hooved"],
    s: [20],
    g: "base",
    q: "Becomes a 2/1 Airborne form once sacrificed.",
  },
  {
    i: "Kingfisher",
    n: "Kingfisher",
    a: 1,
    h: 1,
    c: "b",
    v: 1,
    t: ["Avian"],
    s: [19, 13],
    g: "base",
  },
  {
    i: "Maggots",
    n: "Corpse Maggots",
    a: 1,
    h: 2,
    c: "o",
    v: 5,
    t: ["Insect"],
    s: [11],
    g: "base",
  },
  {
    i: "Magpie",
    n: "Magpie",
    a: 1,
    h: 1,
    c: "b",
    v: 2,
    t: ["Avian"],
    s: [19, 7],
    g: "base",
  },
  {
    i: "Mantis",
    n: "Mantis",
    a: 1,
    h: 1,
    c: "b",
    v: 1,
    t: ["Insect"],
    s: [24],
    g: "base",
  },
  {
    i: "MantisGod",
    n: "Mantis God",
    a: 1,
    h: 1,
    c: "b",
    v: 1,
    t: ["Insect"],
    s: [25],
    g: "base",
  },
  { i: "Mole", n: "Mole", a: 0, h: 4, c: "b", v: 1, t: [], s: [8], g: "base" },
  {
    i: "MoleMan",
    n: "Mole Man",
    a: 0,
    h: 6,
    c: "b",
    v: 1,
    t: [],
    s: [8, 23],
    g: "base",
  },
  {
    i: "Moose",
    n: "Moose Buck",
    a: 3,
    h: 7,
    c: "b",
    v: 3,
    t: ["Hooved"],
    s: [16],
    g: "base",
  },
  {
    i: "Mothman_Stage1",
    n: "Strange Larva",
    a: 0,
    h: 3,
    c: "b",
    v: 1,
    t: ["Insect"],
    s: [5],
    g: "base",
  },
  {
    i: "Mothman_Stage2",
    n: "Strange Pupa",
    a: 0,
    h: 3,
    c: "b",
    v: 1,
    t: ["Insect"],
    s: [5],
    g: "given",
  },
  {
    i: "Mothman_Stage3",
    n: "Mothman",
    a: 7,
    h: 3,
    c: "b",
    v: 1,
    t: ["Insect"],
    s: [19],
    g: "given",
  },
  {
    i: "Mule",
    n: "Pack Mule",
    a: 0,
    h: 5,
    c: "f",
    v: 0,
    t: ["Hooved"],
    s: [3],
    g: "odd",
  },
  {
    i: "Opossum",
    n: "Opossum",
    a: 1,
    h: 1,
    c: "o",
    v: 2,
    t: [],
    s: [],
    g: "base",
  },
  {
    i: "Otter",
    n: "River Otter",
    a: 1,
    h: 1,
    c: "b",
    v: 1,
    t: [],
    s: [13],
    g: "base",
  },
  {
    i: "Ouroboros",
    n: "Ouroboros",
    a: 1,
    h: 1,
    c: "b",
    v: 2,
    t: ["Reptile"],
    s: [14],
    g: "base",
    q: "Kaycee's Mod resets it to 1/1 at the start of every run.",
  },
  {
    i: "PackRat",
    n: "Pack Rat",
    a: 2,
    h: 2,
    c: "b",
    v: 2,
    t: [],
    s: [29],
    g: "base",
  },
  {
    i: "Porcupine",
    n: "Porcupine",
    a: 1,
    h: 2,
    c: "b",
    v: 1,
    t: [],
    s: [15],
    g: "base",
  },
  {
    i: "Pronghorn",
    n: "Pronghorn",
    a: 1,
    h: 3,
    c: "b",
    v: 2,
    t: ["Hooved"],
    s: [3, 24],
    g: "base",
  },
  {
    i: "Rabbit",
    n: "Rabbit",
    a: 0,
    h: 1,
    c: "f",
    v: 0,
    t: [],
    s: [],
    g: "given",
  },
  {
    i: "RatKing",
    n: "Rat King",
    a: 2,
    h: 1,
    c: "b",
    v: 2,
    t: [],
    s: [12],
    g: "base",
  },
  {
    i: "Rattler",
    n: "Rattler",
    a: 3,
    h: 1,
    c: "o",
    v: 6,
    t: ["Reptile"],
    s: [],
    g: "base",
  },
  {
    i: "Raven",
    n: "Raven",
    a: 2,
    h: 3,
    c: "b",
    v: 2,
    t: ["Avian"],
    s: [19],
    g: "base",
  },
  {
    i: "RavenEgg",
    n: "Raven Egg",
    a: 0,
    h: 2,
    c: "b",
    v: 1,
    t: ["Avian"],
    s: [5],
    g: "base",
  },
  {
    i: "RingWorm",
    n: "Ring Worm",
    a: 0,
    h: 1,
    c: "b",
    v: 1,
    t: ["Insect"],
    s: [],
    g: "base",
  },
  {
    i: "Shark",
    n: "Great White",
    a: 4,
    h: 2,
    c: "b",
    v: 3,
    t: [],
    s: [13],
    g: "base",
  },
  {
    i: "Skink",
    n: "Skink",
    a: 1,
    h: 2,
    c: "b",
    v: 1,
    t: ["Reptile"],
    s: [10],
    g: "base",
  },
  {
    i: "SkinkTail",
    n: "Wriggling Tail",
    a: 0,
    h: 2,
    c: "f",
    v: 0,
    t: ["Reptile"],
    s: [],
    g: "given",
  },
  {
    i: "Skunk",
    n: "Skunk",
    a: 0,
    h: 3,
    c: "b",
    v: 1,
    t: [],
    s: [83],
    g: "base",
  },
  {
    i: "Snapper",
    n: "River Snapper",
    a: 1,
    h: 6,
    c: "b",
    v: 2,
    t: ["Reptile"],
    s: [],
    g: "base",
  },
  {
    i: "Snelk",
    n: "Long Elk",
    a: 1,
    h: 2,
    c: "o",
    v: 4,
    t: ["Hooved"],
    s: [3, 4],
    g: "base",
  },
  {
    i: "Sparrow",
    n: "Sparrow",
    a: 1,
    h: 2,
    c: "b",
    v: 1,
    t: ["Avian"],
    s: [19],
    g: "base",
  },
  {
    i: "SquidBell",
    n: "Bell Tentacle",
    a: "V",
    h: 3,
    c: "b",
    v: 2,
    t: [],
    s: [],
    g: "odd",
    q: "Power equals the number of times the bell has rung.",
  },
  {
    i: "SquidCards",
    n: "Hand Tentacle",
    a: "V",
    h: 1,
    c: "b",
    v: 1,
    t: [],
    s: [],
    g: "odd",
    q: "Power equals the cards in your hand.",
  },
  {
    i: "SquidMirror",
    n: "Mirror Tentacle",
    a: "V",
    h: 3,
    c: "b",
    v: 1,
    t: [],
    s: [],
    g: "odd",
    q: "Power mirrors the card opposite.",
  },
  {
    i: "Squirrel",
    n: "Squirrel",
    a: 0,
    h: 1,
    c: "f",
    v: 0,
    t: ["Squirrel"],
    s: [],
    g: "base",
  },
  {
    i: "Stoat",
    n: "Stoat",
    a: 1,
    h: 2,
    c: "b",
    v: 1,
    t: [],
    s: [],
    g: "base",
    q: "The Kaycee's Mod starter. Nerfed from the 1/3 story version.",
  },
  {
    i: "Stoat_Talking",
    n: "Stoat (talking)",
    a: 1,
    h: 3,
    c: "b",
    v: 1,
    t: [],
    s: [],
    g: "odd",
    q: "Story-mode card. Talking cards are cut from Kaycee's Mod and may misbehave.",
  },
  {
    i: "Wolf_Talking",
    n: "Stunted Wolf",
    a: 2,
    h: 2,
    c: "b",
    v: 1,
    t: ["Canine"],
    s: [],
    g: "odd",
    q: "Story-mode talking card.",
  },
  {
    i: "Stinkbug_Talking",
    n: "Stinkbug",
    a: 1,
    h: 2,
    c: "o",
    v: 2,
    t: ["Insect"],
    s: [82],
    g: "odd",
    q: "Story-mode talking card.",
  },
  {
    i: "Tail_Bird",
    n: "Tail Feathers",
    a: 0,
    h: 2,
    c: "f",
    v: 0,
    t: [],
    s: [],
    g: "given",
  },
  {
    i: "Tail_Furry",
    n: "Furry Tail",
    a: 0,
    h: 2,
    c: "f",
    v: 0,
    t: [],
    s: [],
    g: "given",
  },
  {
    i: "Tail_Insect",
    n: "Wriggling Leg",
    a: 0,
    h: 2,
    c: "f",
    v: 0,
    t: [],
    s: [],
    g: "given",
  },
  {
    i: "Urayuli",
    n: "Urayuli",
    a: 7,
    h: 7,
    c: "b",
    v: 4,
    t: [],
    s: [],
    g: "base",
  },
  {
    i: "Vulture",
    n: "Turkey Vulture",
    a: 3,
    h: 3,
    c: "o",
    v: 8,
    t: ["Avian"],
    s: [19],
    g: "base",
  },
  {
    i: "Warren",
    n: "Warren",
    a: 0,
    h: 2,
    c: "b",
    v: 1,
    t: [],
    s: [1],
    g: "base",
  },
  {
    i: "Wolf",
    n: "Wolf",
    a: 3,
    h: 2,
    c: "b",
    v: 2,
    t: ["Canine"],
    s: [],
    g: "base",
  },
  {
    i: "WolfCub",
    n: "Wolf Cub",
    a: 1,
    h: 1,
    c: "b",
    v: 1,
    t: ["Canine"],
    s: [5],
    g: "base",
  },
  /* pelts */
  {
    i: "PeltHare",
    n: "Rabbit Pelt",
    a: 0,
    h: 1,
    c: "f",
    v: 0,
    t: [],
    s: [],
    g: "base",
    q: "Trade to the Trapper. Two of these are in the default starting deck.",
  },
  {
    i: "PeltWolf",
    n: "Wolf Pelt",
    a: 0,
    h: 2,
    c: "f",
    v: 0,
    t: [],
    s: [],
    g: "base",
  },
  {
    i: "PeltGolden",
    n: "Golden Pelt",
    a: 0,
    h: 3,
    c: "f",
    v: 0,
    t: [],
    s: [],
    g: "base",
  },
  /* --- Kaycee's Mod additions --- */
  {
    i: "Ijiraq",
    n: "Ijiraq",
    a: 4,
    h: 1,
    c: "f",
    v: 0,
    t: [],
    s: [21],
    g: "km",
    q: "Rare. In your deck it mimics another card until played, then reverts to this 4/1.",
  },
  {
    i: "Bull",
    n: "Wild Bull",
    a: 3,
    h: 2,
    c: "b",
    v: 2,
    t: ["Hooved"],
    s: [102],
    g: "km",
  },
  {
    i: "Cuckoo",
    n: "Cuckoo",
    a: 1,
    h: 1,
    c: "b",
    v: 1,
    t: ["Avian"],
    s: [19, 99],
    g: "km",
  },
  {
    i: "AntFlying",
    n: "Flying Ant",
    a: "V",
    h: 1,
    c: "b",
    v: 1,
    t: ["Insect"],
    s: [19],
    g: "km",
    q: "Power equals the number of Ants you control.",
  },
  {
    i: "MudTurtle",
    n: "Mud Turtle",
    a: 2,
    h: 2,
    c: "b",
    v: 2,
    t: ["Reptile"],
    s: [54],
    g: "km",
    q: "The Armored sigil is Act III's Nano Armor, ID 54.",
  },
  {
    i: "DireWolf",
    n: "Dire Wolf",
    a: 2,
    h: 5,
    c: "b",
    v: 3,
    t: ["Canine"],
    s: [100],
    g: "km",
  },
  {
    i: "DireWolfCub",
    n: "Dire Wolf Pup",
    a: 1,
    h: 1,
    c: "b",
    v: 2,
    t: ["Canine"],
    s: [28, 5],
    g: "km",
  },
  {
    i: "MealWorm",
    n: "Meal Worm",
    a: 0,
    h: 2,
    c: "o",
    v: 2,
    t: ["Insect"],
    s: [103],
    g: "km",
  },
  {
    i: "Wolverine",
    n: "Wolverine",
    a: 1,
    h: 3,
    c: "o",
    v: 5,
    t: [],
    s: [104],
    g: "km",
  },
  {
    i: "Raccoon",
    n: "Raccoon",
    a: 1,
    h: 1,
    c: "b",
    v: 1,
    t: [],
    s: [101],
    g: "km",
  },
  {
    i: "Lammergeier",
    n: "Lammergeier",
    a: "V",
    h: 4,
    c: "b",
    v: 3,
    t: ["Avian"],
    s: [19],
    g: "km",
    q: "Power is half your Bones, rounded down.",
  },
  {
    i: "RedHart",
    n: "Red Hart",
    a: "V",
    h: 2,
    c: "b",
    v: 2,
    t: ["Hooved"],
    s: [3],
    g: "km",
    q: "Power equals the sacrifices you made this turn.",
  },
  {
    i: "Tadpole",
    n: "Tadpole",
    a: 0,
    h: 1,
    c: "f",
    v: 0,
    t: ["Reptile"],
    s: [5, 13],
    g: "km",
  },
  {
    i: "Lice",
    n: "Pelt Lice",
    a: 1,
    h: 1,
    c: "b",
    v: 4,
    t: ["Insect"],
    s: [100],
    g: "km",
    q: "Rare. Plays itself from your deck when a pelt is played.",
  },
  {
    i: "Hodag",
    n: "Hodag",
    a: 1,
    h: 5,
    c: "b",
    v: 2,
    t: [],
    s: [104],
    g: "km",
    q: "Rare. Its Blood Lust gains are permanent for the run.",
  },
  {
    i: "HydraEgg",
    n: "Curious Egg",
    a: 0,
    h: 1,
    c: "o",
    v: 1,
    t: [],
    s: [106],
    g: "km",
    q: "Rare, starter-deck exclusive. Hatches into a Hydra when the deck meets the Finical Hatchling conditions.",
  },
  {
    i: "Hydra",
    n: "Hydra",
    a: 1,
    h: 5,
    c: "o",
    v: 1,
    t: ["Avian", "Canine", "Hooved", "Reptile", "Insect"],
    s: [24, 25],
    g: "km",
  },
  {
    i: "Kraken",
    n: "Great Kraken",
    a: 1,
    h: 1,
    c: "b",
    v: 1,
    t: [],
    s: [13],
    g: "km",
    q: "Its Kraken sigil has no ID of its own in the save file.",
  },
  {
    i: "AquaSquirrel",
    n: "AquaSquirrel",
    a: null,
    h: null,
    c: "f",
    v: 0,
    t: ["Squirrel"],
    s: [],
    g: "km",
    q: "The Squirrel Fish challenge swaps your side deck to these.",
  },
  /* --- oddities worth knowing --- */
  {
    i: "!DEATHCARD_BASE",
    n: "Deathcard (blank)",
    a: 0,
    h: 0,
    c: "f",
    v: 0,
    t: [],
    s: [],
    g: "odd",
    q: "Needs a matching deathCardInfo record or it will not render properly.",
  },
  {
    i: "!STATIC!GLITCH",
    n: "Glitched Card",
    a: 0,
    h: 1,
    c: "f",
    v: 0,
    t: [],
    s: [],
    g: "odd",
  },
  {
    i: "!GIANTCARD_MOON",
    n: "The Moon",
    a: 1,
    h: 40,
    c: "b",
    v: 1,
    t: [],
    s: [22, 32, 31],
    g: "odd",
    q: "Cannot be played from hand. Expect a broken deck.",
  },
  {
    i: "Starvation",
    n: "Starvation",
    a: 1,
    h: 1,
    c: "f",
    v: 0,
    t: [],
    s: [20],
    g: "odd",
  },
  {
    i: "Smoke",
    n: "The Smoke",
    a: 0,
    h: 1,
    c: "f",
    v: 0,
    t: [],
    s: [11],
    g: "given",
  },
  {
    i: "Smoke_Improved",
    n: "Greater Smoke",
    a: 1,
    h: 3,
    c: "f",
    v: 0,
    t: [],
    s: [11],
    g: "given",
  },
  {
    i: "FrozenOpossum",
    n: "Frozen Opossum",
    a: null,
    h: null,
    c: "f",
    v: null,
    t: [],
    s: [26],
    g: "given",
  },
  {
    i: "Boulder",
    n: "Boulder",
    a: null,
    h: null,
    c: "f",
    v: null,
    t: [],
    s: [],
    g: "given",
  },
  {
    i: "GoldNugget",
    n: "Gold Nugget",
    a: 0,
    h: 2,
    c: "f",
    v: 0,
    t: [],
    s: [],
    g: "given",
  },
  {
    i: "Trap",
    n: "Leaping Trap",
    a: 0,
    h: 1,
    c: "f",
    v: 0,
    t: [],
    s: [22, 29],
    g: "odd",
  },
  {
    i: "TrapFrog",
    n: "Strange Frog",
    a: 1,
    h: 2,
    c: "b",
    v: 1,
    t: [],
    s: [22],
    g: "odd",
  },
  {
    i: "BurrowingTrap",
    n: "Burrowing Trap",
    a: 0,
    h: 5,
    c: "b",
    v: 2,
    t: [],
    s: [7, 29],
    g: "odd",
  },
  {
    i: "Tree",
    n: "Grand Fir",
    a: null,
    h: null,
    c: "f",
    v: null,
    t: [],
    s: [],
    g: "odd",
  },
  {
    i: "Tree_SnowCovered",
    n: "Snowy Fir",
    a: null,
    h: null,
    c: "f",
    v: null,
    t: [],
    s: [],
    g: "odd",
  },
  {
    i: "Stump",
    n: "Stump",
    a: null,
    h: null,
    c: "f",
    v: null,
    t: [],
    s: [],
    g: "odd",
  },
  {
    i: "BaitBucket",
    n: "Bait Bucket",
    a: 0,
    h: 1,
    c: "f",
    v: 0,
    t: [],
    s: [],
    g: "odd",
  },
  { i: "Dam", n: "Dam", a: 0, h: 2, c: "f", v: 0, t: [], s: [], g: "given" },
  {
    i: "DausBell",
    n: "Chime",
    a: 0,
    h: 1,
    c: "f",
    v: 0,
    t: [],
    s: [],
    g: "given",
  },
  {
    i: "SquirrelBall",
    n: "Squirrel Ball",
    a: 0,
    h: 1,
    c: "b",
    v: 1,
    t: [],
    s: [46],
    g: "odd",
    q: "Act II card.",
  },
  {
    i: "Hawk",
    n: "Hawk",
    a: 3,
    h: 1,
    c: "b",
    v: 2,
    t: ["Avian"],
    s: [19],
    g: "odd",
    q: "Act II card.",
  },
  {
    i: "Salmon",
    n: "Salmon",
    a: 2,
    h: 2,
    c: "b",
    v: 2,
    t: [],
    s: [13, 3],
    g: "odd",
    q: "Act II card.",
  },
  {
    i: "Hrokkall",
    n: "Hrokkall",
    a: 1,
    h: 1,
    c: "b",
    v: 1,
    t: [],
    s: [13, 51],
    g: "odd",
    q: "Act II card. Battery Bearer does nothing in Act I.",
  },
  {
    i: "CardMergeStones",
    n: "The Stones",
    a: 0,
    h: 9,
    c: "b",
    v: 1,
    t: [],
    s: [],
    g: "odd",
  },
  {
    i: "Zombie",
    n: "Zombie",
    a: null,
    h: null,
    c: "f",
    v: null,
    t: [],
    s: [],
    g: "odd",
    q: "Act II undead card.",
  },
];

const GROUPS = [
  ["base", "Act I"],
  ["km", "Kaycee's Mod"],
  ["given", "Spawned"],
  ["odd", "Oddities"],
];
const GROUP_TIP = {
  base: "Cards from the Act I pool that Kaycee's Mod runs use.",
  km: "Cards Kaycee's Mod added.",
  given:
    "Cards you normally get from another card or an event — a sigil, an evolution, a gift — rather than by picking them.",
  odd: "Story-mode, boss, Act II and other out-of-place cards. Many can misbehave in a Kaycee's Mod run — read each card's note.",
};
const GROUP_LABEL = {
  base: "Act I",
  km: "Kaycee's Mod",
  given: "Spawned / given",
  odd: "Odd or out of act",
};
const SIG = Object.fromEntries(
  SIGILS.map((s) => [s[0], { name: s[1], desc: s[2] }]),
);
/* Which part of the game each sigil appears in, per the section lists on the
   Inscryption wiki's Sigils page (Act I, Act II, Act III, the Grimora and
   Magnificus finale segments, Kaycee's Mod, unused). 1 2 3 = acts,
   G = Grimora, M = Magnificus, K = Kaycee's Mod, U = unused.
   A sigil is filed under the first part it appears in; the others are
   shown as "also in". */
const SIG_ACTS = {
  1: "12M",
  2: "1",
  3: "123",
  4: "123G",
  5: "12",
  6: "1",
  7: "1M",
  8: "123",
  9: "12",
  10: "1",
  11: "1G",
  12: "12G",
  13: "12",
  14: "123G",
  15: "123",
  16: "123",
  17: "1",
  18: "123G",
  19: "123G",
  20: "12",
  21: "123G",
  22: "12",
  23: "123",
  24: "123",
  25: "123",
  26: "12",
  27: "U",
  28: "2GK",
  29: "1",
  30: "12",
  31: "13M",
  32: "1",
  33: "1",
  34: "1",
  35: "23G",
  36: "2",
  37: "23M",
  38: "23M",
  39: "23M",
  40: "2M",
  41: "2M",
  42: "2M",
  43: "2M",
  44: "2",
  45: "2",
  46: "2",
  47: "23",
  48: "2",
  49: "U",
  50: "23",
  51: "23",
  52: "23",
  53: "3",
  54: "3K",
  55: "3",
  56: "3G",
  57: "3G",
  58: "3G",
  59: "3",
  60: "3",
  61: "3",
  62: "23",
  63: "3M",
  64: "3",
  65: "3",
  66: "2",
  67: "2",
  68: "2",
  69: "2",
  70: "U",
  71: "2",
  72: "3",
  73: "2",
  74: "2",
  75: "1M",
  76: "3K",
  77: "3",
  78: "3",
  79: "2",
  80: "2",
  81: "2",
  82: "U",
  83: "13G",
  84: "3",
  85: "3",
  86: "3",
  87: "2",
  88: "3GM",
  89: "2",
  90: "G",
  91: "G",
  92: "G",
  93: "G",
  94: "M",
  95: "M",
  96: "M",
  97: "M",
  98: "M",
  99: "K",
  100: "K",
  101: "K",
  102: "K",
  103: "K",
  104: "K",
  105: "K",
  106: "K",
};
const SIG_GROUPS = [
  { key: "1", label: "Act I", sub: "Leshy's cabin" },
  { key: "2", label: "Act II", sub: "the pixel game" },
  { key: "3", label: "Act III", sub: "Botopia" },
  { key: "F", label: "Finale", sub: "Grimora & Magnificus" },
  { key: "K", label: "Kaycee's Mod", sub: "added by the mod" },
  { key: "U", label: "Unused", sub: "in the game files, never dealt" },
];
const ACT_SHORT = {
  1: "I",
  2: "II",
  3: "III",
  G: "Grimora",
  M: "Magnificus",
  K: "Kaycee's Mod",
  U: "unused",
};
function sigHome(id) {
  const a = SIG_ACTS[id] || "U";
  for (const k of ["1", "2", "3"]) if (a.includes(k)) return k;
  if (a.includes("G") || a.includes("M")) return "F";
  return a.includes("K") ? "K" : "U";
}
function sigAlso(id) {
  const a = SIG_ACTS[id] || "",
    home = sigHome(id);
  return a
    .split("")
    .filter((k) =>
      home === "F" ? !(k === "G" || k === "M") || false : k !== home,
    )
    .map((k) => ACT_SHORT[k]);
}
const SIG_BY_GROUP = Object.fromEntries(
  SIG_GROUPS.map((g) => [g.key, SIGILS.filter((s) => sigHome(s[0]) === g.key)]),
);
/* Sigils that can misbehave on an ordinary card. Only sigils with a stated
   reason are flagged: the Inscryption wiki (which cards bear it, unused list),
   this page's own card table, or the sigil's own in-game description. */
const CAUTION_KINDS = {
  boss: { label: "Boss sigil", hint: "Only carried by boss cards" },
  card: { label: "Card-specific", hint: "Built around one particular card" },
  meta: {
    label: "Outside the game",
    hint: "Uses files or hardware outside the game",
  },
  unused: { label: "Unused", hint: "In the game files but never dealt" },
};
const SIG_CAUTION = {
  32: {
    k: "boss",
    why: "Only The Moon — Leshy's final-boss giant — carries it.",
  },
  33: {
    k: "boss",
    why: "Only The Moon and The Limoncello, both final-boss giants, carry it.",
  },
  26: {
    k: "card",
    why: "Releases “the creature inside”. In Act I only Frozen Opossum carries it, so what another card would release isn't documented here.",
  },
  61: {
    k: "card",
    why: "Flips the card to and from its Beast mode, which only certain Act III cards have. Carvings from this page write transformerBeastCardId as null.",
  },
  89: {
    k: "card",
    why: "The Great Kraken's version of Waterborne: when the card re-emerges it turns into a random Tentacle card.",
  },
  95: {
    k: "card",
    why: "One of Edaxio's four body parts — the set that summons Edaxio in the Magnificus finale.",
  },
  96: {
    k: "card",
    why: "One of Edaxio's four body parts — the set that summons Edaxio in the Magnificus finale.",
  },
  97: {
    k: "card",
    why: "One of Edaxio's four body parts — the set that summons Edaxio in the Magnificus finale.",
  },
  98: {
    k: "card",
    why: "One of Edaxio's four body parts — the set that summons Edaxio in the Magnificus finale.",
  },
  59: {
    k: "meta",
    why: "Act III file mechanic: its description has you pick a file and deals damage by its size.",
  },
  60: {
    k: "meta",
    why: "Its description says the file used to create the card is really deleted from your hard drive.",
  },
  93: {
    k: "meta",
    why: "Its description counts you saying “Bloody Mary” into a connected microphone.",
  },
  94: { k: "meta", why: "Its description needs a connected VR headset." },
  27: {
    k: "unused",
    why: "Listed as unused — never dealt on any card, and it has no in-game description.",
  },
  49: { k: "unused", why: "Listed as unused — never dealt on any card." },
  70: {
    k: "unused",
    why: "Listed as unused — never dealt on any card, and it has no in-game description.",
  },
  82: { k: "unused", why: "Listed as unused — never dealt on any card." },
};
const isRegularSig = (id) => !SIG_CAUTION[id];
const CAUTION_SVG =
  '<svg class="caut-ico" viewBox="0 0 16 14" width="15" height="13" aria-hidden="true"><path d="M8 1.2 15 12.8H1Z" fill="#e8a13a" stroke="#3a2210" stroke-width="1.2" stroke-linejoin="round"/><path d="M8 5.2v3.9" stroke="#1c130d" stroke-width="1.7" stroke-linecap="round"/><circle cx="8" cy="11" r="1" fill="#1c130d"/></svg>';
function cautionTag(id) {
  const c = SIG_CAUTION[id];
  if (!c) return "";
  const kd = CAUTION_KINDS[c.k];
  return (
    '<span class="caut" data-k="' +
    c.k +
    '" data-tip="' +
    esc(kd.label + ": " + c.why + "\nIt may misbehave on an ordinary card.") +
    '">' +
    CAUTION_SVG +
    "<span>" +
    esc(kd.label) +
    "</span></span>"
  );
}
/* filter state for the carving picker — survives re-renders */
const SIGF = {
  q: "",
  boss: false,
  card: false,
  meta: false,
  unused: false,
  act1: false,
  carved: false,
};
const SIG_CHIPS = [
  {
    key: "regular",
    label: "Regular cards only",
    title:
      "Hide every sigil with a caution sign, leaving the ones meant for ordinary cards. Turns the four Hide toggles on or off together.",
  },
  {
    key: "boss",
    label: "Hide boss",
    title: "Hide sigils that only boss cards carry (Tidal Lock, Omni Strike).",
  },
  {
    key: "card",
    label: "Hide card-specific",
    title:
      "Hide sigils built around one particular card (Frozen Away, Transformer, Kraken Waterborne, Edaxio's parts).",
  },
  {
    key: "meta",
    label: "Hide outside-game",
    title:
      "Hide sigils whose effect involves real files, a microphone or a VR headset.",
  },
  {
    key: "unused",
    label: "Hide unused",
    title:
      "Hide sigils that exist in the game files but are never dealt on any card.",
  },
  {
    key: "act1",
    label: "Act I & Kaycee's only",
    title: "Show only sigils that appear in Act I or in Kaycee's Mod itself.",
  },
  {
    key: "carved",
    label: "Carved only",
    title: "Show only the sigils already carved on this card.",
  },
];
const chipOn = (k) =>
  k === "regular"
    ? SIGF.boss && SIGF.card && SIGF.meta && SIGF.unused
    : !!SIGF[k];
function toggleChip(k) {
  if (k === "regular") {
    const v = !chipOn("regular");
    SIGF.boss = SIGF.card = SIGF.meta = SIGF.unused = v;
  } else SIGF[k] = !SIGF[k];
}
const SIG_TEXT = {};
function sigSearchText(s) {
  if (SIG_TEXT[s[0]]) return SIG_TEXT[s[0]];
  const g = SIG_GROUPS.find((x) => x.key === sigHome(s[0]));
  const c = SIG_CAUTION[s[0]];
  return (SIG_TEXT[s[0]] = [
    "#" + s[0],
    s[0],
    s[1],
    s[2],
    "act " + g.label,
    g.label,
    g.sub,
    sigAlso(s[0]).join(" "),
    c ? "caution " + CAUTION_KINDS[c.k].label + " " + c.why : "regular",
  ]
    .join(" ")
    .toLowerCase());
}
function sigMatches(s, q) {
  const words = (q || "").toLowerCase().trim().split(/\s+/).filter(Boolean);
  if (!words.length) return true;
  const t = sigSearchText(s);
  // act numerals match as whole words, so "ii" doesn't also find Act III
  return words.every((w) =>
    /^i{1,3}$/.test(w)
      ? new RegExp("(^|[^a-z])" + w + "($|[^a-z])").test(t)
      : t.includes(w),
  );
}
function sigVisible(s, arr) {
  const id = s[0],
    c = SIG_CAUTION[id];
  if (c && SIGF[c.k]) return false;
  if (SIGF.act1 && !/[1K]/.test(SIG_ACTS[id] || "")) return false;
  if (SIGF.carved && !arr.includes(id)) return false;
  return sigMatches(s, SIGF.q);
}
const sigFilterActive = () =>
  !!(
    SIGF.q.trim() ||
    SIGF.boss ||
    SIGF.card ||
    SIGF.meta ||
    SIGF.unused ||
    SIGF.act1 ||
    SIGF.carved
  );

const CARD_BY_ID = Object.fromEntries(CARDS.map((c) => [c.i, c]));

/* ══════════════════ STATE ══════════════════ */
/* deck: [{ id, mod:{name,dAtk,dHp,dBlood,dBones,add:[],neg:[]} }] */
let deck = [];
let selected = -1;
let filterGroups = new Set(["base", "km"]);
let filterCost = null;
let query = "";

/* ══════════════════ SIGIL EMBLEMS ══════════════════
   Drawn here, not lifted from the game. Each sigil ID
   produces a stable little woodcut mark.                */
function emblem(id, size) {
  const S = size || 18,
    c = S / 2,
    r = S / 2 - 1.6;
  const st =
    'stroke="currentColor" fill="none" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"';
  let g =
    '<circle cx="' +
    c +
    '" cy="' +
    c +
    '" r="' +
    r +
    '" ' +
    st +
    ' opacity=".85"/>';
  const sides = 3 + (id % 5);
  const rot = (id * 37) % 360;
  const rr = r * 0.56;
  let pts = [];
  for (let k = 0; k < sides; k++) {
    const ang = ((rot + (k * 360) / sides) * Math.PI) / 180;
    pts.push(
      (c + rr * Math.cos(ang)).toFixed(2) +
        "," +
        (c + rr * Math.sin(ang)).toFixed(2),
    );
  }
  const style = id % 4;
  if (style === 0) {
    g += '<polygon points="' + pts.join(" ") + '" ' + st + "/>";
  } else if (style === 1) {
    g += '<polyline points="' + pts.join(" ") + '" ' + st + "/>";
    g +=
      '<circle cx="' +
      c +
      '" cy="' +
      c +
      '" r="' +
      (r * 0.16).toFixed(2) +
      '" fill="currentColor" opacity=".8"/>';
  } else if (style === 2) {
    for (let k = 0; k < sides; k++) {
      const ang = ((rot + (k * 360) / sides) * Math.PI) / 180;
      g +=
        '<line x1="' +
        c +
        '" y1="' +
        c +
        '" x2="' +
        (c + r * 0.8 * Math.cos(ang)).toFixed(2) +
        '" y2="' +
        (c + r * 0.8 * Math.sin(ang)).toFixed(2) +
        '" ' +
        st +
        "/>";
    }
  } else {
    g += '<polygon points="' + pts.join(" ") + '" ' + st + ' opacity=".9"/>';
    g +=
      '<circle cx="' +
      c +
      '" cy="' +
      c +
      '" r="' +
      (r * 0.3).toFixed(2) +
      '" ' +
      st +
      "/>";
  }
  if (id % 3 === 0) {
    g +=
      '<circle cx="' +
      c +
      '" cy="' +
      (c - r * 0.78).toFixed(2) +
      '" r="1.1" fill="currentColor" opacity=".7"/>';
  }
  return (
    '<svg viewBox="0 0 ' +
    S +
    " " +
    S +
    '" width="' +
    S +
    '" height="' +
    S +
    '" aria-hidden="true">' +
    g +
    "</svg>"
  );
}
/* ══════════════════ DRAWN SIGIL ICONS ══════════════════
   Hand-drawn vector versions of sigils that had no glyph on the reference
   sheets — mostly the ones seen in Act III. Each was drawn by looking at
   community-hosted reference images of the in-game icons; nothing from those
   images is embedded or traced. Ink is currentColor so they sit on the same
   parchment chip as the other sigils; colour is used only where the game's
   icon uses it (gems, batteries).
   Bomb Latch, Brittle Latch and Gem Spawn Conduit follow the shared layout of
   their families (the latch head over a framed sigil; the conduit bar over an
   effect) rather than a picture of that exact icon. */
const SIGIL_SVG = (() => {
  const P = "#d8c7a0"; /* parchment, for cut-outs */
  const ink = (d, w) =>
    '<path d="' +
    d +
    '" fill="none" stroke="currentColor" stroke-width="' +
    (w || 3) +
    '" stroke-linecap="round" stroke-linejoin="round"/>';
  const fill = (d) => '<path d="' + d + '" fill="currentColor"/>';
  const at = (x, y, s, inner) =>
    '<g transform="translate(' +
    x +
    " " +
    y +
    ") scale(" +
    s +
    ')">' +
    inner +
    "</g>";
  /* gems */
  const gemO = (x, y, s) =>
    at(
      x,
      y,
      s,
      '<path d="M0-10 10 0 0 10-10 0Z" fill="#d4622a" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/><path d="M0-10V10M-10 0H0" stroke="#8c3413" stroke-width="1.3" fill="none"/>',
    );
  const gemG = (x, y, s) =>
    at(
      x,
      y,
      s,
      '<path d="M0-11 10.5 8H-10.5Z" fill="#6aa23b" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/><path d="M0-11 2.5 8" stroke="#3d6a1c" stroke-width="1.3" fill="none"/>',
    );
  const gemB = (x, y, s) =>
    at(
      x,
      y,
      s,
      '<circle r="9" fill="#1f7a80" stroke="currentColor" stroke-width="2.2"/><path d="M-4.8-3.2q2-3.8 5.8-3.8" stroke="#95d3d1" stroke-width="1.9" fill="none" stroke-linecap="round"/>',
    );
  const gems3 = (x, y, s) =>
    at(x, y, s, gemO(-8, -6, 0.8) + gemG(8, -6, 0.8) + gemB(0, 9, 0.72));
  const plusMark = (x, y) =>
    ink("M" + (x - 5) + " " + y + "h10M" + x + " " + (y - 5) + "v10", 3.6);
  /* battery */
  const battery = (x, y, s, rot) =>
    '<g transform="translate(' +
    x +
    " " +
    y +
    ") rotate(" +
    (rot || 0) +
    ") scale(" +
    s +
    ')">' +
    '<rect x="-4.5" y="-24" width="9" height="5" rx="1" fill="currentColor"/>' +
    '<rect x="-12" y="-20" width="24" height="40" rx="3.5" fill="#86d3dc" stroke="currentColor" stroke-width="3.2"/>' +
    '<rect x="-7.5" y="-15" width="5" height="26" rx="1.5" fill="#d9f4f6"/><path d="M-11 13h22" stroke="#3f9aa6" stroke-width="3"/></g>';
  /* skull */
  const skull = (x, y, s) =>
    at(
      x,
      y,
      s,
      '<path d="M-12 2a12 12 0 1 1 24 0v5h-4v6h-16v-6h-4z" fill="currentColor"/>' +
        '<circle cx="-5" cy="1" r="3.7" fill="' +
        P +
        '"/><circle cx="5" cy="1" r="3.7" fill="' +
        P +
        '"/><path d="M0 5.2l-2 3.4h4z" fill="' +
        P +
        '"/>' +
        '<path d="M-4 9.5v3.5M0 9.5v3.5M4 9.5v3.5" stroke="' +
        P +
        '" stroke-width="1.5"/>',
    );
  /* four arrows and corner brackets, as on Detonator and Gem Detonator */
  const blast =
    fill(
      "M32 3l6.5 7.5h-4.3v4h-4.4v-4h-4.3zM32 61l6.5-7.5h-4.3v-4h-4.4v4h-4.3zM3 32l7.5-6.5v4.3h4v4.4h-4v4.3zM61 32l-7.5-6.5v4.3h-4v4.4h4v4.3z",
    ) +
    ink("M12.5 19v-6.5H19M45 12.5h6.5V19M51.5 45v6.5H45M19 51.5h-6.5V45", 2.6);
  /* a bone, from (x1,y1) to (x2,y2) */
  const bone = (x1, y1, x2, y2, w) => {
    const dx = x2 - x1,
      dy = y2 - y1,
      L = Math.hypot(dx, dy),
      nx = (-dy / L) * w * 0.42,
      ny = (dx / L) * w * 0.42;
    const k = (x, y) =>
      '<circle cx="' +
      (x + nx).toFixed(1) +
      '" cy="' +
      (y + ny).toFixed(1) +
      '" r="' +
      (w * 0.52).toFixed(1) +
      '"/><circle cx="' +
      (x - nx).toFixed(1) +
      '" cy="' +
      (y - ny).toFixed(1) +
      '" r="' +
      (w * 0.52).toFixed(1) +
      '"/>';
    return (
      '<g fill="currentColor"><path d="M' +
      x1 +
      " " +
      y1 +
      "L" +
      x2 +
      " " +
      y2 +
      '" stroke="currentColor" stroke-width="' +
      w +
      '" stroke-linecap="round"/>' +
      k(x1, y1) +
      k(x2, y2) +
      "</g>"
    );
  };
  const brittle = (x, y, s) =>
    at(
      x,
      y,
      s,
      bone(-14, 22, -3, 4, 7.5) +
        bone(14, 22, 3, 4, 7.5) +
        fill("M0-20l2.2 6.8L9-11l-6.8 2.2L0-2l-2.2-6.8L-9-11l6.8-2.2z") +
        ink("M-14-20l3 3M14-20l-3 3M-20-9h4M20-9h-4M0-29v3", 2.6),
    );
  /* conduit bar: a battery split into + and −, with the circuit's two ends */
  const bar =
    ink(
      "M18.5 6h27a3.5 3.5 0 0 1 3.5 3.5v8a3.5 3.5 0 0 1-3.5 3.5h-27a3.5 3.5 0 0 1-3.5-3.5v-8A3.5 3.5 0 0 1 18.5 6zM32 6v15M8.5 9v9M55.5 9v9",
      3.2,
    ) + ink("M19.5 13.5h8M23.5 9.5v8M36.5 13.5h8", 3);
  /* "when powered" frame: wiring round the top, a cell on each side, + and − below */
  const powered =
    ink("M10 36V14q0-5 5-5h34q5 0 5 5v22", 3) +
    '<rect x="28.5" y="5" width="7" height="8" rx="1" fill="currentColor"/>' +
    '<rect x="6.5" y="21" width="7" height="10" rx="1.5" fill="' +
    P +
    '" stroke="currentColor" stroke-width="2.6"/>' +
    '<rect x="50.5" y="21" width="7" height="10" rx="1.5" fill="' +
    P +
    '" stroke="currentColor" stroke-width="2.6"/>' +
    ink("M6 53h9M10.5 48.5v9M49 53h9", 3.2);
  /* the latch: a horned clamp with two eyes, holding a framed sigil */
  const latch = (inner) =>
    fill("M21 13h22v9.5q0 5.5-5.5 5.5h-11Q21 28 21 22.5z") +
    fill(
      "M23 16Q9 16 10 3l4.6.8Q14.5 11 23.5 12.5zM41 16Q55 16 54 3l-4.6.8Q49.5 11 40.5 12.5z",
    ) +
    '<circle cx="27.3" cy="19.5" r="2.7" fill="' +
    P +
    '"/><circle cx="36.7" cy="19.5" r="2.7" fill="' +
    P +
    '"/>' +
    ink("M25.5 28.5l2.2 3 2.2-3 2.1 3 2.2-3 2.2 3 2.1-3", 1.8) +
    '<rect x="19.5" y="33" width="25" height="26" rx="2" fill="none" stroke="currentColor" stroke-width="3"/>' +
    inner;

  return {
    /* ---- gems ---- */
    37: gemG(30, 36, 2.05) + plusMark(52, 11),
    38: gemO(30, 36, 2.1) + plusMark(52, 11),
    39: gemB(30, 36, 2.1) + plusMark(52, 11),
    63: blast + gems3(32, 32, 1),
    64:
      ink("M32 5l20 7.5q0 27.5-20 45.5Q12 39.5 12 12.5z", 3.8) +
      gems3(32, 30, 0.9),
    /* ---- conduits ---- */
    47:
      bar +
      ink("M17 42h11M22.5 36.5v11", 4.2) +
      ink("M36 38.5l6-4.5v21", 4.6) +
      ink("M36.5 55h11", 4),
    48:
      bar +
      fill("M22 32h20q3 0 3 3v11q0 3-3 3H22q-3 0-3-3V35q0-3 3-3z") +
      '<rect x="25" y="36" width="4.5" height="4.5" fill="' +
      P +
      '"/><rect x="34.5" y="36" width="4.5" height="4.5" fill="' +
      P +
      '"/>' +
      ink("M24.5 45h15", 2) +
      ink("M26 28v4M38 28v4", 2.4) +
      ink("M10 50l6 4h-8M54 50l-6 4h8", 2.6),
    49:
      bar +
      fill(
        "M32 58C18 47 14 40.5 14 35.5c0-5 3.8-8.5 8.5-8.5 4 0 7 2.2 9.5 5.5 2.5-3.3 5.5-5.5 9.5-5.5 4.7 0 8.5 3.5 8.5 8.5 0 5-4 11.5-18 22.5z",
      ) +
      plusMark(53, 33),
    50:
      bar +
      '<circle cx="32" cy="42" r="14" fill="none" stroke="currentColor" stroke-width="4"/>' +
      ink("M22.5 32.5l19 19", 4),
    66: bar + battery(32, 43, 0.62, 0),
    77: bar + gems3(32, 42, 0.85) + ink("M10 50l6 4h-8M54 50l-6 4h8", 2.6),
    /* ---- batteries ---- */
    51: battery(36, 35, 1.12, 10) + plusMark(12, 12),
    55:
      battery(38, 35, 1.05, 14) +
      '<path d="M22 22l3.5 7.5 7-2.5-4 6.5 7.5 3-8 2 2.5 7.5-7-4.5-5 6 .3-8.3-8.3-.7 7-4.5-5.5-6 8 1.2z" fill="#eef9fa" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>' +
      ink("M34 29l3 5-3 3 4 5", 2),
    /* ---- skull and bones ---- */
    52: blast + skull(32, 30, 1.2),
    35: brittle(32, 33, 1),
    /* ---- the rest ---- */
    53:
      '<circle cx="32" cy="33" r="18" fill="none" stroke="currentColor" stroke-width="4.6"/>' +
      ink("M32 7v52M6 33h52", 4.2),
    72: fill("M9 18h30v-7l17 12-17 12v-7H9zM55 39H25v-7L8 44l17 12v-7h30z"),
    76:
      '<circle cx="32" cy="37" r="15.5" fill="none" stroke="currentColor" stroke-width="4.4"/>' +
      fill(
        "M8.5 23a10.5 10.5 0 0 1 12.8-12.8zM55.5 23a10.5 10.5 0 0 0-12.8-12.8z",
      ) +
      ink("M21 50l-5.5 7M43 50l5.5 7", 4) +
      ink("M32 45V19", 4.2) +
      fill("M23.5 24.5L32 13l8.5 11.5z"),
    78:
      ink("M20 9.5h32.5V44", 4) +
      ink("M11.5 19.5V55H46", 4) +
      ink("M23.5 26q0-9.5 8.5-9.5t8.5 8q0 5.5-6 7.5-3 1-3 5.5V40", 4.8) +
      '<circle cx="31.5" cy="47.5" r="3.3" fill="currentColor"/>',
    84:
      powered +
      ink("M18 32h9M22.5 27.5v9", 3.6) +
      ink("M31.5 24.5q0-5 5.5-5t5.5 5.5q0 3.5-4.5 8L31 42.5h12", 4),
    85:
      powered +
      ink("M24 19.5h19V38", 3) +
      ink("M19.5 25v19.5H38", 3) +
      ink("M26.5 29q0-5.5 5-5.5t5 4.5q0 3-3.5 4.3-1.8.8-1.8 3.4", 3.3) +
      '<circle cx="31.2" cy="41" r="2.2" fill="currentColor"/>',
    86:
      powered +
      ink("M22 43q0-7 10-7t10 7", 3.6) +
      ink("M32 36V20M32 36l-10-9M32 36l10-9", 3.4) +
      fill(
        "M32 13.5l5 7h-10zM17.5 21.5l8.3 1.2-5.5 6.1zM46.5 21.5l-8.3 1.2 5.5 6.1z",
      ),
    88:
      '<circle cx="15" cy="11" r="6.5" fill="currentColor"/>' +
      ink("M15 12v26q0 12 12 12h6", 10) +
      '<ellipse cx="40" cy="46" rx="8" ry="7" fill="currentColor"/>' +
      ink("M44 40q7-7 14-5M47 44q8-3 12 3M46 49q6 2 8 9M42 52q1 5-1 9", 3.4),
    62:
      fill("M14 29h24v11H14z") +
      '<rect x="38" y="31.5" width="18" height="6" fill="none" stroke="currentColor" stroke-width="2.4"/>' +
      ink("M42.5 31.5v6M47 31.5v6M51.5 31.5v6", 1.6) +
      fill("M20 29v-5q0-4 4-4h4q4 0 4 4v5z") +
      ink("M26 15v-4M17.5 18l-3-3M34.5 18l3-3", 2.6) +
      ink("M26 40L15 57M26 40l11 17M18 51h16", 3.4),
    58: latch(
      '<path d="M32 37l7.5 2.8q0 10.5-7.5 17.2-7.5-6.7-7.5-17.2z" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round"/>' +
        ink("M29.5 44.5l2.5-2v8", 2.2),
    ),
    56: latch(skull(32, 44.5, 0.58)),
    57: latch(brittle(32, 46, 0.42)),
    65:
      ink("M13 34Q13 8 32 8t19 26", 3.4) +
      fill("M21 14h22v10H21z") +
      '<rect x="25" y="17" width="4" height="4" fill="' +
      P +
      '"/><rect x="35" y="17" width="4" height="4" fill="' +
      P +
      '"/>' +
      ink("M24.5 28v13M29.5 28v15M34.5 28v15M39.5 28v13", 3) +
      ink("M36 47q4 4 9 5", 2.4) +
      '<rect x="44.5" y="47.5" width="12" height="12" rx="1.5" fill="none" stroke="currentColor" stroke-width="2.6"/>',
  };
})();
/* A real glyph when the sheets had one, a hand-drawn icon when there is one,
   otherwise the generic mark above. */
function sigIcon(id, size) {
  const S = size || 28,
    nm = SIG[id] ? SIG[id].name : "Sigil " + id;
  const p = SIGART.pos[id];
  if (p === undefined) {
    const v = SIGIL_SVG[id];
    const inner = v
      ? '<svg viewBox="0 0 64 64" width="' +
        (S - 3) +
        '" height="' +
        (S - 3) +
        '" aria-hidden="true">' +
        v +
        "</svg>"
      : emblem(id, S - 3);
    return (
      '<span class="sigil-ico drawn' +
      (v ? " vec" : "") +
      '" style="width:' +
      S +
      "px;height:" +
      S +
      'px" title="' +
      esc(nm) +
      '">' +
      inner +
      "</span>"
    );
  }
  const col = p % SIGART.cols,
    row = Math.floor(p / SIGART.cols);
  const bx = SIGART.cols > 1 ? (col / (SIGART.cols - 1)) * 100 : 0;
  const by = SIGART.rows > 1 ? (row / (SIGART.rows - 1)) * 100 : 0;
  return (
    '<span class="sigil-ico" title="' +
    esc(nm) +
    '" style="width:' +
    S +
    "px;height:" +
    S +
    "px;" +
    "--sbgs:" +
    SIGART.cols * 100 +
    "% " +
    SIGART.rows * 100 +
    "%;--sbgp:" +
    bx.toFixed(4) +
    "% " +
    by.toFixed(4) +
    '%"></span>'
  );
}
function faceStyle(id) {
  const p = ART.pos[id];
  if (p === undefined) return null;
  const col = p % ART.cols,
    row = Math.floor(p / ART.cols);
  const bx = (col / (ART.cols - 1)) * 100,
    by = (row / (ART.rows - 1)) * 100;
  return (
    "--bgs:" +
    ART.cols * 100 +
    "% " +
    ART.rows * 100 +
    "%;--bgp:" +
    bx.toFixed(4) +
    "% " +
    by.toFixed(4) +
    "%"
  );
}
function costMark(type) {
  if (type === "b")
    return '<svg viewBox="0 0 10 12" width="9" height="11" aria-hidden="true"><path d="M5 .8C5 .8 1.2 5.4 1.2 7.8a3.8 3.8 0 0 0 7.6 0C8.8 5.4 5 .8 5 .8Z" fill="#7d1a1a" stroke="#2b0d0d" stroke-width=".8"/></svg>';
  return '<svg viewBox="0 0 14 8" width="13" height="8" aria-hidden="true"><path d="M2.4 4h9.2M2.4 4a1.5 1.5 0 1 1 0-2 1.5 1.5 0 1 1 0-2m9.2 4a1.5 1.5 0 1 0 0-2 1.5 1.5 0 1 0 0-2" stroke="#241c14" stroke-width="1.1" fill="none"/></svg>';
}

/* ══════════════════ RENDER: CARD ══════════════════ */
function finalStats(entry) {
  const c = CARD_BY_ID[entry.id],
    m = entry.mod;
  const out = { a: c.a, h: c.h, c: c.c, v: c.v, sig: c.s.slice(), name: c.n };
  if (!m) return out;
  if (m.name) out.name = m.name;
  if (typeof c.a === "number") out.a = c.a + (m.dAtk || 0);
  else if (m.dAtk) out.aAdj = m.dAtk;
  if (typeof c.h === "number") out.h = c.h + (m.dHp || 0);
  else if (m.dHp) out.hAdj = m.dHp;
  if (c.c === "b" && typeof c.v === "number")
    out.v = Math.max(0, c.v + (m.dBlood || 0));
  if (c.c === "o" && typeof c.v === "number")
    out.v = Math.max(0, c.v + (m.dBones || 0));
  if (c.c === "f") {
    if (m.dBlood > 0) {
      out.c = "b";
      out.v = m.dBlood;
    } else if (m.dBones > 0) {
      out.c = "o";
      out.v = m.dBones;
    }
  }
  out.sig = out.sig
    .filter((s) => !(m.neg || []).includes(s))
    .concat((m.add || []).filter((s) => !out.sig.includes(s)));
  return out;
}
function hasMod(m) {
  if (!m) return false;
  return !!(
    m.name ||
    m.dAtk ||
    m.dHp ||
    m.dBlood ||
    m.dBones ||
    (m.add && m.add.length) ||
    (m.neg && m.neg.length)
  );
}
function cardHTML(entry, opts) {
  const c = CARD_BY_ID[entry.id];
  const raw = !!(opts && opts.raw);
  const f = raw
    ? { a: c.a, h: c.h, c: c.c, v: c.v, sig: c.s, name: c.n }
    : finalStats(entry);
  const fs = faceStyle(entry.id);

  /* Real art path: show the card as the game prints it, and only
     draw over it where the carving actually changed something.   */
  if (fs) {
    const m = entry.mod,
      carved = !raw && hasMod(m);
    let out = '<div class="face" style="' + fs + '"></div>';
    if (carved) {
      if (m.name) out += '<div class="rename">' + esc(m.name) + "</div>";
      if (m.add && m.add.length)
        out +=
          '<div class="addsig">' +
          m.add.map((s) => sigIcon(s, 22)).join("") +
          "</div>";
      const statChanged =
        m.dAtk || m.dHp || m.dBlood || m.dBones || (m.neg && m.neg.length);
      if (statChanged) {
        const pw = f.a === "V" ? "VAR" : f.a === null ? "?" : f.a;
        const hp = f.h === null ? "?" : f.h;
        let cost = "";
        if (f.c === "b" && f.v) cost = f.v + "\u25CF";
        else if (f.c === "o" && f.v) cost = f.v + "\u2020";
        out +=
          '<div class="ovr"><span>' +
          pw +
          '</span><span style="font-size:10px;opacity:.7">' +
          cost +
          "</span><span>" +
          hp +
          "</span></div>";
      }
      out += '<span class="modflag" title="carved"></span>';
    }
    return out;
  }

  /* Fallback: no art for this card, draw one. */
  const mono =
    (f.name || "?")
      .replace(/[^A-Za-z]/g, "")
      .charAt(0)
      .toUpperCase() || "?";
  let cost = "";
  if (f.c === "f" || !f.v) {
    cost = '<span class="costfree">FREE</span>';
  } else {
    const n = Math.min(f.v, 8);
    cost = Array.from({ length: n }, () => costMark(f.c)).join("");
  }
  const sigs = (f.sig || [])
    .slice(0, 4)
    .map((s) => sigIcon(s, 24))
    .join("");
  const pw =
    f.a === "V"
      ? '<span class="vari">VAR' +
        (f.aAdj ? (f.aAdj > 0 ? "+" + f.aAdj : f.aAdj) : "") +
        "</span>"
      : f.a === null
        ? '<span class="unk">' +
          (f.aAdj ? (f.aAdj > 0 ? "+" + f.aAdj : f.aAdj) : "?") +
          "</span>"
        : f.a;
  const hp =
    f.h === null
      ? '<span class="unk">' +
        (f.hAdj ? (f.hAdj > 0 ? "+" + f.hAdj : f.hAdj) : "?") +
        "</span>"
      : f.h;
  return (
    '<div class="cname">' +
    esc(f.name) +
    "</div>" +
    '<div class="cost">' +
    cost +
    "</div>" +
    (hasMod(entry.mod) ? '<span class="modflag" title="carved"></span>' : "") +
    '<div class="plate"><span class="monogram">' +
    mono +
    "</span></div>" +
    '<div class="sigrow">' +
    sigs +
    "</div>" +
    '<div class="footer"><span class="stat">' +
    pw +
    '</span><span class="stat">' +
    hp +
    "</span></div>"
  );
}
function esc(s) {
  return String(s).replace(
    /[&<>"]/g,
    (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[m],
  );
}

/* ══════════════════ THE ROOM ══════════════════ */
/* One switch for every animation on the page. When the visitor has asked
   their system for less motion we light the candles but never move them. */
const CALM = (() => {
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)");
  } catch (err) {
    return { matches: false, addEventListener() {} };
  }
})();

/* Motion preference: the OS "reduce motion" setting, plus an in-page toggle
   that forces instant card removal and quiets the other animations. */
const MOTION_KEY = "carvingTable.motionOff.v1";
let motionOff = false;
try {
  motionOff = localStorage.getItem(MOTION_KEY) === "1";
} catch (err) {}
function calmNow() {
  return motionOff || CALM.matches;
}
function applyMotionPref() {
  document.documentElement.classList.toggle("motion-off", motionOff);
  const cb = document.getElementById("motionToggle");
  if (cb) cb.checked = motionOff;
}
function initMotionToggle() {
  const cb = document.getElementById("motionToggle");
  if (!cb) return;
  cb.addEventListener("change", () => {
    motionOff = cb.checked;
    try {
      localStorage.setItem(MOTION_KEY, motionOff ? "1" : "0");
    } catch (err) {}
    applyMotionPref();
  });
  applyMotionPref();
}

/* A one-time, unobtrusive nudge pointing at the Reduce-animations toggle —
   the checkbox is easy to miss. It appears only after a card-removal
   animation has actually played and the Build section has been seen,
   and never if the user already reduced motion or dismissed it. */
const MOTION_NUDGE_KEY = "carvingTable.motionNudgeDismissed.v1";
let nudgeDismissed = false;
try {
  nudgeDismissed = localStorage.getItem(MOTION_NUDGE_KEY) === "1";
} catch (err) {}
let animActivated = false,
  buildSeen = false,
  nudgeShown = false,
  nudgeTimer = 0;
function noteAnimationPlayed() {
  animActivated = true;
  maybeShowNudge();
}
function maybeShowNudge() {
  if (
    nudgeShown ||
    nudgeDismissed ||
    motionOff ||
    !animActivated ||
    !buildSeen ||
    nudgeTimer
  )
    return;
  nudgeTimer = setTimeout(() => {
    nudgeTimer = 0;
    if (nudgeShown || nudgeDismissed || motionOff) return;
    const n = document.getElementById("motionNudge");
    if (!n) return;
    nudgeShown = true;
    n.hidden = false;
    requestAnimationFrame(() => n.classList.add("on"));
  }, 2600);
}
function hideNudge() {
  const n = document.getElementById("motionNudge");
  if (!n) return;
  n.classList.remove("on");
  setTimeout(() => {
    if (!n.classList.contains("on")) n.hidden = true;
  }, 220);
}
function initMotionNudge() {
  const n = document.getElementById("motionNudge");
  if (!n) return;
  const never = document.getElementById("mnNever"),
    go = document.getElementById("mnGo");
  if (never)
    never.onclick = () => {
      nudgeDismissed = true;
      try {
        localStorage.setItem(MOTION_NUDGE_KEY, "1");
      } catch (err) {}
      hideNudge();
    };
  if (go)
    go.onclick = () => {
      hideNudge();
      const sec = document.getElementById("build");
      const lbl = document.querySelector(".motion-toggle");
      if (sec)
        sec.scrollIntoView({
          behavior: calmNow() ? "auto" : "smooth",
          block: "start",
        });
      if (lbl) {
        lbl.classList.add("flash");
        const cb = document.getElementById("motionToggle");
        if (cb) cb.focus({ preventScroll: true });
        setTimeout(() => lbl.classList.remove("flash"), 2600);
      }
    };
  n.addEventListener("keydown", (e) => {
    if (e.key === "Escape") hideNudge();
  });
  const build = document.getElementById("build");
  if (build && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            buildSeen = true;
            maybeShowNudge();
          }
        });
      },
      { threshold: 0 },
    );
    io.observe(build);
  } else {
    buildSeen = true;
  }
}

/* ---- candle nav: light the candle for the section you are in ---- */
function initCandleNav() {
  const links = [...document.querySelectorAll(".candlenav a[data-sec]")];
  if (!links.length) return;
  const byId = {};
  links.forEach((a) => (byId[a.dataset.sec] = a));
  const secs = links
    .map((a) => document.getElementById(a.dataset.sec))
    .filter(Boolean);
  if (!secs.length) return;

  /* A section counts as reached once its top has passed the middle of the
     screen, so the candles light in order as you work down the page and
     stay lit behind you — one lit candle per step completed. */
  function paint() {
    const mid = window.innerHeight * 0.5;
    let current = null;
    secs.forEach((s) => {
      if (s.getBoundingClientRect().top <= mid) current = s.id;
    });
    links.forEach((a) =>
      a.classList.toggle(
        "lit",
        !!current &&
          secs.findIndex((s) => s.id === a.dataset.sec) <=
            secs.findIndex((s) => s.id === current),
      ),
    );
    links.forEach((a) =>
      a.setAttribute(
        "aria-current",
        a.classList.contains("lit") && a.dataset.sec === current
          ? "true"
          : "false",
      ),
    );
  }
  let ticking = false;
  addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        paint();
        ticking = false;
      });
    },
    { passive: true },
  );
  addEventListener("resize", paint, { passive: true });
  paint();
}

/* ---- the rare glitch: once every 30-60s, and never under reduced motion ---- */
function initGlitch() {
  const veil = document.createElement("div");
  veil.className = "glitch-veil";
  veil.setAttribute("aria-hidden", "true");
  document.body.appendChild(veil);
  let timer = null;
  function schedule() {
    clearTimeout(timer);
    if (calmNow()) return; /* stay still */
    timer = setTimeout(fire, 30000 + Math.random() * 30000);
  }
  function fire() {
    if (calmNow() || document.hidden) {
      schedule();
      return;
    }
    veil.classList.add("on");
    document.documentElement.classList.add("glitching");
    setTimeout(() => {
      veil.classList.remove("on");
      document.documentElement.classList.remove("glitching");
    }, 240);
    schedule();
  }
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) schedule();
  });
  CALM.addEventListener("change", schedule);
  schedule();
}

/* ---- the sacrifice: burn the card, then take it off the board ---- */
function sacrificeCard(index, then) {
  const el = document.querySelector('#board [data-sel="' + index + '"]');
  if (!el || calmNow()) {
    then();
    return;
  }
  /* keep the card at the angle the fan gave it while it burns */
  const off = index - (deck.length - 1) / 2;
  el.style.setProperty(
    "--sr",
    el.closest(".slot") ? "0deg" : (off * 3.4).toFixed(2) + "deg",
  );
  el.classList.add("burning");
  noteAnimationPlayed();
  let done = false;
  const finish = () => {
    if (done) return;
    done = true;
    then();
  };
  el.addEventListener("animationend", finish, { once: true });
  setTimeout(finish, 620); /* in case the event is missed */
}

/* ══════════════════ THE SHELF: PRESETS ══════════════════ */
/* A preset is {id,name,kind,cards,gimmick,why}. `cards` holds either a bare
   card id or {id,mod} — saving a custom deck keeps the carving, so a preset
   reproduces the exact cards, quantities and edits it was saved from.        */

const KIND_LABEL = {
  official: "In the mod",
  themed: "Themed",
  challenge: "Challenge",
  experimental: "Experimental",
  power: "Power",
  fun: "Fun",
  mine: "Mine",
};
const KIND_TIP = {
  all: "Show every deck on the shelf.",
  official: "The eight starter decks Kaycee's Mod itself deals you.",
  themed: "Decks built around one idea — a tribe, a cost or a sigil.",
  challenge: "Decks with a built-in handicap: a rule to play the run under.",
  experimental: "Odd ideas that may or may not hold up — try them and see.",
  power: "Decks stacked to be strong.",
  fun: "Silly or chaotic decks, more for laughs than for winning.",
  mine: "Decks you've saved yourself.",
};
const KIND_COLOR = {
  official: "var(--parchment-lo)",
  themed: "var(--moss)",
  challenge: "var(--blood-hi)",
  experimental: "#9b8fc0",
  power: "var(--tallow)",
  fun: "#6fa8a0",
  mine: "#d0aa5f",
};
const P2 = ["PeltHare", "PeltHare"];

const BUILTIN = [
  /* ---- the eight decks Kaycee's Mod actually deals you ---- */
  {
    id: "o-vanilla",
    name: "Vanilla",
    kind: "official",
    cards: ["Stoat", "Bullfrog", "Wolf", ...P2],
    gimmick:
      "The default hand: a small body, a leaper and a heavy hitter, plus two pelts for the Trapper.",
    why: "The baseline every other deck is measured against. Nothing clever, nothing missing.",
  },
  {
    id: "o-moose",
    name: "Moose Blood",
    kind: "official",
    cards: ["Goat", "Moose", "Mole", ...P2],
    gimmick: "One expensive body and two cheap ones bred to feed it.",
    why: "Black Goat counts as three Blood when sacrificed, so the 3/7 Moose Buck lands far earlier than its cost suggests.",
  },
  {
    id: "o-ants",
    name: "Ants",
    kind: "official",
    cards: ["AntQueen", "AntFlying", "Skunk", ...P2],
    gimmick:
      "Every Ant's power is the number of Ants you control, and the Queen spawns more.",
    why: "Starts as a board of 0-power insects and snowballs into a wall that all hits for the same rising number.",
  },
  {
    id: "o-god",
    name: "One True God",
    kind: "official",
    cards: ["MantisGod", "RingWorm", "RingWorm", ...P2],
    gimmick:
      "A single 1/1 with Trifurcated Strike, escorted by two disposable worms.",
    why: "Three lanes of damage for one Blood. The worms exist to be sacrificed, or fed to the campfire.",
  },
  {
    id: "o-subs",
    name: "Submersibles",
    kind: "official",
    cards: ["Kingfisher", "Kingfisher", "Kraken", ...P2],
    gimmick:
      "Waterborne: while submerged a card cannot be struck, so it trades attacks for free.",
    why: "Almost unblockable chip damage from turn one, and the Great Kraken is otherwise unobtainable.",
  },
  {
    id: "o-bones",
    name: "Bones",
    kind: "official",
    cards: ["Raccoon", "DireWolfCub", "Coyote", ...P2],
    gimmick: "A bone economy with nothing to spend it on yet.",
    why: "Dire Wolf Pup prints a bone every turn and Raccoon makes the opponent's dead pay out too — then Coyote spends it.",
  },
  {
    id: "o-null",
    name: "Null",
    kind: "official",
    cards: ["Rabbit", "Tadpole", "Geck", ...P2],
    gimmick: "Three free creatures. No Blood, no Bones, no cost of any kind.",
    why: "A deck of pure sacrifice fodder. Every card is a resource for whatever you pick up on the map.",
  },
  {
    id: "o-eggs",
    name: "Curious Eggs",
    kind: "official",
    cards: ["HydraEgg", "HydraEgg", "HydraEgg", ...P2],
    gimmick:
      "Three eggs that only hatch once your deck covers power 1–5, health 1–5 and one creature of every tribe.",
    why: "A deck-building puzzle disguised as a hand. Until you solve it you are playing 0/1s; after, you have Hydras.",
  },

  /* ---- new decks: shapes to build under ---- */
  {
    id: "n-bonelord",
    name: "Bone Lord",
    kind: "themed",
    cards: ["RatKing", "Alpha", "Warren", ...P2],
    gimmick:
      "The Bones deck as it stood before the mod's 1.0 shuffle — a relic hand.",
    why: "Rat King pays out four bones when it dies instead of one, which funds Alpha's 4-bone cost immediately.",
  },
  {
    id: "n-orchard",
    name: "Bone Orchard",
    kind: "themed",
    cards: ["RatKing", "DireWolfCub", "Raccoon", "Lammergeier", ...P2],
    gimmick:
      "Every creature either makes bones, harvests them, or spends them.",
    why: "Lammergeier's power is half your bones, so the other three cards are literally its stat line. A deck where the resource counter is the win condition.",
  },
  {
    id: "n-marrow",
    name: "Marrow Tax",
    kind: "challenge",
    cards: ["Opossum", "Amoeba", "Cockroach", "Bat", "Rattler"],
    gimmick:
      "Bones only. Not one card in this deck costs Blood, and there are no pelts to trade.",
    why: "You open on an empty board with nothing you can afford — bones only arrive when something dies. Cockroach returning to hand each death is the engine that keeps the tax paid.",
  },
  {
    id: "n-feathers",
    name: "Nothing But Feathers",
    kind: "themed",
    cards: ["Sparrow", "Magpie", "Cuckoo", "RavenEgg"],
    gimmick:
      "Avian only. No pelts, no ground creatures, nothing that can block.",
    why: "Airborne strikes past everything, so the whole deck ignores the opposing board — and the opposing board ignores you right back. A pure race.",
  },
  {
    id: "n-blank",
    name: "Blank Slate",
    kind: "challenge",
    cards: ["Geck", "Stoat", "Wolf", "Snapper", ...P2],
    gimmick: "No sigils. Every card here is printed bare.",
    why: "Stats and nothing else, which makes it the cleanest canvas in the game: every sigil these cards ever have will be one you put there at the campfire or on this page.",
  },
  {
    id: "n-hoard",
    name: "The Sigil Hoard",
    kind: "themed",
    cards: ["Kingfisher", "Snelk", "MoleMan", "Pronghorn"],
    gimmick:
      "The mirror of Blank Slate: every card carries two printed sigils and nothing else is allowed in.",
    why: "Eight abilities across four cards, most of them movement, so the board rearranges itself every turn whether you want it to or not.",
  },
  {
    id: "n-undying",
    name: "The Undying",
    kind: "fun",
    cards: ["Warren", "Cockroach", "Ouroboros", "Cat", ...P2],
    gimmick: "Nothing in this deck stays dead.",
    why: "Cockroach and Ouroboros come back to hand when they perish, Cat survives being sacrificed, and Warren keeps printing rabbits. You cannot run out of bodies — only out of time.",
  },
  {
    id: "n-altar",
    name: "The Altar",
    kind: "power",
    cards: ["Goat", "Cat", "Moose", "Urayuli", ...P2],
    gimmick: "Two cards exist to die, two exist to be paid for.",
    why: "Black Goat counts as three Blood and Cat does not perish when sacrificed, which turns a 4-Blood 7/7 Urayuli into something you can reasonably cast on turn two.",
  },
  {
    id: "n-colony",
    name: "Colony",
    kind: "fun",
    cards: ["AntQueen", "Ant", "Ant", "AntFlying", ...P2],
    gimmick:
      "The mod's Ants deck taken to its conclusion — four Ants and the Queen that makes more.",
    why: "Every Ant's power is the count of Ants on your board, so the fourth one played is worth four on every card at once. Empty early, overwhelming late.",
  },
  {
    id: "n-nobite",
    name: "Nothing That Bites",
    kind: "challenge",
    cards: ["Skunk", "Beehive", "Mole", "Goat", ...P2],
    gimmick: "Zero power. Not one card in this deck can deal damage itself.",
    why: "You have to win with what the cards make and do: Bees from a struck Beehive, Stinky shaving the opposing power, Mole soaking strikes, Goat paying for whatever you find on the map.",
  },
  {
    id: "n-water",
    name: "Beneath the Water",
    kind: "power",
    cards: ["Kingfisher", "Tadpole", "Otter", "Shark"],
    gimmick:
      "Waterborne only. Every card submerges, so the opponent has nothing to hit.",
    why: "A 4/2 Great White that cannot be blocked or struck is a clock the scale has no answer to. The cost is that you have no blockers either — and no pelts to buy any.",
  },
  {
    id: "n-stampede",
    name: "The Stampede",
    kind: "experimental",
    cards: ["ElkCub", "Pronghorn", "Bull", "Mule", ...P2],
    gimmick:
      "Hooved only, and every one of them moves on its own at end of turn.",
    why: "You do not really place this deck so much as aim it. Wild Bull throws whatever is in its way behind it, so your own board reorders itself mid-combat.",
  },
  {
    id: "n-cold",
    name: "Cold Blood",
    kind: "themed",
    cards: ["Adder", "Skink", "MudTurtle", "Snapper", ...P2],
    gimmick:
      "Reptiles only — one lethal, one that keeps shedding, two that refuse to die.",
    why: "Adder kills anything it touches regardless of size, and River Snapper's 6 health outlasts most of Act I. Slow, mean and very hard to push off the board.",
  },
  {
    id: "n-pack",
    name: "The Pack",
    kind: "themed",
    cards: ["Alpha", "WolfCub", "Bloodhound", "DireWolfCub", ...P2],
    gimmick: "Canines only, built around Leader and adjacency.",
    why: "Alpha gives every neighbour +1 power, so this deck cares about where cards sit rather than what they cost — an unusual concern for a starting hand.",
  },
  {
    id: "n-sleight",
    name: "Sleight of Hand",
    kind: "experimental",
    cards: ["Magpie", "PackRat", "FieldMouse", "Daus", ...P2],
    gimmick:
      "None of these cards are about the board. All four manipulate your hand or your items.",
    why: "Hoarder fetches any card you like, Fecundity copies itself, Trinket Bearer hands you items and Bellist fills the empty spaces. A starting deck that plays like a toolbox.",
  },
  {
    id: "n-debt",
    name: "The Trapper's Debt",
    kind: "challenge",
    cards: ["PeltHare", "PeltHare", "PeltWolf", "PeltGolden"],
    gimmick: "Pelts only. Four cards, no creatures at all.",
    why: "Pure currency: you cannot fight until you have traded. The hardest opening on the shelf — and be warned, a deck with nothing playable can misbehave in events that expect a creature.",
  },
  {
    id: "n-paper",
    name: "Paper Thin",
    kind: "challenge",
    cards: ["Bat", "Coyote", "Rattler", "Mantis", ...P2],
    gimmick:
      "Every creature has exactly 1 health. Anything that touches them kills them.",
    why: "Enormous damage on bodies that die to a stiff breeze. You are forced to play around trades constantly, and the campfire's health buff has never mattered more.",
  },
  {
    id: "n-mimic",
    name: "The Mimic",
    kind: "experimental",
    cards: ["Ijiraq", "Amalgam", "Hodag", ...P2],
    gimmick:
      "Three cards that are hard to pin down: one disguises itself in the deck, one belongs to every tribe, one grows.",
    why: "Ijiraq shows up as some other card until you play it, Amalgam counts as Avian, Canine, Hooved, Reptile, Insect and Squirrel at once, and Hodag's Blood Lust gains stick for the whole run.",
  },
  {
    id: "n-frenzy",
    name: "Feeding Frenzy",
    kind: "power",
    cards: ["Hodag", "Wolverine", "Goat", ...P2],
    gimmick: "Two Blood Lust carriers and something to pay for them.",
    why: "Both creatures grow permanently for the rest of the run every time they kill. Given to you at the start instead of found late, they have a whole act to compound.",
  },
  {
    id: "n-touch",
    name: "Do Not Touch",
    kind: "fun",
    cards: ["Porcupine", "Porcupine", "Cockroach", "Skunk", ...P2],
    gimmick: "A deck that would rather be attacked than attack.",
    why: "Sharp Quills punishes whatever strikes the Porcupines, Stinky weakens whatever stands opposite the Skunk, and the Cockroach comes back every time it dies. Nothing here is in a hurry.",
  },
  /* ---- added: five more each of experimental, fun and challenge, two more power ---- */
  {
    id: "x-nursery",
    name: "The Nursery",
    kind: "experimental",
    cards: ["WolfCub", "ElkCub", "RavenEgg", "Mothman_Stage1", "Tadpole"],
    gimmick: "Every card carries Fledgling. Nothing here is finished yet.",
    why: "Each one grows into a stronger form after a turn on the board, and the Strange Larva grows twice — Larva, then Pupa, then the 7/3 Mothman. Weak on the turn you play them, the question is whether they live long enough to be worth it.",
  },
  {
    id: "x-forked",
    name: "Forked Tongue",
    kind: "experimental",
    cards: ["Mantis", "MantisGod", "Pronghorn", "DireWolf", ...P2],
    gimmick:
      "Every creature hits more than one space, or the same space twice.",
    why: "Bifurcated Strike on the Mantis and Pronghorn, Trifurcated Strike on the Mantis God, Double Strike on the Dire Wolf. Low printed power, but every point lands two or three times.",
  },
  {
    id: "x-tourists",
    name: "Tourists from Act II",
    kind: "experimental",
    cards: ["Hawk", "Salmon", "SquirrelBall", ...P2],
    gimmick: "Three cards from the pixel game, dropped into Leshy's cabin.",
    why: "Hawk is a 3/1 flyer, Salmon swims and runs, and Squirrel Ball leaves a Squirrel behind every time it moves. They are Act II cards, and the guide's warning applies: cards from other acts can misbehave here — that is the experiment.",
  },
  {
    id: "x-tentacles",
    name: "Tentacles",
    kind: "experimental",
    cards: ["SquidBell", "SquidCards", "SquidMirror", ...P2],
    gimmick: "Not one of these creatures has a fixed power.",
    why: "Bell Tentacle's power is how many times the bell has rung, Hand Tentacle's is the cards in your hand, and Mirror Tentacle copies the card opposite it. Every number on the board depends on something else.",
  },
  {
    id: "x-chimera",
    name: "The Chimera",
    kind: "experimental",
    cards: [
      { id: "Amalgam", mod: { name: "Chimera", add: [19, 15] } },
      "Geck",
      "Stoat",
      ...P2,
    ],
    gimmick:
      "Comes pre-carved: an Amalgam renamed the Chimera, with Airborne and Sharp Quills.",
    why: "Amalgam already counts as every tribe at once; the carving adds flight and spines on top of its 3/3. A demonstration of how far a single carving can push one card — open it in the editor to see the changes.",
  },

  {
    id: "f-rabbits",
    name: "Rabbit Season",
    kind: "fun",
    cards: ["Warren", "Rabbit", "Rabbit", ...P2],
    gimmick:
      "Everything in this deck is a rabbit, makes a rabbit, or used to be one.",
    why: "Warren creates a Rabbit in your hand when it is played, the two Rabbits are free 0/1s, and the pelts are what the Trapper made of their relatives. Absurd, and surprisingly good sacrifice fodder.",
  },
  {
    id: "f-giant",
    name: "Feed the Giant",
    kind: "fun",
    cards: ["Squirrel", "Squirrel", "Squirrel", "Squirrel", "Urayuli"],
    gimmick:
      "Four Squirrels and one 7/7 Urayuli. Exactly enough Blood, if you draw it right.",
    why: "Urayuli costs four Blood and there are four Squirrels to pay it. Every draw is either a sacrifice or the payoff — and on top of these you still get the usual side deck.",
  },
  {
    id: "f-lucky",
    name: "Lucky Dip",
    kind: "fun",
    cards: ["Amoeba", "Amoeba", "PackRat", "Ijiraq"],
    gimmick: "You will not know what this deck does until it does it.",
    why: "Each Amoeba swaps its Amorphous sigil for a random one when drawn, Pack Rat hands you a random item, and Ijiraq hides in your deck as some other card until you play it.",
  },
  {
    id: "f-ninelives",
    name: "Nine Lives",
    kind: "fun",
    cards: ["Cat", "Cat", "JerseyDevil", "Grizzly"],
    gimmick:
      "Three cards that survive being sacrificed, and a Grizzly to keep feeding them to.",
    why: "Both Cats and Child 13 carry Many Lives, so they are not lost when sacrificed — the same three Blood can pay for the 4/6 Grizzly again and again. Child 13 also turns into a 2/1 flyer the first time it goes under the knife.",
  },
  {
    id: "f-bees",
    name: "The Beekeeper",
    kind: "fun",
    cards: ["Beehive", "Beehive", "Bee", "Bee"],
    gimmick: "Insects only: two hives and the bees to start them off.",
    why: "A Beehive creates a 1/1 Bee in your hand every time it is struck, so the harder the opponent hits your hives the bigger the swarm. The two starting Bees cost nothing to play.",
  },

  {
    id: "c-line",
    name: "Hold the Line",
    kind: "challenge",
    cards: ["Bullfrog", "MoleMan", "Mole", "Beaver", ...P2],
    gimmick: "Nothing in this deck has more than 1 power.",
    why: "A deck built only to block: Bullfrog and Mole Man leap to stop flyers, both Moles burrow into empty lanes to take hits, and Beaver walls the gaps with Dams. Winning means finding damage on the map before the scale tips.",
  },
  {
    id: "c-heavy",
    name: "Top Heavy",
    kind: "challenge",
    cards: ["Grizzly", "Moose", "Shark", "Urayuli"],
    gimmick: "Every card costs three Blood or more. No pelts, nothing cheap.",
    why: "Huge bodies, and nothing in the deck to pay for them — every sacrifice has to come from your side deck. The opening turns are spent waiting, and every one of them costs you on the scale.",
  },
  {
    id: "c-hunger",
    name: "Long Hunger",
    kind: "challenge",
    cards: ["Vulture", "Rattler", "Maggots", "Wolverine"],
    gimmick:
      "Every card costs five Bones or more, and nothing in the deck makes bones.",
    why: "You start unable to play anything and only earn bones as things die. Turkey Vulture at eight Bones may not hit the board until well into the fight — patience is the whole challenge.",
  },
  {
    id: "c-lonewolf",
    name: "Lone Wolf",
    kind: "challenge",
    cards: ["Wolf", ...P2],
    gimmick: "One creature and two pelts. That is the whole deck.",
    why: "The smallest deck that stays within the three-card guideline. Every draw after the first two is the Wolf or nothing, so what you pick up on the map decides the run.",
  },
  {
    id: "c-scum",
    name: "Scum's Wages",
    kind: "challenge",
    cards: ["Stoat", "Opossum", "Opossum", "RingWorm", "RingWorm"],
    gimmick:
      "Built from the cards Kaycee's Mod hands out as punishment for abandoning runs.",
    why: "The anti-reset rule swaps a Rabbit Pelt for an Opossum, then a Ring Worm on the next abandon (see the rite above). Here you get two of each, with the Stoat you would have kept — a 1/1, a 0/1 and nothing else.",
  },

  {
    id: "p-killfloor",
    name: "Killing Floor",
    kind: "power",
    cards: ["Adder", "Snelk", "Goat", ...P2],
    gimmick: "Two Touch of Death carriers and the goat to pay for them.",
    why: "Anything the Adder or Long Elk damages dies, whatever its health — and Long Elk also runs across the lanes looking for a target. Black Goat counts as three Blood when sacrificed, so one Goat pays for the Adder outright.",
  },
  {
    id: "p-champion",
    name: "The Champion",
    kind: "power",
    cards: [
      { id: "Stoat", mod: { name: "Champion", dAtk: 2, dHp: 2, add: [19] } },
      "Bullfrog",
      "Wolf",
      ...P2,
    ],
    gimmick:
      "Comes pre-carved: the Vanilla deck, with its Stoat turned into a 3/4 flyer.",
    why: "The carving adds +2 power, +2 health and Airborne to the 1/2 Stoat for the same one Blood, so it strikes past blockers from the first turn. Open it in the editor to see — or to push it further.",
  },
];

/* ---- state ---- */
const LS_KEY = "carvingTable.presets.v1";
let kindFilter = "all",
  customPresets = [],
  loadedId = "",
  loadedSig = "",
  pendingDelete = null,
  renamingId = null,
  storageOK = true;

function blankMod() {
  return { name: "", dAtk: 0, dHp: 0, dBlood: 0, dBones: 0, add: [], neg: [] };
}

/* Accepts "Stoat" or {id,mod}; drops anything not in this page's card pool. */
function normCards(cards) {
  if (!Array.isArray(cards)) return [];
  const out = [];
  for (const c of cards) {
    const id =
      typeof c === "string" ? c : c && typeof c.id === "string" ? c.id : null;
    if (!id || !CARD_BY_ID[id]) continue;
    const m = blankMod(),
      src = c && typeof c === "object" && c.mod ? c.mod : null;
    if (src) {
      m.name = typeof src.name === "string" ? src.name : "";
      m.dAtk = Number(src.dAtk) || 0;
      m.dHp = Number(src.dHp) || 0;
      m.dBlood = Number(src.dBlood) || 0;
      m.dBones = Number(src.dBones) || 0;
      m.add = Array.isArray(src.add)
        ? src.add.map(Number).filter((n) => SIG[n])
        : [];
      m.neg = Array.isArray(src.neg)
        ? src.neg.map(Number).filter((n) => SIG[n])
        : [];
    }
    out.push({ id, mod: m });
  }
  return out;
}
/* Signature of a deck including carving, for "has this been changed?" */
function deckSig(d) {
  return JSON.stringify(
    (d || []).map((e) => [
      e.id,
      e.mod.name,
      e.mod.dAtk,
      e.mod.dHp,
      e.mod.dBlood,
      e.mod.dBones,
      [...e.mod.add].sort((a, b) => a - b),
      [...e.mod.neg].sort((a, b) => a - b),
    ]),
  );
}
function uid() {
  return "u" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}
function allPresets() {
  return BUILTIN.concat(customPresets);
}

/* ---- storage (localStorage; degrades to memory-only) ---- */
function readStore() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return;
    customPresets = parsed
      .filter((p) => p && typeof p.name === "string")
      .map((p) => ({
        id: typeof p.id === "string" ? p.id : uid(),
        name: String(p.name).slice(0, 42),
        kind: "mine",
        cards: normCards(p.cards),
        gimmick: typeof p.gimmick === "string" ? p.gimmick : "",
        why: "",
      }))
      .filter((p) => p.cards.length);
  } catch (err) {
    storageOK = false;
  }
}
function writeStore() {
  try {
    localStorage.setItem(
      LS_KEY,
      JSON.stringify(
        customPresets.map((p) => ({
          id: p.id,
          name: p.name,
          cards: p.cards,
          gimmick: p.gimmick,
        })),
      ),
    );
    return true;
  } catch (err) {
    storageOK = false;
    renderStoreNote();
    return false;
  }
}
function renderStoreNote() {
  const el = document.getElementById("storeNote");
  if (!el) return;
  el.classList.toggle("is-hidden", storageOK);
  if (!storageOK)
    el.textContent =
      "This browser will not let the page keep anything between visits — " +
      "opening the file straight off disk sometimes does that. Your decks are safe for as long as this tab is open. " +
      "Use Export mine to save them to a file, and Import to bring them back.";
}

/* ---- rendering ---- */
function renderKindChips() {
  const box = document.getElementById("kindChips");
  const order = [
    "all",
    "official",
    "themed",
    "challenge",
    "experimental",
    "power",
    "fun",
    "mine",
  ];
  box.innerHTML = order
    .map((k) => {
      const n =
        k === "all"
          ? allPresets().length
          : allPresets().filter((p) => p.kind === k).length;
      const lbl = k === "all" ? "Everything" : KIND_LABEL[k];
      return (
        '<button class="chip' +
        (kindFilter === k ? " on" : "") +
        '" data-kind="' +
        k +
        '" data-tip="' +
        esc(KIND_TIP[k] + " Click to show only these.") +
        '"' +
        (n ? "" : ' disabled style="opacity:.35;cursor:default"') +
        ">" +
        lbl +
        ' <span style="opacity:.55">' +
        n +
        "</span></button>"
      );
    })
    .join("");
  box.querySelectorAll("[data-kind]").forEach((b) => {
    b.onclick = () => {
      kindFilter = b.dataset.kind;
      pendingDelete = null;
      renamingId = null;
      renderShelf();
    };
  });
}
function rosterText(cards) {
  const counts = [],
    seen = {};
  cards.forEach((c) => {
    const id = typeof c === "string" ? c : c.id;
    if (seen[id] === undefined) {
      seen[id] = counts.length;
      counts.push([id, 0]);
    }
    counts[seen[id]][1]++;
  });
  return counts
    .map(([id, n]) => {
      const c = CARD_BY_ID[id];
      return esc(c ? c.n : id) + (n > 1 ? " ×" + n : "");
    })
    .join(" · ");
}
function renderShelf() {
  const grid = document.getElementById("shelfGrid");
  if (!grid) return;
  const list = allPresets().filter(
    (p) => kindFilter === "all" || p.kind === kindFilter,
  );
  document.getElementById("shelfCount").textContent =
    list.length + " shown · " + customPresets.length + " of them yours";
  if (!list.length) {
    grid.innerHTML =
      '<p class="shelf-empty">' +
      (kindFilter === "mine"
        ? "The shelf is bare. Build a deck below, give it a name and lay it here."
        : "Nothing under that heading.") +
      "</p>";
    return;
  }
  grid.innerHTML = list
    .map((p) => {
      const on = p.id === loadedId;
      const mine = p.kind === "mine";
      const col = KIND_COLOR[p.kind] || "var(--grain-hi)";
      const nameCell =
        renamingId === p.id
          ? '<input class="rn" type="text" maxlength="42" value="' +
            esc(p.name) +
            '" aria-label="New name" data-tip="Type the new name. Enter saves it, Esc cancels.">'
          : '<span class="pname">' + esc(p.name) + "</span>";
      let foot = "";
      if (mine) {
        if (pendingDelete === p.id) {
          foot =
            '<button class="mini-act warn-act" data-confirm="' +
            p.id +
            '" data-tip="Delete this deck for good. This can\'t be undone.">Burn it — sure?</button>' +
            '<button class="mini-act" data-cancel="1" data-tip="Don\'t delete — keep the deck.">Keep</button>';
        } else if (renamingId === p.id) {
          foot =
            '<button class="mini-act" data-savename="' +
            p.id +
            '" data-tip="Save the new name (Enter also works).">Save name</button>' +
            '<button class="mini-act" data-cancel="1" data-tip="Keep the old name (Esc also works).">Cancel</button>';
        } else {
          foot =
            '<button class="mini-act" data-rename="' +
            p.id +
            '" data-tip="Give this saved deck a new name.">Rename</button>' +
            '<button class="mini-act warn-act" data-del="' +
            p.id +
            '" data-tip="Delete this saved deck. You\'ll be asked to confirm first.">Delete</button>';
        }
      }
      return (
        '<div class="preset' +
        (on ? " on" : "") +
        '" style="--kc:' +
        col +
        '" data-load="' +
        p.id +
        '"' +
        ' data-tip="' +
        esc(
          on
            ? "This deck is on the board now. Click to load it again as saved — any changes since are undone."
            : "Click to load this deck onto the board. It replaces the cards there now.",
        ) +
        '"' +
        (renamingId === p.id || pendingDelete === p.id
          ? ""
          : ' role="button" tabindex="0"') +
        ">" +
        '<div class="ptop">' +
        nameCell +
        '<span class="p-tag" style="--kc:' +
        col +
        '">' +
        KIND_LABEL[p.kind] +
        "</span></div>" +
        '<p class="roster">' +
        rosterText(p.cards) +
        "</p>" +
        (p.gimmick ? '<p class="blurb">' + esc(p.gimmick) + "</p>" : "") +
        (p.why
          ? '<p class="blurb" style="color:var(--bone-dim)">' +
            esc(p.why) +
            "</p>"
          : "") +
        (foot ? '<div class="pfoot">' + foot + "</div>" : "") +
        "</div>"
      );
    })
    .join("");
  wireShelf(grid);
}
function wireShelf(grid) {
  grid.querySelectorAll("[data-load]").forEach((el) => {
    const id = el.dataset.load;
    const go = (ev) => {
      if (ev.target.closest("button") || ev.target.tagName === "INPUT") return;
      const p = allPresets().find((x) => x.id === id);
      if (p) loadPreset(p);
    };
    el.addEventListener("click", go);
    el.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter" || ev.key === " ") {
        ev.preventDefault();
        go(ev);
      }
    });
  });
  grid.querySelectorAll("[data-rename]").forEach(
    (b) =>
      (b.onclick = (ev) => {
        ev.stopPropagation();
        renamingId = b.dataset.rename;
        pendingDelete = null;
        renderShelf();
        const inp = grid.querySelector("input.rn");
        if (inp) {
          inp.focus();
          inp.select();
        }
      }),
  );
  grid.querySelectorAll("[data-savename]").forEach(
    (b) =>
      (b.onclick = (ev) => {
        ev.stopPropagation();
        const inp = b.closest(".preset").querySelector("input.rn");
        const v = inp ? inp.value.trim() : "";
        const p = customPresets.find((x) => x.id === b.dataset.savename);
        if (p && v) p.name = v.slice(0, 42);
        renamingId = null;
        writeStore();
        renderShelf();
      }),
  );
  grid.querySelectorAll("[data-del]").forEach(
    (b) =>
      (b.onclick = (ev) => {
        ev.stopPropagation();
        pendingDelete = b.dataset.del;
        renamingId = null;
        renderShelf();
      }),
  );
  grid.querySelectorAll("[data-confirm]").forEach(
    (b) =>
      (b.onclick = (ev) => {
        ev.stopPropagation();
        const id = b.dataset.confirm;
        customPresets = customPresets.filter((p) => p.id !== id);
        if (loadedId === id) loadedId = "";
        pendingDelete = null;
        writeStore();
        renderKindChips();
        renderShelf();
        renderDeckTag();
      }),
  );
  grid.querySelectorAll("[data-cancel]").forEach(
    (b) =>
      (b.onclick = (ev) => {
        ev.stopPropagation();
        pendingDelete = null;
        renamingId = null;
        renderShelf();
      }),
  );
  grid.querySelectorAll("input.rn").forEach((inp) => {
    inp.addEventListener("click", (ev) => ev.stopPropagation());
    inp.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter") {
        ev.preventDefault();
        const btn = inp.closest(".preset").querySelector("[data-savename]");
        if (btn) btn.click();
      }
      if (ev.key === "Escape") {
        renamingId = null;
        renderShelf();
      }
    });
  });
}
function renderDeckTag() {
  const el = document.getElementById("deckTag");
  if (!el) return;
  if (!deck.length) {
    el.innerHTML = "The board is bare";
    return;
  }
  const p = allPresets().find((x) => x.id === loadedId);
  if (!p) {
    el.innerHTML = "Your own carving";
    return;
  }
  const dirty = deckSig(deck) !== loadedSig;
  el.innerHTML =
    "From the shelf · <b>" +
    esc(p.name) +
    "</b>" +
    (dirty ? ' <span class="dirty">— carved since</span>' : "");
}

/* ---- actions ---- */
function loadPreset(p) {
  const snap = deck.length ? snapshot() : null;
  deck = normCards(p.cards);
  selected = deck.length ? 0 : -1;
  loadedId = p.id;
  loadedSig = deckSig(deck);
  const nameBox = document.getElementById("presetName");
  if (nameBox && p.kind === "mine") nameBox.value = p.name;
  pendingDelete = null;
  renamingId = null;
  renderAll();
  const board = document.getElementById("board");
  if (board) {
    /* The stylesheet's reduced-motion block resets scroll-behavior, but an
       explicit behavior option overrides CSS, so honour the query here too. */
    board.scrollIntoView({
      behavior: calmNow() ? "auto" : "smooth",
      block: "nearest",
    });
  }
  if (snap) showToast("Loaded “" + p.name + "” onto the board.", snap);
}
function saveCurrent() {
  const box = document.getElementById("presetName");
  const raw = (box.value || "").trim();
  if (!deck.length) {
    flashSave("There is nothing on the board to save.");
    return;
  }
  if (!raw) {
    flashSave("Give the deck a name first.");
    box.focus();
    return;
  }
  const name = raw.slice(0, 42);
  const cards = deck.map((e) => ({
    id: e.id,
    mod: JSON.parse(JSON.stringify(e.mod)),
  }));
  const existing = customPresets.find(
    (p) => p.name.toLowerCase() === name.toLowerCase(),
  );
  let p;
  if (existing) {
    existing.cards = cards;
    p = existing;
  } else {
    p = { id: uid(), name, kind: "mine", cards, gimmick: "", why: "" };
    customPresets.push(p);
  }
  loadedId = p.id;
  loadedSig = deckSig(deck);
  const kept = writeStore();
  kindFilter = "mine";
  renderKindChips();
  renderShelf();
  renderDeckTag();
  flashSave(
    existing
      ? '"' + name + '" has been re-cut.'
      : '"' +
          name +
          '" is on the shelf' +
          (kept ? " and will keep." : " for this session only."),
  );
}
let saveFlashTimer = null;
function flashSave(msg) {
  const btn = document.getElementById("btnSavePreset");
  const old = btn.dataset.label || btn.textContent;
  btn.dataset.label = old;
  btn.textContent = msg;
  clearTimeout(saveFlashTimer);
  saveFlashTimer = setTimeout(() => {
    btn.textContent = btn.dataset.label;
  }, 2600);
}
function exportMine() {
  if (!customPresets.length) {
    flashSave("You have not saved any decks yet.");
    return;
  }
  const blob = new Blob(
    [
      JSON.stringify(
        {
          format: "carvingTable.presets",
          version: 1,
          presets: customPresets.map((p) => ({
            id: p.id,
            name: p.name,
            cards: p.cards,
            gimmick: p.gimmick,
          })),
        },
        null,
        2,
      ),
    ],
    { type: "application/json" },
  );
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "carving-table-decks.json";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
function importMine(file) {
  const fr = new FileReader();
  fr.onload = () => {
    let data;
    try {
      data = JSON.parse(String(fr.result));
    } catch (err) {
      flashSave("That file is not readable JSON.");
      return;
    }
    const rows = Array.isArray(data)
      ? data
      : data && Array.isArray(data.presets)
        ? data.presets
        : null;
    if (!rows) {
      flashSave("No decks found in that file.");
      return;
    }
    let added = 0;
    rows.forEach((r) => {
      if (!r || typeof r.name !== "string") return;
      const cards = normCards(r.cards);
      if (!cards.length) return;
      const name = r.name.slice(0, 42);
      const hit = customPresets.find(
        (p) => p.name.toLowerCase() === name.toLowerCase(),
      );
      if (hit) hit.cards = cards;
      else
        customPresets.push({
          id: uid(),
          name,
          kind: "mine",
          cards,
          gimmick: typeof r.gimmick === "string" ? r.gimmick : "",
          why: "",
        });
      added++;
    });
    writeStore();
    kindFilter = "mine";
    renderKindChips();
    renderShelf();
    renderDeckTag();
    flashSave(
      added
        ? added + " deck" + (added === 1 ? "" : "s") + " brought in."
        : "Nothing in that file could be used.",
    );
  };
  fr.onerror = () => flashSave("That file could not be read.");
  fr.readAsText(file);
}

/* ══════════════════ CARD ACTIONS, UNDO ══════════════════ */
const ICON = {
  add: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 2.5v11M2.5 8h11" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
  minus:
    '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8h11" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
  dup: '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="1.8" width="8.7" height="10" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M3.8 4.6H3a1.2 1.2 0 0 0-1.2 1.2V13a1.2 1.2 0 0 0 1.2 1.2h6.2A1.2 1.2 0 0 0 10.4 13v-.6" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',
  del: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 3.5l9 9M12.5 3.5l-9 9" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"/></svg>',
  reset:
    '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.2 6.2A5.2 5.2 0 1 1 3 9.6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M2.4 2.6v4h4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  prev: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M10 3L5 8l5 5" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  next: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/></svg>',
};
const cardName = (e) => (e.mod && e.mod.name) || CARD_BY_ID[e.id].n;
function snapshot() {
  return {
    deck: JSON.parse(JSON.stringify(deck)),
    selected,
    loadedId,
    loadedSig,
  };
}
function restoreSnapshot(s) {
  deck = s.deck;
  selected = s.selected;
  loadedId = s.loadedId;
  loadedSig = s.loadedSig;
  renderAll();
}
let toastTimer = 0;
function showToast(msg, snap) {
  const t = document.getElementById("toast");
  if (!t) return;
  t.querySelector(".toast-msg").textContent = msg;
  const u = document.getElementById("toastUndo");
  u.hidden = !snap;
  u.onclick = snap
    ? () => {
        restoreSnapshot(snap);
        showToast("Undone.");
      }
    : null;
  t.hidden = false;
  requestAnimationFrame(() => t.classList.add("on"));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(hideToast, snap ? 7000 : 2400);
}
function hideToast() {
  const t = document.getElementById("toast");
  if (!t) return;
  t.classList.remove("on");
  setTimeout(() => {
    if (!t.classList.contains("on")) t.hidden = true;
  }, 220);
}
function focusBoardCard(ix) {
  const b = document.querySelector('#board [data-sel="' + ix + '"]');
  if (b) b.focus({ preventScroll: true });
}
function duplicateAt(ix) {
  const e = deck[ix];
  if (!e) return;
  const snap = snapshot();
  deck.splice(ix + 1, 0, { id: e.id, mod: JSON.parse(JSON.stringify(e.mod)) });
  selected = ix + 1;
  renderAll();
  showToast("Copied " + cardName(e) + " into slot " + (ix + 2) + ".", snap);
}
function removeAt(ix) {
  const e = deck[ix];
  if (!e) return;
  const snap = snapshot(),
    nm = cardName(e);
  sacrificeCard(ix, () => {
    deck.splice(ix, 1);
    if (selected > ix) selected--;
    else if (selected === ix) selected = Math.min(ix, deck.length - 1);
    renderAll();
    showToast("Removed " + nm + " from the deck.", snap);
  });
}
function removeLastOf(id) {
  const ix = deck.map((e) => e.id).lastIndexOf(id);
  if (ix >= 0) removeAt(ix);
}
/* below 860px the hand is a row you swipe: say so when it overflows */
function updateBoardHint() {
  const b = document.getElementById("board"),
    hint = document.getElementById("boardHint");
  if (!b || !hint) return;
  const scrolls = deck.length > 0 && b.scrollWidth > b.clientWidth + 4;
  b.classList.toggle("scrolls", scrolls);
  hint.hidden = !scrolls;
  if (scrolls)
    hint.textContent = "Swipe sideways to see all " + deck.length + " cards →";
}
addEventListener("resize", () => updateBoardHint());

/* ══════════════════ CATALOG ══════════════════ */
function renderChips() {
  const g = document.getElementById("groupChips");
  g.innerHTML = GROUPS.map(
    ([k, l]) =>
      '<button class="chip" data-g="' +
      k +
      '" aria-pressed="' +
      filterGroups.has(k) +
      '" data-tip="' +
      esc(
        GROUP_TIP[k] +
          " Click to show or hide this set; at least one set stays on.",
      ) +
      '">' +
      l +
      "</button>",
  ).join("");
  g.querySelectorAll(".chip").forEach(
    (b) =>
      (b.onclick = () => {
        const k = b.dataset.g;
        if (filterGroups.has(k)) filterGroups.delete(k);
        else filterGroups.add(k);
        if (filterGroups.size === 0) filterGroups.add(k);
        renderChips();
        renderCatalog();
      }),
  );
  const c = document.getElementById("costChips");
  const opts = [
    [null, "Any cost", "Show cards of every cost."],
    ["b", "Blood", "Only cards you pay for by sacrificing creatures."],
    ["o", "Bones", "Only cards you pay for with Bones."],
    ["f", "Free", "Only cards that cost nothing to play."],
  ];
  c.innerHTML = opts
    .map(
      ([k, l, t]) =>
        '<button class="chip" data-c="' +
        k +
        '" aria-pressed="' +
        (filterCost === k) +
        '" data-tip="' +
        esc(t) +
        '">' +
        l +
        "</button>",
    )
    .join("");
  c.querySelectorAll(".chip").forEach(
    (b) =>
      (b.onclick = () => {
        filterCost = b.dataset.c === "null" ? null : b.dataset.c;
        renderChips();
        renderCatalog();
      }),
  );
}
function renderCatalog() {
  const q = query.trim().toLowerCase();
  const list = CARDS.filter(
    (c) =>
      filterGroups.has(c.g) &&
      (filterCost === null || c.c === filterCost) &&
      (!q || c.n.toLowerCase().includes(q) || c.i.toLowerCase().includes(q)),
  );
  const el = document.getElementById("catalog"),
    keep = el.scrollTop;
  el.innerHTML =
    list
      .map((c) => {
        const t =
          c.n +
          " — file name " +
          c.i +
          (c.q ? "\n" + c.q : "") +
          (c.s.length
            ? "\nSigils: " +
              c.s.map((s) => (SIG[s] ? SIG[s].name : s)).join(", ")
            : "") +
          "\nAdds a copy to your deck.";
        return (
          '<div class="cat-item" data-id="' +
          esc(c.i) +
          '">' +
          '<div class="cat-bar">' +
          '<span class="cat-count"></span>' +
          '<button type="button" class="cact" data-sub="' +
          esc(c.i) +
          '" hidden aria-label="Remove one ' +
          esc(c.n) +
          ' from the deck" data-tip="Take one ' +
          esc(c.n) +
          ' out of your deck — the last copy. You can undo it.">' +
          ICON.minus +
          "</button>" +
          '<button type="button" class="cact add" data-add="' +
          esc(c.i) +
          '" aria-label="Add ' +
          esc(c.n) +
          ' to the deck" data-tip="' +
          esc(t) +
          '">' +
          ICON.add +
          "<span>Add</span></button>" +
          "</div>" +
          '<button class="card mini' +
          (c.g === "km" ? " km" : "") +
          (faceStyle(c.i) ? " art" : "") +
          '" data-add="' +
          esc(c.i) +
          '" tabindex="-1" aria-hidden="true" data-tip="' +
          esc(t) +
          '">' +
          cardHTML({ id: c.i }, { raw: true }) +
          "</button>" +
          "</div>"
        );
      })
      .join("") ||
    '<p style="grid-column:1/-1;color:#8a8172;font-family:var(--mono);font-size:12px">Nothing matches that.</p>';
  el.scrollTop = keep;
  el.querySelectorAll("[data-add]").forEach(
    (b) => (b.onclick = () => addCard(b.dataset.add)),
  );
  el.querySelectorAll("[data-sub]").forEach(
    (b) => (b.onclick = () => removeLastOf(b.dataset.sub)),
  );
  document.getElementById("catCount").textContent = list.length + " shown";
  updateCatalogCounts();
}
/* how many of each card are already in the deck, shown on the catalog bar */
function updateCatalogCounts() {
  const n = {};
  deck.forEach((e) => {
    n[e.id] = (n[e.id] || 0) + 1;
  });
  document.querySelectorAll("#catalog .cat-item").forEach((it) => {
    const k = n[it.dataset.id] || 0;
    it.classList.toggle("in-deck", k > 0);
    const cc = it.querySelector(".cat-count");
    cc.textContent = k ? "×" + k : "";
    if (k)
      cc.dataset.tip =
        k + " of this card " + (k === 1 ? "is" : "are") + " in your deck";
    else delete cc.dataset.tip;
    it.querySelector("[data-sub]").hidden = !k;
  });
}

/* ══════════════════ DECK ══════════════════ */
function addCard(id) {
  const snap = snapshot();
  deck.push({
    id: id,
    mod: { name: "", dAtk: 0, dHp: 0, dBlood: 0, dBones: 0, add: [], neg: [] },
  });
  selected = deck.length - 1;
  renderAll();
  showToast(
    "Added " +
      CARD_BY_ID[id].n +
      " — slot " +
      deck.length +
      " of " +
      deck.length +
      ".",
    snap,
  );
}
function renderBoard() {
  const el = document.getElementById("board");
  if (!deck.length) {
    el.innerHTML =
      '<div class="slot-empty">Pick cards<br>from the catalog</div>'.repeat(3);
  } else {
    el.innerHTML = deck
      .map((e, ix) => {
        const c = CARD_BY_ID[e.id],
          nm = cardName(e),
          sel = ix === selected;
        /* --i / --n let the stylesheet fan the hand without any JS layout */
        return (
          '<div class="slot' +
          (sel ? " sel" : "") +
          '" style="--i:' +
          ix +
          ";--n:" +
          deck.length +
          '">' +
          '<div class="card-acts" role="group" aria-label="' +
          esc(nm) +
          ", slot " +
          (ix + 1) +
          '">' +
          '<button type="button" class="cact" data-dup="' +
          ix +
          '" aria-label="Duplicate ' +
          esc(nm) +
          '" data-tip="Add a copy of ' +
          esc(nm) +
          ', carving and all, right after it.">' +
          ICON.dup +
          "</button>" +
          '<button type="button" class="cact danger" data-del="' +
          ix +
          '" aria-label="Remove ' +
          esc(nm) +
          ' from the deck" data-tip="Take ' +
          esc(nm) +
          ' out of the deck. You can undo it.">' +
          ICON.del +
          "</button>" +
          "</div>" +
          '<button class="card' +
          (c.g === "km" ? " km" : "") +
          (faceStyle(e.id) ? " art" : "") +
          '" data-sel="' +
          ix +
          '" aria-pressed="' +
          sel +
          '" ' +
          'aria-label="' +
          esc(
            nm +
              ", slot " +
              (ix + 1) +
              " of " +
              deck.length +
              (hasMod(e.mod) ? ", carved" : ""),
          ) +
          '" ' +
          'data-tip="' +
          esc(
            c.n +
              " — file name " +
              c.i +
              (hasMod(e.mod) ? "\nCarved." : "") +
              "\n" +
              (sel
                ? "Being carved in the editor below."
                : "Click to carve it in the editor below."),
          ) +
          '">' +
          cardHTML(e) +
          "</button>" +
          "</div>"
        );
      })
      .join("");
    el.querySelectorAll("[data-sel]").forEach(
      (b) =>
        (b.onclick = () => {
          const ix = +b.dataset.sel;
          selected = ix;
          renderAll();
          focusBoardCard(ix);
        }),
    );
    el.querySelectorAll("[data-dup]").forEach(
      (b) =>
        (b.onclick = () => {
          duplicateAt(+b.dataset.dup);
          focusBoardCard(selected);
        }),
    );
    el.querySelectorAll("[data-del]").forEach(
      (b) => (b.onclick = () => removeAt(+b.dataset.del)),
    );
  }
  const blood = [],
    bones = [];
  deck.forEach((e) => {
    const f = finalStats(e);
    if (f.c === "b" && f.v) blood.push(f.v);
    if (f.c === "o" && f.v) bones.push(f.v);
  });
  document.getElementById("mCount").textContent = deck.length;
  document.getElementById("mBlood").textContent = blood.length
    ? blood.sort((a, b) => a - b).join(" / ")
    : "—";
  document.getElementById("mBones").textContent = bones.length
    ? bones.sort((a, b) => a - b).join(" / ")
    : "—";
  document.getElementById("mMods").textContent = deck.filter((e) =>
    hasMod(e.mod),
  ).length;
  updateBoardHint();
}

/* ══════════════════ EDITOR ══════════════════ */
function renderEditor() {
  const host = document.getElementById("editor");
  const savedScroll = host.scrollTop;
  if (selected < 0 || selected >= deck.length) {
    document.getElementById("edTitle").textContent = "Carving";
    document.getElementById("edSub").textContent = "nothing selected";
    host.innerHTML =
      '<div class="editor-empty">Select a card on the board to change its power, health, cost, name and sigils.</div>';
    return;
  }
  const e = deck[selected],
    c = CARD_BY_ID[e.id],
    m = e.mod;
  document.getElementById("edTitle").textContent = "Carving";
  document.getElementById("edSub").textContent =
    "slot " + (selected + 1) + " of " + deck.length;

  const baseA = typeof c.a === "number" ? c.a : null;
  const baseH = typeof c.h === "number" ? c.h : null;
  const baseCost = typeof c.v === "number" ? c.v : null;

  host.innerHTML = `
    <div class="ed-strip">
      <div class="ed-thumb card${c.g === "km" ? " km" : ""}${faceStyle(e.id) ? " art" : ""}" aria-hidden="true">${cardHTML(e)}</div>
      <div class="ed-id">
        <div class="ed-name" id="edName"></div>
        <div class="ed-meta" id="edMeta"></div>
        <div class="ed-acts" role="group" aria-label="Actions for this card">
          <button type="button" class="cact" id="btnPrev" aria-label="Previous card" data-tip="Carve the previous card in the deck."${deck.length < 2 ? " disabled" : ""}>${ICON.prev}</button>
          <button type="button" class="cact" id="btnNext" aria-label="Next card" data-tip="Carve the next card in the deck."${deck.length < 2 ? " disabled" : ""}>${ICON.next}</button>
          <button type="button" class="cact" id="btnDup" data-tip="Add a copy of this card, carving and all, right after it in the deck.">${ICON.dup}<span>Duplicate</span></button>
          <button type="button" class="cact" id="btnReset" data-tip="Undo every change on this card — name, power, health, costs and sigils. You can undo this too.">${ICON.reset}<span>Clear carving</span></button>
          <button type="button" class="cact danger" id="btnRemove" data-tip="Take this card out of the deck. You can undo it.">${ICON.del}<span>Remove</span></button>
        </div>
      </div>
    </div>
    ${c.q ? '<div class="note" style="margin-top:0">' + esc(c.q) + "</div>" : ""}
    <div class="field">
      <label for="fName">Rename the card (optional)</label>
      <input type="text" id="fName" value="${esc(m.name || "")}" placeholder="${esc(c.n)}" data-tip="A new name printed on the card (nameReplacement in the save). Leave it empty to keep the printed name.">
      <div class="calc">Writes to <code>nameReplacement</code>. Leave blank to keep the printed name.</div>
    </div>
    <div class="grid2">
      <div class="field">
        <label for="fAtk">Power${baseA !== null ? " (printed " + baseA + ")" : ""}</label>
        <input type="number" id="fAtk" value="${baseA !== null ? baseA + (m.dAtk || 0) : m.dAtk || 0}" data-tip="The power you want the card to have. The save stores the difference from the printed power (attackAdjustment), shown underneath.">
        <div class="calc" id="calcA"></div>
      </div>
      <div class="field">
        <label for="fHp">Health${baseH !== null ? " (printed " + baseH + ")" : ""}</label>
        <input type="number" id="fHp" value="${baseH !== null ? baseH + (m.dHp || 0) : m.dHp || 0}" data-tip="The health you want the card to have. The save stores the difference from the printed health (healthAdjustment), shown underneath.">
        <div class="calc" id="calcH"></div>
      </div>
    </div>
    <div class="grid2">
      <div class="field">
        <label for="fBlood">Blood cost adjustment</label>
        <input type="number" id="fBlood" value="${m.dBlood || 0}" data-tip="Added to the card's Blood cost — negative makes it cheaper. The final cost is shown underneath; a final cost below 0 can crash the game.">
        <div class="calc" id="calcB"></div>
      </div>
      <div class="field">
        <label for="fBones">Bones cost adjustment</label>
        <input type="number" id="fBones" value="${m.dBones || 0}" data-tip="Added to the card's Bones cost — negative makes it cheaper. The final cost is shown underneath; a final cost below 0 can crash the game.">
        <div class="calc" id="calcO"></div>
      </div>
    </div>
    <div class="field sig-field">
      <div class="sig-bar">
        <label for="sigQ">Sigils to carve on <span style="color:var(--tallow)">(abilities)</span></label>
        <span class="sig-count" id="sigCount" aria-live="polite"></span>
      </div>
      <input type="search" id="sigQ" class="sig-q" placeholder="Search sigils — name, effect, #ID, act, or “boss”…" value="${esc(SIGF.q)}" autocomplete="off" spellcheck="false" data-tip="Search by name, effect, #ID, act (e.g. “act iii”) or caution type (“boss”, “unused”). Several words narrow it down; Esc clears.">
      <div class="sig-chips" role="group" aria-label="Filter the sigil list">
        ${SIG_CHIPS.map((ch) => '<button type="button" class="sig-chip' + (ch.key === "regular" ? " lead" : "") + '" data-chip="' + ch.key + '" aria-pressed="' + chipOn(ch.key) + '" data-tip="' + esc(ch.title) + '">' + (ch.key === "regular" ? CAUTION_SVG : "") + esc(ch.label) + "</button>").join("")}
      </div>
      <div class="sig-bulk" role="group" aria-label="Carve several sigils at once">
        <span class="lbl">Carve</span>
        <button type="button" class="sig-bulk-btn" id="btnAddRegular" data-tip="Carve every sigil without a caution sign onto this card.">every regular sigil</button>
        <button type="button" class="sig-bulk-btn" id="btnAddShown" data-tip="Carve every sigil the search and filters are showing right now.">everything shown</button>
        <button type="button" class="sig-bulk-btn" id="btnAddAll" data-tip="Carve all 106 sigils, including the ones with a caution sign.">all 106</button>
        <button type="button" class="sig-bulk-btn warnish" id="btnClearSig" data-tip="Remove every carved sigil from this card. Printed sigils and other carvings stay.">clear sigils</button>
      </div>
      <div class="sig-picker" id="pickAdd"></div>
      <p class="sig-legend">${CAUTION_SVG} <span>marks sigils that may break the game on a regular card — boss sigils, ones built for one card, ones that reach outside the game, and unused ones. The line under each says why.</span></p>
    </div>
    <div class="field" style="margin-bottom:8px">
      <label>Printed sigils to cancel <span style="color:var(--blood-hi)">(negateAbilities)</span></label>
      <div class="sig-picker" id="pickNeg"></div>
    </div>
`;
  host.scrollTop = savedScroll;

  const setCalc = () => {
    const a = +document.getElementById("fAtk").value || 0;
    const h = +document.getElementById("fHp").value || 0;
    const b = +document.getElementById("fBlood").value || 0;
    const o = +document.getElementById("fBones").value || 0;
    const dA = baseA !== null ? a - baseA : a,
      dH = baseH !== null ? h - baseH : h;
    document.getElementById("calcA").textContent = "attackAdjustment: " + dA;
    document.getElementById("calcH").textContent = "healthAdjustment: " + dH;
    const bc = document.getElementById("calcB"),
      oc = document.getElementById("calcO");
    if (c.c === "b" && baseCost !== null) {
      const fin = baseCost + b;
      bc.textContent = "final cost: " + fin + " Blood";
      bc.className = "calc" + (fin < 0 ? " neg" : "");
    } else bc.textContent = b ? "adds " + b + " Blood cost" : "no change";
    if (c.c === "o" && baseCost !== null) {
      const fin = baseCost + o;
      oc.textContent = "final cost: " + fin + " Bones";
      oc.className = "calc" + (fin < 0 ? " neg" : "");
    } else oc.textContent = o ? "adds " + o + " Bones cost" : "no change";
  };

  const refreshStrip = () => {
    const th = host.querySelector(".ed-thumb");
    if (th) th.innerHTML = cardHTML(e);
    document.getElementById("edName").innerHTML =
      esc(m.name || c.n) +
      (m.name ? ' <span class="ed-was">was ' + esc(c.n) + "</span>" : "");
    document.getElementById("edMeta").innerHTML =
      "file name <code>" +
      esc(c.i) +
      "</code> · slot " +
      (selected + 1) +
      " of " +
      deck.length +
      (hasMod(m) ? ' · <span class="ed-carved">carved</span>' : "");
    document.getElementById("btnReset").disabled = !hasMod(m);
  };
  refreshStrip();
  const commit = () => {
    const a = +document.getElementById("fAtk").value || 0;
    const h = +document.getElementById("fHp").value || 0;
    m.name = document.getElementById("fName").value.trim();
    m.dAtk = baseA !== null ? a - baseA : a;
    m.dHp = baseH !== null ? h - baseH : h;
    m.dBlood = +document.getElementById("fBlood").value || 0;
    m.dBones = +document.getElementById("fBones").value || 0;
    setCalc();
    renderBoard();
    renderOutput();
    renderDeckTag();
    refreshStrip();
  };
  ["fName", "fAtk", "fHp", "fBlood", "fBones"].forEach((id) => {
    document.getElementById(id).addEventListener("input", commit);
  });
  setCalc();

  /* sigil pickers */
  const rerender = () => {
    const pickAddScroll = document.getElementById("pickAdd")?.scrollTop || 0;
    const pickNegScroll = document.getElementById("pickNeg")?.scrollTop || 0;
    renderEditor();
    const pa = document.getElementById("pickAdd");
    if (pa) pa.scrollTop = pickAddScroll;
    const pn = document.getElementById("pickNeg");
    if (pn) pn.scrollTop = pickNegScroll;
    renderBoard();
    renderOutput();
  };
  const optHTML = (s, arr) => {
    const on = arr.includes(s[0]),
      also = sigAlso(s[0]),
      c = SIG_CAUTION[s[0]];
    return (
      '<div class="sig-opt" role="checkbox" tabindex="0" aria-checked="' +
      on +
      '" data-on="' +
      on +
      '" data-id="' +
      s[0] +
      '"' +
      (c ? ' data-caution="' + c.k + '"' : "") +
      ' aria-label="' +
      esc(s[1] + (c ? " — caution: " + CAUTION_KINDS[c.k].label : "")) +
      '">' +
      '<span style="flex:0 0 auto;margin-top:2px;opacity:' +
      (on ? "1" : ".72") +
      '">' +
      sigIcon(s[0], 32) +
      "</span>" +
      '<span><span class="nm">' +
      esc(s[1]) +
      '</span> <span class="id">#' +
      s[0] +
      "</span>" +
      (c ? " " + cautionTag(s[0]) : "") +
      (also.length
        ? ' <span class="also">also ' + esc(also.join(" · ")) + "</span>"
        : "") +
      (c ? '<span class="caut-why">' + esc(c.why) + "</span>" : "") +
      '<span class="ds">' +
      esc(s[2]) +
      "</span></span>" +
      "</div>"
    );
  };
  const drawPicker = (hostId, arr, onto) => {
    const p = document.getElementById(hostId);
    if (onto === "neg") {
      const source = c.s
        .map((id) => SIGILS.find((s) => s[0] === id))
        .filter(Boolean);
      if (!source.length) {
        p.innerHTML =
          '<div style="color:#8a8172;font-family:var(--mono);font-size:11px;padding:8px">This card has no printed sigils to cancel.</div>';
        return;
      }
      p.innerHTML = source.map((s) => optHTML(s, arr)).join("");
    } else {
      const filtered = sigFilterActive();
      const html = SIG_GROUPS.map((g) => {
        const list = SIG_BY_GROUP[g.key];
        const shown = list.filter((s) => sigVisible(s, arr));
        if (!shown.length) return "";
        const n = list.filter((s) => arr.includes(s[0])).length;
        const full = shown.every((s) => arr.includes(s[0]));
        const what = filtered ? "shown" : "all";
        return (
          '<div class="sig-grp" role="group" aria-labelledby="sgh-' +
          g.key +
          '">' +
          '<div class="sig-grp-h" id="sgh-' +
          g.key +
          '">' +
          '<span class="t">' +
          esc(g.label) +
          '</span><span class="s">' +
          esc(g.sub) +
          "</span>" +
          '<span class="c">' +
          n +
          " / " +
          list.length +
          (filtered && shown.length < list.length
            ? " · " + shown.length + " shown"
            : "") +
          "</span>" +
          '<button type="button" class="sig-grp-btn" data-grp="' +
          g.key +
          '" data-mode="' +
          (full ? "clear" : "add") +
          '" aria-label="' +
          (full ? "Remove " : "Carve ") +
          what +
          " " +
          esc(g.label) +
          ' sigils"' +
          ' data-tip="' +
          esc(
            (full ? "Remove " : "Carve ") +
              (filtered
                ? "the " +
                  g.label +
                  " sigils the search and filters are showing"
                : "every " + g.label + " sigil") +
              (full ? " from" : " onto") +
              " this card.",
          ) +
          '">' +
          (full ? "clear " + what : "add " + what) +
          "</button>" +
          "</div>" +
          shown.map((s) => optHTML(s, arr)).join("") +
          "</div>"
        );
      }).join("");
      p.innerHTML =
        html ||
        '<div class="sig-empty">No sigil matches' +
          (SIGF.q.trim() ? " “" + esc(SIGF.q.trim()) + "”" : "") +
          ' with these filters. <button type="button" class="sig-grp-btn" id="sigReset" data-tip="Clear the search box and turn every filter off.">reset search &amp; filters</button></div>';
      const rs = document.getElementById("sigReset");
      if (rs)
        rs.onclick = () => {
          Object.assign(SIGF, {
            q: "",
            boss: false,
            card: false,
            meta: false,
            unused: false,
            act1: false,
            carved: false,
          });
          renderEditor();
        };
      const cnt = document.getElementById("sigCount");
      if (cnt)
        cnt.textContent =
          arr.length +
          " carved" +
          (arr.some((id) => SIG_CAUTION[id])
            ? " · " +
              arr.filter((id) => SIG_CAUTION[id]).length +
              " with caution"
            : "");
      p.querySelectorAll(".sig-grp-btn[data-grp]").forEach((b) => {
        b.onclick = () => {
          const ids = SIG_BY_GROUP[b.dataset.grp]
            .filter(
              (s) =>
                sigVisible(s, arr) ||
                (b.dataset.mode === "clear" &&
                  arr.includes(s[0]) &&
                  sigVisible(s, arr)),
            )
            .map((s) => s[0]);
          if (b.dataset.mode === "clear") {
            for (const id of ids) {
              const ix = arr.indexOf(id);
              if (ix >= 0) arr.splice(ix, 1);
            }
          } else
            ids.forEach((id) => {
              if (!arr.includes(id)) arr.push(id);
            });
          rerender();
        };
      });
    }
    const toggle = (el) => {
      const id = +el.dataset.id,
        ix = arr.indexOf(id);
      if (ix >= 0) arr.splice(ix, 1);
      else arr.push(id);
      rerender();
    };
    p.querySelectorAll(".sig-opt").forEach((el) => {
      el.onclick = () => toggle(el);
      el.onkeydown = (ev) => {
        if (ev.key === " " || ev.key === "Enter") {
          ev.preventDefault();
          toggle(el);
        }
      };
    });
  };
  drawPicker("pickAdd", m.add, "add");
  drawPicker("pickNeg", m.neg, "neg");

  const addIds = (ids) => {
    ids.forEach((id) => {
      if (!m.add.includes(id)) m.add.push(id);
    });
    rerender();
  };
  document.getElementById("btnAddAll").onclick = () =>
    addIds(SIGILS.map((s) => s[0]));
  document.getElementById("btnAddRegular").onclick = () =>
    addIds(SIGILS.filter((s) => isRegularSig(s[0])).map((s) => s[0]));
  document.getElementById("btnAddShown").onclick = () =>
    addIds(SIGILS.filter((s) => sigVisible(s, m.add)).map((s) => s[0]));
  document.getElementById("btnClearSig").onclick = () => {
    if (!m.add.length) return;
    const snap = snapshot(),
      n = m.add.length;
    m.add.length = 0;
    rerender();
    showToast(
      "Removed " + n + " carved sigil" + (n === 1 ? "" : "s") + ".",
      snap,
    );
  };
  const q = document.getElementById("sigQ");
  q.addEventListener("input", () => {
    SIGF.q = q.value;
    drawPicker("pickAdd", m.add, "add");
    document.getElementById("pickAdd").scrollTop = 0;
  });
  q.addEventListener("keydown", (ev) => {
    if (ev.key === "Escape" && q.value) {
      ev.preventDefault();
      q.value = "";
      q.dispatchEvent(new Event("input"));
    }
  });
  host.querySelectorAll(".sig-chip").forEach((b) => {
    b.onclick = () => {
      toggleChip(b.dataset.chip);
      host
        .querySelectorAll(".sig-chip")
        .forEach((x) =>
          x.setAttribute("aria-pressed", String(chipOn(x.dataset.chip))),
        );
      drawPicker("pickAdd", m.add, "add");
      document.getElementById("pickAdd").scrollTop = 0;
    };
  });

  const step = (d) => {
    selected = (selected + d + deck.length) % deck.length;
    renderAll();
  };
  document.getElementById("btnPrev").onclick = () => {
    step(-1);
    document.getElementById("btnPrev")?.focus();
  };
  document.getElementById("btnNext").onclick = () => {
    step(1);
    document.getElementById("btnNext")?.focus();
  };
  document.getElementById("btnDup").onclick = () => {
    duplicateAt(selected);
    document.getElementById("btnDup")?.focus();
  };
  document.getElementById("btnReset").onclick = () => {
    const snap = snapshot();
    e.mod = {
      name: "",
      dAtk: 0,
      dHp: 0,
      dBlood: 0,
      dBones: 0,
      add: [],
      neg: [],
    };
    renderAll();
    showToast("Cleared the carving on " + c.n + ".", snap);
  };
  document.getElementById("btnRemove").onclick = () => removeAt(selected);
}

/* ══════════════════ OUTPUT ══════════════════ */
function modKeys() {
  /* First copy of a card keeps the bare name; extra copies get #1, #2 … */
  const tally = {},
    keys = [];
  deck.forEach((e) => {
    tally[e.id] = tally[e.id] || 0;
    keys.push(tally[e.id] === 0 ? e.id : e.id + "#" + tally[e.id]);
    tally[e.id]++;
  });
  return keys;
}
function renderOutput() {
  /* --- 1. card list --- */
  const oc = document.getElementById("outCards");
  if (!deck.length) {
    oc.textContent = "Add cards in the forge above.";
  } else {
    const lines = deck.map((e) => '    "' + e.id + '"').join(",\n");
    oc.textContent =
      '"$rlength": ' + deck.length + ",\n" + '"$rcontent": [\n' + lines + "\n]";
  }

  /* --- 2. per-card field values --- */
  const om = document.getElementById("outMods");
  const keys = modKeys();
  const carved = deck
    .map((e, ix) => ({ e, ix, k: keys[ix] }))
    .filter((x) => hasMod(x.e.mod));
  if (!carved.length) {
    om.textContent =
      "No cards carved yet — every card will use its printed stats.";
  } else {
    om.textContent = carved
      .map(({ e, ix, k }) => {
        const c = CARD_BY_ID[e.id],
          m = e.mod,
          f = finalStats(e),
          L = [];
        L.push(
          "/* --- deck slot " +
            (ix + 1) +
            ' --- find the entry whose "$k" is "' +
            k +
            '" --- */',
        );
        if (m.name)
          L.push('"nameReplacement": "' + m.name.replace(/"/g, '\\"') + '"');
        if (m.dAtk)
          L.push(
            '"attackAdjustment": ' +
              m.dAtk +
              (typeof c.a === "number"
                ? "      // " + c.a + " -> " + f.a
                : "      // printed power not verified"),
          );
        if (m.dHp)
          L.push(
            '"healthAdjustment": ' +
              m.dHp +
              (typeof c.h === "number"
                ? "      // " + c.h + " -> " + f.h
                : "      // printed health not verified"),
          );
        if (m.dBlood) L.push('"bloodCostAdjustment": ' + m.dBlood);
        if (m.dBones) L.push('"bonesCostAdjustment": ' + m.dBones);
        if (m.add.length) {
          L.push(
            '"abilities": { "$rlength": ' +
              m.add.length +
              ', "$rcontent": [' +
              m.add.join(", ") +
              "] }",
          );
          L.push(
            "        // " +
              m.add
                .map((s) => s + "=" + (SIG[s] ? SIG[s].name : "?"))
                .join(", "),
          );
        }
        if (m.neg.length) {
          L.push(
            '"negateAbilities": { "$rlength": ' +
              m.neg.length +
              ', "$rcontent": [' +
              m.neg.join(", ") +
              "] }",
          );
          L.push(
            "        // " +
              m.neg
                .map((s) => s + "=" + (SIG[s] ? SIG[s].name : "?"))
                .join(", "),
          );
        }
        return L.join("\n");
      })
      .join("\n\n");
  }

  /* --- 3. raw block --- */
  const orw = document.getElementById("outRaw");
  if (!carved.length) {
    orw.textContent = "Carve a card in the forge above.";
  } else {
    const tm = typeMap();
    let nextId = tm.startId;
    orw.textContent = carved
      .map(({ e, k }) => {
        const m = e.mod;
        const idV = nextId++,
          idMod = nextId++,
          idAb = nextId++,
          idNeg = nextId++,
          idGem = nextId++,
          idSpec = nextId++,
          idDecal = nextId++;
        return `{
  "$k": "${k}",
  "$v": {
    "$id": ${idV},
    "$type": ${tm.list},
    "$rlength": 1,
    "$rcontent": [
      {
        "$id": ${idMod},
        "$type": ${tm.mod},
        "singletonId": null,
        "nameReplacement": ${m.name ? '"' + m.name.replace(/"/g, '\\"') + '"' : "null"},
        "attackAdjustment": ${m.dAtk || 0},
        "healthAdjustment": ${m.dHp || 0},
        "abilities": { "$id": ${idAb}, "$type": ${tm.ability}, "$rlength": ${m.add.length}, "$rcontent": [${m.add.join(", ")}] },
        "negateAbilities": { "$id": ${idNeg}, "$type": ${tm.ability}, "$rlength": ${m.neg.length}, "$rcontent": [${m.neg.join(", ")}] },
        "bloodCostAdjustment": ${m.dBlood || 0},
        "bonesCostAdjustment": ${m.dBones || 0},
        "energyCostAdjustment": 0,
        "nullifyGemsCost": false,
        "addGemCost": { "$id": ${idGem}, "$type": ${tm.gem}, "$rlength": 0, "$rcontent": [] },
        "gemify": false,
        "specialAbilities": { "$id": ${idSpec}, "$type": ${tm.special}, "$rlength": 0, "$rcontent": [] },
        "statIcon": 0,
        "fromCardMerge": false,
        "fromDuplicateMerge": false,
        "fromTotem": false,
        "fromLatch": false,
        "fromOverclock": false,
        "sideDeckMod": false,
        "nonCopyable": false,
        "fromEvolve": false,
        "transformerBeastCardId": null,
        "deathCardInfo": null,
        "bountyHunterInfo": null,
        "buildACardPortraitInfo": null,
        "decalIds": { "$id": ${idDecal}, "$type": ${tm.decal}, "$rlength": 0, "$rcontent": [] }
      }
    ]
  }
}`;
      })
      .join(",\n");
  }
  renderPatchPlan();
}

/* Reads the "Your save's type numbers" panel. Falls back to this save's
   confirmed values if a field is ever left blank. */
function typeMap() {
  const n = (id, fallback) => {
    const el = document.getElementById(id);
    const v = el ? parseInt(el.value, 10) : NaN;
    return Number.isFinite(v) ? v : fallback;
  };
  return {
    list: n("tnList", 14),
    mod: n("tnMod", 19),
    ability: n("tnAbility", 7),
    gem: n("tnGem", 20),
    special: n("tnSpecial", 21),
    decal: n("tnDecal", 9),
    startId: n("tnStartId", 552),
  };
}

/* ══════════════════ REFERENCE TABLES ══════════════════ */
function renderRefs() {
  const sq = (document.getElementById("sigSearch").value || "").toLowerCase();
  const match = (s) => sigMatches(s, sq);
  const html = SIG_GROUPS.map((g) => {
    const rows = SIG_BY_GROUP[g.key].filter(match);
    if (!rows.length) return "";
    return (
      '<tr class="grp"><th colspan="3" scope="colgroup"><span class="t">' +
      esc(g.label) +
      '</span> <span class="s">' +
      esc(g.sub) +
      '</span> <span class="c">' +
      rows.length +
      "</span></th></tr>" +
      rows
        .map((s) => {
          const also = sigAlso(s[0]);
          const c = SIG_CAUTION[s[0]];
          return (
            "<tr" +
            (c ? ' data-caution="' + c.k + '"' : "") +
            '><td class="n">' +
            s[0] +
            '</td><td style="white-space:nowrap">' +
            sigIcon(s[0], 32) +
            ' <span style="vertical-align:middle">' +
            esc(s[1]) +
            "</span>" +
            (c
              ? '<div style="margin:4px 0 0 38px">' +
                cautionTag(s[0]) +
                "</div>"
              : "") +
            (also.length
              ? '<div class="also" style="margin:3px 0 0 38px">also ' +
                esc(also.join(" · ")) +
                "</div>"
              : "") +
            "</td>" +
            '<td style="color:#a49a86">' +
            esc(s[2]) +
            (c ? '<div class="caut-why">' + esc(c.why) + "</div>" : "") +
            "</td></tr>"
          );
        })
        .join("")
    );
  }).join("");
  document.getElementById("sigTable").innerHTML =
    html ||
    '<tr><td colspan="3" style="color:#8a8172">No sigil matches that filter.</td></tr>';
  const cq = (document.getElementById("cardSearch").value || "").toLowerCase();
  document.getElementById("cardTable").innerHTML = CARDS.slice()
    .sort((a, b) => a.i.localeCompare(b.i))
    .filter(
      (c) =>
        !cq || c.i.toLowerCase().includes(cq) || c.n.toLowerCase().includes(cq),
    )
    .map(
      (c) =>
        '<tr><td style="color:var(--tallow)">' +
        esc(c.i) +
        "</td><td>" +
        esc(c.n) +
        '</td><td style="color:#a49a86">' +
        GROUP_LABEL[c.g] +
        "</td></tr>",
    )
    .join("");
}

/* ══════════════════ SAVE PATCHER ══════════════════
   SaveFile.gwsave is Odin Serializer JSON. Odin writes a type as "N|Name"
   the first time it appears and as the bare number N afterwards, internal
   references as an unquoted $iref:N, structs such as Vector2 as objects
   whose entries have no keys, and 64-bit integers as plain digits — so the
   file is JSON-like but not strict JSON. Because a
   JSON.parse → stringify round-trip would round those large integers, the
   file is never re-serialised: it is tokenised with source offsets and only
   the two deck blocks are spliced. Everything else is copied byte for byte. */
const SP = { bytesBOM: false, text: null, name: "SaveFile.gwsave", info: null };

function odinParse(src) {
  let i = 0;
  const n = src.length;
  const fail = (msg) => {
    throw new Error(msg + " (character " + i + ")");
  };
  const ws = () => {
    while (i < n) {
      const c = src.charCodeAt(i);
      if (c === 32 || c === 9 || c === 10 || c === 13 || c === 0xfeff) i++;
      else break;
    }
  };
  const ESC = {
    '"': '"',
    "\\": "\\",
    "/": "/",
    b: "\b",
    f: "\f",
    n: "\n",
    r: "\r",
    t: "\t",
  };
  const str = () => {
    const s = i;
    i++;
    let out = "",
      seg = i;
    for (;;) {
      if (i >= n) fail("Unterminated string");
      const c = src[i];
      if (c === '"') {
        out += src.slice(seg, i);
        i++;
        break;
      }
      if (c === "\\") {
        out += src.slice(seg, i);
        const e = src[i + 1];
        if (e === "u") {
          out += String.fromCharCode(parseInt(src.substr(i + 2, 4), 16));
          i += 6;
        } else {
          if (!(e in ESC)) fail("Bad escape");
          out += ESC[e];
          i += 2;
        }
        seg = i;
        continue;
      }
      i++;
    }
    return { t: "str", s, e: i, v: out };
  };
  const TOK =
    /-?(?:\d+(?:\.\d+)?(?:[eE][+-]?\d+)?|Infinity)|NaN|true|false|null|\$[A-Za-z]+:[^\s,\]\}]+/y;
  const val = () => {
    ws();
    const c = src[i],
      s = i;
    if (c === "{") {
      i++;
      const entries = [];
      ws();
      if (src[i] === "}") {
        i++;
        return { t: "obj", s, e: i, entries };
      }
      for (;;) {
        ws();
        if (src[i] === '"') {
          const k = str();
          ws();
          if (src[i] === ":") {
            i++;
            entries.push({ k: k.v, ks: k.s, v: val() });
          } else entries.push({ k: null, ks: k.s, v: k }); // keyless string entry
        } else {
          const v = val();
          entries.push({ k: null, ks: v.s, v }); // keyless entry, e.g. Vector2's 0, 0
        }
        ws();
        if (src[i] === ",") {
          i++;
          continue;
        }
        if (src[i] === "}") {
          i++;
          break;
        }
        fail("Expected ',' or '}'");
      }
      return { t: "obj", s, e: i, entries };
    }
    if (c === "[") {
      i++;
      const items = [];
      ws();
      if (src[i] === "]") {
        i++;
        return { t: "arr", s, e: i, items };
      }
      for (;;) {
        items.push(val());
        ws();
        if (src[i] === ",") {
          i++;
          continue;
        }
        if (src[i] === "]") {
          i++;
          break;
        }
        fail("Expected ',' or ']'");
      }
      return { t: "arr", s, e: i, items };
    }
    if (c === '"') return str();
    TOK.lastIndex = i;
    const m = TOK.exec(src);
    if (!m) fail("Unexpected token");
    i = TOK.lastIndex;
    const raw = m[0];
    return {
      t:
        raw[0] === "$"
          ? "ref"
          : raw === "true" || raw === "false"
            ? "bool"
            : raw === "null"
              ? "null"
              : "num",
      s,
      e: i,
      raw,
    };
  };
  const root = val();
  ws();
  if (i < n) fail("Unexpected content after the end of the save");
  return root;
}

/* ---- tree helpers ---- */
const oEntry = (o, k) =>
  o && o.t === "obj" ? o.entries.find((e) => e.k === k) : undefined;
const oget = (o, k) => {
  const e = oEntry(o, k);
  return e ? e.v : undefined;
};
const isList = (v) =>
  !!(
    v &&
    v.t === "obj" &&
    oget(v, "$rcontent") &&
    oget(v, "$rcontent").t === "arr"
  );
const numN = (x) => ({ t: "num", raw: String(x) });
const strN = (x) => ({ t: "str", v: String(x) });
const nullN = () => ({ t: "null", raw: "null" });
const objN = (pairs) => ({
  t: "obj",
  entries: pairs.map(([k, v]) => ({ k, v })),
});
const cloneN = (nd) => JSON.parse(JSON.stringify(nd));
const typeIdOf = (v) =>
  !v
    ? null
    : v.t === "num"
      ? parseInt(v.raw, 10)
      : v.t === "str"
        ? parseInt(v.v, 10)
        : null;
const IREF = /^\$iref:(\d+)$/;
const irefOf = (v) => {
  if (!v || v.t !== "ref") return null;
  const m = IREF.exec(v.raw);
  return m ? m[1] : null;
};

function walkN(nd, fn, parent, gp) {
  fn(nd, parent, gp);
  if (nd.t === "obj") for (const en of nd.entries) walkN(en.v, fn, nd, parent);
  else if (nd.t === "arr") for (const it of nd.items) walkN(it, fn, nd, parent);
}
function indexSave(root) {
  const ids = new Map(),
    dupIds = [],
    irefs = [],
    otherRefs = [],
    typeNames = {};
  let maxId = -1;
  walkN(root, (nd) => {
    if (nd.t === "obj") {
      const id = oget(nd, "$id");
      if (id && id.t === "num") {
        const k = id.raw;
        if (ids.has(k)) dupIds.push(k);
        else ids.set(k, nd);
        maxId = Math.max(maxId, parseInt(k, 10));
      }
      const ty = oget(nd, "$type");
      if (ty && ty.t === "str" && ty.v.indexOf("|") > 0) {
        const p = ty.v.indexOf("|");
        typeNames[parseInt(ty.v, 10)] = ty.v.slice(p + 1);
      }
    } else if (nd.t === "ref") {
      const r = irefOf(nd);
      if (r != null) irefs.push(r);
      else otherRefs.push(nd.raw);
    }
  });
  return { ids, dupIds, irefs, otherRefs, typeNames, maxId };
}
const resolveN = (v, idx) => {
  const r = irefOf(v);
  return r != null ? idx.ids.get(r) : v;
};

/* Finds ascensionData → currentRun → playerDeck, following $iref links. */
function locateDeck(root, idx) {
  let asc;
  walkN(root, (nd) => {
    if (asc === undefined && nd.t === "obj") {
      const v = oget(nd, "ascensionData");
      if (v !== undefined) asc = v;
    }
  });
  asc = resolveN(asc, idx);
  if (!asc || asc.t !== "obj")
    throw new Error(
      "No ascensionData block was found — this doesn't look like an Inscryption save.",
    );
  const run = resolveN(oget(asc, "currentRun"), idx);
  if (!run || run.t !== "obj")
    throw new Error(
      "There is no Kaycee's Mod run in progress in this save. Start a run, quit to the main menu, and open the save again.",
    );
  const pd = resolveN(oget(run, "playerDeck"), idx);
  if (!pd || pd.t !== "obj")
    throw new Error("The Kaycee's Mod run has no playerDeck block.");
  const cardIds = resolveN(oget(pd, "cardIds"), idx);
  if (!isList(cardIds) || !oEntry(cardIds, "$rlength"))
    throw new Error(
      "playerDeck → cardIds isn't in the expected $rlength / $rcontent shape.",
    );
  if (oget(cardIds, "$rcontent").items.some((x) => x.t !== "str"))
    throw new Error(
      "playerDeck → cardIds contains something other than card names.",
    );
  let modInfos = resolveN(oget(pd, "cardIdModInfos"), idx);
  if (modInfos && modInfos.t === "null") modInfos = null;
  if (modInfos && !isList(modInfos))
    throw new Error(
      "playerDeck → cardIdModInfos isn't in the expected $rcontent shape.",
    );
  return { cardIds, modInfos };
}

/* Any existing CardModificationInfo in the save becomes the template for new
   ones, so the field set always matches the player's own game version. */
function findTemplate(root, idx) {
  let found = null;
  walkN(root, (nd, parent, gp) => {
    if (found || nd.t !== "obj") return;
    if (!oget(nd, "attackAdjustment") || !oget(nd, "healthAdjustment")) return;
    if (!oget(nd, "$id") || !oget(nd, "$type")) return;
    if (!isList(oget(nd, "abilities")) || !isList(oget(nd, "negateAbilities")))
      return;
    // skip records that point at objects outside themselves
    const inner = new Set(),
      refs = [];
    walkN(nd, (x) => {
      if (x.t === "obj") {
        const id = oget(x, "$id");
        if (id && id.t === "num") inner.add(id.raw);
      } else if (x.t === "ref") refs.push(irefOf(x) || x.raw);
    });
    if (refs.some((r) => !inner.has(r))) return;
    let listType = null;
    if (
      parent &&
      parent.t === "arr" &&
      gp &&
      gp.t === "obj" &&
      oget(gp, "$rcontent") === parent
    )
      listType = typeIdOf(oget(gp, "$type"));
    if (listType == null) return;
    found = { node: nd, listType, modType: typeIdOf(oget(nd, "$type")) };
  });
  return found;
}

/* First sighting of every type must be the "N|Name" form, later ones the bare N. */
function normalizeTypes(text, names) {
  const root = odinParse(text),
    seen = new Set(),
    edits = [];
  walkN(root, (nd) => {
    if (nd.t !== "obj") return;
    const v = oget(nd, "$type");
    if (!v) return;
    if (v.t === "str" && v.v.indexOf("|") > 0) {
      const id = parseInt(v.v, 10);
      if (seen.has(id)) edits.push({ s: v.s, e: v.e, text: String(id) });
      else seen.add(id);
    } else if (v.t === "num") {
      const id = parseInt(v.raw, 10);
      if (!seen.has(id)) {
        if (!names[id])
          throw new Error(
            "Type " +
              id +
              " is used before it is named, and the save never names it.",
          );
        edits.push({
          s: v.s,
          e: v.e,
          text: JSON.stringify(id + "|" + names[id]),
        });
        seen.add(id);
      }
    }
  });
  return {
    text: applyEdits(text, edits),
    count: edits.length,
    at: edits.map((ed) => ed.s),
  };
}
function applyEdits(text, edits, ranges) {
  const sorted = edits.slice().sort((a, b) => b.s - a.s);
  for (let k = 1; k < sorted.length; k++)
    if (sorted[k].e > sorted[k - 1].s)
      throw new Error("Internal error: overlapping edits.");
  if (ranges) {
    let delta = 0;
    sorted
      .slice()
      .reverse()
      .forEach((ed) => {
        ranges.push([ed.s + delta, ed.s + delta + ed.text.length]);
        delta += ed.text.length - (ed.e - ed.s);
      });
  }
  let out = text;
  for (const ed of sorted) out = out.slice(0, ed.s) + ed.text + out.slice(ed.e);
  return out;
}

/* ---- writing ---- */
function odinWrite(nd, ind, unit, nl) {
  switch (nd.t) {
    case "obj":
      if (!nd.entries.length) return "{" + nl + ind + "}";
      return (
        "{" +
        nl +
        nd.entries
          .map(
            (e) =>
              ind +
              unit +
              (e.k == null ? "" : JSON.stringify(e.k) + ": ") +
              odinWrite(e.v, ind + unit, unit, nl),
          )
          .join("," + nl) +
        nl +
        ind +
        "}"
      );
    case "arr":
      if (!nd.items.length) return "[" + nl + ind + "]";
      return (
        "[" +
        nl +
        nd.items
          .map((x) => ind + unit + odinWrite(x, ind + unit, unit, nl))
          .join("," + nl) +
        nl +
        ind +
        "]"
      );
    case "str":
      return JSON.stringify(nd.v);
    default:
      return nd.raw;
  }
}
const arrText = (items, ind, unit, nl) =>
  items.length
    ? "[" +
      nl +
      items.map((x) => ind + unit + x).join("," + nl) +
      nl +
      ind +
      "]"
    : "[" + nl + ind + "]";
function lineIndent(src, pos) {
  const ls = src.lastIndexOf("\n", pos - 1) + 1;
  return /^[ \t]*/.exec(src.slice(ls, pos))[0];
}
function setListN(listNode, values) {
  oEntry(listNode, "$rcontent").v = { t: "arr", items: values.map(numN) };
  const len = oEntry(listNode, "$rlength");
  if (len) len.v = numN(values.length);
}

/* A fresh modification record: every field at its neutral value except the
   ones the forge carves. */
function makeModN(tpl, m, alloc) {
  const mod = cloneN(tpl.node);
  for (const en of mod.entries) {
    if (en.k[0] === "$") continue;
    switch (en.k) {
      case "nameReplacement":
        en.v = m.name ? strN(m.name) : nullN();
        continue;
      case "attackAdjustment":
        en.v = numN(m.dAtk || 0);
        continue;
      case "healthAdjustment":
        en.v = numN(m.dHp || 0);
        continue;
      case "bloodCostAdjustment":
        en.v = numN(m.dBlood || 0);
        continue;
      case "bonesCostAdjustment":
        en.v = numN(m.dBones || 0);
        continue;
      case "abilities":
        setListN(en.v, m.add);
        continue;
      case "negateAbilities":
        setListN(en.v, m.neg);
        continue;
    }
    const v = en.v;
    if (isList(v)) setListN(v, []);
    else if (v.t === "bool") en.v = { t: "bool", raw: "false" };
    else if (v.t === "num") en.v = numN(0);
    else en.v = nullN();
  }
  const remap = {};
  walkN(mod, (nd) => {
    if (nd.t !== "obj") return;
    const ty = oEntry(nd, "$type");
    if (ty && ty.v.t === "str") ty.v = numN(typeIdOf(ty.v));
    const id = oEntry(nd, "$id");
    if (id) {
      const nid = alloc();
      remap[id.v.raw] = String(nid);
      id.v = numN(nid);
    }
  });
  walkN(mod, (nd) => {
    const r = irefOf(nd);
    if (r != null && remap[r]) nd.raw = "$iref:" + remap[r];
  });
  return mod;
}

/* Which cardIdModInfos entries exist, which of them actually hold a
   modification (the game writes an empty list for every unmodified card),
   and the list type those entries use. */
function recordInfo(modInfos, idx) {
  const existingKeys = [],
    modifiedKeys = [];
  let dictListType = null;
  if (modInfos)
    oget(modInfos, "$rcontent").items.forEach((it) => {
      const k = oget(it, "$k");
      if (!k || k.t !== "str") return;
      existingKeys.push(k.v);
      const v = resolveN(oget(it, "$v"), idx);
      if (isList(v)) {
        if (dictListType == null) dictListType = typeIdOf(oget(v, "$type"));
        if (oget(v, "$rcontent").items.length) modifiedKeys.push(k.v);
      } else if (v && v.t !== "null") modifiedKeys.push(k.v);
    });
  return { existingKeys, modifiedKeys, dictListType };
}

/* ---- reading a save ---- */
function analyseSave(text) {
  let root;
  try {
    root = odinParse(text);
  } catch (err) {
    throw new Error(
      "This file isn't readable as an Inscryption save: " + err.message,
    );
  }
  const idx = indexSave(root);
  const pre = normalizeTypes(text, idx.typeNames);
  if (pre.count)
    throw new Error(
      "This save's type labels don't follow the layout the patcher expects, so it won't risk rewriting it.",
    );
  const loc = locateDeck(root, idx);
  const nlm = /\r?\n/.exec(text);
  const unitM = /\n([ \t]+)"/.exec(text);
  return {
    text,
    root,
    idx,
    ...loc,
    template: findTemplate(root, idx),
    nl: nlm ? nlm[0] : "\n",
    unit: unitM ? unitM[1] : "\t",
    currentDeck: oget(loc.cardIds, "$rcontent").items.map((x) => x.v),
    ...recordInfo(loc.modInfos, idx),
  };
}

/* What a patch would do, given the forge's current deck. */
function planPatch(info, keep) {
  const keys = modKeys(),
    keySet = new Set(keys);
  const carved = [],
    kept = [],
    cleared = [],
    orphans = [];
  deck.forEach((e, ix) => {
    const k = keys[ix];
    if (hasMod(e.mod)) carved.push(k);
    else if (info.modifiedKeys.includes(k)) (keep ? kept : cleared).push(k);
  });
  info.modifiedKeys.forEach((k) => {
    if (!keySet.has(k)) orphans.push(k);
  });
  return { keys, carved, kept, cleared, orphans };
}

function buildPatch(info, keep) {
  const src = info.text,
    unit = info.unit,
    nl = info.nl,
    plan = planPatch(info, keep),
    edits = [];
  let next = info.idx.maxId + 1;
  const alloc = () => next++;

  /* 1 — the card list */
  const ciLen = oEntry(info.cardIds, "$rlength"),
    ciArrE = oEntry(info.cardIds, "$rcontent");
  edits.push({ s: ciLen.v.s, e: ciLen.v.e, text: String(deck.length) });
  edits.push({
    s: ciArrE.v.s,
    e: ciArrE.v.e,
    text: arrText(
      deck.map((e) => JSON.stringify(e.id)),
      lineIndent(src, ciArrE.ks),
      unit,
      nl,
    ),
  });

  /* 2 — modification records */
  if (plan.carved.length && !info.modInfos)
    throw new Error(
      "This run's deck has no cardIdModInfos block, so carvings can't be written. Card list only: clear the carvings, or start the run with Annoying Starters.",
    );
  if (plan.carved.length && !info.template)
    throw new Error(
      "The save has no existing card modification to copy the record layout from. Start the run with the Annoying Starters challenge (it gives every starting card one), then open the save again.",
    );
  if (info.modInfos) {
    const miArrE = oEntry(info.modInfos, "$rcontent"),
      ind = lineIndent(src, miArrE.ks);
    const old = new Map();
    miArrE.v.items.forEach((it) => {
      const k = oget(it, "$k");
      if (k && k.t === "str") old.set(k.v, it);
    });
    const items = [];
    const listTypeFor = (o) => {
      const ov = o && oget(o, "$v");
      if (ov && ov.t === "obj" && oget(ov, "$type"))
        return typeIdOf(oget(ov, "$type"));
      if (info.dictListType != null) return info.dictListType;
      return info.template ? info.template.listType : null;
    };
    const entryText = (k, lt, makeMods) => {
      const listId = alloc(); // numbered top-down, as the game does
      const mods = makeMods();
      return odinWrite(
        objN([
          ["$k", strN(k)],
          [
            "$v",
            objN([
              ["$id", numN(listId)],
              ["$type", numN(lt)],
              ["$rlength", numN(mods.length)],
              ["$rcontent", { t: "arr", items: mods }],
            ]),
          ],
        ]),
        ind + unit,
        unit,
        nl,
      );
    };
    plan.keys.forEach((k, ix) => {
      const e = deck[ix],
        o = old.get(k);
      if (hasMod(e.mod)) {
        items.push(
          entryText(k, listTypeFor(o), () => [
            makeModN(info.template, e.mod, alloc),
          ]),
        );
      } else if (o && (keep || !info.modifiedKeys.includes(k))) {
        items.push(src.slice(o.s, o.e)); // keep the game's own entry as written
      } else {
        const lt = listTypeFor(o);
        if (lt != null) items.push(entryText(k, lt, () => [])); // unmodified card: empty list, like the game
      }
    });
    const len = oEntry(info.modInfos, "$rlength");
    if (len) edits.push({ s: len.v.s, e: len.v.e, text: String(items.length) });
    edits.push({
      s: miArrE.v.s,
      e: miArrE.v.e,
      text: arrText(items, ind, unit, nl),
    });
  }

  const inserted = [];
  const spliced = applyEdits(src, edits, inserted);
  const norm = normalizeTypes(spliced, info.idx.typeNames);
  const outside = norm.at.filter(
    (pos) => !inserted.some(([a, b]) => pos >= a && pos < b),
  ).length;
  plan.allEntries = info.dictListType != null || !!info.template;
  return { text: norm.text, plan, typeFixes: outside };
}

/* Re-reads the patched file from scratch and checks it before it is offered. */
function verifyPatch(text, plan) {
  const checks = [],
    ok = (label, pass) => checks.push({ label, pass: !!pass });
  let root;
  try {
    root = odinParse(text);
    ok("The patched file reads back cleanly", true);
  } catch (err) {
    ok("The patched file reads back cleanly — " + err.message, false);
    return checks;
  }
  const idx = indexSave(root);
  ok("Every $id is unique", !idx.dupIds.length);
  const dangling = idx.irefs.filter((r) => !idx.ids.has(r));
  ok(
    "Every $iref points at an object that exists" +
      (dangling.length
        ? " (missing: " + dangling.slice(0, 5).join(", ") + ")"
        : ""),
    !dangling.length,
  );
  let typesOK = true;
  try {
    typesOK = normalizeTypes(text, idx.typeNames).count === 0;
  } catch (_) {
    typesOK = false;
  }
  ok("Every type is named before it is used by number", typesOK);
  let loc;
  try {
    loc = locateDeck(root, idx);
  } catch (err) {
    ok("Kaycee's Mod deck found — " + err.message, false);
    return checks;
  }
  const ids = oget(loc.cardIds, "$rcontent").items.map((x) => x.v);
  ok(
    "cardIds holds your " + deck.length + " cards, in order",
    ids.length === deck.length && ids.every((v, i) => v === deck[i].id),
  );
  ok(
    "cardIds $rlength is " + deck.length,
    oget(loc.cardIds, "$rlength").raw === String(deck.length),
  );
  if (loc.modInfos) {
    const entries = oget(loc.modInfos, "$rcontent").items;
    const len = oget(loc.modInfos, "$rlength");
    if (len)
      ok(
        "cardIdModInfos $rlength matches its entries",
        len.raw === String(entries.length),
      );
    const entryKeys = new Set(
      entries.map((it) => oget(it, "$k") && oget(it, "$k").v),
    );
    if (plan.allEntries)
      ok(
        "Every card in the deck has a cardIdModInfos entry, as the game writes them",
        plan.keys.every((k) => entryKeys.has(k)) &&
          entryKeys.size === plan.keys.length,
      );
    else
      ok(
        "No cardIdModInfos entry is left for a card outside the deck",
        [...entryKeys].every((k) => plan.keys.includes(k)),
      );
    const byKey = new Map(
      entries.map((it) => [oget(it, "$k") && oget(it, "$k").v, it]),
    );
    let allMatch = true;
    plan.keys.forEach((k, ix) => {
      const m = deck[ix].mod;
      if (!hasMod(m)) return;
      const it = byKey.get(k),
        v = it && oget(it, "$v"),
        mods = v && oget(v, "$rcontent");
      const r = mods && mods.items[0];
      let same = false;
      try {
        same =
          !!r &&
          oget(r, "attackAdjustment").raw === String(m.dAtk || 0) &&
          oget(r, "healthAdjustment").raw === String(m.dHp || 0) &&
          oget(r, "bloodCostAdjustment").raw === String(m.dBlood || 0) &&
          oget(r, "bonesCostAdjustment").raw === String(m.dBones || 0) &&
          oget(oget(r, "abilities"), "$rcontent")
            .items.map((x) => x.raw)
            .join() === m.add.join() &&
          oget(oget(r, "negateAbilities"), "$rcontent")
            .items.map((x) => x.raw)
            .join() === m.neg.join() &&
          (m.name
            ? oget(r, "nameReplacement").v === m.name
            : oget(r, "nameReplacement").t === "null");
      } catch (_) {
        same = false;
      }
      if (!same) allMatch = false;
    });
    if (plan.carved.length)
      ok(
        "Every carving reads back exactly as carved (" +
          plan.carved.length +
          " card" +
          (plan.carved.length === 1 ? "" : "s") +
          ")",
        allMatch,
      );
  }
  return checks;
}

/* ---- UI ---- */
const cardLabel = (id) => {
  const c = CARD_BY_ID[id.replace(/#\d+$/, "")];
  return c ? c.n : id;
};
function listNames(arr) {
  if (!arr.length) return '<span class="sp-muted">none</span>';
  return arr.map((k) => "<code>" + esc(k) + "</code>").join(" ");
}
function carvingSummary(m) {
  const p = [];
  if (m.name) p.push("named “" + esc(m.name) + "”");
  if (m.dAtk) p.push("power " + (m.dAtk > 0 ? "+" : "") + m.dAtk);
  if (m.dHp) p.push("health " + (m.dHp > 0 ? "+" : "") + m.dHp);
  if (m.dBlood) p.push("blood " + (m.dBlood > 0 ? "+" : "") + m.dBlood);
  if (m.dBones) p.push("bones " + (m.dBones > 0 ? "+" : "") + m.dBones);
  if (m.add.length)
    p.push(
      "sigils: " +
        m.add
          .map(
            (s) =>
              (SIG_CAUTION[s] ? CAUTION_SVG + " " : "") +
              esc(SIG[s] ? SIG[s].name : "#" + s),
          )
          .join(", "),
    );
  if (m.neg.length)
    p.push(
      "cancels: " +
        m.neg.map((s) => esc(SIG[s] ? SIG[s].name : "#" + s)).join(", "),
    );
  return p.join(" · ");
}

function renderSaveFound() {
  const host = document.getElementById("spFound");
  const info = SP.info;
  if (!info) {
    host.innerHTML = "";
    return;
  }
  const t = info.template;
  host.innerHTML =
    '<div class="sp-block"><h4>Found in your save</h4><dl class="sp-kv">' +
    "<dt>Deck now</dt><dd>" +
    info.currentDeck.length +
    " card" +
    (info.currentDeck.length === 1 ? "" : "s") +
    " — " +
    info.currentDeck.map((id) => esc(cardLabel(id))).join(", ") +
    "</dd>" +
    "<dt>Modified cards</dt><dd>" +
    listNames(info.modifiedKeys) +
    "</dd>" +
    "<dt>Record layout</dt><dd>" +
    (t
      ? "copied from an existing card modification in this save"
      : '<span style="color:var(--blood-hi)">none in this save yet</span> — card list changes work, carvings need a run started with <b>Annoying Starters</b>') +
    "</dd>" +
    "</dl></div>";
}

function renderPatchPlan() {
  const host = document.getElementById("spPlan"),
    go = document.getElementById("spGo");
  if (!host) return;
  const info = SP.info;
  const GO_TIP =
    "Write your deck into the save and download the patched copy. The result is read back and checked first — if any check fails, nothing is downloaded.";
  if (!info) {
    host.innerHTML = "";
    go.disabled = true;
    go.dataset.tip = GO_TIP + "\nOpen a save file first.";
    return;
  }
  const keep = document.getElementById("spKeep").checked;
  const plan = planPatch(info, keep);
  const rows = [];
  plan.keys.forEach((k, ix) => {
    const e = deck[ix];
    if (hasMod(e.mod))
      rows.push(
        '<li class="add"><code>' +
          esc(k) +
          "</code> — " +
          carvingSummary(e.mod) +
          "</li>",
      );
  });
  plan.kept.forEach((k) =>
    rows.push(
      '<li class="keep"><code>' +
        esc(k) +
        "</code> — keeps the run's own modification</li>",
    ),
  );
  plan.cleared.forEach((k) =>
    rows.push(
      '<li class="del"><code>' +
        esc(k) +
        "</code> — the run's modification is removed</li>",
    ),
  );
  plan.orphans.forEach((k) =>
    rows.push(
      '<li class="del"><code>' +
        esc(k) +
        "</code> — no longer in the deck, record removed</li>",
    ),
  );
  const blocked =
    !deck.length || (plan.carved.length && (!info.template || !info.modInfos));
  let why = "";
  if (!deck.length)
    why =
      '<p class="sp-muted" style="margin:10px 0 0">Add cards to the forge first — an empty deck isn\'t written.</p>';
  else if (blocked)
    why =
      '<p style="margin:10px 0 0;color:var(--blood-hi)">Carvings can\'t be written into this save yet (see “Record layout” above). Clear the carvings to patch the card list only.</p>';
  host.innerHTML =
    '<div class="sp-block"><h4>What the patch will do</h4><dl class="sp-kv">' +
    "<dt>New deck</dt><dd>" +
    deck.length +
    " card" +
    (deck.length === 1 ? "" : "s") +
    (deck.length
      ? " — " + deck.map((e) => esc(CARD_BY_ID[e.id].n)).join(", ")
      : "") +
    "</dd>" +
    "<dt>Carvings</dt><dd>" +
    (rows.length
      ? '<ul class="sp-list">' + rows.join("") + "</ul>"
      : '<span class="sp-muted">no changes to modification records</span>') +
    "</dd>" +
    "</dl>" +
    why +
    "</div>";
  go.disabled = !!blocked;
  go.dataset.tip =
    GO_TIP +
    (!deck.length
      ? "\nAdd cards to the forge first."
      : blocked
        ? "\nThis save can't hold carvings yet — see “Record layout”."
        : "");
}

function loadSaveFile(file) {
  const report = document.getElementById("spReport");
  report.innerHTML = "";
  const fr = new FileReader();
  fr.onload = () => {
    const bytes = new Uint8Array(fr.result);
    SP.bytesBOM =
      bytes.length >= 3 &&
      bytes[0] === 0xef &&
      bytes[1] === 0xbb &&
      bytes[2] === 0xbf;
    let text;
    try {
      text = new TextDecoder("utf-8", { fatal: true, ignoreBOM: false }).decode(
        bytes,
      );
    } catch (_) {
      fail(
        "This file isn't UTF-8 text, so it isn't a readable SaveFile.gwsave.",
      );
      return;
    }
    try {
      SP.info = analyseSave(text);
      SP.text = text;
      SP.name = file.name || "SaveFile.gwsave";
      document.getElementById("spFileName").textContent =
        SP.name + " · " + (bytes.length / 1024).toFixed(1) + " KB";
    } catch (err) {
      fail(err.message);
      return;
    }
    renderSaveFound();
    renderPatchPlan();
    fillTypeNumbers(SP.info);
  };
  const fail = (msg) => {
    SP.info = null;
    SP.text = null;
    document.getElementById("spFileName").textContent =
      (file.name || "file") + " — not loaded";
    renderSaveFound();
    renderPatchPlan();
    report.innerHTML =
      '<div class="warn"><b>Couldn\'t read that save.</b> ' +
      esc(msg) +
      "</div>";
  };
  fr.onerror = () => fail("The browser couldn't read the file.");
  fr.readAsArrayBuffer(file);
}

/* The raw-block tab needs the save's own type numbers and a free $id. */
function fillTypeNumbers(info) {
  const names = info.idx.typeNames;
  const find = (re) => {
    for (const k in names) if (re.test(names[k])) return +k;
    return null;
  };
  const vals = {
    tnList: find(
      /^System\.Collections\.Generic\.List`1\[\[DiskCardGame\.CardModificationInfo,/,
    ),
    tnMod: find(/^DiskCardGame\.CardModificationInfo,/),
    tnAbility: find(
      /^System\.Collections\.Generic\.List`1\[\[DiskCardGame\.Ability,/,
    ),
    tnGem: find(
      /^System\.Collections\.Generic\.List`1\[\[DiskCardGame\.GemType,/,
    ),
    tnSpecial: find(
      /^System\.Collections\.Generic\.List`1\[\[DiskCardGame\.SpecialTriggeredAbility,/,
    ),
    tnDecal: find(/^System\.Collections\.Generic\.List`1\[\[System\.String,/),
    tnStartId: info.idx.maxId + 1,
  };
  let filled = 0,
    missing = 0;
  for (const id in vals) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (vals[id] != null) {
      el.value = vals[id];
      filled++;
    } else missing++;
  }
  const hint = document.getElementById("tnHint");
  if (hint)
    hint.textContent =
      "filled in from " +
      SP.name +
      (missing ? " — " + missing + " not found, kept the default" : "");
  const note = document.getElementById("tnIdNote");
  if (note)
    note.innerHTML =
      "The highest <code>$id</code> in " +
      esc(SP.name) +
      " is <b>" +
      info.idx.maxId +
      "</b>, so " +
      (info.idx.maxId + 1) +
      " is safe. Carving more than one card counts up from here, each card using the next 7 numbers, so nothing collides even if you paste several at once.";
  renderOutput();
}
function runPatch() {
  const report = document.getElementById("spReport");
  if (!SP.info) return;
  const keep = document.getElementById("spKeep").checked;
  let out;
  try {
    out = buildPatch(SP.info, keep);
  } catch (err) {
    report.innerHTML =
      '<div class="warn"><b>Nothing was written.</b> ' +
      esc(err.message) +
      "</div>";
    return;
  }
  const checks = verifyPatch(out.text, out.plan);
  const passed = checks.every((c) => c.pass);
  const list =
    '<ul class="sp-list">' +
    checks
      .map(
        (c) =>
          '<li class="' +
          (c.pass ? "ok" : "bad") +
          '">' +
          esc(c.label) +
          "</li>",
      )
      .join("") +
    "</ul>";
  if (!passed) {
    report.innerHTML =
      '<div class="warn"><b>The patched file failed a check, so it was not downloaded.</b>' +
      list +
      "</div>";
    return;
  }
  const enc = new TextEncoder().encode(out.text);
  const parts =
    SP.bytesBOM && out.text.charCodeAt(0) !== 0xfeff
      ? [new Uint8Array([0xef, 0xbb, 0xbf]), enc]
      : [enc];
  const blob = new Blob(parts, { type: "application/octet-stream" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = SP.name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  const fixes = out.typeFixes
    ? '<p class="sp-muted" style="margin:8px 0 0">' +
      out.typeFixes +
      " type label" +
      (out.typeFixes === 1 ? "" : "s") +
      " outside the deck " +
      (out.typeFixes === 1 ? "was" : "were") +
      " switched between the named and numbered form, because the deck block you replaced used to be where " +
      (out.typeFixes === 1 ? "that type was" : "those types were") +
      " first named.</p>"
    : "";
  report.innerHTML =
    '<div class="note"><b>Patched and downloaded as ' +
    esc(SP.name) +
    ".</b> Replace the save in your Inscryption folder with it (your browser may have added a number to the name — rename it back to <code>SaveFile.gwsave</code>), then continue the run from the main menu." +
    list +
    fixes +
    "</div>";
}

function initSavePatcher() {
  const panel = document.getElementById("savePatch"),
    input = document.getElementById("spFile");
  document.getElementById("spPick").onclick = () => input.click();
  input.onchange = () => {
    if (input.files[0]) loadSaveFile(input.files[0]);
    input.value = "";
  };
  document.getElementById("spKeep").onchange = renderPatchPlan;
  document.getElementById("spGo").onclick = runPatch;
  let depth = 0;
  panel.addEventListener("dragenter", (e) => {
    e.preventDefault();
    depth++;
    panel.classList.add("dragging");
  });
  panel.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  panel.addEventListener("dragleave", () => {
    if (--depth <= 0) {
      depth = 0;
      panel.classList.remove("dragging");
    }
  });
  panel.addEventListener("drop", (e) => {
    e.preventDefault();
    depth = 0;
    panel.classList.remove("dragging");
    const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
    if (f) loadSaveFile(f);
  });
}

/* ══════════════════ TOOLTIPS ══════════════════
   One shared tooltip for every element with data-tip. A plain title is
   moved into data-tip on first contact so the browser's own tooltip never
   doubles up. Shows on hover (after a short delay), on keyboard focus, and
   on a long press with touch; Esc, scrolling, typing or clicking hide it.
   It follows the WAI-ARIA tooltip pattern: role="tooltip", referenced from
   the element through aria-describedby while it is showing. */
function initTooltips() {
  const tip = document.createElement("div");
  tip.id = "tipbox";
  tip.className = "tipbox";
  tip.setAttribute("role", "tooltip");
  tip.hidden = true;
  tip.innerHTML =
    '<span class="tip-b"></span><i class="tip-arrow" aria-hidden="true"></i>';
  document.body.appendChild(tip);
  const body = tip.querySelector(".tip-b");
  let cur = null,
    via = "",
    prevDesc = null,
    showTimer = 0,
    pressTimer = 0,
    autoHide = 0,
    kb = false,
    swallowClick = false,
    raf = 0;

  const adopt = (el) => {
    if (el.hasAttribute("title")) {
      if (!el.dataset.tip) el.dataset.tip = el.getAttribute("title");
      el.removeAttribute("title");
    }
  };
  const find = (node) => {
    const el = node && node.closest ? node.closest("[data-tip],[title]") : null;
    if (!el || el === document.body || el === document.documentElement)
      return null;
    adopt(el);
    return el.dataset.tip ? el : null;
  };
  const place = () => {
    if (!cur) return;
    if (!cur.isConnected) {
      hide();
      return;
    }
    const r = cur.getBoundingClientRect();
    const vw = document.documentElement.clientWidth,
      vh = window.innerHeight,
      gap = 10,
      m = 8;
    tip.style.maxWidth = Math.min(300, vw - m * 2) + "px";
    const tw = tip.offsetWidth,
      th = tip.offsetHeight;
    let above = r.top - th - gap >= m;
    if (!above && r.bottom + gap + th > vh - m && r.top > vh - r.bottom)
      above = true;
    let top = above ? r.top - th - gap : r.bottom + gap;
    let left = r.left + r.width / 2 - tw / 2;
    left = Math.max(m, Math.min(left, vw - tw - m));
    top = Math.max(m, Math.min(top, vh - th - m));
    tip.style.left = Math.round(left) + "px";
    tip.style.top = Math.round(top) + "px";
    tip.dataset.side = above ? "top" : "bottom";
    tip.style.setProperty(
      "--ax",
      Math.round(Math.max(12, Math.min(r.left + r.width / 2 - left, tw - 12))) +
        "px",
    );
  };
  const follow = () => {
    place();
    if (cur) raf = requestAnimationFrame(follow);
  };
  const show = (el, how) => {
    clearTimeout(showTimer);
    clearTimeout(autoHide);
    if (cur && cur !== el) hide();
    cur = el;
    via = how || "hover";
    body.textContent = el.dataset.tip;
    prevDesc = el.getAttribute("aria-describedby");
    el.setAttribute(
      "aria-describedby",
      prevDesc ? prevDesc + " tipbox" : "tipbox",
    );
    tip.hidden = false;
    tip.classList.remove("on");
    place();
    requestAnimationFrame(() => tip.classList.add("on"));
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(follow);
  };
  function hide() {
    clearTimeout(showTimer);
    clearTimeout(autoHide);
    cancelAnimationFrame(raf);
    if (cur) {
      if (prevDesc) cur.setAttribute("aria-describedby", prevDesc);
      else cur.removeAttribute("aria-describedby");
    }
    cur = null;
    via = "";
    prevDesc = null;
    tip.classList.remove("on");
    tip.hidden = true;
  }

  /* mouse and pen */
  document.addEventListener("pointerover", (e) => {
    if (e.pointerType === "touch") return;
    const el = find(e.target);
    if (el === cur) return;
    clearTimeout(showTimer);
    if (!el) {
      if (cur && !(kb && cur === document.activeElement)) hide();
      return;
    }
    showTimer = setTimeout(() => show(el), cur ? 60 : 380);
  });
  document.documentElement.addEventListener("pointerleave", () => {
    clearTimeout(showTimer);
    if (cur && !kb) hide();
  });

  /* keyboard */
  document.addEventListener(
    "keydown",
    (e) => {
      if (e.key === "Escape" && cur) {
        hide();
      } else if (e.key === "Tab" || e.key.indexOf("Arrow") === 0) kb = true;
    },
    true,
  );
  document.addEventListener("focusin", (e) => {
    if (!kb) return;
    const el = find(e.target);
    if (el) show(el, "kb");
    else if (cur) hide();
  });
  document.addEventListener("focusout", (e) => {
    if (cur && (e.target === cur || cur.contains(e.target))) hide();
  });

  /* touch: long press shows it, and the press does not also click */
  document.addEventListener(
    "pointerdown",
    (e) => {
      kb = false;
      swallowClick = false;
      clearTimeout(pressTimer);
      if (cur) hide();
      if (e.pointerType !== "touch") return;
      const el = find(e.target);
      if (!el) return;
      const x = e.clientX,
        y = e.clientY;
      const stop = () => {
        clearTimeout(pressTimer);
        removeEventListener("pointermove", move, true);
        removeEventListener("pointerup", stop, true);
        removeEventListener("pointercancel", stop, true);
      };
      const move = (ev) => {
        if (Math.hypot(ev.clientX - x, ev.clientY - y) > 10) stop();
      };
      addEventListener("pointermove", move, true);
      addEventListener("pointerup", stop, true);
      addEventListener("pointercancel", stop, true);
      pressTimer = setTimeout(() => {
        show(el, "touch");
        swallowClick = true;
        autoHide = setTimeout(hide, 4500);
      }, 480);
    },
    true,
  );
  document.addEventListener(
    "click",
    (e) => {
      if (swallowClick) {
        swallowClick = false;
        e.preventDefault();
        e.stopPropagation();
      }
    },
    true,
  );
  document.addEventListener(
    "contextmenu",
    (e) => {
      if (swallowClick) e.preventDefault();
    },
    true,
  );

  document.addEventListener(
    "input",
    () => {
      if (cur) hide();
    },
    true,
  );
  /* a keyboard tooltip rides along when focus scrolls the page; others close */
  addEventListener(
    "scroll",
    () => {
      if (cur && via !== "kb") hide();
    },
    { passive: true, capture: true },
  );
  addEventListener("resize", () => {
    if (cur) hide();
  });
}
/* ══════════════════ WIRING ══════════════════ */
function renderAll() {
  renderBoard();
  renderEditor();
  renderOutput();
  renderShelf();
  renderDeckTag();
  updateCatalogCounts();
}
initSavePatcher();

[
  "tnList",
  "tnMod",
  "tnAbility",
  "tnGem",
  "tnSpecial",
  "tnDecal",
  "tnStartId",
].forEach((id) => {
  document.getElementById(id).addEventListener("input", renderOutput);
});
document.getElementById("search").addEventListener("input", (e) => {
  query = e.target.value;
  renderCatalog();
});
document.getElementById("sigSearch").addEventListener("input", renderRefs);
document.getElementById("cardSearch").addEventListener("input", renderRefs);
document.getElementById("btnClear").onclick = () => {
  if (!deck.length) return;
  const snap = snapshot();
  deck = [];
  selected = -1;
  loadedId = "";
  loadedSig = "";
  renderAll();
  showToast("Emptied the deck.", snap);
};
document.getElementById("btnSavePreset").onclick = saveCurrent;
document.getElementById("presetName").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    saveCurrent();
  }
});
document.getElementById("btnExport").onclick = exportMine;
document.getElementById("btnImport").onclick = () =>
  document.getElementById("fileImport").click();
document.getElementById("fileImport").addEventListener("change", (e) => {
  const f = e.target.files && e.target.files[0];
  if (f) importMine(f);
  e.target.value = "";
});
document.querySelectorAll(".tabs button").forEach((b) => {
  b.onclick = () => {
    document
      .querySelectorAll(".tabs button")
      .forEach((x) => x.setAttribute("aria-selected", x === b));
    document
      .querySelectorAll(".out-pane")
      .forEach((p) => p.classList.toggle("on", p.id === b.dataset.pane));
  };
});
document.querySelectorAll("[data-copy]").forEach((b) => {
  b.onclick = async () => {
    const txt = document.getElementById(b.dataset.copy).textContent;
    try {
      await navigator.clipboard.writeText(txt);
    } catch (err) {
      const ta = document.createElement("textarea");
      ta.value = txt;
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch (e2) {}
      document.body.removeChild(ta);
    }
    const old = b.textContent;
    b.textContent = "Copied";
    setTimeout(() => (b.textContent = old), 1200);
  };
});

function initAdvancedReveal() {
  const d = document.getElementById("advDetails");
  if (!d) return;
  const open = () => {
    d.open = true;
  };
  document
    .querySelectorAll('a[href="#advanced"]')
    .forEach((a) => a.addEventListener("click", open));
  if (location.hash === "#advanced") open();
}

initCandleNav();
initGlitch();
initTooltips();
initAdvancedReveal();
initMotionToggle();
initMotionNudge();
readStore();
renderStoreNote();
renderKindChips();
renderChips();
renderCatalog();
renderRefs();
renderAll();
