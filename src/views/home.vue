<template>
    <div>
        <!-- navbar section -->
        <navbar></navbar>
        <!--end navbar section-->
        <div class="intro-section bg-primary">
            <div class="intro-overlay">
                <div class="container">
                    <div class="row justify-content-center align-items-center" style="height: 100vh;">
                        <div class="heading text-center">
                            <div class="d-flex justify-content-center align-items-center">
                                <vue-fontawesome class="mr-3" icon="paper-plane" size="2"></vue-fontawesome>
                                <h1 class="text-uppercase">{{ title }}</h1>
                            </div>
                            <p class="lead">A beautiful Design System for Vue Lovers based on latest bootstrap. It's Free and
                                Open Source.</p>
                            <div>
                                <a href="#" class="text-decoration-none">
                                    <base-button color="outline-light" class="mr-2">
                                        <div class="d-flex align-items-center">
                                            <vue-fontawesome class="mr-2" size="1.3" icon="shield"></vue-fontawesome>
                                            components
                                        </div>
                                    </base-button>
                                </a>
                                 <a class="text-decoration-none" href="https://github.com/ajaymarathe/vue-slateblue-ui/archive/master.zip" >
                                    <base-button color="light">
                                        <div class="d-flex align-items-center">
                                            <vue-fontawesome class="mr-2" size="1.6" icon="angle-down"></vue-fontawesome>
                                            <span>download</span>
                                        </div>
                                    </base-button>
                                 </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-two">
            <div class="mb-5 mt-4">
                <h3 class="mb-5 container">Basic Elements</h3>
                <h5 class="text-uppercase container mb-4">Navbar</h5>
                <base-navbar class="py-3 mb-3" bgType="dark" color="primary">
                    <div class="container">
                        <a class="navbar-brand text-uppercase" href="#">{{ title }}</a>
                        <button
                                class="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarNav"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav  ml-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">
                                        Home
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Features</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </base-navbar>
                <base-navbar class="py-3 mb-3" bgType="dark" color="success">
                    <div class="container">
                        <a class="navbar-brand text-uppercase" href="#">{{ title }}</a>
                        <button
                                class="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarNav"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav  ml-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">
                                        Home
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Features</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </base-navbar>
                <base-navbar class="py-3 mb-3" bgType="dark" color="warning">
                    <div class="container">
                        <a class="navbar-brand text-uppercase" href="#">{{ title }}</a>
                        <button
                                class="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarNav"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav  ml-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">
                                        <vue-fontawesome icon="github" size="1.3"></vue-fontawesome>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <vue-fontawesome icon="facebook" size="1.3"></vue-fontawesome>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <vue-fontawesome icon="instagram" size="1.3"></vue-fontawesome>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <vue-fontawesome icon="google" size="1.3"></vue-fontawesome>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </base-navbar>
                <base-navbar class="py-3 mb-3" bgType="dark" color="info">
                    <div class="container">
                        <a class="navbar-brand text-uppercase" href="#">{{ title }}</a>
                        <button
                                class="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarNav"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav  ml-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">
                                        Home
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Features</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </base-navbar>
                <base-navbar class="py-3 mb-3" bgType="dark" color="primary">
                    <div class="container">
                        <a class="navbar-brand text-uppercase" href="#">{{ title }}</a>
                        <button
                                class="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarNav"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav  ml-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">
                                        Home
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Features</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </base-navbar>
                <base-navbar class="py-3 mb-3" bgType="light" color="secondary">
                    <div class="container">
                        <a class="navbar-brand text-uppercase" href="#">{{ title }}</a>
                        <button
                                class="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarNav"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav  ml-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">
                                        Home
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Features</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </base-navbar>
                <base-navbar class="py-3 mb-3" bgType="dark" color="dark">
                    <div class="container">
                        <a class="navbar-brand text-uppercase" href="#">{{ title }}</a>
                        <button
                                class="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarNav"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav  ml-auto">
                                <li class="nav-item active">
                                    <a class="nav-link d-flex align-items-center" href="#">
                                        <vue-fontawesome class="mr-2" icon="github" size="1.3"></vue-fontawesome>
                                        Github
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link d-flex align-items-center" href="#">
                                        <vue-fontawesome class="mr-2" icon="facebook" size="1.3"></vue-fontawesome>
                                        Facebook
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link d-flex align-items-center" href="#">
                                        <vue-fontawesome class="mr-2" icon="instagram" size="1.3"></vue-fontawesome>
                                        Instagram
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link d-flex align-items-center" href="#">
                                        <vue-fontawesome class="mr-2" icon="google" size="1.3"></vue-fontawesome>
                                        Google
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </base-navbar>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h5 class="mb-4 text-uppercase">Cards</h5>
                        <div class="mb-5">
                            <div class="row mb-4">
                                <div class="col-md-4">
                                    <base-card>
                                        <img class="card-img-top" src="../assets/img/kajal3.png" alt="">
                                        <card-body>
                                            <h5>Kajal Aggarwal</h5>
                                            <p>Some quick example text to build on the card title and make up the bulk
                                                of the card's content.</p>
                                            <base-button color="primary">Go somewhere</base-button>
                                        </card-body>
                                    </base-card>
                                </div>
                                <div class="col-md-4">
                                    <base-card>
                                        <img class="card-img-top" src="../assets/img/kajal3.png" alt="">
                                        <card-body>
                                            <h5>Kajal Aggarwal</h5>
                                            <p>Some quick example text to build on the card title and make up the bulk
                                                of the card's content.</p>
                                            <base-button color="primary">Go somewhere</base-button>
                                        </card-body>
                                    </base-card>
                                </div>
                                <div class="col-md-4">
                                    <base-card>
                                        <img class="card-img-top" src="../assets/img/kajal3.png" alt="">
                                        <card-body>
                                            <h5>Kajal Aggarwal</h5>
                                            <p>Some quick example text to build on the card title and make up the bulk
                                                of the card's content.</p>
                                            <base-button color="primary">Go somewhere</base-button>
                                        </card-body>
                                    </base-card>
                                </div>

                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <base-card class="border-success">
                                        <card-header class="border-bottom border-success bg-transparent">
                                            card-header
                                        </card-header>
                                        <card-body>
                                            <h5 class="card-title">Success card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and
                                                make up the bulk of the card's content.</p>
                                        </card-body>
                                        <card-footer class="border-success">
                                           card-footer
                                        </card-footer>
                                    </base-card>
                                </div>
                                <div class="col-md-4">
                                    <base-card class="bg-primary text-white">
                                        <card-header>card-header</card-header>
                                        <card-body>
                                            <h5 class="card-title text-white">primary card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and
                                                make up the bulk of the card's content.</p>
                                        </card-body>
                                        <card-footer>card-footer</card-footer>
                                    </base-card>
                                </div>
                                <div class="col-md-4">
                                    <base-card>
                                        <img class="card-img-top" style="height: 240px;" src="../assets/img/kajal4.png"
                                             alt="">
                                        <card-overlay>
                                            <h5 class="text-white">kajal aggaral</h5>
                                            <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing
                                                elit. Accusantium ea eaque iure.</p>
                                        </card-overlay>
                                    </base-card>
                                </div>
                            </div>
                        </div>
                        <h4 class="mb-4 text-uppercase">Badge</h4>
                        <div class="mb-5">
                            <div class="row">
                                <div class="col-md-4">
                                    <h6 class="text-uppercase">Default</h6>
                                    <base-badge class="mr-1" color="primary" > primary</base-badge>
                                    <base-badge class="mr-1" color="danger" >danger</base-badge>
                                    <base-badge class="mr-1" color="info" > info</base-badge>
                                    <base-badge class="mr-1" color="warning" > warning</base-badge>
                                    <base-badge class="mr-1" color="light" > light</base-badge>
                                    <base-badge class="mr-1" color="success" > success</base-badge>
                                </div>
                                <div class="col-md-4">
                                    <h6 class="text-uppercase">Pill</h6>
                                    <base-badge class="mr-1" color="primary" type="pill">primary</base-badge>
                                    <base-badge class="mr-1" color="danger" type="pill">danger</base-badge>
                                    <base-badge class="mr-1" color="info" type="pill"> info</base-badge>
                                    <base-badge class="mr-1" color="warning" type="pill"> warning</base-badge>
                                    <base-badge class="mr-1" color="light" type="pill"> light</base-badge>
                                    <base-badge class="mr-1" color="success" type="pill"> success</base-badge>
                                </div>

                                <div class="col-md-4">
                                    <h6 class="text-uppercase">Square</h6>
                                    <base-badge class="mr-1" color="primary" type="0"> primary</base-badge>
                                    <base-badge class="mr-1" color="danger" type="0">danger</base-badge>
                                    <base-badge class="mr-1" color="info" type="0"> info</base-badge>
                                    <base-badge class="mr-1" color="warning" type="0"> warning</base-badge>
                                    <base-badge class="mr-1" color="light" type="0"> light</base-badge>
                                    <base-badge class="mr-1" color="success" type="0"> success</base-badge>
                                </div>
                            </div>
                        </div>
                        <h4 class="mb-4 text-uppercase">Buttons</h4>
                        <div class="mb-5">
                            <div class="row">
                                <div class="col-md-4">
                                    <h6 class="mb-4 text-uppercase">Default</h6>
                                    <base-button class="mr-2" color="primary">Button</base-button>
                                    <base-button class="mr-2" color="secondary">
                                        <vue-fontawesome icon="send"></vue-fontawesome>
                                    </base-button>
                                    <base-button class="mr-2" color="dark">
                                        <vue-fontawesome icon="github"></vue-fontawesome>
                                    </base-button>
                                </div>
                                <div class="col-md-4">
                                    <h6 class="mb-4 text-uppercase">Pill</h6>
                                    <base-button class="mr-2" color="primary" variant="pill">Button</base-button>
                                    <base-button class="mr-2" color="secondary" variant="pill">
                                        <vue-fontawesome icon="send"></vue-fontawesome>
                                    </base-button>
                                    <base-button class="mr-2" color="dark" variant="pill">
                                        <vue-fontawesome icon="github"></vue-fontawesome>
                                    </base-button>
                                </div>
                                <div class="col-md-4">
                                    <h6 class="mb-4 text-uppercase">Square</h6>
                                    <base-button class="mr-2" color="primary" variant="0">Button</base-button>
                                    <base-button class="mr-2" color="secondary" variant="0">
                                        <vue-fontawesome icon="send"></vue-fontawesome>
                                    </base-button>
                                    <base-button class="mr-2" color="dark" variant="0">
                                        <vue-fontawesome icon="github"></vue-fontawesome>
                                    </base-button>
                                </div>
                            </div>
                        </div>
                        <h5 class="mb-4 text-uppercase">Pick your color</h5>
                        <div class="mb-5">
                            <base-button class="mr-2" color="primary">primary</base-button>
                            <base-button class="mr-2" color="info">info</base-button>
                            <base-button class="mr-2" color="secondary">secondary</base-button>
                            <base-button class="mr-2" color="success">success</base-button>
                            <base-button class="mr-2" color="danger">danger</base-button>
                            <base-button class="mr-2" color="warning">warning</base-button>
                            <base-button class="mr-2" color="light">light</base-button>
                        </div>
                        <h5 class="mb-4 text-uppercase">Outline</h5>
                        <div class="mb-5">
                            <base-button class="mr-2" color="primary" type="outline">primary</base-button>
                            <base-button class="mr-2" color="info" type="outline">info</base-button>
                            <base-button class="mr-2" color="success" type="outline">success</base-button>
                            <base-button class="mr-2" color="danger" type="outline">danger</base-button>
                            <base-button class="mr-2" color="warning" type="outline">warning</base-button>
                        </div>
                        <h5 class="mb-4 text-uppercase">Choose your size</h5>
                        <div class="mb-5">
                            <base-button class="mr-2" color="primary" variant="0" size="sm">small</base-button>
                            <base-button class="mr-2" color="light" variant="0">default</base-button>
                            <base-button class="mr-2" color="dark" size="lg" variant="0">large</base-button>
                        </div>
                        <h5 class="mb-4 text-uppercase">Block level</h5>
                        <div class="mb-5">
                            <base-button class="mr-2 mt-2" color="warning"  display="block">primary
                            </base-button>
                        </div>
                        <div class="mb-5">
                            <h5 class="mb-4 text-uppercase">Dropdown</h5>
                            <base-dropdown  class="d-inline-block">
                                <base-button class="dropdown-toggle" color="secondary"  data-toggle="dropdown">Dropdown Button</base-button>
                                <dropdown-menu align="right">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </dropdown-menu>
                            </base-dropdown>
                            <base-dropdown  class="d-inline-block ml-2">
                                <base-button class="dropdown-toggle" color="dark"  data-toggle="dropdown">Dropdown Button</base-button>
                                <dropdown-menu>
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </dropdown-menu>
                            </base-dropdown>
                        </div>
                        <h5 class="mb-4 text-uppercase">Carousel</h5>
                        <div class="mb-5">
                            <div class="row">
                                <div class="col-md-6">
                                    <base-carousel target="firstCarousel" >
                                        <carousel-inner>
                                            <div class="carousel-item active">
                                                <img src="../assets/img/kajal11.png" class="d-block w-100" alt="...">
                                                <carousel-caption>
                                                    <h5 class="text-white">First slide label</h5>
                                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                                </carousel-caption>
                                            </div>
                                            <div class="carousel-item">
                                                <img src="../assets/img/kajal1.png" class="d-block w-100" alt="...">
                                                <carousel-caption>
                                                    <h5 class="text-white">Second slide label</h5>
                                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                                </carousel-caption>
                                            </div>
                                            <div class="carousel-item">
                                                <img src="../assets/img/kajal12.png" class="d-block w-100" alt="...">
                                                <carousel-caption>
                                                    <h5 class="text-white">Third slide label</h5>
                                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                                </carousel-caption>
                                            </div>
                                        </carousel-inner>
                                        <carousel-slide target="firstCarousel" title="Previous" type="prev" ></carousel-slide>
                                        <carousel-slide target="firstCarousel" title="Previous" type="next"></carousel-slide>
                                        <ol class="carousel-indicators" >
                                            <slide-indicator target="firstCarousel" index="0"></slide-indicator>
                                            <slide-indicator target="firstCarousel" index="1"></slide-indicator>
                                            <slide-indicator target="firstCarousel" index="2"></slide-indicator>
                                        </ol>
                                    </base-carousel>
                                </div>
                                <div class="col-md-6">
                                    <base-carousel target="seconCarousel" animation="fade" >
                                        <carousel-inner>
                                            <div class="carousel-item active">
                                                <img src="../assets/img/kajal1.png" class="d-block w-100" alt="...">
                                                <carousel-caption >
                                                    <h5 class="text-white">First slide label</h5>
                                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                                </carousel-caption>
                                            </div>
                                            <div class="carousel-item">
                                                <img src="../assets/img/kajal11.png" class="d-block w-100" alt="...">
                                                <carousel-caption>
                                                    <h5 class="text-white">Second slide label</h5>
                                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                                </carousel-caption>
                                            </div>
                                            <div class="carousel-item">
                                                <img src="../assets/img/kajal12.png" class="d-block w-100" alt="...">
                                                <carousel-caption>
                                                    <h5 class="text-white">Third slide label</h5>
                                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                                </carousel-caption>
                                            </div>
                                        </carousel-inner>
                                        <carousel-slide target="seconCarousel" title="Previous" type="prev" ></carousel-slide>
                                        <carousel-slide target="seconCarousel" title="Previous" type="next"></carousel-slide>
                                        <ol class="carousel-indicators" >
                                            <slide-indicator target="seconCarousel" index="0"></slide-indicator>
                                            <slide-indicator target="seconCarousel" index="1"></slide-indicator>
                                            <slide-indicator target="seconCarousel" index="2"></slide-indicator>
                                        </ol>
                                    </base-carousel>
                                </div>
                            </div>
                        </div>
                        <h5 class="mb-4 text-uppercase">Forms</h5>
                        <div class="mb-5">
                            <div class="row">
                                <div class="col-md-4">
                                    <base-input v-model="searchText"
                                                      placeholder="enter your email"></base-input>
                                </div>
                                <div class="col-md-4">
                                    <base-input class="border-success" type="text"
                                                      placeholder="success"></base-input>
                                </div>
                                <div class="col-md-4">
                                    <base-input class="border-danger" placeholder="danger"></base-input>
                                </div>
                                <div class="col-md-4">
                                    <base-input placeholder="disabled" disabled></base-input>
                                </div>
                                <div class="col-md-4">
                                    <base-input placeholder="search" icon="search"></base-input>
                                </div>
                                <div class="col-md-4">
                                    <base-input placeholder="search" icon="send"></base-input>
                                </div>
                            </div>
                        </div>
                        <div class="mb-5">
                            <div class="row">
                                <div class="col-md-4">
                                    <h6>Checkboxes</h6>
                                    <base-checkbox v-model="lovingVue"></base-checkbox>
                                    <br>
                                    <base-checkbox v-model='searchText'></base-checkbox>
                                    Checked
                                </div>
                                <div class="col-md-4">
                                    <h6>Radio Buttons</h6>
                                    <base-radio name="first" v-model="radio1"
                                                     value="first radio"></base-radio>
                                    <br>
                                    <base-radio name="first" v-model="radio2"
                                                     value="second radio"></base-radio>
                                    Radio
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="mb-5">
                    <h5 class="mb-4 text-uppercase">Tabs</h5>
                    <div class="row">
                        <div class="col-md-6">
                            <base-tab class="bg-light p-2">
                                <template v-slot:tab-item>
                                    <tab-item tab="active" target="home">Home</tab-item>
                                    <tab-item target="profile">profile</tab-item>
                                    <tab-item target="contact">contact</tab-item>
                                </template>
                                <template v-slot:tab-content>
                                    <tab-content tab="active"  section="home">
                                        Home
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur facere in maxime veritatis. Libero ratione, rerum. Ad aliquam aliquid cum eaque illo illum impedit, maiores modi nesciunt possimus quas rem.</p>
                                    </tab-content>
                                    <tab-content section="profile">
                                        Profile
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur facere in maxime veritatis. Libero ratione, rerum. Ad aliquam aliquid cum eaque illo illum impedit, maiores modi nesciunt possimus quas rem.</p>
                                    </tab-content>
                                    <tab-content section="contact">
                                        Contact
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur facere in maxime veritatis. Libero ratione, rerum. Ad aliquam aliquid cum eaque illo illum impedit, maiores modi nesciunt possimus quas rem.</p>
                                    </tab-content>
                                </template>
                            </base-tab>
                        </div>
                        <div class="col-md-6">
                            <base-tab class="bg-light  p-2">
                                <template v-slot:tab-item>
                                    <tab-item tab="active" target="school">school</tab-item>
                                    <tab-item target="college">college</tab-item>
                                    <tab-item target="city">city</tab-item>
                                </template>
                                <template v-slot:tab-content>
                                    <tab-content tab="active"  section="school">
                                        school
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur facere in maxime veritatis. Libero ratione, rerum. Ad aliquam aliquid cum eaque illo illum impedit, maiores modi nesciunt possimus quas rem.</p>
                                    </tab-content>
                                    <tab-content section="college">
                                        college
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur facere in maxime veritatis. Libero ratione, rerum. Ad aliquam aliquid cum eaque illo illum impedit, maiores modi nesciunt possimus quas rem.</p>
                                    </tab-content>
                                    <tab-content section="city">
                                        city
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur facere in maxime veritatis. Libero ratione, rerum. Ad aliquam aliquid cum eaque illo illum impedit, maiores modi nesciunt possimus quas rem.</p>
                                    </tab-content>
                                </template>
                            </base-tab>
                        </div>
                    </div>
                </div>
                <div class="mb-5">
                    <h5 class="mb-4 text-uppercase">Progress bar</h5>
                    <base-progress size=".2" class="mb-3" color="danger" width="35"></base-progress>
                    <base-progress size=".5" class="mb-3" color="dark" width="65"></base-progress>
                    <base-progress size="1" class="mb-3" color="primary" width="25"></base-progress>
                    <base-progress class="mb-3" color="warning" type="striped"  width="45"></base-progress>
                    <base-progress class="mb-3" color="info" type="striped" animation="animated" width="75"></base-progress>
                    <base-progress size="2" class="mb-3" color="success" type="striped" animation="animated" width="60"></base-progress>
                </div>
                <div class="mb-5">
                    <h5 class="text-uppercase mb-4">Spinner</h5>
                    <div class="row">
                        <div class="col-md-6">
                            <h6 class="mb-4 text-uppercase">border</h6>
                            <base-spinner size="4" type="border" color="primary"></base-spinner>
                            <base-spinner size="4" type="border" color="secondary"></base-spinner>
                            <base-spinner size="4" type="border" color="danger"></base-spinner>
                            <base-spinner size="4" type="border" color="warning"></base-spinner>
                            <base-spinner size="4" type="border" color="info"></base-spinner>
                            <base-spinner size="4" type="border" color="light"></base-spinner>
                            <base-spinner size="4" type="border" color="dark"></base-spinner>
                        </div>
                        <div class="col-md-6">
                            <h6 class="mb-4 text-uppercase">Grow</h6>
                            <base-spinner size="4" type="grow" color="primary"></base-spinner>
                            <base-spinner size="4" type="grow" color="secondary"></base-spinner>
                            <base-spinner size="4" type="grow" color="danger"></base-spinner>
                            <base-spinner size="4" type="grow" color="warning"></base-spinner>
                            <base-spinner size="4" type="grow" color="info"></base-spinner>
                            <base-spinner size="4" type="grow" color="light"></base-spinner>
                            <base-spinner size="4" type="grow" color="dark"></base-spinner>
                        </div>
                    </div>
                </div>
                <div class="mb-5">
                    <h5 class="mb-4 text-uppercase">Pagination</h5>
                    <div class="row">
                        <div class="col-md-4">
                            <h6 class="mb-4 text-uppercase">Small</h6>
                            <nav aria-label="Page navigation example">
                                <ul class="pagination pagination-sm">
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                        </a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item active"><a class="page-link " href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div class="col-md-4">
                            <h6 class="mb-4 text-uppercase">medium</h6>
                            <nav aria-label="Page navigation example">
                                <ul class="pagination">
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                        </a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item active"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div class="col-md-4">
                            <h6 class="mb-4 text-uppercase">large</h6>
                            <nav aria-label="Page navigation example">
                                <ul class="pagination pagination-lg">
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                        </a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item active"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="mb-5">
                    <h5 class="mb-5 mt-5 text-uppercase">Images </h5>
                   <div class="row">
                       <div class="col-md-3">
                           <h6 class="mb-4 text-uppercase">Rounded</h6>
                           <img class='img-fluid rounded' src="../assets/img/kajal800.png" alt="vue-supine-ui images">
                       </div>
                       <div class="col-md-3">
                           <h6 class="mb-4 text-uppercase">Circle</h6>
                           <img class='img-fluid rounded-circle' src="../assets/img/kajal800.png" alt="vue-supine-ui images">
                       </div>
                       <div class="col-md-3">
                           <h6 class="mb-4 text-uppercase">Thumbnail</h6>
                           <img class='img-fluid img-thumbnail' src="../assets/img/kajal800.png" alt="vue-supine-ui images">
                       </div>
                       <div class="col-md-3">
                           <h6 class="mb-4 text-uppercase">Shadow</h6>
                           <img class='img-fluid rounded shadow' src="../assets/img/kajal800.png" alt="vue-supine-ui images">
                       </div>
                   </div>
                </div>
                <div class="mb-5">
                    <h5 class="text-uppercase mb-4">Modal</h5>
                    <div class="row">
                        <div class="col-md-3">
                            <base-button color="primary" size="block" data-toggle="modal" data-target="#exampleModal">
                                demo modal
                            </base-button>
                            <base-modal target="exampleModal">
                                <modal-header>
                                    <h5 class="modal-title text-uppercase" >Defaul demo modal</h5>
                                    <base-close dismiss="modal"></base-close>
                                </modal-header>
                                <modal-body>
                                    <h5 class="modal-title text-uppercase">{{ title }} modal</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet doloribus illo laboriosam laudantium odio officia sequi. Autem, omnis sequi? Accusamus enim praesentium provident sunt voluptatibus! Culpa dolorum error impedit vitae?</p>
                                </modal-body>
                                <modal-footer>
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </modal-footer>
                            </base-modal>
                        </div>
                        <div class="col-md-3">
                            <base-button color="secondary" size="block" data-toggle="modal" data-target="#smallModal">
                                small modal
                            </base-button>
                            <base-modal size="sm" target="smallModal" >
                                <modal-header>
                                    <h5 class="modal-title text-uppercase" >small modal</h5>
                                    <base-close dismiss="modal"></base-close>
                                </modal-header>
                                <modal-body>
                                    <h5 class="mb-4">Spinners</h5>
                                    <p>Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript.</p>
                                    <base-spinner size="4" type="grow" color="primary"></base-spinner>
                                    <base-spinner type="grow" color="secondary"></base-spinner>
                                    <base-spinner type="grow" color="success"></base-spinner>
                                    <base-spinner type="grow" color="danger"></base-spinner>
                                    <base-spinner type="grow" color="warning"></base-spinner>
                                    <base-spinner type="grow" color="light"></base-spinner>
                                    <base-spinner type="grow" color="dark"></base-spinner>
                                </modal-body>
                                <modal-footer>
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-danger">Save changes</button>
                                </modal-footer>
                            </base-modal>
                        </div>
                        <div class="col-md-3">
                            <base-button color="warning" size="block" data-toggle="modal" data-target="#largeModal">
                                Large Modal
                            </base-button>
                            <base-modal size="lg"  target="largeModal">
                                <modal-header>
                                    <h5 class="modal-title text-uppercase" >large modal</h5>
                                    <base-close dismiss="modal"></base-close>
                                </modal-header>
                                <modal-body>
                                    <h5 class="mb-4">Spinners</h5>
                                    <p>Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript.</p>
                                    <base-spinner type="border" color="primary"></base-spinner>
                                    <base-spinner type="border" color="secondary"></base-spinner>
                                    <base-spinner size="5" type="border" color="success"></base-spinner>
                                    <base-spinner type="border" color="danger"></base-spinner>
                                    <base-spinner size="5" type="border" color="warning"></base-spinner>
                                    <base-spinner type="border" color="light"></base-spinner>
                                    <base-spinner type="border" color="dark"></base-spinner>
                                </modal-body>
                                <modal-footer>
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-danger">Save changes</button>
                                </modal-footer>
                            </base-modal>
                        </div>
                        <div class="col-md-3">
                            <base-button color="danger" size="block" data-toggle="modal" data-target="#extraLarge">
                                Extra large modal
                            </base-button>
                            <base-modal size="xl" target="extraLarge" >
                                <modal-header>
                                    <h5 class="modal-title text-uppercase" >Extra large modal</h5>
                                    <base-close dismiss="modal"></base-close>
                                </modal-header>
                                <modal-body>
                                    <h5 class="mb-4">Spinners</h5>
                                    <p>Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript.</p>
                                    <base-spinner type="grow" color="primary"></base-spinner>
                                    <base-spinner type="border" color="secondary"></base-spinner>
                                    <base-spinner  size="5" type="grow" color="success"></base-spinner>
                                    <base-spinner  size="5" type="border" color="danger"></base-spinner>
                                    <base-spinner type="grow" color="warning"></base-spinner>
                                    <base-spinner type="border" color="light"></base-spinner>
                                    <base-spinner size="5" type="grow" color="dark"></base-spinner>
                                </modal-body>
                                <modal-footer>
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-danger">Save changes</button>
                                </modal-footer>
                            </base-modal>
                        </div>
                    </div>
                </div>
                <div class="mb-5">
                    <div class="row">
                        <div class="col-md-6">
                            <h5 class="mb-4 text-uppercase">tooltips</h5>
                            <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
                                Tooltip on top
                            </button>
                            <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
                                Tooltip on right
                            </button>
                            <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
                                Tooltip on bottom
                            </button>
                            <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="left" title="Tooltip on left">
                                Tooltip on left
                            </button>
                        </div>
                        <div class="col-md-6">
                            <h5 class="mb-4 text-uppercase">Popovers</h5>
                            <button id="button" type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                                Popover on top
                            </button>

                            <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                                Popover on right
                            </button>

                            <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus
