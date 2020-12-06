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
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Gill Sans`, "Sabon", "Lato"],
        display: "swap",
      },
    },
//delete this and get rid of gatsby-remark-embed-video dependancy/files

    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/src/pages`,
    //     name: `blog`,
    //   },
    // },
    // {
    //   resolve: "gatsby-transformer-remark",
    //   options: {
    //     path: `${__dirname}/src/pages`,
    //     plugins: [
    //       {
    //         resolve: "gatsby-remark-embed-video",
    //         options: {
    //           width: 800,
    //           ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
    //           height: 400, // Optional: Overrides optional.ratio
    //           related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
    //           noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
    //           urlOverrides: [
    //             {
    //               id: "youtube",
    //               embedURL: videoId =>
    //                 `https://www.youtube-nocookie.com/embed/${videoId}`,
    //             },
    //           ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
    //           containerClass: "embedVideo-container", //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
    //         },
    //       },
    //     ],
    //   },
    // },
  ],
}
// this (optional) plugin enables Progressive Web App + Offline functionality
// To learn more, visit: https://gatsby.dev/offline
// `gatsby-plugin-offline`,
