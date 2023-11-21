import { createRouter, createWebHistory } from "vue-router";


import ProjectView from './views/ProjectView.vue';
import About from './views/About.vue';
import NotFound from './views/NotFound.vue';
import App from '../src/App.vue';
import { formToJSON } from "axios";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/projects',
            name: 'projects',
            component: ProjectView
        },

        {
            path: '/about',
            name: 'about me',
            component: About
        },

        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound
        },
    ]
})

export { router };