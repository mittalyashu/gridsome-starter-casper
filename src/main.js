import '~/assets/css/style.scss'
import DefaultLayout from '~/layouts/Default.vue'
import moment from "vue-moment"

export default Vue => {
	Vue.component('Layout', DefaultLayout)
	Vue.use(moment)
}
