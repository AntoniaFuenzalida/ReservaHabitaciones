<script>
import app from "../main";
import {
  doc,
  getFirestore,
  setDoc,
  getDocs,
  collection,
} from "firebase/firestore";
import { db } from "../main.js";
export default {
  data() {
    return {
      nombre: "uwu",
      reservas: [],
      Promocion_Activa: "",
      MensajePromocion: "",
      Promobollean: false,
      correo: null,
      rut: null,
      largo: null,
      finalLargo: null,
      telefono: null,
    };
  },

  created() {
    this.nombre = this.buscarUSuario(
      this.getCookie("usuarioRegistrado")
    ).Nombre_Apellido;
    //ordersId().then(orders => console.log(orders))
    this.buscarReservas().then((largo) => this.calculaPromocion(largo));
    console.log(this.reservas);
  },

  methods: {
    retroceder() {
      location.href = "/menu_Usuario"
    },
    async buscarUSuario(correo) {
      const usuarios = await getDocs(collection(db, "Cuentas"));
      usuarios.forEach((doc) => {
        var accountData = doc.data();
        if (accountData.Correo_Electronico == correo) {
          this.rut = accountData.Rut;
          this.nombre = accountData.Nombre_Apellido;
          this.telefono = accountData.Telefono;

          return accountData;
        }
      });
    },
    async buscarReservas() {
      this.reservas = [];
      this.largo = 0;
      var usuario_reservas = [];
      const resul = await getDocs(collection(db, "Reservas"));
      resul.forEach((doc) => {
        var accountData = doc.data();
        if (doc.data().estadoReserva == "Lista") {
          if (accountData.rut == this.rut) {
            usuario_reservas.push(accountData);
            console.log(accountData);
            this.largo = this.largo + 1;
            console.log(this.largo);
          }
        }
      });
      this.finalLargo = this.largo;
      return this.largo;
    },
    getCookie(nombre) {
      var cookies = document.cookie.split(";");
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.startsWith(nombre + "=")) {
          return decodeURIComponent(
            cookie.substring(nombre.length + 1)
          );
        }
      }
      return null;
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
    async calculaPromocion(larglista) {
      console.log("Promo!");
      console.log(this.finalLargo);
      console.log(this.reservas.length);

      //pa cuando use descuento borrar las promos usadas xd

      if (larglista % 5 == 0 && larglista != 0) {
        this.Promocion_Activa = "Tienes Promocion";
        this.Promobollean = true;
        this.MensajePromocion =
          "Por acumulación de reservas, tiene un 15% de descuento al costo de su cuenta, usala en tu siguiente reserva o se perdera";
      } else {
        this.Promocion_Activa = "No tienes promoción";
        this.Promobollean = false;
        this.MensajePromocion =
          " Para tener una promoción, tendras una cada 5 reservas efectuadas (no olvides usarla o la perderas)";
      }
    },
    async Aplica_Descuento() {
      //crear cookie
      let descuento = 15;

      this.setCookie("descuento", descuento, 1);
      //vinculo
      location.href = "./Reservar_Vista";
    },
  },
};
function obtieneasync(retorno) {
  return retorno;
}
</script>

<template>
  <!-- -------------          header               ------------ -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container px-4 px-lg-5">
      <button id="regreso_Botonpromo" @click="retroceder()">
        <img id="imagen_regreso_Botonpromo" src="../icons/atras.jpg" />
      </button>
      <a class="navbar-brand">
        <img src="https://hotelcordillera.cl/wp-content/uploads/2021/11/logo.jpg" height="50" alt="hotel logo"
          loading="lazy" style="margin-top: -1px" /></a>
      {{ nombre }}
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
                <li>
                  <a class="dropdown-item" href="/">Inicio</a>
                </li>
                <li>
                  <a class="dropdown-item" href="./menu_Usuario">Perfil</a>
                </li>
                <li>
                  <a class="dropdown-item" href="/Iniciar_sesion">Cerrar sesión</a>
                </li>
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
          <div class="card h-100">
            <!-- Product details-->

            <img class="card-img-top" src="https://i.imgur.com/y2Xra35.jpg" alt="..." />
            <div class="card-body p-4">
              <div class="text-center">
                <h5 class="fw-bolder">
                  {{ Promocion_Activa }}
                </h5>
                {{ MensajePromocion }}
              </div>
            </div>

            <!-- Product actions-->

            <v-card>
              <div>
                <button @click="Aplica_Descuento" type="button" class="btn btn-primary" data-bs-toggle="modal"
                  style="margin-right: 5px" v-if="Promobollean">
                  Aplicar Descuento
                </button>
              </div>
            </v-card>
          </div>
        </form>
      </div>
    </div>
  </header>

  <!-- Footer-->
  <footer class="py-5 bg-dark" style="margin-top: 2%">
    <div class="container">
      <p class="m-0 text-center text-white">
        &copy; Hotel Cordillera, 2023
      </p>
    </div>
  </footer>
</template>

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

#regreso_Botonpromo {
  width: 5%;
  height: 1%;
  background-color: transparent;
  border: 1px solid #ffffff;
  box-shadow: 0 0px 0px rgba(0, 0, 0, 0.6);
}

#imagen_regreso_Botonpromo {
  width: 100%;
  height: 100%;
}
</style>
