<template>
    <div class="bg-light">
        <div class="navbar navbar-expand-lg container">
            <ul class="navbar-nav w-100">
                <li class="nav-item active">
                    <a class="nav-link" href="http://bootcatch.com/lightly">© 2019 - {{  new Date().getFullYear() }} Bootcatch.com</a>
                </li>
                <li class="nav-item ml-md-auto">
                    <a class="nav-link" target="_blank" href="http://bootcatch.com">
                        Bootcatch
                    </a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#">
                        About Us
                    </a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#">
                        Blog
                    </a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" target="_blank" href="https://github.com/ajaymarathe/vue-slateblue-ui/blob/master/LICENSE">
                        MIT License
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BaseFooter',
    }
</script>

<style scoped>

</style>
