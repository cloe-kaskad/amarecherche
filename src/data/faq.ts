export type Faq = { q: string; a: string; tags: string[] };

// Une question = un H3 et une entrée FAQPage (schema). Rédigé en "réponse d'abord" pour Google et les IA.
export const FAQ: Faq[] = [
  {
    q: "Qu'est-ce que Blocages & Intuition ?",
    a: "Blocages & Intuition est un accompagnement individuel et des ateliers pour des femmes qui réussissent mais à qui cela coûte trop : doute chronique, sur-adaptation, intuition mise de côté. Il est conduit par Cloé Dana, entrepreneure depuis plus de dix ans, et éclairé par Émilien Dereclenne, docteur en philosophie des sciences cognitives formé en psychologie du développement. Le travail s'appuie sur la psychologie, les neurosciences, la philosophie et le corps. Il se fait en présentiel, à Paris.",
    tags: ['general', 'home'],
  },
  {
    q: "Est-ce une thérapie ou du coaching ?",
    a: "Ni l'un ni l'autre. Ce n'est pas une thérapie : nous ne soignons pas, et si quelque chose relève du soin, nous le disons. Ce n'est pas non plus un coaching de performance qui chercherait à optimiser la personne. Nous avons plus de profondeur qu'un coaching classique, et une connaissance plus directe du monde professionnel qu'une thérapie, qui traite ces sujets de façon périphérique.",
    tags: ['general', 'home'],
  },
  {
    q: "Comment se déroule l'accompagnement individuel en entreprise ?",
    a: "Un parcours de six mois en général, quatre mois minimum, avec deux séances d'1h30 par mois en présentiel, dans l'entreprise ou à Kaskad République (Paris 10e). Entre les séances : des exercices à vivre dans la vraie vie, des lectures choisies, et Cloé joignable sur WhatsApp. Chaque séance est relue par Émilien, qui apporte une analyse de fond. Un cadrage à trois (la dirigeante, son entreprise, Cloé) ouvre et clôt le parcours, sans jamais partager le contenu des séances.",
    tags: ['entreprises'],
  },
  {
    q: "Combien coûte l'accompagnement individuel ?",
    a: "600 € HT par mois pour une dirigeante ou cadre clé financée par son entreprise, séances, exercices, lectures et disponibilité WhatsApp compris, sur un parcours de quatre à six mois. À titre personnel, l'accompagnement est proposé à 400 € par mois, sans engagement. Un premier échange de 30 minutes en visio est offert.",
    tags: ['entreprises', 'particulieres', 'home'],
  },
  {
    q: "Que contient un atelier en entreprise ?",
    a: "Un atelier de deux heures pour un groupe de dix personnes maximum, autour d'un thème choisi avec vous : la permission, la conformité, le syndrome de l'imposteur, l'intuition dans la décision, le contrôle, l'ambition. Il alterne apports (psychologie, neurosciences, philosophie), mise en mots et pratiques corporelles. Il se tient chez vous ou à Kaskad République, sans supplément. À partir de 1 500 € HT l'atelier, 3 600 € HT le cycle de trois.",
    tags: ['ateliers', 'home'],
  },
  {
    q: "Pourquoi un philosophe dans un accompagnement professionnel ?",
    a: "Pas pour faire de la théorie. Nous nous appuyons sur une idée de Spinoza : ce qui compte, c'est de savoir ce qui augmente votre puissance d'agir et ce qui la diminue. Concrètement, dans quelles situations vous vous sentez plus capable et plus vous-même, et dans lesquelles vous vous videz, même quand tout va bien sur le papier. Émilien Dereclenne relit chaque séance avec ce double regard philosophique et psychologique, et en tire les points précis sur lesquels déplacer l'effort.",
    tags: ['methode', 'home'],
  },
  {
    q: "Qu'est-ce que la puissance d'agir ?",
    a: "Ce n'est pas la force ni la réussite. C'est la capacité à agir à partir de soi. On peut être très performante et avoir une puissance d'agir faible, parce qu'on agit pour tenir un rôle, pour être à sa place ou pour ne pas déranger. Le travail consiste à repérer ce qui l'augmente et ce qui la diminue, puis à agir depuis là.",
    tags: ['methode'],
  },
  {
    q: "Travaillez-vous sur le syndrome de l'imposteur ?",
    a: "Oui, c'est au cœur de presque tous les accompagnements. Nous ne le traitons pas comme un manque de confiance à corriger, mais comme une adaptation intelligente à des milieux dont les règles n'ont pas été écrites pour vous. Rendre ces règles visibles, puis réentraîner la confiance dans ses propres signaux, change le rapport au doute plus durablement qu'une liste de techniques.",
    tags: ['methode', 'entreprises'],
  },
  {
    q: "Le contenu des séances est-il confidentiel vis-à-vis de l'entreprise ?",
    a: "Oui, strictement. L'entreprise participe au cadrage de départ et au bilan de fin, qui portent sur les objectifs et la dynamique du parcours. Le contenu des séances, les transcripts et les notes d'analyse restent entre la personne accompagnée, Cloé et Émilien.",
    tags: ['entreprises'],
  },
  {
    q: "Où se déroulent les séances ?",
    a: "En présentiel uniquement, à Paris : dans vos locaux, ou à Kaskad République, un lieu de travail et d'accueil cofondé par Cloé dans le 10e arrondissement. Les ateliers se tiennent aussi chez vous ou à Kaskad République.",
    tags: ['general', 'entreprises', 'ateliers'],
  },
  {
    q: "Comment démarrer ?",
    a: "Réservez un échange de 30 minutes en visio. Vous nous dites où vous en êtes et ce que vous cherchez, pour vous ou pour une personne de votre équipe. Nous vous disons si ce programme est fait pour cela, et comment nous travaillerions. Sans engagement.",
    tags: ['general', 'home'],
  },
];

export function faqSchema(items: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
