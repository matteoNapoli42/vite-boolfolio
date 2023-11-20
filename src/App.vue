<script>
//import ProjectCard from './components/ProjectCard.vue'
import Navbar from './components/Navbar.vue'
import { state } from './state'
export default {
  name: "App",

  components: {
    Navbar,
  },

  data() {
    return {
      state,

      menuItems:
        [
          {
            name: 'Home',
            url: '/'
          },

          {
            name: 'About',
            url: '/About'
          },

          {
            name: 'Projects',
            url: '/projects'
          }
        ]
    }
  },

  created() {
    state.getProjects()
  }



}
</script>

<template>
  <Navbar :items="menuItems" />
  <router-view></router-view>
</template>

<style ></style>
