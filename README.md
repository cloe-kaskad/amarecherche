# amarecherche.fr · Blocages & Intuition

Site statique construit avec [Astro](https://astro.build), déployé sur Netlify depuis ce dépôt.

## Modifier le site
- Textes des pages : `src/pages/*.astro`
- Tarifs, lien de RDV, email, mentions légales : `src/site.ts` (un seul endroit)
- FAQ (affichée + schema FAQPage) : `src/data/faq.ts`
- Articles : un fichier Markdown dans `src/content/articles/` (titre, description, date, auteur en en-tête)
- Images : `public/images/`
- Charte : `src/styles/global.css`

## En local
```
npm install
npm run dev
```

## Déploiement
Chaque `git push` sur `main` déclenche un build Netlify (`npm run build`, dossier `dist`).
Le formulaire « Recevoir la présentation » utilise Netlify Forms (onglet Forms du site Netlify).
