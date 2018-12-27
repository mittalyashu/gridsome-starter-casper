<template>
	<nav class="site-nav">
		<div class="site-nav-left">
			<div v-if="logo !== true">
				<a v-if="Admin.site.logo !== ''" class="site-nav-logo" :href="Admin.site.url">
					<img :src="Admin.site.logo" :alt="Admin.site.title" />
				</a>
				<a v-else class="site-nav-logo" :href="Admin.site.url">{{ Admin.site.title }}</a>
			</div>
			<Navigation v-if="Admin.site.navigation"/>
		</div>
		<div class="site-nav-right">
			<div class="social-links">
				<a v-if="Admin.social_media.coffee" class="social-link social-link-cf" :href="'https://www.buymeacoffee.com/' + Admin.social_media.coffee" title="Buy Me A Coffee" target="_blank" rel="noopener">
					<Coffee/>
				</a>

				<a v-if="Admin.social_media.facebook" class="social-link social-link-fb" :href="'https://facebook.com/' + Admin.social_media.facebook" title="Facebook" target="_blank" rel="noopener">
					<Facebook/>
				</a>

				<a v-if="Admin.social_media.twitter" class="social-link social-link-tw" :href="'https://twitter.com/' + Admin.social_media.twitter" title="Twitter" target="_blank" rel="noopener">
					<Twitter/>	
				</a>
			</div>
			<a v-if="Admin.site.subscribers" class="subscribe-button" href="#subscribe">Subscribe</a>
			<a v-else class="rss-button" href="/feed.xml" title="RSS" target="_blank" rel="noopener">
				<RSS/>
			</a>
    </div>
	</nav>
</template>

<script>
	import Admin from '../../data/admin.yml';
	import Navigation from './Navigation'

	// Icons
	import Facebook from './icons/Facebook'
	import Twitter from './icons/Twitter'
	import Coffee from './icons/Coffee'
	import RSS from './icons/RSS'

	export default {
		props: {
			logo: {
				type: Boolean,
				default: false
			}
		},
		components: {
			Navigation, Coffee, Facebook, Twitter, RSS
		},
		computed: {
			Admin() {
				return Admin
			}
		}
	}
</script>
