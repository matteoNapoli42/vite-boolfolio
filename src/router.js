import { createRouter, createWebHistory } from "vue-router";
import ProjectView from './views/ProjectView.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/projects',
            name: 'projects',
            component: ProjectView
        }
    ]
})

export { router };