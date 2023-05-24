<script>
import app from '../main'
import { doc, getFirestore, setDoc, getDocs, collection } from "firebase/firestore";
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

    }
  },

  created() {
    this.nombre = this.buscarUSuario(this.getCookie('usuarioRegistrado')).Nombre_Apellido
    //ordersId().then(orders => console.log(orders))
    this.buscarReservas().then(largo => this.calculaPromocion(largo));
    console.log(this.reservas);
  },

  methods: {
    async guardarDatos() {
      console.log("Guardando")
      const db = getFirestore(app);
      if (await this.datosCorrectos(true) === 1) {
        await setDoc(doc(db, "Habitaciones", this.numero), {
          cantidadCamas: this.cantidadCamas,
          descripcion: this.descripcion,
          numero: this.numero,
          precio: this.precio,
        })
        console.log("termine de guardar")
      } else {
        console.log("Datos Incorrectos")
      }
    },
    async modificarDatos(numero) {
      console.log(numero)
      const db = getFirestore(app);
      this.numero = numero   // esto es para validar los datos
      if (await this.datosCorrectos(false) == 1) {
        await setDoc(doc(db, "Habitaciones", numero), {
          cantidadCamas: this.cantidadCamas,
          descripcion: this.descripcion,
          numero: numero,
          precio: this.precio,
        })
      } else {
        console.log("Datos Incorrectos")
      }
    },
    async datosCorrectos(rep) {
      const db = getFirestore(app);
      const querySnapshot = await getDocs(collection(db, "Habitaciones"));
      var correcto = 1

      // numero valido      
      if (!Number(this.numero) && this.numero != "0") {
        correcto = 0
        console.log("El numero de habitacion debe ser un numero")
      }
      else if (this.numero < 1) {
        correcto = 0
        console.log("El numero de habitacion debe ser positivo")
      } else if (rep) {
        // numero de habitacion repetido
        querySnapshot.forEach((doc) => {
          if (doc.data().numero == this.numero) {
            correcto = 0
            console.log("Numero repetido")
          }
        },
        );
      }

      // precio valido
      if (!Number(this.precio) && this.precio != "0") {
        correcto = 0
        console.log("El precio de la habitacion debe ser un numero")
      } else if (this.precio < 1) {
        correcto = 0
        console.log("El precio de la habitacion debe ser positivo")
      }

      // cantidadCamas valido
      if (!Number(this.cantidadCamas) && this.cantidadCamas != "0") {
        correcto = 0
        console.log("La cantidad de camas de la habitacion debe ser un numero")
      } else if (this.cantidadCamas < 1) {
        correcto = 0
        console.log("La cantidad de camas de la habitacion debe ser positiva")
      }
      return correcto;
    },
    async buscarUSuario(correo) {
      const usuarios = await getDocs(collection(db, "Cuentas"));
      usuarios.forEach((doc) => {
        var accountData = doc.data();
        if (accountData.Correo_Electronico == correo) {
          this.rut = accountData.Rut
          this.nombre = accountData.Nombre_Apellido
          this.telefono = accountData.Telefono

          return (accountData)
        }
      });

    },

    //obsoleto xd
    async buscarUSuarioRut(correo) {
      const usuarios = await getDocs(collection(db, "Cuentas"));
      usuarios.forEach((doc) => {
        var accountData = doc.data();
        if (accountData.Correo_Electronico == correo) {
          this.rut = accountData.Rut
          this.nombre = accountData.Nombre_Apellido
          this.telefono = accountData.Telefono

          return (accountData.Rut)
        }
      });

    },


    async ObtenerRut() {
      const resul = await getDocs(collection(db, "Cuentas"));
      resul.forEach((usuario) => {
        if (usuario.data().Correo_Electronico == this.getCookie('usuarioRegistrado')) {
          return usuario.data().Rut
        }
      }
      )
    },

    async buscarReservas() {
      this.reservas = []
      this.largo = 0
      var usuario_reservas = []
      const resul = await getDocs(collection(db, "Reservas"));
      resul.forEach((doc) => {
        var accountData = doc.data();
        if (accountData.rut == this.rut) {
          usuario_reservas.push(accountData)
          console.log(accountData)
          this.largo = this.largo + 1
          console.log("+1 añsldfkñl");
          console.log(this.largo)
        }
      }
      );
      this.finalLargo = this.largo
      console.log(usuario_reservas)
      return (this.largo)
    },


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
      console.log("pormoooooooooooooo")
      console.log(this.finalLargo);
      console.log(this.reservas.length)

      //pa cuando use descuento borrar las promos usadas xd

      if (larglista > 5) {
        this.Promocion_Activa = "Tienes Promocion"
        this.Promobollean = true
        this.MensajePromocion = "Por acumulación de reservas, tiene un 15% de descuento al costo de su cuenta"
      } else {
        this.Promocion_Activa = "No tienes promoción"
        this.Promobollean = false
        this.MensajePromocion = " Para tener una promoción, debes tener con anterioridad 5 reservas finalizadas!"
      }
    },



    async Aplica_Descuento() {
      //crear cookie
      let descuento = 15

      this.setCookie("descuento", descuento, 1)
      //vinculo
      location.href = './Reservar_Vista';
    },



  },

}
function obtieneasync(retorno) {
  return retorno
}

</script>

<template>
  <!-- -------------          header               ------------ -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container px-4 px-lg-5">
      <a class="navbar-brand" href="/">
        <img src="https://hotelcordillera.cl/wp-content/uploads/2021/11/logo.jpg" height="50" alt="hotel logo"
          loading="lazy" style="margin-top: -1px;" /></a>
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
                <li><a class="dropdown-item" href="./menu_Usuario">Perfil</a></li>
                <li><a class="dropdown-item" href="/Iniciar_sesion">Cerrar sesión</a></li>
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
                    <h5 class="fw-bolder"> {{ Promocion_Activa }}</h5>
                    {{ MensajePromocion }}
                  </div>
                </div>

                <!-- Product actions-->

                <v-card>
                  <div> <button @click="Aplica_Descuento" type="button" class="btn btn-primary" data-bs-toggle="modal"
                      style="margin-right: 5px;" v-if="Promobollean">

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