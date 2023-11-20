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
    }
  },

  created() {
    state.getProjects()
  }



}
</script>

<template>
  <Navbar />
  <router-view></router-view>
</template>

<style ></style>
