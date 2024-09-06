// "use client"; // Indique que ce fichier doit être exécuté côté client

// import { useEffect, useState } from 'react';
// import { targetElements as staticTargetElements, defaultProps } from '../app/data/scrollRevealConfig';
// import ScrollReveal from 'scrollreveal';

// // Hook personnalisé pour gérer ScrollReveal
// export default function useScrollReveal() {
//   const [targetElements, setTargetElements] = useState(staticTargetElements);

//   useEffect(() => {
//     // Vérifie si nous sommes dans un environnement client (window n'existe pas côté serveur)
//     if (typeof window === 'undefined') return;

//     const getOrigin = () => (window.innerWidth > 768 ? 'left' : 'bottom');

//     // Met à jour les éléments de cible avec l'origine de l'animation en fonction de la largeur de l'écran
//     const updatedTargetElements = staticTargetElements.map((element) => ({
//       ...element,
//       animation: {
//         ...element.animation,
//         origin: getOrigin(),
//       },
//     }));

//     setTargetElements(updatedTargetElements);

//     const sr = ScrollReveal({ reset: false });

//     // Applique ScrollReveal à chaque élément
//     const applyScrollReveal = () => {
//       updatedTargetElements.forEach(({ element, animation }) => {
//         sr.reveal(element, { ...defaultProps, ...animation });
//       });
//     };

//     applyScrollReveal();

//     const handleResize = () => {
//       sr.clean(updatedTargetElements.map(({ element }) => element));
//       applyScrollReveal();
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []); // Utilise `[]` pour n'exécuter qu'une fois après le montage du composant
// }
