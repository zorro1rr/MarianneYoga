module.exports = {
  siteMetadata: {
    title: `Yoga With Marianne`,
    description: `Marianne Howard is a yoga teacher of over 20 years and offers virtual and in-person privates out of the West Palm Beach Area`,
    author: `Justin Howard`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `a9iivw3f`,
        dataset: `production`,
        watchMode: false,
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Gill Sans`, "Sabon", "Lato", "Perpetua"],
        display: "swap",
      },
    },
  ],
}
