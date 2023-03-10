import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { MapPin } from "react-feather";

import Button from "~/components/Button";
import { Detail } from "~/components/ListDetail/Detail";
import { TitleBar } from "~/components/ListDetail/TitleBar";

import { ListDetailView } from "~/components/Layouts";

export default function Home() {
	return <ListDetailView list={null} hasDetail detail={<Intro />} />;
}

function SectionTitle(props) {
	return (
		<h4
			className="col-span-2 pt-8 text-lg font-extrabold text-black dark:text-white md:pt-0 md:text-right md:text-base md:font-normal md:text-opacity-40"
			{...props}
		/>
	);
}

function SectionContent(props) {
	return <div className="col-span-10" {...props} />;
}

interface TableRowProps {
	href: string;
	title: string;
	date: string;
	subtitle?: string;
}

function TableRow({ href, title, subtitle, date }: TableRowProps) {
	return (
		<a
			target="_blank"
			rel="noopener noreferrer"
			href={href}
			className="flex items-center space-x-4 group"
		>
			<strong className="flex-none font-medium text-gray-1000 group-hover:text-blue-600 group-hover:underline dark:text-gray-100 dark:group-hover:text-blue-500">
				{title}
			</strong>
			<span className="w-full border-t border-gray-300 border-dashed shrink dark:border-gray-800" />
			{subtitle && <span className="flex-none text-tertiary">{subtitle}</span>}
			{date && (
				<span className="flex-none font-mono text-quaternary">{date}</span>
			)}
		</a>
	);
}

function SectionContainer(props) {
	return (
		<div
			className="grid items-start grid-cols-1 gap-6 md:grid-cols-12"
			{...props}
		/>
	);
}

const workHistory = [
	{
		href: "https://campsite.design",
		title: "Campsite",
		subtitle: "Founder",
		date: "2022—\u00a0\u00a0",
	},
];

function Intro() {
	const scrollContainerRef = React.useRef(null);
	const titleRef = React.useRef(null);

	return (
		<Detail.Container data-cy="home-intro" ref={scrollContainerRef}>
			<TitleBar
				magicTitle
				titleRef={titleRef}
				scrollContainerRef={scrollContainerRef}
				title="Home"
			/>

			{/* Keep this div to trigger the magic scroll */}
			<div className="p-4" ref={titleRef} />

			<Detail.ContentContainer>
				<div className="pb-24 space-y-8 md:space-y-16">
					<SectionContainer>
						<SectionTitle />
						<SectionContent>
							<Image
								src="/static/img/posing.png"
								alt="matias agnese"
								width={500}
								height={500}
							/>
							<div className="prose text-primary">
								<p>Hey, I&rsquo;m Matias. I&rsquo;m a designer.</p>
							</div>
							<div className="flex pt-6">
								<Button href="">View changelog</Button>
							</div>
						</SectionContent>
					</SectionContainer>

					<SectionContainer>
						<SectionTitle>Where</SectionTitle>
						<SectionContent>
							<Image
								priority
								src="/static/img/hk.png"
								width={800}
								height={800}
								className="rounded-2xl"
								quality={100}
								alt="Map of San Francisco with blue location dot in the middle"
							/>
							<p className="flex items-center justify-end pt-2 space-x-2 text-sm text-quaternary md:text-right">
								<MapPin size={12} />
								<span>Hells Kitchen, NYC</span>
							</p>
						</SectionContent>
					</SectionContainer>

					<SectionContainer>
						<SectionTitle>Work</SectionTitle>
						<SectionContent>
							<div className="flex flex-col space-y-3">
								{workHistory.map((job) => (
									<TableRow
										href={job.href}
										title={job.title}
										subtitle={job.subtitle}
										date={job.date}
										key={job.href}
									/>
								))}
							</div>
						</SectionContent>
					</SectionContainer>
				</div>
			</Detail.ContentContainer>
		</Detail.Container>
	);
}
