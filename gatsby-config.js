/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `WebDev Portfolio`,
    description: `Awesome WebDev Portfolio build with Gatsby and Strapi`,
    titleTemplate: `%s | WebDev Portfolio`,
    url: `https://asfandyar.jamali.netlify.app`,
    twitterUsername: `@asfandyar038`,
    image: `/main-img.png`,
  },

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://my-portfolio-app-backend.herokuapp.com`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`job`, `project`],
        singleTypes: [`about`],
      },
    },
  ],
}
