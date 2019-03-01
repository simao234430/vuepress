module.exports = {
  port:8092,
  title: '肖总教java',
  serviceWorker: {},
  markdown: {
    lineNumbers: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'path/to/some/dir'
      }
    }
  },
  themeConfig: {
    // repo: 'umijs/umi',
    lastUpdated: 'Last Updated',
    editLinks: true,
    docsDir: 'docs',
    serviceWorker: {
      updatePopup: {
        message: 'New content is available.',
        buttonText: 'Refresh',
      },
    },
    nav: [
        // { text: 'Home', link: '/' },
        { text: 'java', link: '/java/' },
        // { text: 'External', link: 'https://google.com' },
      ],
    sidebar:       
    {
        '/java/': [
            {
              title: 'java',
              collapsable: false,
              children: [
                '',
                'java_intro',
                'getting-started',
                'create-umi-app',
                'examples',
                'app-structure',
                'router',
                'navigate-between-pages',
                'config',
                'html-template',
                'test'
              ],
            },
            {
              title: 'Advanced',
              collapsable: false,
              children: [
                'mock-data',
                'with-dva',
                'load-on-demand',
                'runtime-config',
                'block',
                'deploy',
              ],
            },
            {
              title: 'Reference',
              collapsable: false,
              children: ['faq', 'migration', 'env-variables'],
            },
          ],

    },
},
};
