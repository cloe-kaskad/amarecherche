// Paramètres globaux du site. À modifier ici, jamais dans les pages.
export const SITE = {
  name: 'Blocages & Intuition',
  url: 'https://amarecherche.fr',
  gaId: 'G-N18EEMVZ68',
  gtmId: 'GTM-59LD69J6', // conteneur existant ; vide = pas de GTM
  // À VÉRIFIER : adresse email de contact affichée sur le site
  email: 'cloe@amarecherche.fr',
  // À COMPLÉTER : URL de la page LinkedIn de Cloé et de la page entreprise B&I
  linkedinCloe: 'https://www.linkedin.com/in/cloedana/',
  linkedinCompany: '',
  // Mentions légales
  legal: {
    company: 'ETSA (SASU)',
    address: '1 rue des Saussois, 77320 Frétoy, France',
    siren: 'À COMPLÉTER',
    director: 'Cloé Dana',
  },
};

// Lien de prise de rendez-vous (Google Calendar). Un seul endroit à changer.
export const CALENDAR_URL = 'https://calendar.app.google/8jPU7tM5Dj1u2Yjp8';

export const PRICING = {
  entreprise: { monthly: 600, minMonths: 4, standardMonths: 6 },
  atelier: { single: 1500, cycle3: 3600 },
  perso: { monthly: 400 },
};
