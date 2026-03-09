import boxPeinture from '@/assets/box-peinture.jpg';
import boxPoterie from '@/assets/box-poterie.jpg';
import boxCouture from '@/assets/box-couture.jpg';
import boxJardinage from '@/assets/box-jardinage.jpg';
import boxBougies from '@/assets/box-bougies.jpg';
import boxVin from '@/assets/box-vin.jpg';

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  price: number;
  description: string;
  longDescription: string;
  image: string;
  includes: string[];
  difficulty: 'Facile' | 'Moyen' | 'Avancé';
  duration: string;
  persons: string;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  image: string;
  color: string;
}

export const categories: Category[] = [
  { name: 'Peinture', slug: 'peinture', description: 'Explorez votre côté artistique avec nos box peinture complètes', image: boxPeinture, color: 'bg-primary/10' },
  { name: 'Poterie', slug: 'poterie', description: 'Modelez et créez des pièces uniques en argile', image: boxPoterie, color: 'bg-accent/20' },
  { name: 'Couture', slug: 'couture', description: 'Apprenez à coudre et créez vos propres pièces textiles', image: boxCouture, color: 'bg-secondary/10' },
  { name: 'Jardinage', slug: 'jardinage', description: 'Cultivez votre jardin intérieur avec nos kits complets', image: boxJardinage, color: 'bg-secondary/20' },
  { name: 'Bougies', slug: 'bougies', description: 'Créez des bougies parfumées artisanales', image: boxBougies, color: 'bg-accent/10' },
  { name: 'Vin & Vigne', slug: 'vin', description: 'Plantez votre vigne et initiez-vous à la vinification', image: boxVin, color: 'bg-primary/5' },
];

