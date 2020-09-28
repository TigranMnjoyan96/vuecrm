<template>
  <div class="app-main-layout">
    <navbar @openSideBarHandler="isOpen" />
    <sidebar v-model="sideMenuIsOpen" />

    <main class="app-content" :class="{'full': !sideMenuIsOpen}">
      <div class="app-page">
        <div class="new-elements-app-pages-from-routes">
          <router-view />
        </div>
      </div>
    </main>

    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue" to="/record">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/partials/Navbar"
import Sidebar from "@/components/partials/Sidebar"

export default {
  name: "Main",
  data() {
    return {
      sideMenuIsOpen: false
    }
  },
  components: {
    Navbar,
    Sidebar
  },
  methods: {
    isOpen() {
      this.sideMenuIsOpen = !this.sideMenuIsOpen
    }
  }
}
</script>

<style scoped>

</style>