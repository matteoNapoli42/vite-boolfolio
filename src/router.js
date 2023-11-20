import { createRouter, createWebHistory } from "vue-router";

import ProjectCard from './components/ProjectCard.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/projects',
            name: 'projects',
            component: ProjectCard
        }
    ]
})

export { router };