<script setup>
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../main.js";

let datosContacto =
{
  telefono: "+569 4962 0996",
  correo: "contacto@hotelcordillera.cl",
  calle: "Chillán 1169, San Fernando",
  nombre: "Hotel Cordillera, Chile"
}



</script>
<script>
export default {
  name: "menu_Home",
  data() {
    return {
      correo: null,
      rut: null,
      nombre: null,
    };
  },
  created() {
    this.correo = this.getCookie('usuarioRegistrado')
    this.buscarUSuario(this.correo)

  },
  methods: {
    getCookie(nombre) {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.startsWith(nombre + '=')) {
          return decodeURIComponent(cookie.substring(nombre.length + 1));
        }

      }
      return null;
    },

    async Cerrarsecion() {
      this.setCookie('usuarioRegistrado', null, 1)
      location.href = "/Iniciar_sesion"
    },

    setCookie(nombre, valor, expiracion) {
      var fechaExpiracion = new Date();
      fechaExpiracion.setTime(
        fechaExpiracion.getTime() + expiracion * 24 * 60 * 60 * 1000
      );
      var cookie =
        nombre +
        "=" +
        encodeURIComponent(valor) +
        "; expires=" +
        fechaExpiracion.toUTCString() +
        "; path=/";
      document.cookie = cookie;
    },


    async buscarUSuario(correo) {
      this.reservas = []
      const usuarios = await getDocs(collection(db, "Cuentas"));
      usuarios.forEach((doc) => {
        var accountData = doc.data();
        if (accountData.Correo_Electronico == correo) {

          console.log(accountData)
          this.rut = accountData.Rut
          this.nombre = accountData.Nombre_Apellido
          this.telefono = accountData.Telefono

          return (accountData)
        }
      });

    },
  },

};

</script>


