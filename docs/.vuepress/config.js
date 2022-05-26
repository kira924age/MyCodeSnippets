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
      md.use(require("markdown-it-texmath"));
    }
  },
  plugins: [
    ["vuepress-plugin-code-copy", true],
    [
      "@vuepress/google-analytics",
      {
        ga: "G-8TFTZMEEX1"
      }
    ]
  ],

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
        title: "整数論",
        collapsable: false,
        sidebarDepth: 3,
        children: ["number_theory/prime_factrization"]
      },
      {
        title: "グラフ理論",
        collapsable: false,
        sidebarDepth: 3,
        children: ["graph/traveling_salesman_problem", "graph/dijkstra"]
      },
      {
        title: "データ構造",
        collapsable: false,
        sidebarDepth: 3,
        children: ["data_structure/union_find"]
      },
      {
        title: "暗号",
        collapsable: false,
        sidebarDepth: 3,
        children: ["crypto/caesar_cipher"]
      },
      {
        title: "その他",
        collapsable: false,
        sidebarDepth: 3,
        children: ["other/shrink_coordinate"]
      }
    ]
  }
};