sagittis lacus vel augue laoreet rutrum faucibus.">
                                Popover on bottom
                            </button>

                            <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                                Popover on left
                            </button>
                        </div>
                    </div>
                </div>
                <h4 class="text-primary mb-4 text-uppercase">Alerts</h4>
                <div class="mb-5">
                    <div class="row justify-content-center">
                        <div class="col-md-12">
                            <base-alert class="py-3" color="primary">
                                <vue-fontawesome icon="paper-plane" class="mr-2"></vue-fontawesome>
                                A simple primary alert—check it out!
                            </base-alert>
                            <base-alert class="py-3" color="secondary text-white">
                                <vue-fontawesome icon="life-ring" class="mr-2"></vue-fontawesome>
                                A simple secondary alert—check it out!
                            </base-alert>
                            <base-alert class="py-3" color="danger">
                                A simple danger alert—check it out!
                            </base-alert>
                            <base-alert class="py-3" color="warning">
                                A simple warning alert—check it out!
                            </base-alert>
                            <base-alert class="py-3" color="info">
                                A simple info alert—check it out!
                            </base-alert>
                            <base-alert class="py-3" color="light">
                                <vue-fontawesome icon="paper-plane" class="mr-2"></vue-fontawesome>
                                A simple primary alert—check it out!
                            </base-alert>
                            <base-alert class="py-3" color="dark">
                                <vue-fontawesome icon="paper-plane" class="mr-2"></vue-fontawesome>
                                A simple primary alert—check it out!
                            </base-alert>
                            <base-alert class="py-3" color="success">
                                <h4 class="alert-heading text-white">Well done!</h4>
                                <p>Aww yeah, you successfully read this important alert message. This example text is
                                    going to run a bit longer so that you can see how spacing within an alert works with
                                    this kind of content.</p>
                                <hr>
                                <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things
                                    nice and tidy.</p>
                            </base-alert>
                        </div>
                    </div>

                </div>
                <div class="mb-5">
                    <h5 class="mb-4 text-uppercase">Typography</h5>
                    <div class="row">
                        <div class="col-md-12 mb-5">
                            <h6 class="mb-4 text-uppercase">Headings</h6>
                            <div class="row">
                                <div class="col-md-3">
                                    <span class="text-uppercase text-muted">heading 1</span>
                                </div>
                                <div class="col-md-8">
                                    <h1 class="text-uppercase">{{ title }}</h1>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3">
                                    <span class="text-uppercase text-muted">heading 3</span>
                                </div>
                                <div class="col-md-8">
                                    <h2 class="text-uppercase">{{ title }}</h2>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3">
                                    <span class="text-uppercase text-muted">heading 3</span>
                                </div>
                                <div class="col-md-8">
                                    <h3 class="text-uppercase">{{ title }}</h3>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3">
                                    <span class="text-uppercase text-muted">heading 4</span>
                                </div>
                                <div class="col-md-8">
                                    <h4 class="text-uppercase">{{ title }}</h4>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3">
                                    <span class="text-uppercase text-muted">heading 5</span>
                                </div>
                                <div class="col-md-8">
                                    <h5 class="text-uppercase">{{ title }}</h5>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3">
                                    <span class="text-uppercase text-muted">heading 6</span>
                                </div>
                                <div class="col-md-8">
                                    <h6 class="text-uppercase">{{ title }}</h6>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-12">
                            <h6 class="mb-4 text-uppercase">Display</h6>
                            <div class="row align-items-center">
                                <div class="col-md-3">
                                    <span class="text-uppercase text-muted mt-5">display 1</span>
                                </div>
                                <div class="col-md-8">
                                    <h1 class="display-1 text-uppercase">Display 1</h1>
                                </div>
                            </div>
                            <div class="row align-items-center">
                                <div class="col-md-3">
                                    <span class="text-uppercase text-muted">display 2</span>
                                </div>
                                <div class="col-md-8">
                                    <h1 class="display-2 text-uppercase">Display 2</h1>
                                </div>
                            </div>
                            <div class="row align-items-center">
                                <div class="col-md-3">
                                    <span class="text-uppercase text-muted">display 1</span>
                                </div>
                                <div class="col-md-8">
                                    <h1 class="display-3 text-uppercase">Display 3</h1>
                                </div>
                            </div>
                            <div class="row align-items-center">
                                <div class="col-md-3">
                                    <span class="text-uppercase text-muted">display 1</span>
                                </div>
                                <div class="col-md-8">
                                    <h1 class="display-4 text-uppercase">Display 4</h1>
                                </div>
                            </div>

                            <h6 class="text-uppercase mt-5 mb-4">Fancy display</h6>
                            <h3>
                                Fancy display heading
                                <small class="text-muted">With faded secondary text</small>
                            </h3>
                            <h6 class="text-uppercase mb-4 mt-5">lead</h6>
                            <p class="lead">
                                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
                            </p>

                            <blockquote class="blockquote">
                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            </blockquote>
                            <h6 class="mb-4 mt-5 text-uppercase">text colors</h6>
                            <p class="text-primary">.text-primary</p>
                            <p class="text-secondary">.text-secondary</p>
                            <p class="text-success">.text-success</p>
                            <p class="text-danger">.text-danger</p>
                            <p class="text-warning">.text-warning</p>
                            <p class="text-info">.text-info</p>
                            <p class="text-light bg-dark">.text-light</p>
                            <p class="text-dark">.text-dark</p>
                            <p class="text-body">.text-body</p>
                            <p class="text-muted">.text-muted</p>
                            <p class="text-white bg-dark">.text-white</p>
                            <p class="text-black-50">.text-black-50</p>
                            <p class="text-white-50 bg-dark">.text-white-50</p>
                        </div>
                    </div>


                </div>
          </div>
            <div class="third-section ">
               <div class="container">
                   <div class="row justify-content-center">
                       <div class="col-md-8">
                           <div class="header text-light ">
                               <vue-fontawesome class="text-light mb-4" size="3" icon="send"></vue-fontawesome>
                               <h2 class="text-uppercase text-light mb-4">Vue-fontawesome-icon</h2>
                               <p class="lead mb-4">There are 675 icons in Font Awesome 4.7.0, easy to use. Which look awesome with Slatblue-UI,
                               Make sure to read docs first.</p>
                               <div>
                                   <a href="https://www.npmjs.com/package/vue-fontawesome-icon" target="_blank">
                                    <base-button class="mr-2" color="light">read Docs</base-button>
                                   </a>
                                   <a target="_blank" href="https://fontawesome.com/v4.7.0/icons/">
                                       <base-button color="dark">View icons</base-button>
                                   </a>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
            </div>
            <div class="fourth-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <h2 class="text-uppercase mt-5 mb-4">{{ title }} Awesome Design System</h2>
                            <p class="lead mb-4">{{ title }} Design system comes with login and register page to help you get started, also it has it's own
                            beautiful documentation to help you out. It is based on <a href="http://www.bootcatch.com/lightly" target="_blank">Hero Theme</a>. Which is based on latest Bootstrap.</p>
                            <base-button color="primary">
                                See all components
                            </base-button>
                        </div>
                        <div class="col-md-6">
                            <base-card class="border-success l-shapes light-shadow">
                                <img class="img-fluid" src="../assets/img/green.jpg" :alt="title">
                                <card-body>
                                    <h5 class="card-title">base-card-component</h5>
                                    <p class="card-text">Some quick example text to build on the card title and
                                        make up the bulk of the card's content.</p>
                                </card-body>
                            </base-card>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <base-footer></base-footer>
    </div>
</template>

<script>
    import Jquery from 'jquery';

    export default {
        name: "home",
        data() {
            return {
                title: "vue-hero",
                searchText: "",
                lovingVue: "",
                radio1: "",
                radio2: "",
                date:"",
            }
        },
        mounted() {
           let $ = Jquery;
            $(function () {
                $('[data-toggle="tooltip"]').tooltip()
                $('[data-toggle="popover"]').popover()
            });
        }

    }
</script>

<style scoped>
    .btn {
        text-transform: uppercase;
        margin-bottom: .5rem;
    }

    input {
        margin-bottom: 1rem;
    }

</style>
