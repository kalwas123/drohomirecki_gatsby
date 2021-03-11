module.exports = {
  siteMetadata: {
    title: `Home page - Rochman Drohomirecki Architekci`,
    description: `Biuro architektoniczne podejmuje różnorodne zadania projektowe. Projektujemy obiekty mieszkalne – domy jednorodzinne, budynki wielorodzinne oraz obiekty użyteczności publicznej. Zajmujemy się również projektowaniem przestrzeni publicznych. `,
    url: `rdarchitekci.pl`,
    img: `/thumbnail.jpg`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    "gatsby-plugin-root-import",
    "gatsby-plugin-layout",
    // {
    //   resolve: "gatsby-plugin-manifest",
    //   options: {
    //     icon: "src/images/icon.png",
    //   },
    // },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images`,
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.1,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Archia"],
          urls: [`/fonts/fonts.css`],
        },
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "https://drohomirecki-cms.herokuapp.com",
        contentTypes: ["moments", "news-blogs", "realizations"],
        singleTypes: [
          "home-page",
          "about-module",
          "nav",
          "idea-module",
          "history-module",
          "contact",
          "moments-page",
          "news-page",
          "realizations-page",
        ],
        queryLimit: 1000,
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.1,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Home page - Rochman Drohomirecki Architekci`,
        short_name: `Drohomirecki`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#917B66`,
        display: `minimal-ui`,
        icon: `${__dirname}/public/favicon.svg`, // This path is relative to the root of the site.
      },
    },
  ],
};
