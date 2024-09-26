import { siteMetadata } from './metadata/metadata';
import '../abstract/styles.scss';

export const metadata = {
	title: 'Elia Kopff DevWeb',
	description: 'Web site created using create-react-app',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<link rel="icon" href="/logo192.png" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
				<meta name="description" content={siteMetadata.description} />
				<link rel="apple-touch-icon" href="/logo192.png" />
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
				<link href="https://fonts.googleapis.com/css2?family=Anton&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
				<meta property="og:title" content={siteMetadata.openGraph.title} />
				<meta property="og:description" content={siteMetadata.openGraph.description} />
				<meta property="og:image" content={siteMetadata.openGraph.image} />
				<meta property="og:url" content={siteMetadata.openGraph.url} />
				<meta name="twitter:card" content={siteMetadata.twitter.card} />
				<meta name="twitter:site" content={siteMetadata.twitter.site} />
				<meta name="twitter:title" content={siteMetadata.twitter.title} />
				<meta name="twitter:description" content={siteMetadata.twitter.description} />
				<meta name="twitter:image" content={siteMetadata.twitter.image} />
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
