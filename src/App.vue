<template>
    <div id="app" class="container-fluid">
        <header class="row">
            <nav class="navbar navbar-expand-lg navbar-light bg-light container-fluid">
                <a class="navbar-brand" href="#">Chippa</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item mr-3">
                            <a class="nav-link text-dark" href="#">Login <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link btn btn-outline-success text-success" href="#">Get Started <span
                                    class="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        <main class="row">
            <Sidebar></Sidebar>
            <section class="col-11">
                <router-view></router-view>
            </section>
        </main>
    </div>
</template>

<script>

    import Sidebar from "./components/Sidebar";

    export default {
        name: 'App',
        components: {
            Sidebar
        },
    }
</script>

<style>
    aside {
        width: 70px;
        height: 100vh;
    }

    aside ul {
        height: 600px;
        padding-top: 150px;
        padding-left: 0;
    }

    aside > ul li {
        transform: rotate(-90deg);
        white-space: nowrap;
        list-style: none;
        margin-bottom: 50px;
    }

    .amount-figure > p {
        height: 90px;
        margin-bottom: 0;
        align-items: center;
    }
</style>
