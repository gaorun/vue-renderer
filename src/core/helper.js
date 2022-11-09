import Vue from 'vue'
import directives from './directives'
import filters from './filters'
import store from './store'

const app = new Vue({
  directives,
  filters,

  data() {
    return store
  }
})

const h = app.$createElement
const emit = app.$emit

export { h, emit }
