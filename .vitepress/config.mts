import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sett's Bar",
  description: "Bar",
  base: '/docs',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Receitas', link: '/recipies/caipirinha' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },

          {
            text: 'Receitas',
            collapsed: false,
            items: [
              { text: 'Caipirinha', link: '/recipies/caipirinha'},
              { text: 'Lagoa Azul', link: '/recipies/lagoazul'},
              { text: 'Sex on the Beach', link: '/recipies/sexonthebeach'},
              { text: 'Mojito', link: '/recipies/mojito'},
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Release under <a href="https://github.com>Me</a>',
      copyright: 'Copy 2025 <a href="https://github.com>Me</a>'
    }
  }
})
