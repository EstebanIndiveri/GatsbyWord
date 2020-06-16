module.exports = {
  siteMetadata: {
    title: `Gatsby blog`,
    description: `This is a blog created with Gatsby and Wordpress`,
    author: `Esteban indiveri`,
    keywords:"gatsby,gatsbyjs project, gatsby blog",
    image:'images/gatsby.jpg',
    url:'https://www.gatsbyjs.org/'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {resolve: `gatsby-transformer-remark`},
    {resolve:"gatsby-source-wordpress",
      options:{
        baseUrl: "codingsrc.com",
        protocol:'http',
        hostingWPCOM: false,
      }
    }
     
  ],
}
