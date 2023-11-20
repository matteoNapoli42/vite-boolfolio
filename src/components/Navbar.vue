<script>

export default {
    name: 'Navbar',
}
</script>


<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">VITE-BOOLFOLIO</a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://github.com/matteoNapoli42?tab=repositories">My Repositories</a>
                    </li>
                    <li class="nav-item">
                        <router-link class=" nav-link" to="/projects">
                            Projects
                        </router-link>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
</template>
<script></script>