<template>
  <div id="app">
    <VueRenderer :schema="schema" />
  </div>
</template>

<script>
import VueRenderer from './components/renderer.vue'

export default {
  name: "App",
  components: {
    VueRenderer
  },

  data() {
    this.schema = {
      as: 'article',
      style: {
        fontSize: '14px',
        color: '#333'
      },
      "#default": [
        {
          as: 'h2',
          '#default': 'Hello World'
        },
        {
          as: 'p',
          '#default': '不积跬步无以至千里'
        },
      ]
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
