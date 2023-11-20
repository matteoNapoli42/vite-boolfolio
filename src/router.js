import { createRouter, createWebHistory } from "vue-router";


import ProjectView from './views/ProjectView.vue';
import App from '../src/App.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/projects',
            name: 'projects',
            component: ProjectView
        },
    ]
})

export { router };