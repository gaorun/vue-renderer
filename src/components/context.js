/**
 * 上下文环境
 */
import Vue from 'vue'
import initGlobalApi from './actions'

const app = new Vue()

const context = {
  h: app.$createElement,
  observable: Vue.observable,
  emit: app.$emit,
  on: app.$on,
  off: app.$off,
  once: app.$once,
  state: observable({})
}

initGlobalApi(context)

// 插槽函数挂载
// Vue.component('ExtendSlot', {
//   props: {
//     render: Function,
//     data: {}
//   },
//   render(h) {
//     return this.props.render && this.props.render(h, data)
//   }
// })

export default context
