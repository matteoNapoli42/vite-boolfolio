<script>
export default {
    name: "ProjectCard",

    props: {
        project: Object,
        baseUrl: String,
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

                <div>
                    <img src="" alt="">
                </div>

                <p>Description : {{ project.description }}</p>

                <span>
                    Type :
                    <div v-if="project.type">
                        {{ project.type.name }}
                    </div>
                    <span v-else>
                        N/D
                    </span>
                </span>

                <div class="">
                    TECHNOLOGIES :
                    <ul class=" list-unstyled" v-for="technology in project.technologies">
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

                    <div>
                        PROJECT LINK : <span v-if="project.project_link">
                            {{ project.project_link }}
                        </span>
                        <span v-else>
                            N/D
                        </span>
                    </div>



                </div>


            </div>
        </div>
    </div>
</template>

<style></style>