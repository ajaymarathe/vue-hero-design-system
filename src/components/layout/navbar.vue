<template>
    <nav class="navbar navbar-expand-lg navbar-dark navbar-transparent">
        <a class="navbar-brand text-uppercase" href="#">
            <vue-fontawesome class="mr-2" icon="paper-plane" size="1.2"></vue-fontawesome>
            {{ title }}</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" target="_blank" href="http://blog.bootcatch.com/post/vue-components-based-design-system-is-based-on-bootcatch-themes-and-vue">Components</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <base-dropdown>
                            <a class="dropdown-toggle"  data-toggle="dropdown">Pages</a>
                            <dropdown-menu>
                                <router-link class="dropdown-item" to="/login">Login</router-link>
                                <router-link class="dropdown-item" to="/register">Register</router-link>
                            </dropdown-menu>
                        </base-dropdown>
                    </a>
                </li>
            </ul>
            <ul class="navbar-nav ml-auto d-md-flex align-items-md-center">
                <li class="nav-item active">
                    <a  class="btn btn-light d-flex align-items-center text-primary" href="https://github.com/ajaymarathe/vue-hero-design-system/archive/master.zip" >
                        <vue-fontawesome class="mr-2" icon="cloud-download" size=".8" ></vue-fontawesome>
                        download
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://github.com/ajaymarathe/vue-hero-design-system" target="_blank">
                        <vue-fontawesome size="1.5" icon="github" class="text-white"></vue-fontawesome>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "navbar",
        data(){
            return {
                title: 'vue-hero'
            }
        }
    }
</script>

<style scoped>

</style>
