const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

const MONGODB = `mongodb+srv://FloSlv:${DB_PASSWORD}@flo.j1cmj.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

const LUCKY_CARDS = [
  'Rendez-vous rue de la Paix',
  `Avancer jusqu'à la case départ. Recevez 200 euro`,
  `Rendez-vous à l'Avenue Henri-Martin. Si vous passez par la case départ, recevez 200 euro`,
  'Avancez au Boulevard de La Villette. Si vous passez par la case départ, recevez 200 euro',
  'Vous êtes imposé pour les réparations de voirie à raison de: -40 euro par maison, -115 euro par hôtel',
  `Avancez jusqu'à la Gare Montparnasse. Si vous passez par la case départ, recevez 200 euro`,
  'Vous avez gagné le prix de mots croisés. Recevez: +100 euro',
  'La banque vous verse un dividende: +50 euro',
  `Vous êtes libéré de prison. Cette carte peut être conservée jusqu'à ce qu'elle soit utilisée ou vendue.`,
  'Reculez de trois cases',
  'Aller en prison. Rendez-vous directement en prison. Ne franchissez pas par la case départ, ne touchez pas 200 euro',
  'Faites des réparations dans toutes vos maisons. Versez pour chaque maison: -25 euro. Versez pour chaque hôtel: -100 euro',
  'Amende pour excès de vitesse: -15 euro',
  'Payez pour frais de scolarité: -150 euro',
  'Amende pour ivresse: -20 euro',
  'Votre immeuble et votre prêt rapportent. Vous devez toucher: +150 euro',
];

const COMMUNITY_CHEST_CARDS = [
  'Rendez-vous rue de la Paix',
  'Erreur de la banque en votre faveur. Recevez +200 euro',
  'Payez la note du médecin: -50 euro',
  'La vente de votre stock vous rapporte: +50 euro',
  `Vous êtes libéré de prison. Cette carte peut être conservée jusqu'à ce qu'elle soit utilisée ou vendue.`,
  'Aller en prison. Rendez-vous directement à la prison. Ne franchissez pas par la case départ, ne touchez pas 200 euro',
  'Retournez à Belleville',
  'Recevez votre revenu annuel: +100 euro',
  `C’est votre anniversaire. Chaque joueur doit vous donner: +10 euro`,
  'Les contributions vous remboursent: +20 euro',
  `Recevez votre intérêt sur l’emprunt à 7%: +25 euro`,
  'Payez votre Police d’Assurance: -50 euro',
  'Payez une amende: -10 euro ou bien tirez une carte CHANCE',
  'Rendez-vous à la gare la plus proche. Si vous passez par la case départ, recevez 200 euro',
  'Vous avez gagné le deuxième Prix de Beauté. Recevez: +10 euro',
  'Vous héritez: +100 euro',
];

const SQUARES = [
  {
    label: 'Départ',
    type: 'START',
    attendees: [],
  },
  {
    label: 'Boulevard de Belleville',
    type: 'PROPERTY',
    group: 'group0',
    attendees: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Caisse de communauté',
    type: 'COMMUNITY_CHEST',
    attendees: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Rue Lecourbe',
    type: 'PROPERTY',
    group: 'group0',
    attendees: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Impôt sur le revenu',
    type: 'TAX',
    attendees: [],
  },
  {
    label: 'Gare Montparnasse',
    type: 'STATION',
    group: 'station',
    attendees: [],
    owner: null,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Rue de Vaugirard',
    type: 'PROPERTY',
    group: 'group1',
    attendees: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Chance',
    type: 'LUCKY',
    attendees: [],
  },
  {
    label: 'Rue de Courcelle',
    type: 'PROPERTY',
    group: 'group1',
    attendees: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Avenue de la République',
    type: 'PROPERTY',
    group: 'group1',
    attendees: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Prison',
    type: 'JAIL',
    attendees: [],
    prisoners: [],
  },
  {
    label: 'Boulevard de la Vilette',
    type: 'PROPERTY',
    group: 'group2',
    attendees: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: `Compagnie de distribution d'électricité`,
    type: 'COMPANY',
    group: 'company',
    attendees: [],
    owner: null,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Avenue de Neuilly',
    type: 'PROPERTY',
    group: 'group2',
    attendees: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Rue de Paradis',
    type: 'PROPERTY',
    group: 'group2',
    attendees: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Gare de Lyon',
    type: 'STATION',
    group: 'station',
    attendees: [],
    owner: null,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Avenue Mozart',
    type: 'PROPERTY',
    group: 'group3',
    attendees: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Caisse de communauté',
    type: 'COMMUNITY_CHEST',
    attendees: [],
    owner: null,
  },
  {
    label: 'Boulevard Saint-Michel',
    type: 'PROPERTY',
    group: 'group3',
    attendees: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Place Pigalle',
    type: 'PROPERTY',
    group: 'group3',
    attendees: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Parc gratuit',
    type: 'PARKING',
    attendees: [],
  },
  {
    label: 'Avenue Matignon',
    type: 'PROPERTY',
    group: 'group4',
    attendees: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Chance',
    type: 'LUCKY',
    attendees: [],
  },
  {
    label: 'Boulevard Malesherbes',
    type: 'PROPERTY',
    group: 'group4',
    attendees: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Avenue Henri-Martin',
    type: 'PROPERTY',
    group: 'group4',
    attendees: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Gare du Nord',
    type: 'STATION',
    group: 'station',
    attendees: [],
    owner: null,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Faubourg Saint-Honoré',
    type: 'PROPERTY',
    group: 'group5',
    attendees: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Place de la Bourse',
    type: 'PROPERTY',
    group: 'group5',
    attendees: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Compagnie de distribution des eaux',
    type: 'COMPANY',
    group: 'company',
    attendees: [],
    owner: null,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Rue la Fayette',
    type: 'PROPERTY',
    group: 'group5',
    attendees: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Allez en prison',
    type: 'GO_JAIL',
    attendees: [],
  },
  {
    label: 'Avenue de Breteuil',
    type: 'PROPERTY',
    group: 'group6',
    attendees: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Avenue Foch',
    type: 'PROPERTY',
    group: 'group6',
    attendees: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Caisse de communauté',
    type: 'COMMUNITY_CHEST',
    attendees: [],
  },
  {
    label: 'Boulevard des Capucines',
    type: 'PROPERTY',
    group: 'group6',
    attendees: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Gare Saint-Lazare',
    type: 'STATION',
    group: 'station',
    attendees: [],
    owner: null,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Chance',
    type: 'LUCKY',
    attendees: [],
  },
  {
    label: 'Avenue des Champs-Elysées',
    type: 'PROPERTY',
    group: 'group7',
    attendees: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Taxe de luxe',
    type: 'TAX',
    attendees: [],
  },
  {
    label: 'Rue de la Paix',
    type: 'PROPERTY',
    group: 'group7',
    attendees: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
];

export { MONGODB, LUCKY_CARDS, COMMUNITY_CHEST_CARDS, SQUARES };
