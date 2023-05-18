
<template>
  <!-- -------------          header               ------------ -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container px-4 px-lg-5">
      <a class="navbar-brand" href="/">
        <img src="https://hotelcordillera.cl/wp-content/uploads/2021/11/logo.jpg" height="50" alt="hotel logo"
          loading="lazy" style="margin-top: -1px;" /></a>

      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Menú
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="./menu_Usuario">Perfil</a></li>
                <li><a class="dropdown-item" href="./">Cerrar sesión</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <!-- Header-->
  <header class="bg-dark py-5">
    <div class="container px-4 px-lg-5 my-5">
      <div class="text-white">
        <h1 class="display-4 fw-bolder text-center">Tus Promociones</h1>
        <form>
          <div class="col-7">
            <div class="col">
              <div class="card h-100">

                <!-- Product details-->

                <img class="card-img-top" src="https://i.imgur.com/y2Xra35.jpg" alt="..." />
                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Promoción activa</h5>
                    Por acumulación de reservas,<b> tiene un 15% de descuento al costo de su cuenta </b>
                  </div>
                </div>

                <!-- Product actions-->

                <v-card>
                  <div> <button type="button" class="btn btn-primary" data-bs-toggle="modal" style="margin-right: 5px;">
                      Aplicar Descuento
                    </button>
                  </div>
                </v-card>

              </div>
            </div>
          </div>
        </form>

      </div>
    </div>
  </header>

  <!-- Footer-->
  <footer class="py-5 bg-dark" style="margin-top: 2%;">
    <div class="container">
      <p class="m-0 text-center text-white">&copy; Hotel Cordillera, 2023</p>
    </div>
  </footer>
</template>

<script setup>
console.log(getCookie('usuarioRegistrado')
)
</script>

<script>
//import { collection, getDocs } from 'firebase/firestore';
//import { db } from "../main.js";

function getCookie(nombre) {
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    if (cookie.startsWith(nombre + '=')) {
      return decodeURIComponent(cookie.substring(nombre.length + 1));
    }
  }
  return null;
}
</script>






<style scoped>
h6 {
  margin: 40px 0 0;
  height: 20px;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: black;
}
</style>