module.exports = {
	siteName: 'Gridsome Casper',
	siteUrl: 'https://www.gridsome.org',
	siteDescription: 'The professional publishing platform',
	titleTemplate: `%s - Gridsome`,

	plugins: [
		{
			use: '@gridsome/plugin-google-analytics',
			options: {
				id: 'UA-XXXXXXXXX-X'
			}
		},
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
				// TODO Use yaml file as data source
				path: 'data/author/*.md',
				typeName: 'Author',
				route: '/author/:id'
			}
		},
		{
			use: 'gridsome-plugin-rss',
			options: {
				contentTypeName: 'Post',
				feedOptions: {
					title: 'Gridsome Casper',
					feed_url: 'https://gridsome-starter-casper.netlify.com/feed.xml',
					site_url: 'https://gridsome-starter-casper.netlify.com'
				},
				feedItemOptions: node => ({
					title: node.title,
					url: 'https://gridsome-starter-casper.netlify.com' + node.path,
					author: node.author
				}),
				output: {
					name: 'feed.xml'
				}
			}
		}
	]
}
