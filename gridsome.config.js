// This is where project configuration and installed plugin options are located. 
// Learn more: https://gridsome.org/docs/config

module.exports = {
  siteName: 'Gridsome Casper',
  siteUrl: 'https://www.gridsome.org',

  plugins: [
    {
			use: '@gridsome/source-filesystem',
			options: {
				path: 'blog/*.md',
				typeName: 'BlogPost',
				route: '/:slug'
			}
		}
  ]
}