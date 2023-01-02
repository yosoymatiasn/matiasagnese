import {
	AiFillHome,
	AiFillInstagram,
	AiFillGithub,
	AiFillLinkedin,
	AiFillFolderOpen,
} from "react-icons/ai";
import { FaNewspaper, FaGlobe } from "react-icons/fa";
import { BsStack, BsFillPencilFill } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";

export function ResourceIcon() {
	return <AiFillFolderOpen />;
}
export function InstagramIcon() {
	return <AiFillInstagram />;
}
export function LinkedinIcon() {
	return <AiFillLinkedin />;
}
export function GitHubIcon() {
	return <AiFillGithub />;
}
export function ExternalLinkIcon() {
	return <FiArrowUpRight />;
}
export function WebsiteIcon() {
	return <FaGlobe />;
}
export function HomeIcon() {
	return <AiFillHome />;
}
export function BlogIcon() {
	return <BsFillPencilFill />;
}
export function StackIcon() {
	return <BsStack />;
}
