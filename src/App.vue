<script>
import ProjectCard from './components/ProjectCard.vue'
import Navbar from './components/Navbar.vue'
import { state } from './state'
export default {
  name: "App",

  components: {
    ProjectCard,
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
  <header>
    <Navbar />

  </header>

  <main class="d-flex container mx-auto flex-wrap gap-3 justify-center mt-5">
    <ProjectCard :project="project" v-for="project in state.projects" />
  </main>
</template>

<style ></style>
