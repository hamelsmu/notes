// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Hamel's Notes",
  tagline: "Notes from Hamel",
  url: 'https://notes.hamel.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'hamelsmu', // Usually your GitHub org/user name.
  projectName: 'notes', // Usually your repo name.
  plugins: [],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.dev/hamelsmu/notes/blob/master/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark', 
        respectPrefersColorScheme: true,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'RAKQU13XWU',
        // Public API key: it is safe to commit it
        apiKey: 'bf306a105114621a6cd0a3b66a0d721d',
        indexName: 'hamel',
        searchPagePath: 'search',
      },
      navbar: {
        title: 'Notes',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Get In Touch',
            items: [
              {
                label: 'Twitter',
                to: 'https://twitter.com/HamelHusain',
              },
              {
                label: 'About Hamel',
                to: 'https://hamel.dev',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hamel Husain`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
