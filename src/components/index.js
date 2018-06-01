import Vue from 'vue'
// import { camelToKebab } from '@/utils'
// element 组件 + 自定义全局组件
import { Form, FormItem, Input, Button } from 'element-ui'

Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
// export default {
//   install (Vue, opts = {}) {
//     // Object.values(components).forEach(comp => Vue.component(comp.name, comp))
//     Object.entries(components).forEach(([k, v]) => Vue.component(camelToKebab(k), v))
//     // for (let [k, v] of Object.entries(components)) {
//     //   Vue.component(camelToKebab(k), v)
//     // }
//   }
// }

