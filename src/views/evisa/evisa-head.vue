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
                            E-Visa Destinations <i class="bi bi-caret-down-fill"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li>
                                <router-link to="/evisa/turkey" class="routers"><a class="dropdown-item">Turkey</a></router-link>
                            </li>
                            <li>
                                <router-link to="/evisa/malawi" class="routers"><a class="dropdown-item">Malawi</a></router-link>
                            </li>
                            <li>
                                <router-link to="/evisa/zambia" class="routers"><a class="dropdown-item">Zambia</a></router-link>
                            </li>
                            <li>
                                <router-link to="/evisa/ethiopia" class="routers"><a class="dropdown-item">Ethiopia</a></router-link>
                            </li>
                            <li>
                                <router-link to="/evisa/tanzania" class="routers"><a class="dropdown-item">Tanzania</a></router-link>
                            </li>
                            <li>
                                <router-link to="/evisa/zimbabwe" class="routers"><a class="dropdown-item">Zimbabwe</a></router-link>
                            </li>
                            <li>
                                <router-link to="/evisa/uae" class="routers"><a class="dropdown-item">United Arab Emirates</a></router-link>
                            </li>
                            <li>
                                <router-link to="/evisa/east-africa-tourist" class="routers"><a class="dropdown-item">East Africa Tourist Visa</a></router-link>
                            </li>
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