module.exports = {
  siteMetadata: {
    title: "ReactD3",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-emotion",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/articles`,
        name: "markdown-pages",
      },
    },
    "gatsby-transformer-remark",
  ],
};
