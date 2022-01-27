import user from "../data";
import { colorThemes } from "./appData";

export const personalData = {
	name: user.name,
	email: user.email,
	title: `${user.name}'s Portfolio`,
};

export const header = {
	logoName: "HOME",
	navItems: [
		{
			name: "WORK",
			link: "/#work",
		},
		{
			name: "CONTACT",
			link: `mailto:${personalData.email}`,
		},
	],
};

export const front_face = {
	about: user.about,
	intro: [
		{
			name: "Skills",
			type: "text",
			contents: user.accomplishments,
		},
		{
			name: "Social Links",
			type: "link",
			contents: user.socialLink,
		},
		{
			name: "Experience",
			type: "text",
			contents: user.currentProfession,
		},
	],
};

// sample workExperience
// [{
// 	infoData: {
// 		Company: ["Apple"],
// 		Description: [
// 			"Looking to improve the overall quality of the product through a design thinking approach, as well as conducting Usability sessions to ensure the product appeals to our users.",
// 		],
// 		"My Objectives": ["User Testing", "Accessibility improvements"],
// 	},

// 	link: "/",
// 	image: {
// 		src: "/images/apple.png",
// 		alt: "osenorth",
// 	},
// },]

export const workExperience = user.workExperience.map((experience) => ({
	infoData: {
		Project: [experience.company],
		Description: [experience.description],
		Role: experience.objectives,
	},
	link: experience?.link ?? "",
	image: {
		src: experience.image,
		alt: experience.company,
	},
}));

export const footerInfoData = [
	{
		name: "Ways to contact me",
		type: "copy",
		contents: user.contactDetails,
	},
	{
		name: "Social Links",
		type: "link",
		contents: user.socialLink,
	},
	{
		name: "what am i upto right now",
		type: "text",
		contents: user.currentStatus,
	},
];

export const theme = colorThemes.light;
