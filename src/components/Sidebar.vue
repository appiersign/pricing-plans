<template>
    <aside class="border-right col-1">
        <ul class="d-flex flex-column justify-content-between text-center">
            <li class="nav-item">
                <a class="nav-link text-dark" href="#">Why us? <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <router-link to="/" class="nav-link text-dark" href="#">Pricing</router-link>
            </li>

            <li class="nav-item">
                <a class="nav-link text-dark" href="#">Plugins</a>
            </li>
        </ul>
    </aside>
</template>

<script>
    export default {
        name: "Sidebar"
    }
</script>

<style scoped>
    aside {
        font-family: 'Comfortaa', cursive;
    }
</style>