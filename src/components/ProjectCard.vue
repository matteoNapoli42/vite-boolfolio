<script>
import { state } from '../state'
export default {
    name: "ProjectCard",
    data() {
        return {
            state,
        }
    },

    props: {
        project: Object,

    },

    methods: {

    }
}
</script>

<template>
    <div class=" col-3">
        <div class="card">
            <div class=" card-header">
                {{ project.title }}
            </div>
            <div class=" card-body d-flex flex-column">

                <div class="text-center">
                    <img :src="project.thumb" alt="">
                </div>

                <p class="mt-3">Description : {{ project.description }}</p>

                <span>
                    Type :
                    <div v-if="project.type">
                        {{ project.type.name }}
                    </div>
                    <span v-else>
                        N/D
                    </span>
                </span>

                <div>
                    TECHNOLOGIES :
                    <ul class=" list-unstyled" v-for=" technology  in  project.technologies ">
                        <li>{{ technology.name }}</li>
                    </ul>
                </div>

                <div class=" d-flex flex-column">

                    <div>
                        GITHUB : <span v-if="project.github">
                            <a href="" style="text-decoration: none;">{{ project.github }}</a>
                        </span>
                        <span v-else>
                            N/D
                        </span>
                    </div>

                    <div class="mt-2">
                        PROJECT LINK : <span v-if="project.project_link">
                            {{ project.project_link }}
                        </span>
                        <span v-else>
                            N/D
                        </span>
                    </div>
                </div>
                <router-link :to="{
                    name: 'project',
                    params: { slug: project.slug }
                }">
                    <button class="btn btn-primary rounded-3 mt-2">View Project</button>
                </router-link>
            </div>
            <div class=" card-footer">
            </div>
        </div>
    </div>
</template>

<style></style>