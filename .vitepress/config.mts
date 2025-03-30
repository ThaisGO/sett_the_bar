import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sett's Bar",
  description: "Bar",
  base: '/',
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Receitas', link: '/recipes/cachaca/caipirinha' },
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
              { 
                text: 'Cachaça', 
                collapsed: true,
                items: [ 
                  {text: 'Caipirinha', link: '/recipes/cachaca/caipirinha'}
                ]
              },

              { text: 'Vodka', 
                collapsed: true,
                items: [ {text: 'Lagoa azul', link: '/recipes/vodka/lagoazul'}]
              },
              { text: 'Rum', 
                collapsed: true,
                items: [ {text: 'Mojito', link: '/recipes/rum/mojito'}]
              },
            ],
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
      message: 'Release under <a href="https://github.com">Me</a>',
      copyright: 'Copy 2025 <a href="https://github.com">Me</a>'
    }
    
  }
})
