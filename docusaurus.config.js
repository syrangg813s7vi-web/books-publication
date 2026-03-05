module.exports = {
  title: '生产力书籍',
  tagline: '系统化学习方法与实践',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://syrangg813s7vi-web.github.io',
  // Use project page baseUrl for GitHub Pages deployment
  baseUrl: '/books-publication/',

  // GitHub Pages deployment config.
  // If you aren't using GitHub Pages, you don't need these.
  organizationName: 'syrangg813s7vi-web',
  projectName: 'books-publication',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },
  trailingSlash: false,

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/syrangg813s7vi-web/books-publication/tree/main/',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '生产力书籍',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'thomasFrankSidebar',
            position: 'left',
            label: 'Thomas Frank Book',
          },
          {
            type: 'docSidebar',
            sidebarId: 'feelGoodSidebar',
            position: 'left',
            label: 'Feel-Good Productivity',
          },
          {
            type: 'docSidebar',
            sidebarId: 'mattDavellaSidebar',
            position: 'left',
            label: "Matt D'Avella Subtitles Book",
          },
          {
            href: 'https://github.com/syrangg813s7vi-web/books-publication',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '书籍',
            items: [
              {
                label: 'Thomas Frank Book',
                to: '/docs/thomas-frank/intro',
              },
              {
                label: 'Feel-Good Productivity',
                to: '/docs/feel-good/intro',
              },
              {
                label: "Matt D'Avella Subtitles Book",
                to: '/docs/matt-davella/intro',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/syrangg813s7vi-web/books-publication',
              },
            ],
          },
          {
            title: '关于',
            items: [
              {
                label: '项目简介',
                to: '/docs/intro',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 生产力书籍. Built with Docusaurus.`,
      },
      prism: {
        additionalLanguages: ['bash', 'python', 'java'],
      },
    }),
};
