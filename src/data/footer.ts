import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    socials: ISocials;
} = {
    subheading: "Empowering job seekers with fast, focused tools to take control of their search.",
    quickLinks: [
        {
            text: "Features",
            url: "#features"
        },
        {
            text: "FAQ",
            url: "#faq"
        },
    ],
    email: 'support@roleradar.net',
    socials: {
        github: 'https://github.com/jcari-dev/roleradar-landing',
        // x: 'https://twitter.com/x',
        // twitter: 'https://twitter.com/Twitter',
        // facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        linkedin: 'https://www.linkedin.com/in/jorge-caridad/',
        // threads: 'https://www.threads.net',
        // instagram: 'https://www.instagram.com',
    }
}
