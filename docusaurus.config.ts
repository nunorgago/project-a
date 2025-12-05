
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { themes as prismThemes } from 'prism-react-renderer';
// import path from 'path';

const config: Config = {
    title: 'Project A',
    tagline: 'Project A Documentation',
    favicon: 'img/favicon.ico',

    url: 'https://nunorgago.github.io',
    baseUrl: '/project-a',

    onBrokenLinks: 'throw',

    organizationName: 'nunorgago',
    projectName: 'Project A',

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    /* Your site config here */

    presets: [
        [
            'classic',
            {
                /* Your preset config here */
                docs: {
                    path: './docs',
                    routeBasePath: '/',
                    sidebarPath: './sidebar.ts',
                    editUrl: 'https://github.com/nunorgago/project-a/edit/main/',
                },
                blog: false,
                pages: false
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        /* Your theme config here */
        image: 'public/favicon.ico',
        navbar: {
            title: 'Project A',
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'docsSidebar',
                    position: 'left',
                    label: 'Documentation',
                },
            ],
        },
        footer: {
            style: 'dark',
            copyright: `Copyright © ${new Date().getFullYear()} Nuno Gago`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;