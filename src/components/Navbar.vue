<script>

export default {
    name: 'Navbar',
    props: {
        items: Object
    }
}
</script>


<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">VITE-BOOLFOLIO</a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item" v-for="item in items">
                        <router-link class="nav-link active" :to="item.url">
                            {{ item.name }}
                        </router-link>
                    </li>
                    <li class="nav-item py-2">
                        <a href="https://github.com/matteoNapoli42?tab=repositories"
                            class=" text-decoration-none text-black">GitHub</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script></script>