module.exports = {
  locales: {
    "/": {
      lang: "ja"
    }
  },
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
  title: "My Code Snippets",
  themeConfig: {
    lastUpdated: "Last Updated",
    nav: [
      { text: "Python", link: "/python/" },
      { text: "C++", link: "/cpp/" },
      {
        text: "GitHub",
        link: "https://github.com/kira924age/my-code-snippets2"
      }
    ],
    sidebar: {
      "/python/": [
        {
          title: "整数論",
          collapsable: false,
          sidebarDepth: 3,
          children: ["trial_division"]
        }
      ],
      "/cpp/": [
        {
          title: "整数論",
          collapsable: false,
          sidebarDepth: 3,
          children: ["trial_division"]
        }
      ],
      "/": [""]
    }
  }
};
