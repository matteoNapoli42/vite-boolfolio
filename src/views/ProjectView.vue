<script>
import ProjectCard from '../components/ProjectCard.vue';
import { state } from '../state';
export default {
    name: "ProjectVue",

    components: {
        ProjectCard
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
    <div class=" container d-flex flex-wrap gap-3 mx-auto mt-5">
        <ProjectCard :project="project" v-for="project in state.projects" />
    </div>
</template>
<style></style>