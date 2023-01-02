import { useRouter } from "next/router";
import { Plus } from "react-feather";

import { GhostButton } from "~/components/Button";
import {
	BlogIcon,
	ExternalLinkIcon,
	GitHubIcon,
	HomeIcon,
	InstagramIcon,
	LinkedinIcon,
	ResourceIcon,
	StackIcon,
	WebsiteIcon,
} from "../Icons";

import { NavigationLink } from "./NavigationLink";

export function SidebarNavigation() {
	const router = useRouter();
	const sections = [
		{
			label: null,
			items: [
				{
					href: "/",
					label: "Home",
					icon: HomeIcon,
					trailingAccessory: null,
					isActive: router.asPath === "/",
					trailingAction: null,
					isExternal: false,
				},

				{
					href: "/blog",
					label: "Blog",
					icon: BlogIcon,
					trailingAccessory: null,
					isActive: router.asPath.indexOf("/writing") >= 0,
					trailingAction: null,
					isExternal: false,
				},
			],
		},
		{
			label: "Me",
			items: [
				{
					href: "/ama",
					label: "Website I like",
					icon: WebsiteIcon,
					trailingAccessory: null,
					isActive:
						router.asPath.indexOf("/ama") >= 0 &&
						!router.asPath.startsWith("/ama/pending"),
					trailingAction: null,
					isExternal: false,
				},

				{
					href: "/stack",
					label: "Stack",
					icon: StackIcon,
					trailingAccessory: null,
					isActive: router.asPath.indexOf("/stack") >= 0,
					trailingAction: null,
					isExternal: false,
				},
			],
		},
		{
			label: "Projects",
			items: [
				{
					href: "/hn",
					label: "Hacker News",
					icon: ResourceIcon,
					trailingAccessory: null,
					isActive: router.asPath.indexOf("/hn") >= 0,
					trailingAction: null,
					isExternal: false,
				},

				{
					href: "/app-dissection",
					label: "App Dissection",
					icon: ResourceIcon,
					trailingAccessory: null,
					isActive: router.asPath.indexOf("/app-dissection") >= 0,
					trailingAction: null,
					isExternal: false,
				},
			],
		},
		{
			label: "Online",
			items: [
				{
					href: "https://instagram.com/matiasagnese",
					label: "Instagram",
					icon: InstagramIcon,
					trailingAccessory: ExternalLinkIcon,
					isActive: false,
					trailingAction: null,
					isExternal: true,
				},

				{
					href: "https://github.com/yosoymatiasn",
					label: "GitHub",
					icon: GitHubIcon,
					trailingAccessory: ExternalLinkIcon,
					isActive: false,
					trailingAction: null,
					isExternal: true,
				},
				{
					href: "https://linkedin.com/in/matias-agnese",
					label: "Linkedin",
					icon: LinkedinIcon,
					trailingAccessory: ExternalLinkIcon,
					isActive: false,
					trailingAction: null,
					isExternal: true,
				},
			],
		},
	];

	return (
		<div className="flex-1 px-3 py-3 space-y-1">
			{sections.map((section, i) => {
				return (
					<ul key={i} className="space-y-1">
						{section.label && (
							<h4
								key={i}
								className="px-2 pt-5 pb-2 text-xs font-semibold text-gray-1000 text-opacity-40 dark:text-white"
							>
								{section.label}
							</h4>
						)}
						{section.items.map((item, j) => (
							<NavigationLink key={j} link={item} />
						))}
					</ul>
				);
			})}
		</div>
	);
}
