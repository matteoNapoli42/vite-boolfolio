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
<template></template>
<style></style>