export const products: Product[] = [
  {
    id: 'paint-starter',
    name: 'Box Peinture Aquarelle',
    slug: 'box-peinture-aquarelle',
    category: 'Peinture',
    categorySlug: 'peinture',
    price: 39.90,
    description: 'Tout le nécessaire pour réaliser votre première aquarelle',
    longDescription: "Découvrez l'art de l'aquarelle avec cette box complète. Que vous soyez débutant ou que vous souhaitiez perfectionner votre technique, ce kit contient tout le matériel nécessaire pour créer de magnifiques œuvres. Le guide illustré vous accompagne étape par étape.",
    image: boxPeinture,
    includes: ['12 tubes de peinture aquarelle', '3 pinceaux (fin, moyen, large)', '1 bloc de papier aquarelle 300g', '1 palette de mélange', '1 guide illustré 32 pages', '1 chiffon microfibre'],
    difficulty: 'Facile',
    duration: '2-3 heures',
    persons: '1 personne',
  },
  {
    id: 'paint-oil',
    name: 'Box Peinture à l\'Huile',
    slug: 'box-peinture-huile',
    category: 'Peinture',
    categorySlug: 'peinture',
    price: 54.90,
    description: 'Initiez-vous à la peinture à l\'huile avec ce kit premium',
    longDescription: "La peinture à l'huile est un art noble et intemporel. Cette box vous fournit tout le matériel de qualité professionnelle pour créer votre premier chef-d'œuvre. Le guide détaillé vous enseigne les techniques de base et les mélanges de couleurs.",
    image: boxPeinture,
    includes: ['8 tubes de peinture à l\'huile', '4 pinceaux assortis', '1 toile sur châssis 40x50cm', '1 palette en bois', '1 flacon de médium', '1 guide illustré 40 pages'],
    difficulty: 'Moyen',
    duration: '3-4 heures',
    persons: '1 personne',
  },
  {
    id: 'pottery-starter',
    name: 'Box Poterie Débutant',
    slug: 'box-poterie-debutant',
    category: 'Poterie',
    categorySlug: 'poterie',
    price: 44.90,
    description: 'Modelez vos premières créations en argile',
    longDescription: "Plongez dans l'univers fascinant de la poterie avec cette box pensée pour les débutants. Vous apprendrez les techniques de base du modelage et créerez de magnifiques pièces décoratives ou utilitaires. Aucun tour de potier nécessaire !",
    image: boxPoterie,
    includes: ['2 kg d\'argile autodurcissante', '1 set d\'outils de modelage (5 pièces)', '1 éponge', '1 fil à couper', '2 peintures acryliques', '1 vernis de finition', '1 guide illustré 28 pages'],
    difficulty: 'Facile',
    duration: '2-3 heures',
    persons: '1-2 personnes',
  },
  {
    id: 'pottery-advanced',
    name: 'Box Poterie Créative',
    slug: 'box-poterie-creative',
    category: 'Poterie',
    categorySlug: 'poterie',
    price: 59.90,
    description: 'Créez des pièces uniques avec des techniques avancées',
    longDescription: "Pour ceux qui veulent aller plus loin dans l'art de la poterie, cette box propose des techniques plus avancées comme le colombin, la plaque et les engobes. Créez des pièces sophistiquées et personnalisées.",
    image: boxPoterie,
    includes: ['3 kg d\'argile premium', '1 set d\'outils pro (8 pièces)', '4 engobes de couleur', '1 estèque', '1 tournette', '1 guide avancé 44 pages'],
    difficulty: 'Avancé',
    duration: '4-5 heures',
    persons: '1 personne',
  },
  {
    id: 'sewing-tote',
    name: 'Box Couture Tote Bag',
    slug: 'box-couture-tote-bag',
    category: 'Couture',
    categorySlug: 'couture',
    price: 34.90,
    description: 'Cousez votre propre tote bag personnalisé',
    longDescription: "Apprenez à coudre en réalisant un joli tote bag que vous pourrez utiliser au quotidien. Cette box est parfaite pour les débutants en couture et contient tout le matériel pré-coupé pour faciliter votre apprentissage.",
    image: boxCouture,
    includes: ['Tissu pré-coupé (coton bio)', 'Fil assorti', 'Aiguilles', 'Épingles', 'Ciseaux de couture', 'Patron et guide pas à pas'],
    difficulty: 'Facile',
    duration: '2 heures',
    persons: '1 personne',
  },
  {
    id: 'sewing-cushion',
    name: 'Box Couture Coussin Déco',
    slug: 'box-couture-coussin-deco',
    category: 'Couture',
    categorySlug: 'couture',
    price: 42.90,
    description: 'Réalisez un coussin décoratif unique',
    longDescription: "Créez un magnifique coussin décoratif pour votre intérieur. Cette box vous guide à travers les étapes de la confection avec des techniques de couture variées incluant la broderie simple.",
    image: boxCouture,
    includes: ['Tissu premium pré-coupé', 'Rembourrage hypoallergénique', 'Fermeture éclair', 'Kit de broderie', 'Fil et aiguilles', 'Guide illustré'],
    difficulty: 'Moyen',
    duration: '3 heures',
    persons: '1 personne',
  },
  {
    id: 'garden-herbs',
    name: 'Box Jardinage Herbes Aromatiques',
    slug: 'box-jardinage-herbes',
    category: 'Jardinage',
    categorySlug: 'jardinage',
    price: 29.90,
    description: 'Cultivez vos propres herbes aromatiques à la maison',
    longDescription: "Créez votre petit jardin d'herbes aromatiques directement dans votre cuisine. Cette box contient tout le nécessaire pour faire pousser basilic, persil, ciboulette et menthe. Un plaisir gustatif et visuel !",
    image: boxJardinage,
    includes: ['4 sachets de graines bio', '4 pots en terre cuite', 'Terreau spécial semis', 'Billes d\'argile', 'Étiquettes en ardoise', 'Mini arrosoir', 'Guide de culture'],
    difficulty: 'Facile',
    duration: '1 heure (+ entretien)',
    persons: '1-4 personnes',
  },
  {
    id: 'garden-terrarium',
    name: 'Box Terrarium Tropical',
    slug: 'box-terrarium-tropical',
    category: 'Jardinage',
    categorySlug: 'jardinage',
    price: 49.90,
    description: 'Créez un magnifique terrarium tropical',
    longDescription: "Assemblez votre propre écosystème miniature avec ce kit terrarium complet. Un projet créatif et relaxant qui apportera une touche de nature à votre intérieur. Le terrarium est autonome et nécessite très peu d'entretien.",
    image: boxJardinage,
    includes: ['1 bocal en verre soufflé', '3 plantes tropicales miniatures', 'Substrat et charbon actif', 'Mousse naturelle', 'Pierres décoratives', 'Outil de plantation', 'Guide complet'],
    difficulty: 'Facile',
    duration: '1-2 heures',
    persons: '1-2 personnes',
  },
  {
    id: 'candle-soy',
    name: 'Box Bougies Naturelles',
    slug: 'box-bougies-naturelles',
    category: 'Bougies',
    categorySlug: 'bougies',
    price: 37.90,
    description: 'Fabriquez 3 bougies parfumées en cire de soja',
    longDescription: "Découvrez l'art de la fabrication de bougies avec cette box complète. Utilisez de la cire de soja naturelle et des fragrances de qualité pour créer 3 bougies uniques qui parfumeront délicatement votre intérieur.",
    image: boxBougies,
    includes: ['Cire de soja naturelle (500g)', '3 pots en verre', 'Mèches en coton pré-cirées', '3 fragrances au choix', 'Colorants naturels', 'Thermomètre', 'Guide de fabrication'],
    difficulty: 'Facile',
    duration: '2 heures',
    persons: '1-3 personnes',
  },
  {
    id: 'candle-massage',
    name: 'Box Bougie de Massage',
    slug: 'box-bougie-massage',
    category: 'Bougies',
    categorySlug: 'bougies',
    price: 44.90,
    description: 'Créez une bougie de massage aux huiles essentielles',
    longDescription: "Apprenez à fabriquer une bougie de massage fondante aux huiles essentielles. Une fois fondue, la cire se transforme en huile de massage tiède et parfumée. Un cadeau idéal ou un moment de bien-être personnel.",
    image: boxBougies,
    includes: ['Beurre de karité bio', 'Cire d\'abeille', 'Huile de coco', 'Huiles essentielles (lavande, ylang-ylang)', '2 contenants de massage', 'Mèches en coton', 'Guide et recettes'],
    difficulty: 'Moyen',
    duration: '2-3 heures',
    persons: '1-2 personnes',
  },
  {
    id: 'wine-starter',
    name: 'Box Plantation de Vigne',
    slug: 'box-plantation-vigne',
    category: 'Vin & Vigne',
    categorySlug: 'vin',
    price: 64.90,
    description: 'Plantez votre propre pied de vigne et découvrez la viticulture',
    longDescription: "Une expérience unique : plantez votre propre pied de vigne et apprenez les bases de la viticulture. Cette box contient un jeune plant de vigne et tout le nécessaire pour le cultiver avec succès, que ce soit sur un balcon ou dans un jardin.",
    image: boxVin,
    includes: ['1 jeune plant de vigne (cépage au choix)', 'Pot de culture 10L', 'Terreau spécial vigne', 'Tuteur et attaches', 'Engrais bio', 'Sécateur', 'Guide complet de viticulture'],
    difficulty: 'Moyen',
    duration: '2 heures (+ entretien saisonnier)',
    persons: '1-2 personnes',
  },
  {
    id: 'wine-tasting',
    name: 'Box Initiation Œnologie',
    slug: 'box-initiation-oenologie',
    category: 'Vin & Vigne',
    categorySlug: 'vin',
    price: 74.90,
    description: 'Découvrez l\'art de la dégustation et de la vinification',
    longDescription: "Devenez un apprenti œnologue avec cette box d'initiation complète. Apprenez à déguster le vin comme un professionnel, découvrez les cépages et réalisez votre propre assemblage. Une expérience conviviale à partager.",
    image: boxVin,
    includes: ['3 échantillons de vin (rouge, blanc, rosé)', 'Carafe de dégustation', '2 verres à vin INAO', 'Roue des arômes', 'Kit d\'assemblage miniature', 'Carnet de dégustation', 'Guide d\'œnologie illustré'],
    difficulty: 'Facile',
    duration: '2-3 heures',
    persons: '2-4 personnes',
  },
];

export const getProductsByCategory = (categorySlug: string) =>
  products.filter(p => p.categorySlug === categorySlug);

export const getProductBySlug = (slug: string) =>
  products.find(p => p.slug === slug);

export const getCategoryBySlug = (slug: string) =>
  categories.find(c => c.slug === slug);
