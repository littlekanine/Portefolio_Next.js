// app/layout.js
import '../abstract/styles.scss' // Importez les styles globaux si vous en avez

export const metadata = {
  title: 'Elia Kopff DevWeb',
  description: 'Web site created using create-react-app',
  // Ajoutez d'autres métadonnées ici
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo192.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Web site created using create-react-app" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        {/* <link rel="manifest" href="/manifest.json" /> */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
        <meta property="og:title" content="Elia Kopff Develloper Web" />
        <meta property="og:description" content="My portefolio" />
        <meta property="og:image" content="/mwa.jpg" />
        <meta property="og:url" content="https://eliakopff_devweb.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@K_D3828" />
        <meta name="twitter:title" content="Mon Portefolio !" />
        <meta name="twitter:description" content="Acceder à mon Portefolio !" />
        <meta name="twitter:image" content="/mwa.jpg" />
      </head>
      <body>
        <noscript>
          <p>You need to enable JavaScript to run this app.</p>
          <p>If you are using a screen reader or other assistive technology, please enable JavaScript in your browser settings and reload the page.</p>
        </noscript>
        {children}
      </body>
    </html>
  );
}
