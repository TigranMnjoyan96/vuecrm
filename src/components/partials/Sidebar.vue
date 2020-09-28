<template>
  <ul class="sidenav app-sidenav" :class="{'open': value}">
    <router-link v-for="(item, index) in links"
                 :key="index"
                 tag="li"
                 :to="item.url"
                 active-class="active"
                 :exact="item.exact"
                 >
      <a href="#" class="waves-effect waves-orange pointer">{{ item.title }}</a>
    </router-link>
  </ul>

</template>

<script>
export default {
  name: "Sidebar",
  props: ['value'],
  data() {
    return {
      links: [
        {title: 'Счет', url: '/', exact: true},
        {title: 'История', url: '/history'},
        {title: 'Планирование', url: '/planning'},
        {title: 'Новая запись', url: '/record'},
        {title: 'Категории', url: '/categories'},
      ]
    }
  },
  mounted() {
    console.log(this.value, 4444)
  }
}
</script>

<style scoped>

</style>