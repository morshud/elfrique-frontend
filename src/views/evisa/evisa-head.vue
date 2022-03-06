<template>
    <!---E-visa Head--->
    <nav class="navbar navbar-expand-lg navbar-light evisa-navbar">
        <div class="container">
            <a class="navbar-brand">
                <router-link to="/" class="routers"><img src="@/assets/images/logo.png" alt="Elfrique logo"></router-link>
            </a>
            <button class="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <i class="bi bi-list"></i>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-100" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <button data-bs-dismiss="offcanvas">
                        <i class="bi bi-x-square"></i>
                    </button>
                </div>
                <div class="offcanvas-body justify-content-end">
                    <ul class="navbar-nav mb-lg-0 justify-content-end">
                    </ul>
                    <div class="dropdown">
                        <button class="btn-destination" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            E-Visa Detinations <i class="bi bi-caret-down-fill"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Turkey</a></li>
                            <li><a class="dropdown-item" href="#">Malawi</a></li>
                            <li><a class="dropdown-item" href="#">Zambia</a></li>
                            <li><a class="dropdown-item" href="#">Ethiopia</a></li>
                            <li><a class="dropdown-item" href="#">Tanzania</a></li>
                            <li><a class="dropdown-item" href="#">Zimbabwe</a></li>
                            <li><a class="dropdown-item" href="#">United Arab Emirates</a></li>
                            <li><a class="dropdown-item" href="#">East Africa Tourist Visa</a></li>
                        </ul>
                    </div>
                    <div class="backHomepage">
                        <router-link to="/" target="_blank"><a >Back To Elfrique Homepage</a></router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <!---E-visa Head Ends--->
</template>

<script>
    export default {
        mounted(){
         window.scrollTo(0,0)
        }
    }
</script>