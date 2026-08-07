# Comment mettre ce site en ligne (webinaire)

Même méthode que pour ton site de formation.

## Option 1 — Vercel via GitHub (recommandé)

1. Va sur https://github.com et connecte-toi.
2. Clique "New" → crée un repository, par exemple `Webinaire-Excel-Power-BI`.
3. Clique "uploading an existing file".
4. Glisse TOUS les fichiers et dossiers de ce zip (garde la structure :
   `src/`, `public/`, `index.html`, `package.json`, `vite.config.js`).
5. "Commit changes".
6. Va sur https://vercel.com, connecte-toi avec GitHub.
7. "Add New… → Project", choisis ce repository, clique "Deploy".
8. Après 1-2 minutes, tu obtiens un lien du type
   `webinaire-excel-power-bi.vercel.app` — c'est le lien à partager pour
   les inscriptions au webinaire.

## Formulaire d'inscription

Déjà connecté à Formspree (`https://formspree.io/f/xnjkerya`). Chaque
inscription arrive directement dans ton compte Formspree (et ta boîte mail).
Fais un test toi-même après la mise en ligne.

## Photo formateur

Ta photo est déjà incluse dans `public/formateur.jpg` — rien à faire.
