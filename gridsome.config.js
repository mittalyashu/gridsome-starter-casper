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
				refs: {
					author: 'Author',
					tags: {
						typeName: 'Tag',
						route: '/tag/:title',
						create: true
					}
				}
			}
		},
		{
			use: '@gridsome/source-filesystem',
			options: {
				path: 'data/author/*.md',
				typeName: 'Author',
				route: '/author/:id'
			}
		}
	]
}
