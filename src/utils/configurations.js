module.exports = {
  "websiteName": "WriteDocs Documentation",
  "description": "Explore our documentation to learn how to create beautiful, scalable developer portals with WriteDocs!",
  "images": {
    "logo": "media/logo.png",
    "favicon": "media/favicon.ico"
  },
  "languages": [
    "en"
  ],
  "styles": {
    "mainColor": "#0029F5",
    "darkModeMainColor": "#F0F0FF",
    "navbarColor": "#000621",
    "navbarDarkModeColor": "#000621",
    "backgroundDarkModeColor": "#000000",
    "pagination": true,
    "logoSize": "medium",
    "navbarMode": "tabbed"
  },
  "apiFiles": [
    "example.yml"
  ],
  "homepage": "/introduction",
  "changelog": false,
  "navbar": [
    {
      "label": "Guides",
      "sidebarRef": "guides"
    },
    {
      "label": "API Reference",
      "sidebarRef": "apiReference"
    }
  ],
  "externalLinks": [],
  "sidebars": [
    {
      "sidebarRef": "guides",
      "categories": [
        {
          "categoryName": "Getting Started",
          "pages": [
            "getting-started/introduction",
            "getting-started/local-development"
          ]
        },
        {
          "categoryName": "Basics",
          "pages": [
            "basics/global-settings",
            "basics/markdown-basics",
            {
              "groupName": "Page Templates",
              "subpages": [
                "basics/page-templates/api-introduction",
                "basics/page-templates/environments",
                "basics/page-templates/authentication"
              ]
            }
          ]
        }
      ]
    },
    {
      "sidebarRef": "apiReference",
      "categories": [
        {
          "categoryName": "Example",
          "pages": [
            "reference/example/get-items",
            "reference/example/create-item"
          ]
        }
      ]
    }
  ]
};