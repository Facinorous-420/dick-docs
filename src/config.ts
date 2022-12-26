export const SITE = {
	title: 'DICK',
	description: 'Directly Integrated Client for Keisters',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://raw.githubusercontent.com/Facinorous-420/dick/master/src/public/images/profile.png',
		alt: 'DICK Logo'
	},
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
	title: string;
	description: string;
	layout: string;
	image?: { src: string; alt: string };
	dir?: 'ltr' | 'rtl';
	ogLocale?: string;
	lang?: string;
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;

export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/Facinorous-420/dick-docs/tree/main`;

export const COMMUNITY_INVITE_URL = `https://discord.gg/xhZxFjEk8E`;

export const GITHUB_URL = `https://github.com/Facinorous-420/dick`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: '',
	appId: '',
	apiKey: '',
};

export type SidebarLink = { text: string; link?: string, links?: SidebarLink[] };

export type Sidebar = Record<
	typeof KNOWN_LANGUAGE_CODES[number],
	Record<string, SidebarLink[]>
>;

export const SIDEBAR: Sidebar = {
	en: {
		'Getting Started': [
			{ text: 'Home', link: 'dick-docs/en/' },
            { text: 'Production', links: [
                { text: 'Source', link: 'dick-docs/en/installation/production/source' },
                { text: 'Docker', link: 'dick-docs/en/installation/production/docker' },
            ]},
            { text: 'Development', links: [
                { text: 'Source', link: 'dick-docs/en/installation/development/source' }
            ]},

		],
		'Configuration': [
            { text: 'White Labeling', link: 'dick-docs/en/configs/whitelabel' }
        ],
        'Features': [
            { text: 'File Manager', link: 'dick-docs/en/features/filemanager' },
            { text: 'Config Generator', link: 'dick-docs/en/features/configgen' },
            { text: 'Admin Panel', link: 'dick-docs/en/features/adminpanel' },
            { text: 'User Management', link: 'dick-docs/en/features/users' },
			{ text: 'File Manager', link: 'dick-docs/en/features/filemanager' },
			{ text: 'hCaptcha', link: 'dick-docs/en/features/hcaptcha' }
        ],
		'More': [
            { text: 'Troubleshooting', link: 'dick-docs/en/more/troubleshooting' },
            { text: 'Changelog', link: 'dick-docs/en/more/changelog' }
        ],
	},
};
