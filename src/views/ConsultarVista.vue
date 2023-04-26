<script setup>
import { ref, reactive } from 'vue'
import { DatePicker } from 'v-calendar'
import 'v-calendar/dist/style.css'

const date = ref(new Date())
date.value.setDate(Number(date.value.getDate()) + 35)
const range = reactive({
  start: new Date(),
  end: date.value
})
</script>

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
                <li><a class="dropdown-item" href="#">Perfil</a></li>
                <li><a class="dropdown-item" href="./">Cerrar sesión</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="Servicios_Adicionales">Servicios adicionales</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </nav>
  <!--                   final de template                      -->
  <!-- Header-->



  <header class="bg-dark py-5">
          <div class="container px-4 px-lg-5 my-5">
              <div class= "text-white">

                  <h1 class="display-4 fw-bolder text-center">Reserva con Nosotros</h1>
                  <p class="lead fw-normal text-white-50 mb-0">Elije tu fecha de llegada y salida</p>

              <form>
                <DatePicker v-model="range" mode="date" :columns="2" is-range>
    <template v-slot="{ inputValue, inputEvents }">
      <div class="group">
        <label class="button groupItem" for="start">Start</label>
        <input type="text" id="start" :value="inputValue.start" v-on="inputEvents.start" class="input groupItem">
        <label class="button groupItem" for="end">End</label>
        <input type="text" id="end" :value="inputValue.end" readonly class="input groupItem">
      </div>
    </template>
  </DatePicker>


                  <div class="form-group w-25">
                    <label for="inputsm">Adultos</label>
                    <input class="form-control input-sm" id="inputsm" type="text">
                  </div>
                   <div class="form-group w-25">
                    <label for="inputdefault">Niños</label>
                    <input class="form-control" id="inputdefault" type="text">
                  </div>
                </form>
              </div>
              <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Buscar</a></div>
          </div>
      </header>


      <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div class="col mb-3">
                        <div class="card h-60">
                            <!-- Product image-->
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            <!-- Product details-->
                            <div class="card-body p-4">
                              <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">Habitacion 1</h5>
                                    <!-- Product reviews-->
                                    <div class="d-flex justify-content-center small text-warning mb-2">

                                    </div>
                                    <!-- Product price-->
                                    $18.00 p/noche
                                </div>
                                <div class="text-center">
                                    <!-- Product name-->
                                    <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Has tu Reserva</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-3">
                        <div class="card h-60">
                            <!-- Product image-->
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            <!-- Product details-->
                            <div class="card-body p-4">
                              <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">Habitacion 2</h5>
                                    <!-- Product reviews-->
                                    <div class="d-flex justify-content-center small text-warning mb-2">

                                    </div>
                                    <!-- Product price-->
                                    $18.00 p/noche
                                </div>
                                <div class="text-center">
                                    <!-- Product name-->
                                    <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Haz tu Reserva</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-3">
                        <div class="card h-60">
                            <!-- Product image-->
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            <!-- Product details-->
                            <div class="card-body p-4">
                              <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">Habitacion 3 </h5>
                                    <!-- Product reviews-->
                                    <div class="d-flex justify-content-center small text-warning mb-2">

                                    </div>
                                    <!-- Product price-->
                                    $18.00 p/noche
                                </div>
                                <div class="text-center">
                                    <!-- Product name-->
                                    <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Haz tu Reserva</a></div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section> 

             
  <!-- Footer-->
  <footer class="py-5 bg-dark" style="margin-top: 2%;">
    <div class="container">
      <p class="m-0 text-center text-white">Gralord.18 &copy; Prueba hotel</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  color: #42b983;
}</style>
