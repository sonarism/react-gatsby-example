module.exports = {
  siteMetadata: {
    title: 'MyApp Title',
    description: 'Complete courses about the best tools and design systems. Prototype and build apps with React and Swift. 60 hours of video content and resource materials. No coding experience required.',
    keywords: 'react course, react for designers, ios development, sketch app, swift app course, arkit 2, after effects, create sketch plugin'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'ob44cxe44xt0',
        accessToken: '580858095bb0006418de51ab5fa6a75dea741c792e0176c4031d74005b4d741b'
      }
    }
  ],
}
