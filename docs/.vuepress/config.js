module.exports = {
  locales: { "/": { lang: "ja" } },
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.11.1/katex.min.css"
      }
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        rel: "stylesheet"
      }
    ]
  ],
  markdown: {
    extendMarkdown: md => {
      md.use(require("markdown-it-katex"));
    }
  },
  plugins: [["vuepress-plugin-code-copy", true]],

  title: "My Code Snippets2",
  theme: "default-prefers-color-scheme",
  themeConfig: {
    overrideTheme: "dark",
    lastUpdated: "Last Updated",
    nav: [
      {
        text: "About",
        link: "/about"
      },
      {
        text: "GitHub",
        link: "https://github.com/kira924age/MyCodeSnippets2"
      }
    ],
    sidebar: [
      {
        title: "その他",
        collapsable: false,
        sidebarDepth: 3,
        children: ["other/shrink_coordinate"]
      }
    ]
  }
};
