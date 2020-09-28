<template>
  <div id="app">
      <component :is="layout">
        <router-view />
      </component>
  </div>
</template>

<script>

import MainLayout from "@/layouts/Main.vue"
import AuthLayout from "@/layouts/Auth"

export default {
  name: 'App',
  computed: {
    layout() {
      console.log(this.$route.meta.layout)
      return this.$route.meta.layout + '-layout'
    }
  },
  components: {
    AuthLayout,
    MainLayout
  }
}
</script>

<style>
@import "../node_modules/materialize-css/dist/css/materialize.min.css";
@import "assets/index.css";
</style>
