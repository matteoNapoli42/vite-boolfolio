import axios from "axios";
import { reactive } from "vue";

export const state = reactive({
    baseUrl: 'http://127.0.0.1:8000/api/projects',
    projects: [],

    getProjects() {
        axios.get(this.baseUrl)
            .then(response => {
                console.log(response.data.result.data);
                this.projects = response.data.result.data;
            })
    }
})