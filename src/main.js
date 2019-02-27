import '~/assets/css/style.scss'
import DefaultLayout from '~/layouts/Default.vue'

export default Vue => {
	Vue.use(require('vue-moment'))
	Vue.component('Layout', DefaultLayout)
}
