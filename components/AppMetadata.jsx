const author = "Ilham Wahiduddin";
const description =
	"Fullstack developer from Indonesia, who loves to develop beautiful websites, mobile app applications, customer relationship management or code from scratch using Laravel, Next.js, and Kotlin";
const url = "https://hams-wahid.vercel.app";
export const AppMetadata = {
	metadataBase: new URL("https://hams-wahid.vercel.app/"),
	title: {
		default: `Portfolio | ${author}`,
		template: `%s | ${author}`
	},
	description: description,
	icons: {
		icon: "/favicon.ico"
	},
	keywords: [
		"Ilham Wahiduddin",
		"Ilham Wahiduddin - Fullstack developer",
		"Fullstack developer",
		"Mobile developer",
		"Backend developer",
	],
	creator: author,
	authors: [{ name: author, url: url }],
	colorScheme: "dark",
	openGraph: {
		title: `${author} | Portfolio`,
		description: description,
		url: url,
		siteName: `${author} | Portfolio`,
		images: [
			{
				url: "/screenshot.webp",
				width: 800,
				height: 600,
				alt: "My personal portfolio website"
			},
			{
				url: "/screenshot.webp",
				width: 1800,
				height: 1600,
				alt: "My personal portfolio website"
			}
		],
		locale: "en-US",
		type: "website"
	}
};
