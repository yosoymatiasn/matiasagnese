import { defaultSEO, extendSEO } from "./seo";

const routes = {
	home: {
		label: "Home",
		path: "/",
		seo: defaultSEO,
	},
	about: {
		label: "About",
		path: "/about",
		seo: extendSEO({
			title: "About",
			url: "about",
		}),
	},
	writing: {
		label: "Writing",
		path: "/writing",
		seo: extendSEO({
			title: "Writing",
			description: "Thinking out loud about software design and development.",
			image: "og/writing.png",
			url: "writing",
		}),
	},
	ama: {
		label: "AMA",
		path: "/ama",
		seo: extendSEO({
			title: "AMA",
			description: "Ask me anything.",
			image: "og/ama.png",
			url: "ama",
		}),
	},
};

export default routes;
