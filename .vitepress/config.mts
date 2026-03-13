import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CSNeko Hub",
  description: "😋😋😋",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Comments', link: '/code-comments' }
    ],

    sidebar: [
      {
        text: '代码注释', link: '/code-comments',
        items: [
          { text: 'wyf9 的集合', link: '#胡-言-乱-语-集-合' },
          { text: 'NT 的集合', link: '#新的集合' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/CSNeko' }
    ]
  }
})