<template>
  <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
  </head>



  <body>

    <!--Header-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container px-4 px-lg-5">
        <a class="navbar-brand" href="/">
          <img src="https://hotelcordillera.cl/wp-content/uploads/2021/11/logo.jpg" height="50" alt="hotel logo"
            loading="lazy" style="margin-top: -1px;" /></a>
        {{ this.nombre }}
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
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Menú
                </a>
                <ul class="dropdown-menu">
                  <li v-if="correo == null"><a class="dropdown-item" href="./Iniciar_sesion">Iniciar sesión</a></li>
                  <!-- <li> </li> -->
                  <li v-else-if="correo != null"><a class="dropdown-item" href="./Reservar_Vista">Reservar ahora</a></li>
                  <li v-if="correo != null"><a class="dropdown-item" @click="Cerrarsecion">cerrar sesión</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <!--Carrusel-->
    <div class="container">
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://i.imgur.com/zHFuSEf.jpg" class="d-block w-100">
          </div>
          <div class="carousel-item">
            <img src="https://i.imgur.com/Igg1mOK.jpg" class="d-block w-100">
          </div>
          <div class="carousel-item">
            <img src="https://i.imgur.com/E1ezhig.jpg" class="d-block w-100">
          </div>
          <div class="carousel-item">
            <img src="https://i.imgur.com/EpdTxpu.jpg" class="d-block w-100">
          </div>
          <div class="carousel-item">
            <img src="https://i.imgur.com/RElaegS.jpg" class="d-block w-100">
          </div>
          <div class="carousel-item">
            <img src="https://i.imgur.com/cAc26bb.jpg" class="d-block w-100">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    <!--tajertas-->
    <section class="py-5">
      <div class="container px-8 px-lg-5 mt-5">
        <div class="row gx-3 row-cols-3 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <div class="col mb-5">
            <div class="card" style="width: 20rem; margin-left: -190px;">
              <!--Imagen Acerca De-->
              <img class="card-img-top" src="https://i.imgur.com/SZhdn3c.png" />
              <div class="card-body p-4">
                <div class="text-center">
                  <h5 class="fw-bolder">Acerca De</h5>
                  <!--Información-->
                  <p style="text-align: justify;">
                    Hotel Cordillera se encuentra emplazado en la entrada Norte de la ciudad de San Fernando zona
                    central de Chile ubicada en la región del Libertador General Bernardo O’Higgins, capital de la
                    Provincia de Colchagua, cercano al comercio local 500 metros del Mall Vivo, ubicado en calle
                    Bernardo O’Higgins con salida expedita hacia el norte y hacia el sur pasando por terminal rodo
                    viario de San Fernando que esta ubicado en Avenida Manso Velasco.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col mb-5">
            <div class="card" style="width: 20rem; margin-left: -15px;">
              <!--Imagen Habitaciones-->
              <img class="card-img-top" src="https://i.imgur.com/kPcLVuh.jpg" />
              <div class="card-body p-4">
                <div class="text-center">
                  <!--Información Habitaciones-->
                  <h5 class="fw-bolder">Habitaciones</h5>
                  <div class="d-flex justify-content-center small text-warning mb-2">
                  </div>
                  <!--Información-->
                  <p style="text-align: justify;">
                    Ofrecemos habitaciones diseñadas para satisfacer sus necesidades durante su estadía, ya sea que viaje
                    solo o en familia.
                    Desde habitaciones individuales hasta suites familiares, todas están equipadas con los mejores
                    servicios para brindarle
                    comodidad y privacidad. Nuestro personal está disponible las 24 horas para atender sus necesidades
                    adicionales y asegurarse
                    de que tenga una experiencia inolvidable. ¡Estamos ansiosos por darle la bienvenida y hacer de su
                    estadía una experiencia satisfactoria!
                  </p>

                </div>
              </div>
            </div>
          </div>
          <div class="col mb-5">
            <div class="card" style="width: 20rem; margin-left: 165px;">
              <!--Imagen Sobre Nosotros-->
              <img class="card-img-top" src="https://i.imgur.com/DlH7EyK.jpg" />
              <div class="card-body p-4">
                <div class="text-center">
                  <h5 class="fw-bolder">Sobre Nosotros</h5>
                  <!--Información Sobre Nosotros-->
                  <div class="d-flex justify-content-center small text-warning mb-2">
                  </div>
                  <!--Información-->
                  <p style="text-align: justify;">
                    Nuestro hotel cuenta con servicio las 24 horas del día para su comodidad y descanso seguro,
                    asimismo mantenemos todos los protocolos sanitarios para mayor seguridad de nuestros clientes.
                    El Hotel Cordillera es un proyecto familiar diseñado para el pasajero que va a destino lejano y desea
                    descansar.
                    Construcción solida moderna con una implementación adecuada a las necesidades del cliente que va de
                    paso como el que desea hospedarse por varios días el cual sentirá que esta en un lugar familiar.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div></div>

    <!--Reseñas-->
    <section class="py-5">
      <h1 style="text-align: center;">Reseñas</h1>
      <div class="container px-8 px-lg-5 mt-5">
        <div class="row gx-3 row-cols-3 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <div class="col mb-5">
            <div class="card" style="width: 20rem; margin-left: -190px;">
              <div class="card-body p-4">
                <div class="text-center">
                  <!--Autor Reseña-->
                  <h5 class="fw-bolder">Roberto Cañete, 2022</h5>
                  <!--Reseña-->
                  Fue una experiencia asombrosa, me encanto todo del hotel, las habitaciones, la comida todo.
                  <br>
                  5/5 puntuación
                </div>
              </div>
            </div>
          </div>
          <div class="col mb-5">
            <div class="card" style="width: 20rem; margin-left: -15px;">
              <!--Imagen Habitaciones-->
              <div class="card-body p-4">
                <div class="text-center">
                  <!--Autor Reseña-->
                  <h5 class="fw-bolder">Roberto Cañete, 2022</h5>
                  <!--Reseña-->
                  Fue una experiencia asombrosa, me encanto todo del hotel, las habitaciones, la comida todo.
                  <br>
                  5/5 puntuación
                </div>
              </div>
            </div>
          </div>
          <div class="col mb-5">
            <div class="card" style="width: 20rem; margin-left: 165px;">
              <!--Imagen Sobre Nosotros-->
              <div class="card-body p-4">
                <div class="text-center">
                  <!--Autor Reseña-->
                  <h5 class="fw-bolder">Roberto Cañete, 2022</h5>
                  <!--Reseña-->
                  Fue una experiencia asombrosa, me encanto todo del hotel, las habitaciones, la comida todo.
                  <br>
                  5/5 puntuación
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Contacto-->
    <h1 style="text-align: center;">Contacto</h1>
    <div class="container px-8 px-lg-5 mt-5">
      <div class="row gx-3 row-cols-3 row-cols-md-3 row-cols-xl-4 justify-content-center">
        <div class="col mb-5">
          <div class="card" style="width: 20rem; margin-left: -190px;">
            <div class="card-body p-4">
              <div class="text-center">
                <!--Información-->
                <br>{{ datosContacto.nombre }}
                <br>{{ datosContacto.calle }}
                <br>{{ datosContacto.correo }}
                <br>{{ datosContacto.telefono }}
              </div>
            </div>
          </div>
        </div>
        <div class="col mb-5">
          <div class="card" style="width: 20rem; margin-left: 40px;">
            <!--Logo Hotel-->
            <img class="card-img-top" src="https://i.imgur.com/nDkLm7I.png" />
          </div>
        </div>
      </div>
    </div>

    <!-- Footer-->
    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">&copy; Hotel Cordillera, 2023 </p>
      </div>
    </footer>
  </body>
</template>
