// This is where project configuration and installed plugin options are located. 
// Learn more: https://gridsome.org/docs/config

module.exports = {
  siteName: 'Gridsome Casper',
  siteUrl: 'https://www.gridsome.org',
  siteDescription: 'The professional publishing platform',
  titleTemplate: `%s - Gridsome`,
  
  plugins: [
    {
			use: '@gridsome/source-filesystem',
			options: {
				path: 'blog/*.md',
				typeName: 'Post',
				route: '/:slug',
			}
		}
  ]
}