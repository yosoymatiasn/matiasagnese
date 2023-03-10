export const baseUrl =
	process.env.NODE_ENV === "production" ? "https://matiasagnese.com" : "";

export const baseEmail = "matiasagnese.dev@gmail.com";

export const defaultSEO = {
	title: "Matias Agnese",
	description: "Web designer, developer, and actor, living in New York City",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: baseUrl,
		site_name: "Matias Agnese",
		images: [
			{
				url: `${baseUrl}/static/og/default.png`,
				alt: "Matias Agnese",
			},
		],
	},
};

interface SEOProps {
	title?: string;
	description?: string;
	image?: string;
	url?: string;
}

export function extendSEO(options: SEOProps) {
	const images = options.image
		? [{ url: `${baseUrl}/static/${options.image}` }]
		: defaultSEO.openGraph.images;

	return {
		...defaultSEO,
		...options,
		url: `${baseUrl}/${options.url}`,
		openGraph: {
			...defaultSEO.openGraph,
			images,
			url: `${baseUrl}/${options.url}`,
		},
	};
}
