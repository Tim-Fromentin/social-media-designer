# Testimonial Generator

Un outil open source rapide et intuitif qui permet aux créateurs de contenu, indépendants et développeurs de convertir leurs avis clients en visuels élégants et prêts à être partagés sur les réseaux sociaux (LinkedIn, Twitter, Instagram).

### Tester le [Social Media Designer](https://social-media-designer.vercel.app/)

---

## Fonctionnalités

* **Éditeur en direct** : Personnalisation instantanée du nom, du message et de la note (étoiles).
* **Import d'avatar** : Intégration facile d'une photo de profil via URL.
* **Aperçu en temps réel** : Rendu visuel fidèle de la carte d'avis sur un fond stylisé.
* **Export haute définition** : Téléchargement direct du visuel au format image (PNG).
* **Export HTML & Tailwind CSS** : Copie instantanée du code JSX/HTML stylisé pour une intégration directe dans une landing page.
* **Interface fluide** : Panneau de configuration dédié (*split-screen*) avec retour visuel immédiat.

---

## Stack Technique

* **Framework** : [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
* **Build Tool** : [Vite](https://vitejs.dev/)
* **Styling** : [Tailwind CSS v4](https://tailwindcss.com/)
* **Composants UI & Icônes** : [Lucide React](https://lucide.dev/)
* **Génération d'images** : [modern-screenshot](https://www.npmjs.com/package/modern-screenshot)

---

## Installation et Lancement

### Prérequis
* [Node.js](https://nodejs.org/) (version 18 ou supérieure)
* npm ou pnpm

### Étapes

1. **Cloner le repository**
   ```bash
   git clone [https://github.com/Tim-Fromentin/social-media-designer](https://github.com/Tim-Fromentin/social-media-designer)

   cd .\testimonial\front\app\
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```
3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```
---

## Architecture du Projet

```
└── testimonial
    ├── back
    ├── front
    │   └── app
    │       ├── public
    │       │   ├── favicon.svg
    │       │   └── icons.svg
    │       ├── src
    │       │   ├── components
    │       │   │   ├── ButtonDropdown.tsx
    │       │   │   ├── Card.tsx
    │       │   │   ├── Modal.tsx
    │       │   │   ├── Sidebar.tsx
    │       │   │   ├── Slider.tsx
    │       │   │   └── Testimonial.tsx
    │       │   ├── types
    │       │   │   └── sliders.ts
    │       │   ├── App.tsx
    │       │   ├── index.css
    │       │   └── main.tsx
    │       └── README.md
    └── README.md
```